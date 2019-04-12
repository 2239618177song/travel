import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/pages/home/Home'
import CityIndex from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    }, {
      path: '/city',
      name: CityIndex,
      component: CityIndex
    }
  ]
})
