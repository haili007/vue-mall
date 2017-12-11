<template>
  <div>
    <y-shelf title="商品管理—发布商品—商品基本信息">
      <div slot="content">
        <div style="margin: 20px;"></div>
        <lqb-form v-model="values" :data="forms" from-type="LineForm">
            <el-button>查询</el-button>
            <el-button type="primary">+ 新增</el-button>
        </lqb-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column label='序号' type='index' fit align='center'></el-table-column>
            <el-table-column label='手机账号' prop='name' fit align='center'></el-table-column>
            <el-table-column label='是否认证' fit align='center'></el-table-column>
            <el-table-column label='会员姓名' fit align='center'></el-table-column>
            <el-table-column label='会员级别' fit align='center'></el-table-column>
            <el-table-column label='注册时间' fit align='center'></el-table-column>
            <el-table-column label='渠道来源' fit align='center'></el-table-column>
            <el-table-column label='邀请人' fit align='center'></el-table-column>
            <el-table-column label='累计注册天数(天)' fit align='center'></el-table-column>
            <el-table-column label='累计投资总额(元)' fit align='center'></el-table-column>
            <el-table-column label='会员状态' fit align='center'></el-table-column>
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
            {"name":"Input",label:"手机号码","model":"Kist",placeholder:"请输入手机号码"},
            {"name":"Input",label:"会员姓名","model":"Kist",placeholder:"请输入会员姓名"},
            {"name":"Select",label:"渠道来源","model":"Kist",placeholder:"请输入渠道来源"},
            {"name":"DatePicker",label:"注册时间",type:'datetimerange',"model":"Kist",placeholder:"请输入注册时间"},
            {"name":"Select",label:"会员级别","model":"Kist",placeholder:"请输入会员级别"},
            {"name":"Select",label:"是否实名","model":"Kist",placeholder:"请输入是否实名"},
            {"name":"Select",label:"会员状态","model":"Kist",placeholder:"请输入会员状态"},
            {"name":"Input",label:"邀请人","model":"Kist",placeholder:"请输入邀请人"}

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
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
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
