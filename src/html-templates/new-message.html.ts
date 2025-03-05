export const NEW_MESSAGE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Message Notification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #fff;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .email-header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
      }
      .email-body {
        margin-bottom: 20px;
      }
      .message-box {
        background-color: #f1f1f1;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-style: italic;
        white-space: pre-wrap;
      }
      .email-footer {
        font-size: 12px;
        color: #666;
        margin-top: 20px;
        border-top: 1px solid #ddd;
        padding-top: 10px;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">New Message from {{NAME}}</div>
      <div class="email-body">
        <p><strong>Name:</strong>{{NAME}}</p>
        <p><strong>Email:</strong> <a href="mailto:{{EMAIL}}">{{EMAIL}}</a></p>
        <p><strong>Subject:</strong> {{SUBJECT}}</p>
        <p><strong>Date:</strong> {{DATE}}</p>
        <div class="message-box">{{MESSAGE}}</div>
      </div>
      <div class="email-footer">
        Please do not reply to this email as the mailbox is not monitored. For
        assistance, email at
        <a href="mailto:contact@jrtilak.dev">contact@jrtilak.dev</a> or visit
        <a href="https://jrtilak.dev" target="_blank">jrtilak.dev</a>.
      </div>
    </div>
  </body>
</html>`;
