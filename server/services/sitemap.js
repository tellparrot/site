const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');
const logger = require('../utils/log')('sitemapService');

class SitemapService {
  static async generateSitemap(hostname) {
    try {
      logger.info('Starting sitemap generation for hostname:', hostname);
      
      const smStream = new SitemapStream({ hostname });
      const pipeline = smStream.pipe(createGzip());

      // Add static routes with their importance and update frequency
      logger.debug('Adding static routes to sitemap');
      
      smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
      smStream.write({ url: '/features', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/pricing', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/about', changefreq: 'monthly', priority: 0.6 });
      smStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });
      smStream.write({ url: '/blog', changefreq: 'daily', priority: 0.7 });

      // Product pages
      smStream.write({ url: '/products/role-manager', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/products/compliance', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/products/task-automation', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/products/domain-governance', changefreq: 'weekly', priority: 0.8 });

      // Solutions pages
      smStream.write({ url: '/solutions/role-management', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/solutions/data-governance', changefreq: 'weekly', priority: 0.8 });
      smStream.write({ url: '/solutions/task-automation', changefreq: 'weekly', priority: 0.8 });

      // Company pages
      smStream.write({ url: '/company/about', changefreq: 'monthly', priority: 0.6 });
      smStream.write({ url: '/company/careers', changefreq: 'weekly', priority: 0.7 });
      smStream.write({ url: '/company/blog', changefreq: 'daily', priority: 0.7 });
      smStream.write({ url: '/company/contact', changefreq: 'monthly', priority: 0.6 });

      // Resource pages
      smStream.write({ url: '/resources/documentation', changefreq: 'weekly', priority: 0.7 });
      smStream.write({ url: '/resources/case-studies', changefreq: 'monthly', priority: 0.6 });
      smStream.write({ url: '/resources/support', changefreq: 'monthly', priority: 0.6 });
      smStream.write({ url: '/resources/training', changefreq: 'weekly', priority: 0.7 });

      // Legal pages
      smStream.write({ url: '/legal/privacy', changefreq: 'monthly', priority: 0.4 });
      smStream.write({ url: '/legal/terms', changefreq: 'monthly', priority: 0.4 });
      smStream.write({ url: '/legal/security', changefreq: 'monthly', priority: 0.4 });

      smStream.end();

      logger.debug('Finished writing routes to sitemap stream');

      const sitemap = await streamToPromise(pipeline);
      
      logger.info('Successfully generated sitemap');
      
      return sitemap;
    } catch (error) {
      logger.error('Error generating sitemap:', {
        error: error.message,
        stack: error.stack,
        hostname
      });
      throw new Error('Failed to generate sitemap: ' + error.message);
    }
  }
}

module.exports = SitemapService;