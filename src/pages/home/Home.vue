<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
		</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcon from './component/Icons'
import HomeRecommend from './component/Recommend'
import HomeWeekend from './component/Weekend'
export default {
	name: 'HomeIndex',
	components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcon: HomeIcon,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
	}
}
</script>

<style>

</style>
