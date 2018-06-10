importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.routing.registerRoute(
	new RegExp('/*.html'),
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	new RegExp('https?://uniquexiaobai.oss-cn-hangzhou.aliyuncs.com'),
	workbox.strategies.cacheFirst({
		plugins: [
	      new workbox.cacheableResponse.Plugin({
	        statuses: [0, 200]
	      })
	    ]
	})
);

workbox.routing.registerRoute(
	new RegExp('https://api.map.baidu.com'),
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	new RegExp('https://gss0.bdstatic.com'),
	workbox.strategies.staleWhileRevalidate()
);