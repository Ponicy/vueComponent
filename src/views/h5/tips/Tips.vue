<template>
	<transition name="vp-tip-fade">
		<div class="vp-tips-warp" v-show="visible" 
			:style="{backgroundColor: background}"
		>
			<div class="vp-tips-text">{{text}}</div>
		</div>
	</transition>
</template>

<script>
export default {

  	name: 'Tips',

  	data () {
    	return {
    		text: '弱提示', //文案内容
    		visible: false,  //是否显示
    		background: null, //背景色

    	}
  	},

  	methods: {
  		setText(text) {
	        this.text = text;
      	}
  	},

}
</script>

<style lang="scss" scoped>
	@import "../../../lib/css/px2rem.scss";
	
	.vp-tip-fade-enter-active, .vp-tip-fade-leave-active{
		transition: all .35s;
	}

	.vp-tip-fade-enter, .vp-tip-fade-leave-to{
		transform: translateY(-100%);
	}

	.vp-tips-warp{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		padding: px2rem(30);
		
		text-align: center;
		line-height: px2rem(50);
		font-size: px2rem(30);
		color: #fff;
		background: $baseColor;
	}

</style>