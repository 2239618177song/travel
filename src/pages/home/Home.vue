<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
		</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
export default {
	name: 'HomeIndex',
	components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
	}
}
</script>

<style>

</style>
