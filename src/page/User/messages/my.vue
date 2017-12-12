<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有" name="first"></el-tab-pane>
            <el-tab-pane label="未读" name="second"></el-tab-pane>
            <el-tab-pane label="已读" name="third"></el-tab-pane>
        </el-tabs>
        <lqb-msg :key="k" v-for="(item , k ) in msgs" :msg="item">
            <template slot-scope="scope" slot="goDetail">
                    <router-link :to="'/user/messages/detail/'+scope.data.id">详情</router-link>
            </template>
        </lqb-msg>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'second',
        msgs:[
            {
                id:1,
                state:1,
                type:2,
                times:"2017-12-28 12:22",
                title:"订单已处理，请确认收货",
                content:'您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。'
            },
            {
                id:2,
                state:0,
                type:1,
                times:"2017-12-28 12:22",
                title:"订单已处理，请确认收货",
                content:'您购定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。'
            }
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>

</style>
