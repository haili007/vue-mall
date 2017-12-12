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

//消息
const mymessge = resolve => require(['/page/User/messages/my'], resolve)
const messgeDetail = resolve => require(['/page/User/messages/detail'], resolve)


const information = resolve => require(['/page/User/business/information'], resolve)
const addressList = resolve => require(['/page/User/children/addressList'], resolve)
const coupon = resolve => require(['/page/User/children/coupon'], resolve)
const aihuishou = resolve => require(['/page/User/children/aihuishou'], resolve)
const support = resolve => require(['/page/User/children/support'], resolve)
const BasicInfo = resolve => require(['/page/User/business/BasicInfo'], resolve)
const Audit = resolve => require(['/page/User/business/Audit'], resolve)
const Check = resolve => require(['/page/User/business/Check'], resolve)
const Manage = resolve => require(['/page/User/business/Manage'], resolve)
const Order = resolve => require(['/page/User/business/Order'], resolve)
const OrderDetail = resolve => require(['/page/User/business/OrderDetail'], resolve)
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

        //消息
        {path: 'messages/my', name: '收货地址', component: mymessge},
        {path: 'messages/detail', name: '收货地址', component: messgeDetail},


        {path: 'addressList', name: '收货地址', component: addressList},
        {path: 'coupon', name: '我的优惠', component: coupon},
        {path: 'support', name: '售后服务', component: support},
        {path: 'aihuishou', name: '以旧换新', component: aihuishou},
        {path: 'information/basicInfo', name: '基本信息', component: BasicInfo},
        {path: 'information/audit', name: '审核', component: Audit},
        {path: 'information/check', name: '查看', component: Check},
        {path: 'information/manage', name: '管理', component: Manage},
        {path: 'information/order', name: '订单', component: Order},
        {path: 'information/orderDetail', name: '订单详情', component: OrderDetail},
      ]
    },
    {path: '/checkout', name: 'checkout', component: checkout},

    {path: '*', redirect: '/home'}
  ]
})
