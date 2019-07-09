
import Vue from 'vue';
import Tips from './Tips.vue';

import merge from '../../../src/utils/merge';

let instance, currentMsg;
let defautOptions = {
	text: '若提示',
	background: '#57aaff',
	duration: 3000,
}

// 构建组件子类
const TipsConstructor = Vue.extend(Tips);

// 创建组件实例
const initInstance = ()=> {
	instance= new TipsConstructor({
		el: document.createElement('div')
	})

}

// 显示节点
const showTips = ()=> {

	// 如果实例不存在，则创建实例
	if(!instance) {
		initInstance();
	};

	// 如果组件已激活状态，则默认退出
	if(instance.visible) return false;

	// 把传递过来的值赋值到
	let data = currentMsg.options;
	if(data) {
		for(let prop in data) {
			instance[prop] = data[prop];
		}
	}

	// 把组件挂载文档中
	document.body.appendChild(instance.$el);

	Vue.nextTick(()=>{
		instance.visible = true;
	})

}


const TipsBox = function (options, callback) {

	if(!options.text) {
		throw(`text 是必填参数`)
	};

	console.log(typeof options.duration)
	if(options.duration && typeof options.duration !== 'number') {
		throw(`duration 必须为number`)
	}


	// 设置当前显示节点的信息
	currentMsg = {
		options: merge(defautOptions, options)
	}

	showTips();
}



export default TipsBox;