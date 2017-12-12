<template>
    <lqb-msg-detail :msg="msg"></lqb-msg-detail>
</template>

<script>
export default {
    data(){
        return{
            msg:{
                id:1,
                state:1,
                type:2,
                times:"2017-12-28 12:22",
                title:"订单已处理，请确认收货",
                content:'您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。您购买的Gucci酒神包已经过鉴定处理，请尽快确认收货。'
            }
        }
    }
}
</script>

<style>

</style>
