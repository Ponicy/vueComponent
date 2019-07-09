
#### vue移动端顶部下滑提示组件

##### 使用方式

```
	1. 挂载到Vue原型上
		import tip from './directive/tips/index';
		Vue.prototype.$Tips = tip;

	2. 调用方式
		this.$Tips({
          text: '哈哈哈', //必填参数
          duration: 1000, //可选，默认值为3000
          background: '#e82a2a' //可选
        })

	3. 参数
		duration: 定义显示的时间长度
		background: 为下滑组件的背景颜色，可根据下滑提示类型不同，定义不同的颜色
		text: 下滑提示组件显示的文案
```