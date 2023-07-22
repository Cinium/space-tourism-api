const corsOptions = {
	origin: [
		'http://localhost:3000',
		'https://ciniums-space-tourism.netlify.app',
	],
	methods: ['GET'],
	credentials: true,
};

module.exports = { corsOptions };
