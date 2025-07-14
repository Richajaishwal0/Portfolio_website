# Portfolio Backend

## Setup

1. Create a `.env` file in this folder with the following content:

```
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=your_gmail_app_password
MAIL_TO=yourgmail@gmail.com
PORT=5000
```

- `MAIL_USER`: Your Gmail address (must have 2FA and an App Password enabled)
- `MAIL_PASS`: Your Gmail App Password (not your regular password)
- `MAIL_TO`: The email address to receive contact form messages (can be same as MAIL_USER)
- `PORT`: (Optional) Port to run the server (default 5000)

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

## API

POST `/api/contact`
- Body: `{ name, email, subject, message }`
- Sends an email to the configured address. 