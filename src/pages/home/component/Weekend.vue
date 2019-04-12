<template>
  <div class="weekend">
    <div class="weekend-header">周末去哪儿</div>
    <ul>
      <li class="items">
        <div class="item-img">
          <img src="http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg">
        </div>
        <div class="item-info">
          <div class="item-title">我是title</div>
          <div class="item-desc">我是描述</div>
        </div>
      </li>
      <li class="items">
        <div class="item-img">
          <img src="http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg">
        </div>
        <div class="item-info">
          <div class="item-title">我是title</div>
          <div class="item-desc">我是描述</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend'
}
</script>
<style lang="stylus" scoped>
.weekend-header
  background:#dddddd
  padding:0 .2rem
  line-height: .8rem
.items
  .item-img
    overflow:hidden
    height:0
    padding-bottom:37.1%
    img
      width:100%
  .item-info
    padding: 0.14rem 0.2rem 0.2rem 0.2rem
    .item-title
      line-height: 0.54rem
      font-size: 0.28rem
      color: #212121
      ellipsis()
    .item-desc
      line-height: 0.4rem
      font-size: 0.24rem
      font-size: #616161
      color: #cccccc
      ellipsis()
</style>
