<template>
  <div>
    <y-shelf title="商品管理">
      <div slot="content" style="margin: 20px">
        <ysheader :content="content"></ysheader>
        <el-row>
            <el-col :span="12">
              <h3>订单信息</h3>
            </el-col>
            <el-col :span="12">
              <h3>买家信息</h3>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-card class="box-card">
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card bdr">
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div style="margin: 20px"></div>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column label='全选' type='selection' fit align='center'></el-table-column>
            <el-table-column label='商品信息' prop='name' fit align='center'></el-table-column>
            <el-table-column label='商品编号' fit align='center'></el-table-column>
            <el-table-column label='商品属性' fit align='center'></el-table-column>
            <el-table-column label='售价' fit align='center'></el-table-column>
            <el-table-column label='状态' fit align='center'></el-table-column>
            <el-table-column label='操作' fit align='center' width=200>
                <template slot-scope='scope'>
                    <el-button type='text'>明细</el-button>
                </template>
            </el-table-column>
          </el-table>
      </div>
    </y-shelf>
  </div>
</template>
<script>
  import { upload, updateheadimage } from '/api/index'
  import YShelf from '/components/shelf'
  import vueCropper from 'vue-cropper'
  import lqbImgColumn from '../../../components/img-column'
  import ysheader from './header'
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        activeName: 'first',
        content: [{
          title: '123',
          text: '1234',
          label: '456',
          span: '789',
          slothis: '123',
          slotbtn: '134'
        },{
          title: '123',
          text: '1234',
        },{
          title: '123',
          text: '1234',
        }],
        forms:[
            {"name":"Input",label:"商品名称","model":"Kist",placeholder:"请输入商品名称"},
            {"name":"Select",label:"订单编号","model":"Kist",placeholder:"请输入商品编号"},
            {"name":"DatePicker",label:"下单时间",type:'datetimerange',"model":"Kist",placeholder:"请输入注册时间"},
            {"name":"Select",label:"订单状态","model":"Kist",placeholder:"请选择商品状态"},
          ],
          rule:{
          },
          values:{
            Kist:"1",
            KistOption:[
              {label:"已审核",value:"1"},
              {label:"未审核",value:"2"}
            ]
          },
          tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
          page:{
            currentPage:1,
            pageSize:10,
            total:null
          }
      }
    },
    computed: {

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
      YShelf,
      vueCropper,
      ysheader
    }
  }
</script>
<style scoped>
  .box-card{
      -webkit-box-shadow: none;
      box-shadow: none;
      border-left: none;
      border-radius: 0;
  }
  .bdr{
      border-right: none;
  }
</style>