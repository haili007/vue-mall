import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/page/index'], resolve)
const Login = resolve => require(['/page/login/login'], resolve)

const Register = resolve => require(['/page/login/register'], resolve)

const Home = resolve => require(['/page/Home/home'], resolve)
//const GoodS = resolve => require(['/page/Goods/goods'], resolve)
const goodsDetails = resolve => require(['/page/Goods/goodsDetails'], resolve)
const Cart = resolve => require(['/page/Cart/cart'], resolve)
const order = resolve => require(['/page/Order/order'], resolve)
const user = resolve => require(['/page/User/user'], resolve)
//订单
const orderList = resolve => require(['/page/User/buyer/orderList'], resolve)
const orderDetail = resolve => require(['/page/User/buyer/orderDetail'], resolve)

//订单
const orderListSeller = resolve => require(['/page/User/seller/orderList'], resolve)
const orderDetailSeller = resolve => require(['/page/User/seller/orderDetail'], resolve)
const orderManage = resolve => require(['/page/User/seller/orderManage'], resolve)
const BasicInfo = resolve => require(['/page/User/seller/BasicInfo'], resolve)
const Audit = resolve => require(['/page/User/seller/Audit'], resolve)
const Check = resolve => require(['/page/User/seller/Check'], resolve)

//消息
const mymessge = resolve => require(['/page/User/messages/my'], resolve)
const messgeDetail = resolve => require(['/page/User/messages/detail'], resolve)
//财务
const flow = resolve => require(['/page/User/finance/flow'], resolve)
const situation = resolve => require(['/page/User/finance/situation'], resolve)

const information = resolve => require(['/page/User/business/information'], resolve)
const addressList = resolve => require(['/page/User/children/addressList'], resolve)
const coupon = resolve => require(['/page/User/children/coupon'], resolve)
const aihuishou = resolve => require(['/page/User/children/aihuishou'], resolve)
const support = resolve => require(['/page/User/children/support'], resolve)

const checkout = resolve => require(['/page/Checkout/checkout'], resolve)
const payment = resolve => require(['/page/Order/payment'], resolve)
const paysuccess = resolve => require(['/page/Order/paysuccess'], resolve)


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: '/home', component: Home},
        {path: '/goods', component: Home},
        {path: '/category/:categoryId', component: Home},
        {path: '/search/:keyword', name:"search", component: Home},
        {path: '/goodsDetails', name: 'goodsDetails', component: goodsDetails}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/cart', name: 'cart', component: Cart},
    {
      path: '/order',
      name: 'order',
      component: order,
      children: [
        {path: 'paysuccess', name: 'paysuccess', component: paysuccess},
        {path: 'payment', name: 'payment', component: payment}
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect: '/user/orderList',
      children: [
        {path: 'business/information',redirect: '', component: information, name: '商家信息' },
        {path: 'buyer/orderList', name: '买家订单列表', component: orderList},
        {path: 'buyer/orderDetail', name: '订单详情', component: orderDetail},
        //卖家
        {path: 'seller/orderList', name: '卖家订单列表', component: orderListSeller},
        {path: 'seller/orderDetail', name: '订单详情', component: orderDetailSeller},
        {path: 'seller/orderManage', name: '订单管理', component: orderManage},
        {path: 'seller/basicInfo', name: '基本信息', component: BasicInfo},
        {path: 'seller/audit', name: '审核', component: Audit},
        {path: 'seller/check', name: '查看', component: Check},
        //消息
        {path: 'messages/my', name: '消息', component: mymessge},
        {path: 'messages/detail', name: '消息详情', component: messgeDetail},
        //财务
        {path: 'finance/flow', name: '财务流水', component: flow},
        {path: 'finance/situation', name: '财务概况', component: situation},

        {path: 'addressList', name: '收货地址', component: addressList},
        {path: 'coupon', name: '我的优惠', component: coupon},
        {path: 'support', name: '售后服务', component: support},
        {path: 'aihuishou', name: '以旧换新', component: aihuishou},
      ]
    },
    {path: '/checkout', name: 'checkout', component: checkout},

    {path: '*', redirect: '/home'}
  ]
})
