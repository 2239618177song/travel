<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphe></city-alphe>
  </div>
</template>
<script>
import CityHeader from './component/Header'
import CityList from './component/List'
import CityAlphe from './component/Alphe'
import CitySearch from './component/Search'
export default {
  name: 'CityIndex',
  components: {
    CityHeader: CityHeader,
    CityList: CityList,
    CityAlphe: CityAlphe,
    CitySearch: CitySearch
  }
}
</script>
<style lang="stylus" scoped>
</style>
