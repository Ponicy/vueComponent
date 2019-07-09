<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">PC</router-link> |
      <router-link to="/app">H5</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
    @import "./lib/css/px2rem.scss";

    #app{
        padding: px2rem(30);
    }
    
    #nav{
        margin-bottom: px2rem(30);
        text-align: center;
        a{
            display: inline-block;
            width: px2rem(180);
            line-height: px2rem(56);
            &.router-link-exact-active{
                color: $baseColor;
            }
        }
    }

</style>
