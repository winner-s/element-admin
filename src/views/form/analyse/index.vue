<template>
  <div class="analyse">
    <el-card>
      <div slot="header">
        <span>各行账户数量分析</span>
      </div>
      <div>
        <Search
          :search-data="searchData"
          :search-item="searchItem"
          :search-bto="searchBto"
          :show-all="showAll"
          @getDataList="getDataList"
          @dropDown="dropDown"
          @dropUp="dropUp"
        />
        <Table
          :table-data="tableData"
          :show-summary="true"
          :table-list-data="tableListData"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
// import data from '../components/data'
export default {
  name: 'Analyse',
  components: {
    Search,
    Table
  },
  data() {
    return {
      BANKNAME: {
        '1': '中国建设银行',
        '2': '中国工商银行',
        '3': '中国银行'
      },
      searchItem: [],
      searchData: {
      },
      tableData: [],
      searchBto: [],
      showAll: false,
      tableListData: [],
      list: [
        {
          id: 1,
          bankName: 1,
          accountNum: '1',
          balance: 0,
          percentage: '0',
          coinType: 1
        },
        {
          id: 1,
          bankName: 2,
          accountNum: '1',
          balance: 0,
          percentage: '0',
          coinType: 2
        }
      ],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      }
    ]
    this.searchItem = [
      {
        type: 'select',
        label: '银行名称:',
        selectList: [
          {
            value: '中国建设银行',
            id: 1
          },
          {
            value: '中国工商银行',
            id: 2
          },
          {
            value: '中国银行',
            id: 3
          }
        ],
        prop: 'bankName',
        placeholder: '请选择银行名称'
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'coinType',
        selectList: [
          {
            value: '人民币',
            id: 1
          },
          {
            value: '美元',
            id: 2
          },
          {
            value: '越南盾',
            id: 3
          },
          {
            value: '欧元',
            id: 4
          },
          {
            value: '泰国铢',
            id: 5
          },
          {
            value: '加元',
            id: 6
          }
        ],
        placeholder: '请选择币种'
      }
    ]

    this.tableListData = [
      {
        prop: 'bankName',
        width: '150',
        label: '银行名称',
        type: 'wordbook',
        wordbookList: this.bankName
      },
      {
        prop: 'accountNum',
        width: '150',
        label: '账户数量'
      },
      {
        prop: 'balance',
        width: '150',
        label: '当前余额'
      },
      {
        prop: 'percentage',
        width: '150',
        label: '时点余额占比'
      }
    ]
  },
  methods: {
    // 过滤
    bankName(val) {
      return this.BANKNAME[val]
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
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
    },
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
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'bankName') {
              if (item.bankName.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'coinType') {
              console.log(this.searchData[i])
              if (item.coinType.toString().includes(this.searchData[i])) {
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
