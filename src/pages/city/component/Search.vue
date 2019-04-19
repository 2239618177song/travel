<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder="输入中文或者拼音"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    border-radius: 0.06rem
    height: 0.62rem
    line-height: 0.62rem
    width: 100%
    text-align: center
    color: #666666
    box-sizing: border-box
    padding: 0 0.12rem
</style>
