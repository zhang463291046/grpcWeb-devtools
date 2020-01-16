// 页面注入的JS，全部方法可以直接被外部页面调用,相当于直接在外部页面插入这些代码
console.log('我是页面注入的js，页面可以直接调用我的方法', window)

// 注入外部页面demo Page方法，发送普通消息到content-script
function console3(data) {
	window.postMessage(data, '*');
}