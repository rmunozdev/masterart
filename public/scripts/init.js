/**
 * 
 */
(()=>{
	window.addEventListener('load',()=>{
		start();
	});
})()

function start() {
	if(navigator.serviceWorker) {
		navigator.serviceWorker.register('service-worker.js').then((swr)=>{
			console.log("Service worker registration success");
		});
	}
}