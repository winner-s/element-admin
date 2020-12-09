<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>账户信息查询</span>
      </div>
      <div>
        <Search
          :search-data="searchData"
          :search-item="searchItem"
          :search-bto="searchBto"
          :show-all="showAll"
          @getDataList="getDataList"
          @handleInsert="handleInsert"
          @dropDown="dropDown"
          @dropUp="dropUp"
        />

        <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :table-btn="tableBtn"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleViewOther="handleViewOther"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import dialogCom from './dialogCom'
import Search from '@c/common/search'
import Table from '@c/common/table'
import {
  UNITNOLIST,
  BACKLIST,
  CURRENCYLIST,
  ACCOUNTUSAGELIST,
  DIRECTLIST,
  ACCOUNTSTATUSLIST,
  ZHHM,
  ZHHMLIST,
  UNITNO,
  BACK,
  CURRENCY,
  ACCOUNTUSAGE,
  DIRECT,
  ACCOUNTSTATUS
} from '@u/wordbook'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      zhhmList: ZHHMLIST,
      unitNoList: UNITNOLIST,
      backList: BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      accountStatusList: ACCOUNTSTATUSLIST,
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      showAll: false,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      // 顶部按钮
      searchBto: [],
      list: [
        {
          unitNo: 1324,
          unitName: '单位1',
          khrq: '2019-01-01',
          accountPhone: 1,
          accountName: '账户名称1',
          currency: 1,
          bankName: 1,
          bankOpenName: '长沙分行',
          lhh: '5326345457',
          accountStatus: 1,
          connection: 1,
          zhyt: 3,
          kmh: '23114',
          khhszs: '湖南省',
          khhszshi: '长沙市'
        },
        {
          unitNo: 546,
          unitName: '单位2',
          khrq: '2020-05-025',
          accountPhone: 1,
          accountName: '账户名称4',
          currency: 2,
          bankName: 2,
          bankOpenName: '北京总行',
          lhh: '9324967569',
          accountStatus: 1,
          connection: 1,
          zhyt: 1,
          kmh: '23114',
          khhszs: '北京市',
          khhszshi: '北京市'
        },
        {
          unitNo: 13265,
          unitName: '单位3',
          khrq: '2020-02-10',
          accountPhone: 3,
          accountName: '账户名称2',
          currency: 3,
          bankName: 6,
          bankOpenName: '深圳分行',
          lhh: '12735748',
          accountStatus: 1,
          connection: 2,
          zhyt: 4,
          kmh: '23114',
          khhszs: '广东省',
          khhszshi: '深圳市'
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          khrq: '2020-02-10',
          accountPhone: 3,
          accountName: '账户名称5',
          currency: 3,
          bankName: 3,
          bankOpenName: '株洲分行',
          lhh: '04562784824',
          accountStatus: 1,
          connection: 1,
          zhyt: 2,
          kmh: '23114',
          khhszs: '浙江省',
          khhszshi: '杭州市'
        },
        {
          unitNo: 546,
          unitName: '单位2',
          khrq: '2020-02-10',
          accountPhone: 2,
          accountName: '账户名称6',
          currency: 2,
          bankName: 7,
          bankOpenName: '广州分行',
          lhh: '7237934368',
          accountStatus: 1,
          connection: 2,
          zhyt: 1,
          kmh: '23114',
          khhszs: '广东省',
          khhszshi: '广州市'
        },
        {
          unitNo: 13265,
          unitName: '单位3',
          khrq: '2020-09-01',
          accountPhone: 3,
          accountName: '账户名称8',
          currency: 3,
          bankName: 8,
          bankOpenName: '上海总行',
          lhh: '5489459579',
          accountStatus: 1,
          connection: 1,
          zhyt: 3,
          kmh: '23114',
          khhszs: '上海市',
          khhszshi: '上海市'
        }

      ],

      // 表格
      tableData: [

      ],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {

      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},

  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    // 顶部按钮
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      },
      {
        prop: 'reset',
        type: '',
        label: '重置'
      }
    ]
    // 搜索
    this.searchItem = [
      {
        type: 'select',
        label: '单位编号:',
        prop: 'unitNo',
        placeholder: '请填写单位编号',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'unitName',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '银行名称:',
        prop: 'bankName',
        placeholder: '请填写银行名称',
        selectList: this.backList
      },
      {
        type: 'select',
        label: '是否直联:',
        prop: 'connection',
        selectList: this.directList,
        placeholder: '请选择是否直联'
      },
      {
        type: 'select',
        label: '账户号码:',
        prop: 'accountPhone',
        placeholder: '请填写账户号码',
        show: this.showAll,
        selectList: this.zhhmList
      },
      {
        type: 'input',
        label: '账户名称:',
        prop: 'accountName',
        placeholder: '请填写账户名称',
        show: this.showAll

      },

      {
        type: 'select',
        label: '账户用途:',
        prop: 'zhyt',
        placeholder: '请填写账户用途',
        selectList: this.accountUsageList,
        show: this.showAll
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'currency',
        placeholder: '请选择币种',
        selectList: this.currencyList,
        show: this.showAll
      },
      {
        type: 'select',
        label: '账户状态:',
        prop: 'accountStatus',
        placeholder: '请选择账户状态',
        selectList: this.accountStatusList,
        show: this.showAll
      },

      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'contain',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'unitName',
        width: '150',
        label: '单位名称',
        type: 'a',
        fixed: 'left'
      },
      {
        prop: 'accountPhone',
        width: '150',
        type: 'wordbook',
        wordbookList: this.zhhm,
        label: '账户号码',
        fixed: 'left'

      },
      {
        prop: 'accountName',
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'currency',
        width: '150',
        label: '币种',
        type: 'wordbook',
        wordbookList: this.currency
      },
      {
        prop: 'bankName',
        width: '150',
        label: '银行名称',
        type: 'wordbook',
        wordbookList: this.back
      },
      {
        prop: 'bankOpenName',
        width: '150',
        label: '开户行名称'
      },

      {
        prop: 'accountStatus',
        width: '150',
        label: '账户状态',
        type: 'wordbook',
        wordbookList: this.accountStatus
      },
      {
        prop: 'lhh',
        width: '150',
        label: '联行号'
      },
      {
        prop: 'connection',
        width: '150',
        label: '是否直联',
        type: 'wordbook',
        wordbookList: this.direct
      },

      {
        prop: 'zhyt',
        width: '150',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      }
    ]
    // 按钮
    this.tableBtn = []
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    zhhm(val) {
      return ZHHM[val]
    },
    unitNo(val) {
      return UNITNO[val]
    },
    back(val) {
      return BACK[val]
    },
    currency(val) {
      return CURRENCY[val]
    },
    accountUsage(val) {
      return ACCOUNTUSAGE[val]
    },
    direct(val) {
      return DIRECT[val]
    },
    accountStatus(val) {
      return ACCOUNTSTATUS[val]
    },
    // 收起
    dropUp() {
      this.showAll = false
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = false
        }
      })
    },
    // 展开
    dropDown() {
      this.showAll = true
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = true
        }
      })
    },
    // 单击新增按钮
    handleInsert() {},

    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
    },
    // 分页
    onPageChange(val) {
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size

      this.tableData = this.list.slice(start, end)

      this.currentData.currentPage = val
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },

    handleViewOther(row) {
      console.log(row)
      this.dialogObj.id = row.accountPhone
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'unitNo') {
              if (item.unitNo === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'accountPhone') {
              if (item.accountPhone === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'accountName') {
              if (item.accountName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'bankName') {
              if (item.bankName === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'connection') {
              if (item.connection === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'zhyt') {
              if (item.zhyt === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'currency') {
              if (item.currency === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'currency') {
              if (item.currency === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'accountStatus') {
              if (item.accountStatus === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
          } else {
            continue
          }
        }
        if (bool === true) {
          list.push(item)
        }
      })
      console.log(list)
      this_.tableData = list
    }
  }
}
</script>
<style scoped></style>
