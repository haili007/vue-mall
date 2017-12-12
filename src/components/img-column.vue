<template>
    <div>
      <el-row>
        <el-col v-if='imgItem.top' :span='20' :offset="2" align='left'>
            <span v-for='(item,index) in imgItem.top'>{{item.label}} : {{imgItemData[item.model]}}</span>
        </el-col>
        <el-col v-if='imgItem.img' :span='imgItem.img.width?imgItem.img.width:4' :offset="2"><img :src="imgItemData[imgItem.img.model]?imgItemData[imgItem.img.model]:''" width="100%" alt=""></el-col>
        <el-col v-if='imgItem.right' :span='12' :offset="2">
            <h5 align="left" v-for='(item,index) in imgItem.right' v-if='index==0'>{{imgItemData[item.model]}}</h5>
            <p align="left" v-for='(item,index) in imgItem.right' v-if='index!=0'>{{item.label}} : {{imgItemData[item.model]}}</p>
        </el-col>
      </el-row>
    </div>
</template>
<script>

export default {
    name: 'imgColumn',
    data() {
      return {

      }
    },
    props:{
      imgItem:{},
      imgItemData:{}
    },
    components:{

    },
    methods: {

    },
    mounted(){
        var _this = this
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>