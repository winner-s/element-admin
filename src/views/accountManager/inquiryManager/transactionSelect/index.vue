<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>当日交易查询</span>
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
  ACCOUNTSTATUS,
  LENDING,
  LENDINGLIST
} from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  data() {
    // 这里存放数据
    return {
      lendingList: LENDINGLIST,
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
          dwbh: 1324,
          dfhm: 'aaa',
          jylsh: '10469183609',
          bfyhzh: 2,
          bfzhmc: 'nameW',
          bfdwmc: '单位1',
          bfyhmc: 1,
          bfkhhmc: '北京支行',

          dfkhhmc: '北京支行',
          jdfx: 1,
          jyrq: '2020-09-09',
          jyje: '1000',
          ye: '1000',
          bz: 1,
          zhyt: 1,
          sfzl: 1,
          zy: '',
          beizhu: ''
        },
        {
          dfhm: 'aaa',
          jylsh: '10469183610',
          bfyhzh: 1,
          bfzhmc: 'nameA',
          bfdwmc: '单位1',
          bfyhmc: 2,
          bfkhhmc: '西单支行',

          dfkhhmc: '西单支行',
          jdfx: 2,
          jyrq: '2020-01-28',
          jyje: '5000',
          ye: '500',
          bz: 2,
          zhyt: 2,
          sfzl: 1,
          zy: '',
          beizhu: ''
        },
        {
          dfhm: 'aaa',
          jylsh: '10469183611',
          bfyhzh: 2,
          bfzhmc: 'nameS',
          bfdwmc: '单位1',
          bfyhmc: 3,
          bfkhhmc: '长沙支行',

          dfkhhmc: '长沙支行',
          jdfx: 1,
          jyrq: '2020-8-22',
          jyje: '500',
          ye: '600',
          bz: 3,
          zhyt: 3,
          sfzl: 2,
          zy: '',
          beizhu: ''
        },
        {
          dfhm: 'aaa',
          jylsh: '10469183612',
          bfyhzh: 3,
          bfzhmc: 'nameD',
          bfdwmc: '单位1',
          bfyhmc: 4,
          bfkhhmc: '西单支行',

          dfkhhmc: '西单支行',
          jdfx: 1,
          jyrq: '2020-5-20',
          jyje: '900',
          ye: '1000',
          bz: 2,
          zhyt: 4,
          sfzl: 1,
          zy: '',
          beizhu: ''
        },
        {
          dfhm: 'aaa',
          jylsh: '10469183613',
          bfyhzh: 2,
          bfzhmc: 'nameF',
          bfdwmc: '单位1',
          bfyhmc: 5,
          bfkhhmc: '上海支行',

          dfkhhmc: '上海支行',
          jdfx: 1,
          jyrq: '2020-03-08',
          jyje: '3000',
          ye: '200',
          bz: 1,
          zhyt: 1,
          sfzl: 1,
          zy: '',
          beizhu: ''
        },
        {
          dfhm: 'aaa',
          jylsh: '10469183609',
          bfyhzh: 3,
          bfzhmc: '测试户1',
          bfdwmc: '单位1',
          bfyhmc: 6,
          bfkhhmc: '杭州支行',

          dfkhhmc: '杭州支行',
          jdfx: 2,
          jyrq: '2020-12-09',
          jyje: '500',
          ye: '1000',
          bz: 3,
          zhyt: 2,
          sfzl: 1,
          zy: '',
          beizhu: ''
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
        prop: 'dwbh',
        placeholder: '请填写单位编号',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '银行名称:',
        prop: 'yhmc',
        placeholder: '请填写银行名称',
        selectList: this.backList
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        placeholder: '请选择币种',
        selectList: this.currencyList
      },

      {
        type: 'select',
        label: '账户号码:',
        prop: 'zhhm',
        placeholder: '请填写账户号码',
        show: this.showAll,
        selectList: this.zhhmList
      },
      {
        type: 'input',
        label: '账户名称:',
        prop: 'zhmc',
        placeholder: '请填写账户名称',
        show: this.showAll

      },

      {
        type: 'select',
        label: '借贷方向:',
        prop: 'jdfx',
        placeholder: '请选择借贷方向',
        show: this.showAll,
        selectList: this.lendingList
      },
      {
        type: 'input',
        label: '金额范围:',
        prop: 'AmountRangeStat',
        placeholder: '请填写金额范围',
        show: this.showAll
      },
      {
        type: 'input',
        label: '到:',
        prop: 'AmountRangeEnd',
        placeholder: '请填写金额范围',
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
        prop: 'jylsh',
        width: '150',
        label: '交易流水号',
        fixed: 'left'
      },
      {
        prop: 'bfyhzh',
        width: '150',
        label: '本方银行账号',
        fixed: 'left',
        type: 'wordbook',
        wordbookList: this.zhhm
      },
      {
        prop: 'bfzhmc',
        width: '150',
        label: '本方账户名称'
      },
      {
        prop: 'bfdwmc',
        width: '150',
        label: '本方单位名称'
      },
      {
        prop: 'bfyhmc',
        width: '150',
        label: '本方银行名称',
        type: 'wordbook',
        wordbookList: this.back
      },
      {
        prop: 'bfkhhmc',
        width: '150',
        label: '本方开户行'
      },
      {
        prop: 'dfhm',
        width: '150',
        label: '对方账户号码'
      },
      {
        prop: 'dfkhhmc',
        width: '150',
        label: '对方开户行名称'
      },
      {
        prop: 'jdfx',
        width: '150',
        label: '借贷方向',
        type: 'wordbook',
        wordbookList: this.lending
      },
      {
        prop: 'jyrq',
        width: '150',
        label: '交易日期'
      },
      {
        prop: 'jyje',
        width: '150',
        label: '交易金额'
      },
      {
        prop: 'ye',
        width: '150',
        label: '余额'
      },
      {
        prop: 'bz',
        width: '150',
        label: '币种',
        type: 'wordbook',
        wordbookList: this.currency
      },
      {
        prop: 'zhyt',
        width: '150',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      },
      {
        prop: 'sfzl',
        width: '150',
        label: '是否直联',
        type: 'wordbook',
        wordbookList: this.direct
      },
      {
        prop: 'zy',
        width: '150',
        label: '摘要'
      },
      {
        prop: 'beizhu',
        width: '150',
        label: '备注'
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
    lending(val) {
      return LENDING[val]
    },
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
            if (i === 'dwbh') {
              if (item.dwbh === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'dwmc') {
              if (item.dwmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'yhmc') {
              if (item.bfyhmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'bz') {
              if (item.bz === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'zhhm') {
              if (item.bfyhzh === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'zhmc') {
              if (item.bfzhmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'jdfx') {
              if (item.jdfx === this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'AmountRangeStat') {
              if (parseInt(item.jyje) >= parseInt(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'AmountRangeEnd') {
              if (parseInt(item.jyje) <= parseInt(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
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
