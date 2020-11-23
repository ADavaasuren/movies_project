const SitemapPlugin = require('sitemap-webpack-plugin').default;



module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
		sitemap: {
			urls: [
        'http://localhost:8080/#/',
				'http://localhost:8080/#/home',
        'http://localhost:8080/#/movie/:id',
        'http://localhost:8080/#/random',
        'http://localhost:8080/#/categories',
			]
		}
  },
  plugins: [
    new SitemapPlugin({
      base: 'http://localhost:8080/#/',
      paths,
      options: {
        filename: 'sitemap.xml',
        lastmod: true,
        changefreq: 'monthly',
        priority: '0.4'
      }
    })
  ]
}