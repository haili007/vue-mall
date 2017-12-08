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
                            <a href="#">我的采购订单</a>
                        </dd>
                        <dd>
                            <a href="#">我的购物车</a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我是卖家</dt>
                        <dd>
                            <a href="#">我的销售订单</a>
                        </dd>
                        <dd>
                            <a href="#">商品管理</a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我的消息</dt>
                        <dd>
                            <a href="#">系统公告</a>
                        </dd>
                        <dd>
                            <a href="#">我的消息</a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>商家中心</dt>
                        <dd>
                            <a href="#">商家信息</a>
                        </dd>
                        <dd>
                            <a href="#">收货地址</a>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>我的财务</dt>
                        <dd>
                            <a href="#">财务概况</a>
                        </dd>
                        <dd>
                            <a href="#">入账记录</a>
                        </dd>
                        <dd>
                            <a href="#">交易流水</a>
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
