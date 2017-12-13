<template>
  <div class="ys-row">
    <div class="ys-col" v-for='(o,i) in content' :class="['ys-col'+content.length,{'bdrn': i+1==content.length}]">
      <h2>{{o.text}}</h2>
      <div class="content">
        <span>{{o.text}}</span>
        <slot name="btn"><el-button v-if="o.slotbtn" style="float: right">{{o.slotbtn}}</el-button></slot>
        <slot name="his"><el-button v-if="o.slothis" type="text" style="float: right;margin: 5px">{{o.slothis}}</el-button></slot>
      </div>
    </div>
    <div style="margin: 20px">
      <label>{{content[0].label}}</label><span>{{content[0].span}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props:{
      content:{}
    },
    computed: {

    },
    methods: {

    },
    components: {
    }
  }
</script>
<style scoped>
  h2{
    font-size: 22px;
    line-height: 30px;
    padding-left: 20px;
  }
  span,label{
    font-size: 18px;
    margin: 5px;
  }
  .ys-row{
    /* width: 100%; */
    background: white;
    padding: 20px;
  }
  .ys-col{
    display: inline-block;
    height: 100px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .content{
    line-height: 80px;
    padding: 0px 20px;
  }
  .bdrn{
    border-right: none!important;
  }
  .ys-col1{
    width: 99%;
  }
  .ys-col2{
    width: 49.5%;
  }
  .ys-col3{
    width: 33%;
  }
</style>