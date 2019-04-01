<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
		</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcon from './component/Icons'
export default {
	name: 'HomeIndex',
	components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcon: HomeIcon
	}
}
</script>

<style>

</style>
