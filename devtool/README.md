# 提供一个window.console2()方法
`
/ use function 'console2' in your code

// simple
console2('hah');

// object
console2({
  // list title
  title: 'hah',
  // detail
  data: {
    name: 'name1',
    // json view
    // data: 'string'
    // data: ['array']
    data: {
      a: 1, b: '2', c: [3, '4', '555']
    },
    // json expend level
    expandLevel: 2
  }
})

// object array
console2({
  // list title
  title: 'hah',
  // detail
  datas: [{
    // ...
  }]
})

// update
console2({
  // need the same id
  id: 'xxxx',
  // need type = 'update'
  type: 'update'
})
`


# panel demo
相关文件：
1、入口index.html
2、对应的文件,放在static中

# panel demo2
1、入口index2.html
2、对应的文件index2

# 前台（相当于直接插入在页面之间的）
可以直接在console中打印日志，会直接执行

# 后台
不可以直接在console中打印日志

通过content-script.js中注入injected.js，实现页面demo调用插件的方法通讯