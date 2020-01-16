// 传说中的后台
console.log('我是传说中的后台,拥有chrome的api方法', chrome)

// 面板的window
let extPanelWindow = {};

// 创建面板
chrome.devtools.panels.create("grpcWeb",
  "",
  "index.html",
  function (panel) {
    // 控制panel页面
    panel.onShown.addListener(function (panelWindow) {
      extPanelWindow = panelWindow;
    });
  }
);

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  if (!extPanelWindow.sendConsole2) {
    console.error('grpcWeb面板中暂时没有sendConsole2方法')
    return;
  }
  extPanelWindow.sendConsole2(request);
});

// 监听来自content-script的长连接
chrome.runtime.onConnect.addListener(function (port) {
  console.log(port);
  port.onMessage.addListener(function (msg) {
    console.log('收到长连接消息：', msg);
  });
});