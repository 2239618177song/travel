<template>
  <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img src="http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
  
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  padding-bottom:26.7%
  img
    width:100%
</style>
