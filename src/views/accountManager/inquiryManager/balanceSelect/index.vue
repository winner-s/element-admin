<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>当日余额查询</span>
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
          @handleStatus="handleStatus"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
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
import Search from '@c/common/search'
import Table from '@c/common/table'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
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
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },

      list: [
        {
          unitNo: 13265,
          unitName: '单位3',
          accountPhone: 2,
          accountName: 'nameW',
          currency: 3,
          bankName: 6,
          bankOpenName: '北京银行',
          lhh: '823676235',
          zhzz: 1,
          sfzl: 1,
          zhyt: 4,
          kmh: '9468462',
          ye: 1000
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          accountPhone: 3,
          accountName: 'nameE',
          currency: 1,
          bankName: 7,
          bankOpenName: '长沙分行',
          lhh: '4561237894',
          zhzz: 2,
          sfzl: 2,
          zhyt: 3,
          kmh: '13484',
          ye: 2000
        },
        {
          unitNo: 546,
          unitName: '单位2',
          accountPhone: 2,
          accountName: 'nameT',
          currency: 2,
          bankName: 4,
          bankOpenName: '广州总行',
          lhh: '9876568879',
          zhzz: 1,
          sfzl: 1,
          zhyt: 1,
          kmh: '6948751',
          ye: 3000
        },
        {
          unitNo: 13265,
          unitName: '单位3',
          accountPhone: 1,
          accountName: 'nameY',
          currency: 1,
          bankName: 1,
          bankOpenName: '杭州分行',
          lhh: '324180234869',
          zhzz: 2,
          sfzl: 2,
          zhyt: 2,
          kmh: '69036964',
          ye: 2000
        },
        {
          unitNo: 546,
          unitName: '单位2',
          accountPhone: 3,
          accountName: 'nameU',
          currency: 2,
          bankName: 3,
          bankOpenName: '深圳总行',
          lhh: '9881546',
          zhzz: 1,
          sfzl: 1,
          zhyt: 1,
          kmh: '94566554',
          ye: 6000
        },
        {
          unitNo: 1324,
          unitName: '单位1',
          accountPhone: 1,
          accountName: 'nameQ',
          currency: 1,
          bankName: 2,
          bankOpenName: '北京银行',
          lhh: '988512555',
          zhzz: 1,
          sfzl: 1,
          zhyt: 3,
          kmh: '36958412',
          ye: 8000
        }
      ],
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: '',
        documentNumber: ''
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
        label: '币种:',
        prop: 'currency',
        selectList: this.currencyList,
        placeholder: '请选择币种'
      },

      {
        type: 'select',
        label: '账户号码:',
        prop: 'accountPhone',
        placeholder: '请填写账户号码',
        selectList: this.zhhmList,
        show: this.showAll
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
        prop: 'connection',
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
        label: '银行账号',

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
        prop: 'lhh',
        width: '150',
        label: '联行号'
      },
      {
        prop: 'zhzz',
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
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
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

            if (i === 'accountPhone') {
              if (item.accountPhone === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }
            if (i === 'accountName') {
              if (item.accountName.includes(this.searchData[i])) {
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
            if (i === 'currency') {
              if (item.currency === this.searchData[i]) {
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
