module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
		sitemap: {
			urls: [
				'http://localhost:8080/#/',
        'http://localhost:8080/#/movie/:id',
        'http://localhost:8080/#/random/:id',
        'http://localhost:8080/#/categories',
        'http://localhost:8080/#/genre/:name',
			]
		}
  }
}