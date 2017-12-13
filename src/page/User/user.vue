<template>
  <div class="layout-container">
    <y-header>
      <div slot="nav"></div>
    </y-header>
    <div class="w">
      <div class="content">
        <account-aside :nav="nav" :title="title"></account-aside>
        <div class="account-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <y-footer></y-footer>

  </div>

</template>
<script>
  import YFooter from '/common/footer'
  import YHeader from '/common/header'
  import accountAside from '/components/accountAside'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        title: '我的订单',
        nav: [
          {name: '我的订单', path: 'orderList'},
          {name: '账户资料', path: 'information'},
          {name: '收货地址', path: 'addressList'},
          {name: '我的优惠', path: 'coupon'},
          {name: '售后服务', path: 'support'},
          {name: '以旧换新', path: 'aihuishou'}
        ],
        editAvatar: true
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      tab (e) {
        this.$router.push({path: '/user/' + e.path})
      }
    },
    created () {
      let path = this.$route.path.split('/')[2]
      this.nav.forEach(item => {
        if (item.path === path) {
          this.title = item.name
        }
      })
    },
    components: {
      YFooter,
      YHeader,
      accountAside
    },
    watch: {
      $route (to) {
        let path = to.path.split('/')[2]
        this.nav.forEach(item => {
          if (item.path === path) {
            this.title = item.name
          }
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";

  .w {
    padding-top: 40px;
  }

  .content {
    display: flex;
    height: 100%;
  }

  .account-sidebar {
    width: 210px;
    border-radius: 6px;
    .avatar {

      border-radius: 10px;
      text-align: center;
      img {
        width: 168px;
        height: 168px;
      }
      h5 {
        height: 40px;
        line-height: 40px;
        padding-left: 12px;
        font-size: 14px;
        text-align: left;
      }
    }
  }
  .account-content {
    margin-left: 20px;
    flex: 1;
  }


</style>
