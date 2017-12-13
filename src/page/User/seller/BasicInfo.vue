<template>
  <div>
    <y-shelf title="商品管理—发布商品—商品基本信息">
      <div slot="content">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="100px" :model="form">
          <el-form-item label="活动类目">
            <el-col :span="5">
              <el-select v-model="form.region" placeholder="请选择活动类目">
                <el-option label="类目一" value="shanghai"></el-option>
                <el-option label="类目二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-select v-if="true" v-model="form.region" placeholder="请选择活动类目">
                <el-option label="类目一" value="shanghai"></el-option>
                <el-option label="类目二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-select v-if="true" v-model="form.region" placeholder="请选择活动类目">
                <el-option label="类目一" value="shanghai"></el-option>
                <el-option label="类目二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="商品属性">
            <el-row style="margin-bottom: 20px">
              <el-col :span="10">
                <el-form-item label="成色">
                  <el-select v-model="form.region" placeholder="请选择商品成色">
                    <el-option label="类目一" value="shanghai"></el-option>
                    <el-option label="类目二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="型号">
                  <el-input v-model="form.name" placeholder="请输入商品型号"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="颜色">
                  <el-select v-model="form.region" placeholder="请选择商品颜色">
                    <el-option label="类目一" value="shanghai"></el-option>
                    <el-option label="类目二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
              <el-form-item label="尺寸">
                  <el-select v-model="form.region" placeholder="请选择商品尺寸">
                    <el-option label="类目一" value="shanghai"></el-option>
                    <el-option label="类目二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-button type="text">添加属性</el-button>
          </el-form-item>
          <el-form-item label="商品品牌">
            <el-col :span="12">
              <el-input v-model="form.name" placeholder="商品品牌"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品编号">
            <el-col :span="12">
              <el-input v-model="form.name" placeholder="商品编号"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品标题">
            <el-col :span="22">
              <el-input v-model="form.name" placeholder="商品标题"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <el-button type="text">拍照技巧</el-button>
            <span>图片大小在2M以内，格式支持PNG、BMP、JPG或GIF，至少上传一张图片，至多上传五张图片，第一张为主图，建议尺寸XX</span>
          </el-form-item>
          <el-form-item label="商品公价">
            <el-col :span="12">
              <el-input v-model="form.name" placeholder="商品公价"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品售价">
            <el-col :span="12">
              <el-input v-model="form.name" placeholder="商品售价"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品详情">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <span>图片大小在2M以内，格式支持PNG、BMP、JPG或GIF，可传多张</span>
          </el-form-item>
          <el-form-item>
            <center><el-button type="primary" @click="onSubmit">提交审核</el-button></center>
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
          name: '',
          region: ''
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
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    components: {
      YShelf,
      vueCropper
    }
  }
</script>
<style scoped>
  .el-select{
    width: 100%;
  }
</style>
