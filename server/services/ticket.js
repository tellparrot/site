const Ticket = require('../models/Ticket');
const { sendTicketEmail } = require('./email');
const logger = require('../utils/log')('ticketService');

const createTicket = async (userId, data) => {
  try {
    const ticket = new Ticket({
      userId,
      subject: data.subject,
      description: data.description,
      priority: data.priority
    });
    await ticket.save();

    // Try to send email, but don't fail if it's not configured
    try {
      await sendTicketEmail(ticket, 'created');
    } catch (emailError) {
      logger.warn('Email notification failed, but ticket was created:', { ticketId: ticket._id, error: emailError.message });
    }

    logger.info(`Created new ticket #${ticket.ticketNumber} for user ${userId}`);
    return ticket;
  } catch (error) {
    logger.error('Error creating ticket:', { error: error.stack, userId });
    throw error;
  }
};

const getTickets = async (userId) => {
  try {
    logger.info(`Fetching tickets for user ${userId}`);
    const tickets = await Ticket.find({ userId }).sort({ createdAt: -1 });
    logger.info(`Found ${tickets.length} tickets for user ${userId}`);
    return tickets;
  } catch (error) {
    logger.error('Error getting tickets:', { error: error.stack, userId });
    throw error;
  }
};

const getTicket = async (ticketId, userId) => {
  try {
    logger.info(`Fetching ticket ${ticketId} for user ${userId}`);
    const ticket = await Ticket.findOne({ _id: ticketId, userId });
    if (!ticket) {
      logger.warn(`Ticket ${ticketId} not found for user ${userId}`);
      throw new Error('Ticket not found');
    }
    return ticket;
  } catch (error) {
    logger.error('Error getting ticket:', { error: error.stack, ticketId, userId });
    throw error;
  }
};

const updateTicket = async (ticketId, userId, data) => {
  try {
    logger.info(`Updating ticket ${ticketId} for user ${userId}`);
    const ticket = await Ticket.findOneAndUpdate(
      { _id: ticketId, userId },
      {
        ...data,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!ticket) {
      logger.warn(`Ticket ${ticketId} not found for user ${userId} during update`);
      throw new Error('Ticket not found');
    }

    // Try to send email, but don't fail if it's not configured
    try {
      await sendTicketEmail(ticket, 'updated');
    } catch (emailError) {
      logger.warn('Email notification failed, but ticket was updated:', { ticketId: ticket._id, error: emailError.message });
    }

    logger.info(`Successfully updated ticket ${ticketId}`);
    return ticket;
  } catch (error) {
    logger.error('Error updating ticket:', { error: error.stack, ticketId, userId });
    throw error;
  }
};

const addMessage = async (ticketId, userId, message) => {
  try {
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      throw new Error('Message is required and must be non-empty');
    }

    logger.info(`Adding message to ticket ${ticketId} from user ${userId}`);
    const ticket = await Ticket.findOneAndUpdate(
      { _id: ticketId, userId },
      {
        $push: {
          messages: {
            sender: userId,
            message: message.trim()
          }
        },
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!ticket) {
      logger.warn(`Ticket ${ticketId} not found for user ${userId} while adding message`);
      throw new Error('Ticket not found');
    }

    // Try to send email, but don't fail if it's not configured
    try {
      await sendTicketEmail(ticket, 'new_message');
    } catch (emailError) {
      logger.warn('Email notification failed, but message was added:', { ticketId: ticket._id, error: emailError.message });
    }

    logger.info(`Successfully added message to ticket ${ticketId}`);
    return ticket;
  } catch (error) {
    logger.error('Error adding message:', { error: error.stack, ticketId, userId });
    throw error;
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  addMessage
};