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
  }
}