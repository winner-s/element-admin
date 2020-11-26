<!--  -->
<template>
  <div class="">
    <div class="popContainer" v-if="tips">
      <div class="tip1" v-if="tip === 1">
        <img src="../../assets/img/tip1.png" alt="" @click="tip1Click" />
      </div>
      <div v-if="tip === 2" class="tip2">
        <img src="../../assets/img/shang.png" alt="" />
        <img src="../../assets/img/xia.png" alt="" />
        <img src="../../assets/img/cygn.png" alt="" @click="tip2Click" />
      </div>

      <div v-if="tip === 3" class="tip3">
        <img src="../../assets/img/shang.png" alt="" />
        <img src="../../assets/img/db.png" alt="" @click="tip3Click" />
      </div>

      <div v-if="tip === 4" class="tip4">
        <img src="../../assets/img/shang.png" alt="" />

        <img src="../../assets/img/tb.png" alt="" @click="tip4Click" />
      </div>
    </div>
    <div class="kf" @click="kf = true"></div>
    <!-- @click="toUser" -->
    <div class="dh" v-show="kf">
      <div class="close" @click.stop="kf = false"></div>
    </div>
    <el-row :gutter="20">
      <el-col :span="12" :class="{ cygn: tip == 2 }">
        <el-card class="" style="height: 361px">
          <div slot="header" class="clearfix">
            <span>常用功能</span>
            <el-button
              style="
                float: right;
                padding: 3px 0;
                margin-top: 5px;
                width: 20px;
                height: 20px;
              "
              type="text"
              class="sz"
              @click="dialogVisible = true"
            />
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
        <el-card
          class="db"
          style="height: 361px"
          :body-style="{ padding: '0px' }"
        >
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="待审批(7)" name="first">
              <div class="content">
                <div v-for="item in 7" :key="item" class="right_div">
                  <div class="right_left">
                    【<span style="color: #1890ff">账户开户申请</span
                    >】KH20072414393322
                  </div>
                  <div>2020-11-20</div>
                </div>
              </div>
              <p class="more">
                <span style="color: #1890ff">查看更多></span>
              </p>
            </el-tab-pane>
            <el-tab-pane label="待复核(12)" name="second">
              <div class="dfh">
                <div>
                  <div>结算管理</div>
                  <div>对公付款复核 <span>12</span></div>
                  <div>对私付款复核 <span>19</span></div>
                  <div>同名划拨复核 <span>8</span></div>
                  <div>薪资代发复核 <span>10</span></div>
                  <div>指令状态复核 <span>12</span></div>
                </div>
                <div>
                  <div>账户管理</div>
                  <div>开户复核 <span>12</span></div>
                  <div>变更复核 <span>5</span></div>
                  <div>销户复核 <span>9</span></div>
                </div>
                <div>
                  <div>内部结算</div>
                  <div>请款申请复核 <span>12</span></div>
                  <div>交易补录复核 <span>19</span></div>
                  <div>指令状态复核 <span>8</span></div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <template v-for="(item, index) in zbqList">
        <el-col :span="6" :key="index" v-if="item.show">
          <el-card class="box-card">
            <div class="top_div">
              <p>{{ item.top }}</p>
              <p>{{ item.num }}</p>
              <p>
                同期对比
                <span
                  :class="{
                    green: item.tqdb == 'green',
                    red: item.tqdb == 'red',
                  }"
                  >{{ item.tqdbNum }}</span
                >
              </p>
              <div>
                <el-popover placement="bottom-end" width="180" trigger="click">
                  <el-card class="">
                    <div slot="header" class="clearfix">
                      <span>展示列表设置</span>
                    </div>
                    <div>
                      <el-checkbox-group
                        v-model="checkList"
                        @change="checkChange"
                      >
                        <el-checkbox label="结算笔数">结算笔数</el-checkbox>
                        <el-checkbox label="结算金额">结算金额</el-checkbox>
                        <el-checkbox label="资金流入">资金流入</el-checkbox>
                        <el-checkbox label="资金流出">资金流出</el-checkbox>
                        <el-checkbox label="资金归集">资金归集</el-checkbox>
                        <el-checkbox label="资金下拨">资金下拨</el-checkbox>
                        <el-checkbox label="预算执行情况"
                          >预算执行情况</el-checkbox
                        >
                      </el-checkbox-group>
                    </div>
                  </el-card>
                  <img
                    src="../../assets/img/info.png"
                    style="width: 14px; height: 14px"
                    slot="reference"
                  />
                </el-popover>
              </div>
            </div>
          </el-card>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="20" style="margin-top: 23px" :class="{ cygn: tip == 4 }">
      <el-col :span="12">
        <el-card
          class=""
          style="height: 361px"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <span>余额统计表</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="float: right"
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <bar-charts class="pieCharts" :table-data="tableData" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="height: 361px" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>资产统计表</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="float: right"
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <pie-charts class="pieCharts" :table-data="tableData" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 23px" :class="{ cygn: tip == 4 }">
      <el-col :span="12">
        <el-card
          class=""
          style="height: 361px"
          :body-style="{ padding: '0px' }"
        >
          <div slot="header" class="clearfix">
            <span>负债统计表</span>
          </div>
          <div>
            <Line-charts class="pieCharts" :line-chart-data="tableData" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="height: 361px" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>各行账户数量表</span>
          </div>
          <div>
            <pia-charts class="pieCharts" :line-chart-data="status" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      title="自定义功能入口"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <div>
        <p>已添加在首页（点击拖动调整顺序,最多15个)</p>
        <div>
          <div class="dialog_top">
            <vuedraggable v-model="list" class="wrapper">
              <div
                v-for="(item, index) in list"
                :key="index"
                class="dialog_div"
              >
                <a class="close" @click="close(item, index)" />
                <img :src="item.img" alt="" />
                <p>{{ item.name }}</p>
              </div>
            </vuedraggable>
          </div>
          <el-divider style="width: auto" />
          <p>全部收藏</p>
          <div class="dialog_top">
            <div class="qbsc" v-for="(item, index) in qbscList" :key="index">
              <div class="top">
                <div class="top_name">{{ item.name }}</div>
                <div v-show="item.show == true" @click="item.show = false">
                  收起<i class="el-icon-arrow-up el-icon--right" />
                </div>
                <div v-show="item.show == false" @click="item.show = true">
                  展开<i class="el-icon-arrow-down el-icon--right" />
                </div>
              </div>
              <div
                v-for="(ele, index) in item.childerList"
                :key="index"
                class="dialog_div"
                v-show="item.show == true"
              >
                <a class="push" @click="push(ele, index)" />
                <img :src="ele.img" alt="" />
                <p>{{ ele.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import PieCharts from './components/PieCharts'
import BarCharts from './components/BarCharts'
import LineCharts from './components/LineCharts'
import piaCharts from './components/piaCharts'
import vuedraggable from 'vuedraggable'
import { mapState } from 'vuex'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { PieCharts, BarCharts, LineCharts, piaCharts, vuedraggable },
  data() {
    // 这里存放数据
    return {
      tip: 1,
      checkList: ['结算笔数', '结算金额', '资金流入', '资金流出'],
      //指标墙
      zbqList: [
        {
          show: true,
          top: '结算笔数',
          num: '8846',
          tqdbNum: '11%',
          tqdb: 'red',
        },
        {
          show: true,
          top: '结算金额',
          num: '￥126,560',
          tqdbNum: '20%',
          tqdb: 'red',
        },
        {
          show: true,
          top: '资金流入',
          num: '￥926,560',
          tqdbNum: '12%',
          tqdb: 'green',
        },
        {
          show: true,
          top: '资金流出',
          num: '￥12,423',
          tqdbNum: '10%',
          tqdb: 'green',
        },
        {
          show: false,
          top: '资金归集',
          num: '￥988,446',
          tqdbNum: '8%',
          tqdb: 'red',
        },
        {
          show: false,
          top: '资金下拨',
          num: '￥526,160',
          tqdbNum: '6%',
          tqdb: 'green',
        },
        {
          show: false,
          top: '预算执行情况',
          num: '78%',
          tqdbNum: '11%',
          tqdb: 'green',
        },
      ],
      //全部收藏
      qbscList: [
        {
          name: '账户管理',
          show: false,
          childerList: [
            {
              parentName: '账户管理',
              img: require('@/assets/img/1.png'),
              name: '开户申请',
              router: '/accountManager/openManager/accountOpen',
            },
            {
              parentName: '账户管理',
              img: require('@/assets/img/1.png'),
              name: '开户复核',
              router: '',
            },
            {
              parentName: '账户管理',
              img: require('@/assets/img/1.png'),
              name: '变更复核',
              router: '',
            },
          ],
        },
        {
          name: '报表中心',
          show: false,
          childerList: [
            {
              parentName: '报表中心',
              img: require('@/assets/img/2.png'),
              name: '用户角色',
              router: '',
            },
          ],
        },
        {
          name: '内部金融',
          show: false,
          childerList: [
            {
              parentName: '利率设置',
              img: require('@/assets/img/3.png'),
              name: '内部金融',
              router: '',
            },
            {
              parentName: '利率计划',
              img: require('@/assets/img/3.png'),
              name: '内部金融',
              router: '',
            },
          ],
        },
      ],
      dialogVisible: false,
      activeName: 'first',
      confirmList: [
        {
          img: require('@/assets/img/1.png'),
          name: '资金监控',
          router: '',
        },
        {
          img: require('@/assets/img/2.png'),
          name: '资金池管理',
          router: '/fundsManagement',
        },
        {
          img: require('@/assets/img/3.png'),
          name: '报表中心',
          router: '/form',
        },
        {
          img: require('@/assets/img/4.png'),
          name: '内部金融',
          router: '/internalFinance',
        },
        {
          img: require('@/assets/img/5.png'),
          name: '融资管理',
          router: '',
        },
        {
          img: require('@/assets/img/6.png'),
          name: '企业对账',
          router: '',
        },
        {
          img: require('@/assets/img/7.png'),
          name: '内部结算',
          router: '',
        },
        {
          img: require('@/assets/img/8.png'),
          name: '投资管理',
          router: '',
        },
      ],
      list: [
        {
          img: require('@/assets/img/1.png'),
          name: '资金监控',
          router: '',
        },
        {
          img: require('@/assets/img/2.png'),
          name: '资金池管理',
          router: '/fundsManagement',
        },
        {
          img: require('@/assets/img/3.png'),
          name: '报表中心',
          router: '/form',
        },
        {
          img: require('@/assets/img/4.png'),
          name: '内部金融',
          router: '/internalFinance',
        },
        {
          img: require('@/assets/img/5.png'),
          name: '融资管理',
          router: '',
        },
        {
          img: require('@/assets/img/6.png'),
          name: '企业对账',
          router: '',
        },
        {
          img: require('@/assets/img/7.png'),
          name: '内部结算',
          router: '',
        },
        {
          img: require('@/assets/img/8.png'),
          name: '投资管理',
          router: '',
        },
      ],
      deleteList: [
        {
          img: require('@/assets/img/9.png'),
          name: '审批任务',
          router: '',
        },
        {
          img: require('@/assets/img/10.png'),
          name: '账号管理',
          router: '/accountManager',
        },
        {
          img: require('@/assets/img/11.png'),
          name: '结算管理',
          router: '/settlementManager',
        },
        {
          img: require('@/assets/img/12.png'),
          name: '预算管理',
          router: '/budgetManager',
        },
      ],
      options: [
        {
          value: 1,
          label: '禹道斯北京分公司',
        },
        {
          value: 2,
          label: '禹道斯上海分公司',
        },
        {
          value: 3,
          label: '禹道斯深圳分公司',
        },
      ],
      value: 1,
      tableData: [
        {
          value: 50000,
          name: '北京银行',
        },
        {
          value: 80000,
          name: '中国银行',
        },
        {
          value: 40000,
          name: '建设银行',
        },
        {
          value: 10000,
          name: '工商银行',
        },
      ],
      // 前置机状态图表  值
      status: [
        {
          value: 34,
          name: '中国银行',
        },
        {
          value: 23,
          name: '建设银行',
        },
        {
          value: 20,
          name: '交通银行',
        },
        {
          value: 16,
          name: '招商银行',
        },
        {
          value: 10,
          name: '工商银行',
        },
      ],
      // 资产统计表 图标  值
      zcList: [
        {
          value: 10,
          name: '银行理财',
        },
        {
          value: 20,
          name: '定期存款',
        },
        {
          value: 30,
          name: '通知存款',
        },
        {
          value: 20,
          name: '国债逆回购',
        },
        {
          value: 30,
          name: '内部存款',
        },
      ],
      kf: false,
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState({
      tips: state => state.settings.tips
    }),
  },
  // 监控data中的数据变化
  watch: {
    value(newVal, oldVal) {
      console.log(newVal, oldVal)
      if (newVal == 2) {
        this.tableData = [
          {
            value: 20000,
            name: '北京银行',
          },
          {
            value: 30000,
            name: '中国银行',
          },
          {
            value: 40000,
            name: '建设银行',
          },
          {
            value: 10000,
            name: '工商银行',
          },
        ]
      } else if (newVal == 3) {
        this.tableData = [
          {
            value: 50000,
            name: '北京银行',
          },
          {
            value: 20000,
            name: '中国银行',
          },
          {
            value: 10000,
            name: '建设银行',
          },
          {
            value: 60000,
            name: '工商银行',
          },
        ]
      } else {
        this.tableData = [
          {
            value: 50000,
            name: '北京银行',
          },
          {
            value: 80000,
            name: '中国银行',
          },
          {
            value: 40000,
            name: '建设银行',
          },
          {
            value: 10000,
            name: '工商银行',
          },
        ]
      }
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.tips)
    if(this.tips==true){
      let _scrollTop
    _scrollTop = document.scrollingElement.scrollTop
    document.body.style.position = 'fixed'
    document.body.style.top = -_scrollTop + 'px'
    }
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    tip4Click() {
      this.$store.dispatch('settings/changeSetting', {
          key: 'tips',
          value: false
      })
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, 0)
      this.tip = 1

    },
    tip3Click() {
      document.body.style.position = ''
      document.body.style.top = ''
      document.getElementsByClassName('el-tabs__nav-wrap')[0].style.position =
        ''
      document.getElementsByClassName('el-tabs__nav-wrap')[0].style.zIndex = ''
      document.getElementsByClassName(
        'el-tabs__nav-wrap'
      )[0].style.backgroundColor = ''
      window.scrollTo(0, 300)
      this.tip = 4
      let _scrollTop
      _scrollTop = document.scrollingElement.scrollTop
      document.body.style.position = 'fixed'
      document.body.style.top = -_scrollTop + 'px'
    },
    tip2Click() {
      document.getElementsByClassName('el-tabs__nav-wrap')[0].style.position =
        'relative'
      document.getElementsByClassName('el-tabs__nav-wrap')[0].style.zIndex =
        '2002'
      document.getElementsByClassName(
        'el-tabs__nav-wrap'
      )[0].style.backgroundColor = '#FFFFFF'
      this.tip = 3
    },
    tip1Click() {
      let _scrollTop
      _scrollTop = document.scrollingElement.scrollTop
      document.body.style.position = 'fixed'
      document.body.style.top = -_scrollTop + 'px'
      this.tip = 2
    },
    toUser() {
      this.$router.push({ path: '/accountManager' })
    },
    checkChange(res) {
      console.log(res)
      this.zbqList.forEach((item, index) => {
        item.show = false
        res.forEach((ele, ind) => {
          if (ele == item.top) {
            item.show = true
          }
        })
      })
    },
    confirm() {
      this.dialogVisible = false
      this.confirmList = JSON.parse(JSON.stringify(this.list))
    },
    close(res, index) {
      this.list.splice(index, 1)
      this.qbscList.forEach((item, index) => {
        if (item.name == res.parentName) {
          console.log('删除相同')
          item.childerList.push(res)
        }
      })
    },
    push(res, index) {
      let bool = false
      this.qbscList.forEach((item, index) => {
        item.childerList.forEach((ele, index) => {
          if (res === ele) {
            console.log('相同')
            bool = true
            return
          }
        })
        if (bool == true) {
          item.childerList.splice(index, 1)
          return
        }
      })
      this.list.push(res)
    },
  },
}
</script>

<style >
.el-tabs__item {
  height: 65px;
  line-height: 65px;
}
.el-tabs__nav-scroll {
  box-sizing: border-box;
  padding: 0 20px;
}
.el-popover {
  padding: 0;
}
</style>
<style scoped lang="scss">
.cygn {
  position: relative;
  z-index: 20001;
}
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  .tip4 {
    & :nth-child(1) {
      position: absolute;

      width: 42px;
      height: 42px;
      top: 330px;
      left: 190px;
    }
    img {
      position: absolute;
      left: 45%;
      top: 150px;
      width: 505px;
      height: 209px;
    }
  }
  .tip3 {
    & :nth-child(1) {
      position: absolute;

      width: 42px;
      height: 42px;
      top: 70px;
    }

    img {
      position: absolute;
      left: 55%;
      top: 180px;
      width: 171px;
      height: 281px;
    }
  }
  .tip2 {
    & :nth-child(1) {
      position: absolute;
      width: 42px;
      height: 42px;
      left: 180px;
      top: 70px;
    }
    & :nth-child(2) {
      position: absolute;
      width: 42px;
      height: 42px;
      top: 450px;
      left: 56%;
    }

    img {
      position: absolute;
      left: 60%;
      top: 150px;
      width: 364px;
      height: 275px;
    }
  }
  .tip1 {
    position: absolute;
    right: 150px;

    img {
      width: 275px;
      height: 353px;
    }
  }
}
.dcl {
  padding: 0px 38px;
  display: flex;
  & > div {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    & > div {
      margin-bottom: 22px;
    }
    & > :not(:first-child) {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
    & > :nth-child(1) {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    span {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1890ff;
    }
  }
}
.dfh {
  padding: 0px 38px;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      margin-bottom: 22px;
    }
    & > :not(:first-child) {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
    & > :nth-child(1) {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    span {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1890ff;
    }
  }
}
.dh {
  width: 358px;
  height: 443px;
  position: fixed;
  right: 0;
  bottom: 0;
  background: url('../../assets/img/dh.png') no-repeat;
  background-size: 100% 100%;
  z-index: 100;
  .close {
    width: 28px;
    height: 36px;
    position: absolute;
    right: 0px;
    top: 0;
  }
}
.kf {
  background: url('../../assets/img/kf.png');
  background-size: 100% 100%;
  position: fixed;
  right: 0;
  bottom: 200px;
  z-index: 99;
  width: 105px;
  height: 50px;
}
.qbsc {
  .top {
    padding-left: 12px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1890ff;
    .top_name {
      position: relative;
    }
    .top_name::before {
      content: '';
      width: 3px;
      height: 14px;
      background-color: #1890ff;
      position: absolute;
      left: -12px;
    }
  }
}
.more {
  position: absolute;
  right: 40px;
  bottom: 0px;
}

.clearfix {
  line-height: 28px;
}
.sz {
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

  .right_left ::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #cccccc;
    left: 0;
    top: 5px;
  }
  & > :nth-child(1) {
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
      margin: 0;
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
  margin-top: 24px;
  width: 100%;
  height: 158px;
  background-image: url('../../assets/img/topDiv.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.top_div {
  position: relative;
  & > div {
    width: 14px;
    height: 14px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  width: 100%;
  & > :nth-child(1) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  & > :nth-child(2) {
    margin-top: 14px;
    font-size: 30px;
    font-family: HelveticaNeue;
    color: #333333;
  }
  & > :nth-child(3) {
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
      background-size: 9px 6px;
      background-position-x: 100%;
      background-position-y: 50%;
    }
    .red {
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #f5222d;
      padding-right: 14px;
      background: url('../../assets/img/down.png') no-repeat;
      background-size: 9px 6px;
      background-position-x: 100%;
      background-position-y: 50%;
    }
  }
  p {
    margin: 0;
  }
}
</style>
