
import Tips from './tips/index.js';

console.log(Tips);

const install = function (Vue, opts={}) {
	
	Vue.prototype.$tips = Tips;

}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version: '1.0.1',
	install,
}