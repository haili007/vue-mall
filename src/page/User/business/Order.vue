<template>
  <div>
    <y-shelf title="商品管理">
      <div slot="content" style="margin: 20px">
        <lqb-form v-model="values" :data="forms" from-type="LineForm">
            <el-button type="info">查询</el-button>
        </lqb-form>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="'全部订单('+activeName+')'" name="first"></el-tab-pane>
            <el-tab-pane label="待鉴定" name="second"></el-tab-pane>
            <el-tab-pane label="已鉴定" name="third"></el-tab-pane>
        </el-tabs>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column label='全选' type='selection' fit align='center'></el-table-column>
            <el-table-column label='商品信息' prop='name' fit align='center'></el-table-column>
            <el-table-column label='商品编号' fit align='center'></el-table-column>
            <el-table-column label='商品属性' fit align='center'></el-table-column>
            <el-table-column label='实付款' fit align='center'></el-table-column>
            <el-table-column label='下单时间' fit align='center'></el-table-column>
            <el-table-column label='订单状态' fit align='center'></el-table-column>
            <el-table-column label='交易操作' fit align='center' width=200>
                <template slot-scope='scope'>
                    <el-button type='text'>明细</el-button>
                </template>
            </el-table-column>
          </el-table>
          <div style="margin: 20px;"></div>
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
          </el-pagination>
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
        activeName: 'first',
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
      vueCropper
    }
  }
</script>
<style scoped>

</style>