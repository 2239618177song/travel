<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-left header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	height: $headerHeight
	line-height: $headerHeight
	text-align:center
	color: #ffffff
	background: $bgColor
	font-size: 0.3rem
	position: relative
	.header-back
		width: 0.64rem
		text-align: center
		font-size: 0.4rem
		position: absolute
		top: 0
		left: 0
		color: #ffffff
</style>
