// 传说中的背景页
console.log('我是传说中的背景页,拥有chrome的api方法', chrome)

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  console.log(request, sender);
});

// 监听来自content-script的长连接
chrome.runtime.onConnect.addListener(function (port) {
  console.log(port);
  port.onMessage.addListener(function (msg) {
    console.log('收到长连接消息：', msg);
  });
});