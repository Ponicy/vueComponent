<template>

	<div class="app-warp">
		
  <div @click.stop="showHandler()">哈哈哈</div>
		

	</div>

</template>

<script>
export default {

  	name: 'Index',

  	data () {
    	return {
    		show: false,
    		show2: false,
    	}
  	},

    methods:{
      showHandler(num) {
        this.$tips({
          text: '哈哈哈',
          duration: 1000,
        })
      }
    },

  	created() {
      this.$tips({
        text: '傻的嘛',
        background: '#e82a2a'
      });

  	}

}
</script>

<style lang="scss" scoped>
	@import "../../lib/css/px2rem.scss"

</style>