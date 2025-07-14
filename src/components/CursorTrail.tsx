import React, { useEffect, useRef } from 'react';

interface CursorTrailProps {
  darkMode: boolean;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trail = useRef<Array<{ x: number; y: number; life: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1
      });

      // Limit trail length
      if (trail.current.length > 20) {
        trail.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail
      trail.current.forEach((point, index) => {
        point.life -= 0.05;
        
        if (point.life > 0) {
          const size = point.life * 8;
          const opacity = point.life * 0.8;
          
          // Create gradient
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size
          );
          
          if (darkMode) {
            gradient.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
          } else {
            gradient.addColorStop(0, `rgba(251, 146, 60, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(239, 68, 68, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(251, 146, 60, 0)`);
          }

          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Remove dead points
      trail.current = trail.current.filter(point => point.life > 0);

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;