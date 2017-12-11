<template>
  <div>
    <y-shelf title="商品管理—发布商品—商品基本信息">
      <div slot="content">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="100px" :model="form">
          <el-form-item label="活动类目">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品属性">
            <el-row style="margin-bottom: 20px">
              <el-col :span="10">
                <el-form-item label="成色">
                  <span>{{form.name}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="型号">
                  <span>{{form.name}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="颜色">
                  <span>{{form.name}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
              <el-form-item label="尺寸">
                  <span>{{form.name}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="商品品牌">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品编号">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品标题">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-col :span="2">
              <img :src="form.imgSrc" width="100%" alt="">
            </el-col>
          </el-form-item>
          <el-form-item label="商品公价">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品售价">
            <span>{{form.name}}</span>
          </el-form-item>
          <el-form-item label="商品详情">
            <el-col :span="2">
              <img :src="form.imgSrc" width="100%" alt="">
            </el-col>
          </el-form-item>
          <el-form-item>
            <center>
              <el-button type="info" @click="onSubmit">返回</el-button>
            </center>
          </el-form-item>
        </el-form>
      </div>
    </y-shelf>
  </div>
</template>
<script>
  import { upload, updateheadimage } from '/api/index'
  import YShelf from '/components/shelf'
  import vueCropper from 'vue-cropper'
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        labelPosition: 'right',
        form: {
          name: '123456',
          region: '',
          imgSrc: '//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    computed: {

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    components: {
      YShelf,
      vueCropper
    }
  }
</script>
<style scoped>

</style>
