<template>
  <div class="recommend">
    <div class="recommend-header">热门推荐</div>
    <ul>
      <li class="recommend-items">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1701/6c/6c5e1f8fa365adada3.img.png_150x150_958dfbec.png">
        <div class="item-info">
          <p class="title">我是标题</p>
          <p class="desc">我是描述</p>
          <button class="detail-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<scrip>
export default {
  name: 'HomeRecommend'
}
</scrip>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend
  margin-top:.2rem
  .recommend-header
    background:#dddddd
    padding:0 .2rem
    line-height: .8rem
  .recommend-items
    padding:.1rem
    display:flex
    .item-img
      width:1.7rem
      height 1.7rem
      margin-right:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
      .title
        font-size:.3rem
        line-height:.54rem
        ellipsis()
      .desc
        font-size:.28rem
        color:#cccccc
        line-height:.4rem
      .detail-btn
        line-height: 0.44rem
        margin-top: 0.16rem
        background: #ff9300
        padding: 0 0.1rem
        border-radius: 0.06rem
        color: #ffffff
</style>
