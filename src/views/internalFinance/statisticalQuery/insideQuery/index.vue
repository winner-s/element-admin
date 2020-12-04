<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>内部贷款查询</span>
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
import { UNITNOLIST, HTZTLIST, HTZT, CURRENCYLIST, CURRENCY } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      currencyList: CURRENCYLIST,
      htztList: HTZTLIST,
      showAll: false,
      unitNoList: UNITNOLIST,
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
          sqdh: 'Dk54654654653',
          htmc: '顶级二级',
          dklx: 1,
          zqr: '顶级单位',
          zwr: '二级单位1',
          bz: 1,
          dkqx: '一年',
          ksrq: '2020-11-01',
          jsrq: '2021-11-02',
          dkje: '10000000',
          htzt: 1,
          jedx: '10000000',
          llzhts: 1,
          jxfs: '固定利率',
          htqdll: '2.200',
          fxfs: 1,
          hbff: 1,
          bzhu: '',
          yfkje: '15646',
          yhbj: '132',
          yhlx: '534',
          childerList: []
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
        type: 'input',
        label: '申请单号:',
        prop: 'sqdh',
        placeholder: '请填写申请单号'
      },
      {
        type: 'select',
        label: '合同状态:',
        prop: 'htzt',
        selectList: this.htztList,
        placeholder: '请选择合同状态'
      },

      {
        type: 'select',
        label: '债权人:',
        prop: 'zqr',
        placeholder: '请选择债权人'
      },
      {
        type: 'select',
        label: '债务人:',
        prop: 'zwr',
        placeholder: '请选择债务人'
      },
      {
        type: 'input',
        label: '贷款金额 由:',
        prop: 'dqjeks',
        placeholder: '请输入贷款金额',
        show: this.show
      },
      {
        type: 'input',
        label: '到:',
        prop: 'dkjejs',
        show: this.show
      },
      {
        type: 'time',
        label: '合同开始日期 从:',
        prop: 'htksrqks',
        placeholder: '请选择合同开始日期',
        show: this.show
      },
      {
        type: 'time',
        label: '合同开始日期 到:',
        prop: 'htksrqjs',
        placeholder: '请选择合同开始日期',
        show: this.show
      },
      {
        type: 'time',
        label: '合同结束日期从:',
        prop: 'htjsrqks',
        placeholder: '请选择合同结束日期',
        show: this.show
      },
      {
        type: 'time',
        label: '合同结束日期 到:',
        prop: 'htjsrqjs',
        placeholder: '请选择合同结束日期',
        show: this.show
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        placeholder: '请选择币种人',
        selectList: this.currencyList
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        prop: 'sqdh',
        width: '200',
        type: 'a',
        label: '申请单号'
      },
      {
        prop: 'zqr',
        width: '',
        label: '债权人'
      },

      {
        prop: 'zwr',
        width: '',
        label: '债务人 '
      },

      {
        prop: 'dkje',
        width: '',
        label: '金额'
      },
      {
        prop: 'bz',
        width: '',
        type: 'wordbook',
        wordbookList: this.currency,
        label: '币种'
      },
      {
        prop: 'htqdll',
        width: '',
        label: '合同签订利率% '
      },
      {
        prop: 'yfkje',
        width: '',
        label: '已放款金额'
      },
      {
        prop: 'yhbj',
        width: '',
        label: '已还本金'
      },
      {
        prop: 'yhlx',
        width: '',
        label: '已还利息'
      },
      {
        prop: 'ksrq',
        width: '',
        label: '开始日期'
      },
      {
        prop: 'jsrq',
        width: '',
        label: '结束日期'
      },
      {
        prop: 'htzt',
        width: '',
        label: '合同状态',
        type: 'wordbook',
        wordbookList: this.htzt
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
    htzt(val) {
      return HTZT[val]
    },
    currency(val) {
      return CURRENCY[val]
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
      this.currentData.currentPage = val
      this.getList()
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },

    handleViewOther(row) {
      this.dialogObj.id = row.sqdh
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
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'sqdh') {
              if (item.sqdh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'htzt') {
              if (item.htzt.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zqr') {
              if (item.zqr.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zwr') {
              if (item.zwr.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'dkjeks') {
              if (item.dkje >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'dkjejs') {
              if (item.dkje <= this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'htksrqc') {
              if (Date.parse(item.ksrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'htksrqd') {
              if (Date.parse(item.ksrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'htjsrqc') {
              if (Date.parse(item.jsrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'htksrqd') {
              if (Date.parse(item.jsrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'bz') {
              if (item.bz.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }
          } else {
            continue
          }
        }
        if (bool == true) {
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
