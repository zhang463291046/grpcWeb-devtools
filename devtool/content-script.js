// 传说中的前台
console.log('我是传说中的前台,你可以直接看见我，我可以直接访问DOM', document)

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
	// 注入自定义JS
	injectCustomJs();
})

// 向页面注入JS
function injectCustomJs() {
	var jsPath = 'injected.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function () {
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}

// 监听来自外部页面demo Page的消息,发送的消息方法在injected.js中
window.onmessage = function (event) {
	if (event.data.key && event.data.key == 'console2') {
		// 发送消息
		chrome.runtime.sendMessage(event.data.value, function (response) {
			// 回调函数
		});
	}
}

// 监听来自devtools的消息,发送的消息方法在devtools.js中
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
	console.log(request, sender);
});