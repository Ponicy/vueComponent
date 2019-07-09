
/*
** 两个对象合并
* source 默认参数源，固定不变，
* target 需要和source合并的对象，target目标的数据源，需要变更的数据
*/ 

export default function (source, target) {
	let tar = JSON.parse(JSON.stringify(source));
	for( let key in target) {
		if(target.hasOwnProperty(key)) {
			if(target[key]) {
				tar[key] = target[key];
			}
		}
	}

	return tar;

}
