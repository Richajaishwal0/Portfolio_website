import React, { useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
  darkMode: boolean;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  darkMode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Network cluster config (tweak these for performance)
    const CLUSTERS = 4; // Reduced from 6
    const NODES_PER_CLUSTER = 12; // Reduced from 18
    const CLUSTER_RADIUS = Math.min(width, height) / 4.2; // larger clusters
    const EDGE_MARGIN = 60;
    // Predefine cluster centers for organic layout
    const clusterCenters = [
      // top-left
      { x: EDGE_MARGIN + Math.random() * (width * 0.25), y: EDGE_MARGIN + Math.random() * (height * 0.25) },
      // top-right
      { x: width - EDGE_MARGIN - Math.random() * (width * 0.25), y: EDGE_MARGIN + Math.random() * (height * 0.25) },
      // bottom-left
      { x: EDGE_MARGIN + Math.random() * (width * 0.25), y: height - EDGE_MARGIN - Math.random() * (height * 0.25) },
      // bottom-right
      { x: width - EDGE_MARGIN - Math.random() * (width * 0.25), y: height - EDGE_MARGIN - Math.random() * (height * 0.25) },
      // center-top
      { x: width / 2 + (Math.random() - 0.5) * width * 0.2, y: EDGE_MARGIN + Math.random() * (height * 0.2) },
      // center-bottom
      { x: width / 2 + (Math.random() - 0.5) * width * 0.2, y: height - EDGE_MARGIN - Math.random() * (height * 0.2) },
    ];
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      cluster: number;
      isDragging?: boolean;
      justAdded?: number; // frame countdown for glow
    }> = [];
    for (let c = 0; c < CLUSTERS; c++) {
      const { x: cx, y: cy } = clusterCenters[c];
      for (let i = 0; i < NODES_PER_CLUSTER; i++) {
        const angle = (Math.PI * 2 * i) / NODES_PER_CLUSTER + Math.random();
        const r = CLUSTER_RADIUS * (0.4 + 0.5 * Math.random());
        nodes.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          cluster: c,
        });
      }
    }
    const MAX_NODES = CLUSTERS * NODES_PER_CLUSTER + 10;

    let draggingNode: null | (typeof nodes)[0] = null;
    let dragOffset = { x: 0, y: 0 };

    const getNodeAt = (x: number, y: number) => {
      return nodes.find((node) => {
        const dx = node.x - x;
        const dy = node.y - y;
        return Math.sqrt(dx * dx + dy * dy) < 12;
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const node = getNodeAt(mx, my);
      if (node) {
        draggingNode = node;
        dragOffset = { x: mx - node.x, y: my - node.y };
        node.isDragging = true;
      } else if (nodes.length < MAX_NODES) {
        // Add new node to nearest cluster
        let minDist = Infinity, minCluster = 0;
        for (let c = 0; c < CLUSTERS; c++) {
          const cx = EDGE_MARGIN + c * CLUSTER_RADIUS; // Changed from CLUSTER_SPACING to CLUSTER_RADIUS
          const cy = height / 2;
          const d = Math.abs(mx - cx);
          if (d < minDist) { minDist = d; minCluster = c; }
        }
        nodes.push({
          x: Math.max(EDGE_MARGIN, Math.min(mx, width - EDGE_MARGIN)),
          y: Math.max(EDGE_MARGIN, Math.min(my, height - EDGE_MARGIN)),
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          cluster: minCluster,
          justAdded: 30,
        });
      }
    };
    const handleMouseUp = () => {
      if (draggingNode) draggingNode.isDragging = false;
      draggingNode = null;
    };
    // Throttle mousemove for performance
    let lastMouseMove = 0;
    const MOUSE_THROTTLE_MS = 16; // ~60Hz
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseMove < MOUSE_THROTTLE_MS) return;
      lastMouseMove = now;
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (draggingNode) {
        const rect = canvas.getBoundingClientRect();
        draggingNode.x = Math.max(EDGE_MARGIN, Math.min(e.clientX - rect.left - dragOffset.x, width - EDGE_MARGIN));
        draggingNode.y = Math.max(EDGE_MARGIN, Math.min(e.clientY - rect.top - dragOffset.y, height - EDGE_MARGIN));
        draggingNode.vx = 0;
        draggingNode.vy = 0;
      }
    };

    let animationFrameId: number;
    // Cap animation frame rate to 30 FPS
    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30; // 30 FPS
    const animate = (now = performance.now()) => {
      if (now - lastFrameTime < FRAME_INTERVAL) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = now;
      ctx.clearRect(0, 0, width, height);
      // Draw lines first
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.cluster !== b.cluster) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CLUSTER_RADIUS * 0.95) {
            // Brighter if near mouse
            const mouseDx = (a.x + b.x) / 2 - mousePos.current.x;
            const mouseDy = (a.y + b.y) / 2 - mousePos.current.y;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            let baseColor = darkMode
              ? [139, 92, 246] // purple
              : [249, 115, 22]; // orange
            let altColor = darkMode
              ? [6, 182, 212] // cyan
              : [236, 72, 153]; // pink
            const t = i % 2 === 0 ? 0.7 : 0.3;
            const r = Math.round(baseColor[0] * t + altColor[0] * (1 - t));
            const g = Math.round(baseColor[1] * t + altColor[1] * (1 - t));
            const bCol = Math.round(baseColor[2] * t + altColor[2] * (1 - t));
            const opacity =
              ((CLUSTER_RADIUS * 0.95 - dist) / (CLUSTER_RADIUS * 0.95)) * (mouseDist < 180 ? 0.65 : 0.32);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r},${g},${bCol},${opacity})`;
            ctx.shadowColor = `rgba(${r},${g},${bCol},${opacity * 2})`;
            ctx.shadowBlur = mouseDist < 150 ? 12 : 4;
            ctx.lineWidth = mouseDist < 150 ? 2.7 : 1.3;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        // Node color
        let color = darkMode ? "#8B5CF6" : "#F97316";
        let alt = darkMode ? "#06B6D4" : "#EC4899";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.isDragging ? 10 : 5.5, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? color : alt;
        ctx.shadowColor = i % 2 === 0 ? color : alt;
        ctx.shadowBlur = node.isDragging ? 22 : node.justAdded ? 18 : 12;
        ctx.globalAlpha = node.justAdded ? 1 : 0.92;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        if (node.justAdded) node.justAdded--;
      }
      // Node movement
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node.isDragging) {
          // Attraction to mouse
          const dx = mousePos.current.x - node.x;
          const dy = mousePos.current.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CLUSTER_RADIUS * 1.1) {
            node.vx += (dx / dist) * 0.09;
            node.vy += (dy / dist) * 0.09;
          }
          // Move
          node.x += node.vx;
          node.y += node.vy;
          // Keep in cluster bounds
          const c = node.cluster;
          const { x: cx, y: cy } = clusterCenters[c];
          const dxC = node.x - cx;
          const dyC = node.y - cy;
          const distC = Math.sqrt(dxC * dxC + dyC * dyC);
          if (distC > CLUSTER_RADIUS) {
            node.x = cx + (dxC / distC) * CLUSTER_RADIUS;
            node.y = cy + (dyC / distC) * CLUSTER_RADIUS;
            node.vx *= -0.7;
            node.vy *= -0.7;
          }
          // Damping
          node.vx *= 0.965;
          node.vy *= 0.965;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default InteractiveBackground;
