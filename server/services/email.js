const nodemailer = require('nodemailer');
const logger = require('../utils/log')('emailService');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // INPUT_REQUIRED {your Gmail email address}
    pass: process.env.SMTP_PASS, // INPUT_REQUIRED {your Gmail app-specific password}
  },
});

const sendContactEmail = async (name, email, subject, message) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SUPPORT_EMAIL, // INPUT_REQUIRED {email address where contact form submissions should be sent}
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    logger.info(`Attempting to send contact email from ${email}`);
    await transporter.sendMail(mailOptions);
    logger.info(`Successfully sent contact email from ${email}`);
    return true;
  } catch (error) {
    logger.error('Error sending contact email:', { error: error.stack, email, subject });
    throw new Error('Failed to send email. Please try again later.');
  }
};

const sendTicketEmail = async (ticket, action) => {
  try {
    let subject, html;

    switch(action) {
      case 'created':
        subject = `Ticket #${ticket.ticketNumber} Created`;
        html = `
          <h3>New Support Ticket Created</h3>
          <p><strong>Ticket #:</strong> ${ticket.ticketNumber}</p>
          <p><strong>Subject:</strong> ${ticket.subject}</p>
          <p><strong>Priority:</strong> ${ticket.priority}</p>
          <p><strong>Description:</strong></p>
          <p>${ticket.description}</p>
        `;
        break;
      case 'updated':
        subject = `Ticket #${ticket.ticketNumber} Updated`;
        html = `
          <h3>Support Ticket Updated</h3>
          <p><strong>Ticket #:</strong> ${ticket.ticketNumber}</p>
          <p><strong>Subject:</strong> ${ticket.subject}</p>
          <p><strong>Status:</strong> ${ticket.status}</p>
          <p><strong>Priority:</strong> ${ticket.priority}</p>
        `;
        break;
      case 'new_message':
        subject = `New Message on Ticket #${ticket.ticketNumber}`;
        const lastMessage = ticket.messages[ticket.messages.length - 1];
        html = `
          <h3>New Message on Support Ticket</h3>
          <p><strong>Ticket #:</strong> ${ticket.ticketNumber}</p>
          <p><strong>Subject:</strong> ${ticket.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${lastMessage.message}</p>
        `;
        break;
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SUPPORT_EMAIL,
      subject,
      html
    };

    logger.info(`Sending ticket email for ticket #${ticket.ticketNumber}`);
    await transporter.sendMail(mailOptions);
    logger.info(`Successfully sent ticket email for ticket #${ticket.ticketNumber}`);
    return true;
  } catch (error) {
    logger.error('Error sending ticket email:', error);
    throw new Error('Failed to send ticket email');
  }
};

module.exports = {
  sendContactEmail,
  sendTicketEmail
};