/**
 * 
 */
module.exports = {
		navigateFallback: '/welcome.html',
		stripPrefix: 'public',
		root: 'public/',
		staticFileGlobs: [
			'public/**.html',
			'public/scripts/**.js',
			'public/stylesheets/**.css'
		],
		runtimeCaching : [
			{
				urlPattern: '/users/*',
				handler: 'networkFirst',
				options: {
					cache: {
						maxEntries: 10,
						name: 'users-cache'
					}
				}
			}
		]
}

