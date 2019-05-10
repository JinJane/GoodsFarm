import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sell from '@/components/Sell'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
import GoodsDetail from '@/components/GoodsDetail'
import AddGoods from '@/components/AddGoods'
import Graph from '@/components/Graph'
import Card from '@/components/elements/Card'
import CardList from '@/components/elements/CardList'
import EditDataGoods from '@/components/EditDataGoods'
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
      path: '/graph',
      name: 'Graph',
      component: Graph
    },
  ]
})
EditDataGoods
