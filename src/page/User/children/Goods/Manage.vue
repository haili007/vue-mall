<template>
  <div>
    <y-shelf title="商品管理">
      <div slot="content" style="margin: 20px">
        <lqb-form v-model="values" :data="forms" from-type="LineForm">
            <el-button>查询</el-button>
            <el-button type="primary">+ 新增</el-button>
        </lqb-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column label='序号' type='index' fit align='center'></el-table-column>
            <el-table-column label='商品' prop='name' fit align='center'></el-table-column>
            <el-table-column label='商品编号' fit align='center'></el-table-column>
            <el-table-column label='价格' fit align='center'></el-table-column>
            <el-table-column label='发布时间' fit align='center'></el-table-column>
            <el-table-column label='商品状态' fit align='center'></el-table-column>
            <el-table-column label='操作' fit align='center' width=200>
                <template slot-scope='scope'>
                    <el-button type='text'>明细</el-button>
                    <el-dropdown trigger="click" @command="handleCommand">
                      <el-button type='text'><span class="el-dropdown-link">
                        快捷菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span></el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">手机号更换</el-dropdown-item>
                        <el-dropdown-item command="a">重置密码</el-dropdown-item>
                        <el-dropdown-item command="a">会员代充值</el-dropdown-item>
                        <el-dropdown-item command="a">添加邀请人</el-dropdown-item>
                        <el-dropdown-item command="a">冻结</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
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
        forms:[
            {"name":"Input",label:"商品名称","model":"Kist",placeholder:"请输入商品名称"},
            {"name":"Select",label:"商品状态","model":"Kist",placeholder:"请选择商品状态"},
            {"name":"DatePicker",label:"注册时间",type:'datetimerange',"model":"Kist",placeholder:"请输入注册时间"},
            {"name":"Select",label:"商品编号","model":"Kist",placeholder:"请输入商品编号"},
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

    },
    components: {
      YShelf,
      vueCropper
    }
  }
</script>
<style scoped>

</style>
