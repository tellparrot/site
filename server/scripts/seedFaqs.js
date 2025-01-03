const mongoose = require('mongoose');
const Faq = require('../models/Faq');
const logger = require('../utils/log')('seed.faqs');
require('dotenv').config({ path: '../.env' });

const faqs = [
  {
    question: "How do I manage user roles?",
    answer: "You can manage roles through the Role Manager interface. Navigate to Settings > Roles to create, edit and assign roles. From there you can define custom roles, set permissions, and assign roles to users or groups.",
    category: "Role Management"
  },
  {
    question: "What is domain-driven governance?",
    answer: "Domain-driven governance is an approach that organizes data governance around business domains rather than technical structures. It aligns policies and controls with how your organization naturally operates, making governance more intuitive and effective.",
    category: "Governance"
  },
  {
    question: "How do I set up automated tasks?",
    answer: "To set up automated tasks, go to the Task Automation section and click 'Create New Task'. Define your trigger conditions, actions, and schedule. You can automate workflows, notifications, and compliance checks.",
    category: "Automation"
  },
  {
    question: "What security measures are in place?",
    answer: "We implement multiple layers of security including role-based access control, encryption at rest and in transit, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
    category: "Security"
  },
  {
    question: "How do I integrate with existing systems?",
    answer: "We provide REST APIs and webhooks for integration. Check our API documentation for detailed integration guides. We also support SSO integration with major identity providers.",
    category: "Integration"
  },
  {
    question: "How can I track policy compliance?",
    answer: "Use the Compliance Dashboard to monitor policy adherence across your organization. Set up automated compliance checks and receive alerts for any violations or risks.",
    category: "Compliance"
  },
  {
    question: "What reports are available?",
    answer: "We offer customizable reports for roles, permissions, policy compliance, and activity audits. Reports can be scheduled, exported in multiple formats, and shared with stakeholders.",
    category: "Reporting"
  },
  {
    question: "How do I get started?",
    answer: "Begin with our Quick Start guide to set up your organization, define roles, and implement basic governance policies. Our onboarding team will guide you through the process.",
    category: "Getting Started"
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 email support, priority phone support for enterprise customers, comprehensive documentation, and a community forum for knowledge sharing.",
    category: "Support"
  },
  {
    question: "How are updates and maintenance handled?",
    answer: "System updates are performed during low-traffic hours with advance notice. Emergency security patches may be applied immediately. We maintain 99.9% uptime SLA.",
    category: "Maintenance"
  }
];

async function seedFaqs() {
  try {
    logger.info('Clearing existing FAQs...');
    await Faq.deleteMany({});
    logger.info('Existing FAQs cleared');

    logger.info('Seeding new FAQs...');
    await Faq.insertMany(faqs);
    logger.info(`Successfully seeded ${faqs.length} FAQs`);
  } catch (error) {
    logger.error('Error seeding FAQs:', error);
  }
}

if (require.main === module) {
  seedFaqs();
}

module.exports = seedFaqs;