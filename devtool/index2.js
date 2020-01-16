window.demoId = '00000'

window.demoFn = function (val) {
	console.log('demoFn', val)
}
var count = 0

function test() {
	console.log('你点击了hello world')
}

document.getElementById('demo').onclick = function (event) {
	test()
	count++
	document.getElementById('count').innerText = count
}