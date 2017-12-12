<template>
  <div>
    <lqb-card>
      <span slot="header">我的销售订单：</span>
      <lqb-form v-model="formvalues" :data="forms"  from-type="LineForm" >
        <el-button style="margin-left:26px" type="info">查询</el-button>
      </lqb-form>
    </lqb-card>
    <lqb-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="'全部订单('+activeName+')'" name="first"></el-tab-pane>
          <el-tab-pane label="待鉴定" name="second"></el-tab-pane>
          <el-tab-pane label="已鉴定" name="third"></el-tab-pane>
      </el-tabs>
      <el-table
        :data="tableData5"
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
  import { orderList, delOrder } from '/api/goods'
  import YShelf from '/components/shelf'
  export default {
    data () {
      return {
        orderList: [],
        forms:[
            {"name":"Input",label:"商品名称","model":"shopName",placeholder:"商品名称"},
             {"name":"Input",label:"订单编号","model":"orderNO",placeholder:"订单编号"},
             {"name":"Input",label:"订单状态","addresState":"Kist",placeholder:"订单状态"},
            {"name":"DatePicker",label:"时间","model":"times",type:"daterange",placeholder:"请选择日期" },
             
          ],
        formvalues:{
            shopName:"商品名称", 
            "orderNO":"18541414451",
            times:null,
            addresState:0
          },
        activeName: '1',
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
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
      _orderList () {
        orderList().then(res => {
          this.orderList = res.result
        })
      },
      _delOrder (orderId, i) {
        delOrder({orderId}).then(res => {
          if (res.status === '0') {
            alert('删除成功')
            this.orderList.splice(i, 1)
          } else {
            alert('删除失败')
          }
        })
      }
    },
    created () {
      this._orderList()
    },
    components: {
      YShelf
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";

  .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    display: flex;
    span {
      display: inline-block;
      height: 100%;
    }
    .first {
      display: flex;
      justify-content: space-between;
      flex: 1;
      .f-bc {
        > span {
          width: 112px;
          text-align: center;
        }
      }
    }
    .last {
      width: 230px;
      text-align: center;
      display: flex;
      border-left: 1px solid #ccc;
      span {
        flex: 1;
      }
    }
  }

  .bt {
    border-top: 1px solid #EFEFEF;
  }

  .date {
    padding-left: 6px;
  }

  .order-id {
    margin-left: 20px;
  }

  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    &:hover {
      .del-order {
        display: block;
      }
    }
    .del-order {
      display: none;
    }
    .cart-l {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 15px 0;
      justify-content: space-between;
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        right: -1px;
        top: 0;
        width: 1px;
        background-color: #EFEFEF;
        height: 100%;
      }
      .ellipsis {
        margin-left: 20px;
        width: 220px;
      }
      .img-box {
        border: 1px solid #EBEBEB;
      }
      img {
        display: block;
        @include wh(80px);
      }
      .cart-l-r {
        display: flex;
        > div {
          text-align: center;
          width: 112px;
        }
      }
      .car-l-l {
        display: flex;
        align-items: center;
      }
    }
    .cart-r {
      width: 230px;
      display: flex;
      span {
        text-align: center;
        flex: 1;
      }
    }
  }

  .prod-operation {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 254px;
    div {
      width: 100%;
      text-align: center;
    }
    div:last-child {
      padding-right: 24px;
    }
  }
</style>
