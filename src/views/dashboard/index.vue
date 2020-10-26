<!--  -->
<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div class="top_div">
            <p>贷款发生额</p>
            <p>￥126,560</p>
            <p>同期对比 <span class="green">12%</span></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="top_div">
            <p>结算笔数</p>
            <p>8,846</p>
            <p>同期对比 <span class="red">11%</span></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="top_div">
            <p>结算金额</p>
            <p>￥126,560</p>
            <p>同期对比 <span class="red">20%</span></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div class="top_div">
            <p>存贷款比例</p>
            <p>78%</p>
            <p>同期对比 <span class="green">12%</span></p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:23px">
      <el-col :span="12">
        <el-card class="" style="height:361px">
          <div slot="header" class="clearfix">
            <span>常用功能</span>
            <el-button
              style="float: right; padding: 3px 0;margin-top:5px; width:20px;height:20px"
              type="text"
              class="sz"
              @click="dialogVisible = true"
              ></el-button
            >
          </div>
          <div class="common">
            <div v-for="(item, index) in confirmList" :key="index">
              <router-link :to="item.router">
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="db" style="height:361px" :body-style="{ padding: '0px' }">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="用户管理" name="first" >
              
              <div class="content">
                <div v-for="item in 7" :key="item" class="right_div">
                  <div class="right_left">
                    【<span style="color:#1890FF">账户开户申请</span>】KH20072414393322
                  </div>
                  <div>
                    2020-11-20
                  </div>
                </div>
              </div> 
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <div v-for="item in 7" :key="item" class="right_div">
                <div class="right_left"> 
                  【<span style="color:#1890FF">账户开户申请</span>】KH20072414393322
                </div>
                <div>
                  2020-11-20
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <div v-for="item in 7" :key="item" class="right_div">
                <div class="right_left">
                  【<span style="color:#1890FF">账户开户申请</span>】KH20072414393322
                </div>
                <div>
                  2020-11-20
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
              <div v-for="item in 7" :key="item" class="right_div">
                <div class="right_left">
                  【<span style="color:#1890FF">账户开户申请</span>】KH20072414393322
                </div>
                <div>
                  2020-11-20
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <p class="more">
            <span style="color:#1890FF;">查看更多></span>
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:23px">
      <el-col :span="12">
        <el-card
          class=""
          style="height:361px"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <span>余额统计表</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="float: right; "
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div>
            <bar-charts class="pieCharts" :tableData="tableData"></bar-charts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          
          style="height:361px;"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <span>资产统计表</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="float: right; "
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div>
            <pie-charts class="pieCharts" :tableData="tableData"></pie-charts>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:23px">
      <el-col :span="12">
        <el-card
          class=""
          style="height:361px"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <span>负债统计表</span>
            
          </div>
          <div>
            <Line-charts
              class="pieCharts"
              :lineChartData="tableData"
            ></Line-charts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          
          style="height:361px;"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix" >
            <span>前置机状态</span>
          </div>
          <div>
            <pia-charts class="pieCharts" :tableData="status"></pia-charts>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      title="自定义快捷入口"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <div>
        <p>已选功能（点击拖动调整顺序)</p>
        <div>
          <div class="dialog_top">
            <vuedraggable class="wrapper" v-model="list">
              <div
                v-for="(item, index) in list"
                :key="index"
                class="dialog_div"
              >
                <a class="close" @click="close(item, index)"></a>
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </div>
            </vuedraggable>
          </div>
          <el-divider style="width:auto"></el-divider>
          <p>可添加功能</p>
          <div class="dialog_top">
            
            <div
              v-for="(item, index) in deleteList"
              :key="index"
              class="dialog_div"
            >
              <a class="push" @click="push(item, index)"></a>
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import PieCharts from './components/PieCharts'
import BarCharts from './components/BarCharts'
import LineCharts from './components/LineCharts'
import piaCharts from './components/piaCharts'
import vuedraggable from 'vuedraggable'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { PieCharts, BarCharts, LineCharts, piaCharts, vuedraggable },
  data() {
    //这里存放数据
    return {
      dialogVisible: false,
      activeName: 'first',
      confirmList:[
        {
          img: require('@/assets/img/1.png'),
          name: '资金监控',
          router: ''
        },
        {
          img: require('@/assets/img/2.png'),
          name: '资金池管理',
          router: '/fundsManagement'
        },
        {
          img: require('@/assets/img/3.png'),
          name: '报表中心',
          router: '/form'
        },
        {
          img: require('@/assets/img/4.png'),
          name: '内部金融',
          router: '/internalFinance'
        },
        {
          img: require('@/assets/img/5.png'),
          name: '融资管理',
          router: ''
        },
        {
          img: require('@/assets/img/6.png'),
          name: '企业对账',
          router: ''
        },
        {
          img: require('@/assets/img/7.png'),
          name: '内部结算',
          router: ''
        },
        {
          img: require('@/assets/img/8.png'),
          name: '投资管理',
          router: ''
        }
      ],
      list: [
        {
          img: require('@/assets/img/1.png'),
          name: '资金监控',
          router: ''
        },
        {
          img: require('@/assets/img/2.png'),
          name: '资金池管理',
          router: '/fundsManagement'
        },
        {
          img: require('@/assets/img/3.png'),
          name: '报表中心',
          router: '/form'
        },
        {
          img: require('@/assets/img/4.png'),
          name: '内部金融',
          router: '/internalFinance'
        },
        {
          img: require('@/assets/img/5.png'),
          name: '融资管理',
          router: ''
        },
        {
          img: require('@/assets/img/6.png'),
          name: '企业对账',
          router: ''
        },
        {
          img: require('@/assets/img/7.png'),
          name: '内部结算',
          router: ''
        },
        {
          img: require('@/assets/img/8.png'),
          name: '投资管理',
          router: ''
        }
      ],
      deleteList: [
        {
          img: require('@/assets/img/9.png'),
          name: '审批任务',
          router: ''
        },
        {
          img: require('@/assets/img/10.png'),
          name: '账号管理',
          router: '/accountManager'
        },
        {
          img: require('@/assets/img/11.png'),
          name: '结算管理',
          router: '/settlementManager'
        },
        {
          img: require('@/assets/img/12.png'),
          name: '预算管理',
          router: '/budgetManager'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '欧莱股份公司'
        },
        {
          value: '选项2',
          label: '立讯精密有限公司'
        },
        {
          value: '选项3',
          label: '美的集团'
        }
      ],
      value: '',
      tableData: [
        {
          value: 10,
          name: '北京银行'
        },
        {
          value: 20,
          name: '中国银行'
        },
        {
          value: 30,
          name: '建设银行'
        },
        {
          value: 40,
          name: '工商银行'
        }
      ],
      //前置机状态图表  值
      status:[               
        {
          value: 10,
          name: '闲置'
        },
        {
          value: 20,
          name: '故障'
        },
        {
          value: 30,
          name: '繁忙'
        }
      ],
      //资产统计表 图标  值
      zcList:[
        {
          value: 10,
          name: '银行理财'
        },
        {
          value: 20,
          name: '定期存款'
        },
        {
          value: 30,
          name: '通知存款'
        },
        {
          value: 20,
          name: '国债逆回购'
        },
        {
          value: 30,
          name: '内部存款'
        }
      ]
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    confirm(){
        this.dialogVisible = false;
        this.confirmList =  JSON.parse(JSON.stringify(this.list))     
    },
    close(item, index) {
      this.list.splice(index, 1)
      this.deleteList.push(item)
    },
    push(item, index) {
      this.deleteList.splice(index, 1)
      this.list.push(item)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
}
</script>

<style >
.el-tabs__item{
  height: 65px;
  line-height: 65px;
  
}
.el-tabs__nav-scroll{
  box-sizing: border-box;
  padding: 0 20px;
}
</style>
<style scoped lang="scss">


.more{
  position: absolute;
  right:40px;
  bottom: 20px;
}

.clearfix{
  line-height: 28px;
}
.sz{
  background: url('../../assets/img/set.png') no-repeat;
  background-size: 100% 100%;
}
p {
  margin: 0;
  
}
.right_div {
  display: flex;
  justify-content: space-between;
 
  margin: 0px 30px 20px 30px;
  position: relative;
  
  .right_left ::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #CCCCCC;
    left: 0;
    top: 5px;
  }
  & >:nth-child(1) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    padding-left: 10px;
  }
  & :nth-child(2) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
}
.dialog_top {
  width: 100%;
  margin-top: 20px;
  position: relative;

  .dialog_div {
    position: relative;
    display: inline-block;
    width: 70px;
    margin-right: 40px;
    margin-bottom: 20px;
    text-align: center;

    .push {
      position: absolute;
      top: -5px;
      right: 8px;
      margin: 0px;
      width: 14px;
      height: 14px;
      background: url('../../assets/img/push.png') no-repeat;
      background-size: 100% 100%;
    }
    .close {
      position: absolute;
      top: -5px;
      right: 8px;
      margin: 0px;
      width: 14px;
      height: 14px;
      background: url('../../assets/img/close.png') no-repeat;
      background-size: 100% 100%;
    }
    img {
      width: 38px;
      height: 38px;
    }
    p {
      margin: 0 !important;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }
}
.common {
  width: 100%;
  padding-left: 20px;
  div {
    display: inline-block;
    width: 70px;
    margin-right: 40px;
    margin-bottom: 35px;
    text-align: center;
    img {
      width: 38px;
      height: 38px;
    }
    p {

      margin: 0 ;
      margin-top: 5px !important;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
  }
}

.box-card {
  width: 100%;
  height: 158px;
  background-image: url('../../assets/img/topDiv.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.top_div {
  width: 100%;
  & :nth-child(1) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  & :nth-child(2) {
    margin-top: 14px;
    font-size: 30px;
    font-family: HelveticaNeue;
    color: #333333;
  }
  & :nth-child(3) {
    margin-top: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    span {
      margin-left: 8px;
    }
    .green {
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #52c41a;
      padding-right: 14px;
      background: url('../../assets/img/up.png') no-repeat;
      background-size:  9px 6px;
      background-position-x: 100%;
      background-position-y: 50%;
    }
    .red {
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #f5222d;
      padding-right: 14px;
      background: url('../../assets/img/down.png') no-repeat;
      background-size:  9px 6px;
      background-position-x: 100%;
      background-position-y: 50%;
    }
  }
  p {
    margin: 0;
  }
}
</style>
