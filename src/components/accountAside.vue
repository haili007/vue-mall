<template>
<div class="account-sidebar">
    <div class="avatar gray-box ">
    <div>
        <h5>友奢·博时轩001店</h5></div>
        <div class="box-inner">
            <ul class="account-nav">
                <li>
                    <dl>
                        <dt>我是买家</dt>
                        <dd>
                            <router-link to="/user/buyer/orderList">我的采购订单</router-link>
                        </dd>
                        <dd>
                            <router-link to="/cart">我的购物车</router-link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我是卖家</dt>
                        <dd>
                            <router-link to="/user/seller/orderList">我的销售订单</router-link>
                        </dd>
                        <dd>
                            <router-link to="/user/seller/orderManage">商品管理</router-link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我的消息</dt>
                        <dd>
                            <router-link to="/user/messages/my?sys">系统消息</router-link>
                        </dd>
                        <dd>
                            <router-link to="/user/messages/my">我的消息</router-link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>商家中心</dt>
                        <dd>
                            <router-link to="/user/business/information">商家信息</router-link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我的财务</dt>
                        <dd>
                            <router-link to="/user/finance/situation">财务概况</router-link>
                        </dd>
                        <dd>
                            <router-link to="/user/finance/flow">交易流水</router-link>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
export default {
  props: ["nav", "title"],
  mounted() {
    //this.$alert("测试");
  }
};
</script>
<style lang="scss" scoped>

 .content {
    display: flex;
    height: 100%;
  }

  .account-sidebar {
    width: 210px;
    border-radius: 6px;
    .gray-box{
       box-shadow: 5px 5px 5px rgba(0 , 0, 0, 0.1);
    }
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

.account-nav {
  text-align: left;

  dt {
    line-height: 38px;
    padding-left: 10px;
    color: #333333;
    font-size: 14px;
    border: 1px solid #dddddd;
    background-color: #fcfcfc;
  }

  dd {
    line-height: 36px;
    color: #999999;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
  }
  dd a {
    padding-left: 10px;
    display: block;
    color: #999999;
    outline: none;
  }
}


</style>
