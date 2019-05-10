import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sell from '@/components/Sell'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
import GoodsDetail from '@/components/GoodsDetail'
import AddGoods from '@/components/AddGoods'
import Card from '@/components/elements/Card'
import CardList from '@/components/elements/CardList'
import BarBeforeLogin from '@/components/elements/BarBeforeLogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/goodsdetail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail,
    },
    {
      path: '/addgoods',
      name: 'AddGoods',
      component: AddGoods,
    },
    {
      path: '/card',
      name: 'Card',
      component: Card,
      props: true
    },
    {
      path: '/cardlist',
      name: 'CardList',
      component: CardList,
      props: true
    },
    {
      path: '/barbefore',
      name: 'BarBeforeLogin',
      component: BarBeforeLogin,
      props: true
    },
  ]
})
