<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-left"></div>
    </div>
    <div class="header-center">
      <i class="iconfont icon-search"></i>&nbsp;&nbsp;输入城市/景点/酒店/主题
    </div>
    <router-link  to="/city">
      <div class="header-right">
        <div>城市<i class="iconfont icon-down"></i></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  width:100%
  height:$headerHeight
  line-height:$headerHeight
  background:$bgColor
  display:flex
  color:#ffffff
  .header-left
    width:.64rem
    float:left
    .icon-left
      font-size:.4rem
      text-align:center
  .header-center
    flex:1
    height:.64rem
    line-height:.64rem
    padding:0 .1rem
    margin-top:.11rem
    background:#ffffff
    border-radius:.1rem
    color:#cccccc
  .header-right
    min-width:1.1rem
    text-align:center
    padding:0 .1rem
    color:#ffffff
</style>
