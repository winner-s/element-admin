<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>历史余额查询</span>
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
          @handleEdit="handleEdit"
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
          accountPhone: 2,
          zhmc: 'nameL',
          currency: 1,
          bankName: 8,
          khrq: '2020-05-28',
          bankOpenName: '北京总行',
          lhh: '548794589',
          zhzt: 1,
          sfzl: 2,
          zhyt: 4,
          kmh: '9876455',
          ye: 2000
        },
        {
          unitNo: 546,
          unitName: '单位2',
          accountPhone: 3,
          zhmc: 'nameW',
          currency: 3,
          bankName: 1,
          khrq: '2020-12-08',
          bankOpenName: '广州分行',
          lhh: '123957349',
          zhzt: 1,
          sfzl: 1,
          zhyt: 3,
          kmh: '3694875',
          ye: 3000
        },
        {
          unitNo: 546,
          unitName: '单位2',
          accountPhone: 1,
          zhmc: 'nameY',
          currency: 1,
          bankName: 2,
          khrq: '2020-02-08',
          bankOpenName: '上海总行',
          lhh: '874145587',
          zhzt: 2,
          sfzl: 2,
          zhyt: 2,
          kmh: '047284462',
          ye: 4000
        },
        {
          unitNo: 13265,
          unitName: '单位3',
          accountPhone: 2,
          zhmc: 'aaa',
          currency: 2,
          bankName: 6,
          khrq: '2020-03-02',
          bankOpenName: '长沙分行',
          lhh: '123957349',
          zhzt: 2,
          sfzl: 2,
          zhyt: 2,
          kmh: '21314',
          ye: 5000
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          accountPhone: 3,
          zhmc: 'nameP',
          currency: 1,
          bankName: 5,
          khrq: '2020-11-11',
          bankOpenName: '杭州分行',
          lhh: '84614165',
          zhzt: 1,
          sfzl: 1,
          zhyt: 3,
          kmh: '21314',
          ye: 6000
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          accountPhone: 3,
          zhmc: 'aaa',
          currency: 2,
          bankName: 7,
          khrq: '2020-6-12',
          bankOpenName: '株洲分行',
          lhh: '721461346',
          zhzt: 1,
          sfzl: 1,
          zhyt: 2,
          kmh: '454789',
          ye: 6000
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          accountPhone: 3,
          zhmc: 'aaa',
          currency: 3,
          bankName: 5,
          khrq: '2020-01-21',
          bankOpenName: '株洲分行',
          lhh: '82137472',
          zhzt: 1,
          sfzl: 1,
          zhyt: 1,
          kmh: '14789',
          ye: 6000
        }
      ],
      // 表格
      tableData: [],
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
        prop: 'currency',
        selectList: this.directList,
        placeholder: '请选择选择是否直联'
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
        type: 'input',
        label: '日期范围:',
        prop: 'rqfwc',
        placeholder: '请填写日期范围',
        show: this.showAll
      },
      {
        type: 'input',
        label: '到:',
        prop: 'rqfwd',
        placeholder: '请填写日期范围',
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
        prop: 'zhmc',
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
        prop: 'lhh',
        width: '150',
        label: '联行号'
      },
      {
        prop: 'zhzt',
        width: '150',
        label: '账户状态',
        type: 'wordbook',
        wordbookList: this.accountStatus
      },
      {
        prop: 'sfzl',
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
      },
      {
        prop: 'kmh',
        width: '150',
        label: '科目号'
      },
      {
        prop: 'ye',
        width: '150',
        label: '余额(元)'
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
    // 过滤
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

    handleEdit(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
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
              }
            }

            if (i === 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'accountName') {
              if (item.zhmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'rqfwc') {
              if (Date.parse(item.khrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }
            if (i === 'rqfwd') {
              if (Date.parse(item.khrq) <= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'bankName') {
              if (item.bankName === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'zhyt') {
              if (item.zhyt === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'sfzl') {
              if (item.sfzl === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }
            if (i === 'currency') {
              if (item.currency === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'accountPhone') {
              if (item.accountPhone === this.searchData[i]) {
                bool = true
              } else {
                bool = false
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
