<template>
  <div>
    <lqb-card>
      <span slot="header">我的销售订单：</span>
      <ysprofile :content="content"></ysprofile>
    </lqb-card>
    <lqb-card>
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
            prop="name"
            label="商品信息"
            fit
            align="center">
        </el-table-column>
        <el-table-column
            prop="address"
            label="售价/数量"
            fit
            align="center">
        </el-table-column>
        <el-table-column
            prop="address"
            label="鉴定费用"
            fit
            align="center">
        </el-table-column>
        <el-table-column
            prop="address"
            label="鉴定状态"
            fit
            align="center">
        </el-table-column>
        <el-table-column
            prop="address"
            label="操作"
            fit
            align="center">
        </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

    </lqb-card>
  </div>
</template>
<script>
  import ysprofile from './profile'
  import YShelf from '/components/shelf'
  export default {
    data () {
      return {
        content: [{
          title: '我的收入',
          text: '$120822',
          label: '绑卡状态:',
          span: '未绑卡',
          slothis: '交易明细'
        },{
          title: '待入账',
          text: '$120822',
          slothis: '交易明细'
        },{
          title: '账户余额',
          text: '$120822',
          slothis: '交易明细'
        }],
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        page:{
            currentPage:1,
            pageSize:10,
            total:null
        },
        imgItem:{
            top:[{
                label:'商品',model:'name'
            }],
            img:{
                model:'picUrl'
            },
            right:[{
                label:'title',model:'name'
            },{
                label:'title',model:'name'
            },{
                label:'title',model:'name'
            }]
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    created () {

    },
    components: {
      YShelf,
      ysprofile
    }
  }
</script>
<style lang="scss" scoped>

</style>
