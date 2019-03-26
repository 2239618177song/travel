<template>
  <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="item in swiperList" :key="item.id">
            <img :src="item.imgUrl" alt="">
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
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg'
        }
      ]
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
