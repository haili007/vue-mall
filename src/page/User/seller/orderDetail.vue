<template>
    <div>
        <lqb-card>
          <span slot="header">订单详情</span>
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
                <el-row>
                    <label>鉴定中心：</label>
                    <span>李四 13187654321 浙江省 杭州市 拱墅区 祥符街道 海创科技中心4号楼1301室</span>
                </el-row>     
        </lqb-card>

            <lqb-card >
                <span slot="header">
                  商品信息
                </span>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
            </lqb-card>
    </div>
</template>
<script>
import lqbImgColumn from '/components/img-column'
export default {
    name: 'bOrderdetail',
    data() {
      return {
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
    components:{
        'lqb-img-column':lqbImgColumn
    },
    methods: {
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // console.log(row, column, rowIndex, columnIndex)
        if (columnIndex === 6) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 2
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    mounted(){
        var _this = this
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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