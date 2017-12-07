<template>
  <div class="ys-header-box">
    <div class="ys-topBar">
        <div class="ys-head-logo">
            <div class="ys-head-logo-img">
                <img src="../assets/images/logo.svg">
            </div>
        </div>
       <div class="search-bar">
          <Search></Search>
       </div>   
        <div class="ys-top-barcon clearfix">
            <a class="turl ys-head-cart fr" target="_blank">
                <b class="iconfont icon icon-gouwuche"></b>购物车
                <span id="carNum">(0)</span>
            </a>
            <span v-if="login" class="turl Chead-welcome fr" >
                        <router-link to="/user/orderList">我的订单</router-link>|
                        <router-link to="/user/information">账号资料</router-link>|
                        <router-link to="/user/addressList">收货地址</router-link>|
                        <router-link to="/user/support">售后服务</router-link>|
                        <router-link to="/user/coupon">我的优惠</router-link>|
                        <a href="javascript:;" @click="_loginOut">退出</a>
            </span>
            <span v-else class="turl Chead-welcome fr" >
                <router-link to="/login">请登录</router-link>|
                <router-link to="/register">注册</router-link>
            </span>
        </div>
    </div>
    <div class="nav-bar">
        <div class="ys-container clearfix">
            <div class="nav-list">
                <div class="nav-item">
                  <router-link class="active" to="/home">首页</router-link>
                </div>
                <div class="nav-item">
                  <router-link to="/home">包袋</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import YButton from '/components/YButton'
  import Search from '/components/searchbar'
  import { mapMutations, mapState } from 'vuex'
  import { getCartList, cartDel } from '/api/goods'
  import { loginOut } from '/api/index'
  import { setStore, removeStore } from '/utils/storage'
  export default{
    data () {
      return {
        user: {},
        // 查询数据库的商品
        st: false,
        // 头部购物车显示
        cartShow: false,
        positionL: 0,
        positionT: 0,
        timerCartShow: null // 定时隐藏购物车
      }
    },
    computed: {
      ...mapState([
        'cartList', 'login', 'receiveInCart', 'showCart', 'userInfo'
      ]),
      // 计算价格
      totalPrice () {
        var totalPrice = 0
        this.cartList && this.cartList.forEach(item => {
          totalPrice += (item.productNum * item.productPrice)
        })
        return totalPrice
      },
      // 计算数量
      totalNum () {
        var totalNum = 0
        this.cartList && this.cartList.forEach(item => {
          totalNum += (item.productNum)
        })
        return totalNum
      }
    },
    methods: {
      ...mapMutations(['ADD_CART', 'INIT_BUYCART', 'ADD_ANIMATION', 'SHOW_CART', 'REDUCE_CART', 'RECORD_USERINFO', 'EDIT_CART']),
      // 购物车显示
      cartShowState (state) {
        this.SHOW_CART({showCart: state})
      },
      // 登陆时获取一次购物车商品
      _getCartList () {
        getCartList().then(res => {
          if (res.status === '1') {
            setStore('buyCart', res.result)
          }
          // 重新初始化一次本地数据
        }).then(this.INIT_BUYCART)
      },
      // 删除商品
      delGoods (productId) {
        if (this.login) { // 登陆了
          cartDel({productId}).then(res => {
            this.EDIT_CART({productId})
          })
        } else {
          this.EDIT_CART({productId})
        }
      },
      toCart () {
        this.$router.push({path: 'cart'})
      },
      // 控制顶部
      navFixed () {
        if (this.$route.path === '/goods' || this.$route.path === '/home' || this.$route.path === '/goodsDetails') {
          var st = document.body.scrollTop
          st >= 100 ? this.st = true : this.st = false
          // 计算小圆当前位置
          let num = document.querySelector('#carNum')
          this.positionL = num.getBoundingClientRect().left
          this.positionT = num.getBoundingClientRect().top
          this.ADD_ANIMATION({cartPositionL: this.positionL, cartPositionT: this.positionT})
        } else {
          return
        }
      },
      // 退出登陆
      _loginOut () {
        loginOut().then(res => {
          removeStore('buyCart')
          window.location.href = '/'
        })
      }
    },
    mounted () {
      if (this.login) {
        this._getCartList()
      } else {
        this.INIT_BUYCART()
      }
      this.navFixed()
      window.addEventListener('scroll', this.navFixed)
      window.addEventListener('resize', this.navFixed)
    },
    components: {
      YButton,
      Search
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/theme";
  @import "../assets/style/mixin";

  .ys-header-box {
      width: 100%;
      position: relative;
      z-index: 62;
      background: #ffffff;

      .turl {
            margin-left: 30px;
            padding: 0;
            padding: 0 18px 0 8px;
            position: relative;
            z-index: 2;
        }

      .ys-head-cart {
            font-size: 14px;
            position: absolute;
            top: 64px;
            right: 0;
      }
      .ys-topBar {
          margin: 0 auto;
          width: 1200px;
          height: 130px;
      }
      .ys-head-logo {
            float: left;
        padding-top: 20px;
        width: 300px;
        line-height: 1;
      }
      .ys-head-logo-img {
        padding-top: 20px;
      }
      
      .ys-top-barcon{
        transition: all .3s ease-in-out;
        width: 1200px;
        margin: 0 auto;
        position: relative;
        padding-top: 10px;
        position: relative;
        height: 30px;
        text-align: right;
      }


      .nav-bar {
          background-color: #1a191e;
          position: relative;
          z-index: 1;
      }

      .nav-bar * {
          font-size: 14px;
      }

      .nav-item {
          float: left;
      }

      .nav-item > a {
          display: inline-block;
          padding: 0 21px;
          line-height: 44px;
          color: #fff;
          position: relative;
          &:hover{
            background: #4e4e4e;
          }
          &.active{
             background: #4e4e4e;
          }
      }

      .ys-container{
         margin: 0 auto;
          width: 1200px;  
      }
      .search-bar{
        position: absolute;
        left: 50%;
        margin-left: -250px;
        z-index: 2;
        top: 45px;
      }
  }
#carNum , .ys-header-box .icon-gouwuche {
    margin: 2px;
    color: #f8a120;
}
  

  

</style>

