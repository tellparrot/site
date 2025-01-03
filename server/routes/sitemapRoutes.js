const express = require('express');
const router = express.Router();
const SitemapService = require('../services/sitemap');
const logger = require('../utils/log')('sitemapRoutes');

router.get('/sitemap.xml', async (req, res) => {
  try {
    // INPUT_REQUIRED {Replace with your actual website URL}
    const hostname = process.env.WEBSITE_URL || 'https://yourwebsite.com';
    const sitemap = await SitemapService.generateSitemap(hostname);

    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');
    
    logger.info('Serving sitemap.xml');
    res.send(sitemap);
  } catch (error) {
    logger.error('Error serving sitemap:', {
      error: error.message,
      stack: error.stack
    });
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
});

module.exports = router;