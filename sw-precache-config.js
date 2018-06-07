/**
 * 
 */
module.exports = {
		
		stripPrefix: 'public',
		root: 'public/',
		staticFileGlobs: [
			'public/**.html',
			'public/scripts/**.js',
			'public/styles/**.css'
		],
		runtimeCaching : [
			{
				urlPattern: '/*',
				handler: 'networkFirst',
				options: {
					cache: {
						maxEntries: 10,
						name: 'master-cache'
					}
				}
			}
		]
}

