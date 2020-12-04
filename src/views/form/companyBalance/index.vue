<template>
  <div class="company-balance">
    <el-card>
      <div slot="header">
        <span>单位账户余额统计表</span>
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
import data from '../components/data'
import Table from '@c/common/table'
export default {
  name: 'CompanyBalance',
  components: {
    Search,
    Table
  },
  data() {
    return {
      // 单位名称 用于table
      DWMCLIST: {
        '1': '一级单位1'
      },
      ZHHMLIST: {
        '1': '2011106'
      },
      searchItem: [
        {
          type: 'select',
          label: '单位名称:',
          prop: 'dwmc',
          selectList: [
            {
              value: '二级单位1',
              id: 1
            }
          ],
          placeholder: '请填写单位名称'
        },
        {
          type: 'select',
          label: '是否包含下级:',
          prop: 'bhxj',
          selectList: [
            {
              value: '是',
              id: 1
            },
            {
              value: '否',
              id: 0
            }
          ],
          placeholder: '请选择'
        },
        {
          type: 'select',
          label: '账户号码:',
          selectList: [

            {
              value: '20111006',
              id: 1
            }
          ],
          prop: 'zhhm',
          placeholder: '请填写账户号码'
        },

        {
          type: 'daterange',
          label: '查询日期:',
          disabled: true,
          timeList: ['ksrq', 'jsrq'],
          timeFormat: 'yyyy-MM-dd',
          prop: 'cxrq',
          placeholder: '请选择日期'
        },
        {
          type: 'select',
          label: '币种:',
          prop: 'bz',
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
      ],
      searchData: {
        ksrq: '2020-11-01',
        jsrq: '2020-11-15'
      },
      searchBto: [
        {
          prop: 'select',
          type: 'primary',
          label: '查询'
        }
      ],
      tableData: [],
      tableListData: [],
      list: [
        {
          id: 1,
          sjdw: '单位',
          zhssdw: '二级单位1',
          zhmc: '二级单位1CNY直连账户',
          khh: '北京分行',
          yhzh: '20111006',
          je: 12,
          bz: 1
        }
      ],
      showAll: 1,
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
    // console.log(data)
    this.getList()

    this.tableListData = [
      {
        prop: 'sjdw',
        width: '',
        label: '上级单位'
      },
      {
        prop: 'zhssdw',
        width: '',
        label: '账户所属单位'
      },
      {
        prop: 'zhmc',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'khh',
        width: '',
        label: '开户行'
      },
      {
        prop: 'yhzh',
        width: '',
        label: '银行账号'
      },
      {
        prop: 'je',
        width: '',
        label: '金额'
      }
    ]
  },
  methods: {
    // 过滤
    dwmcList(val) {
      return this.DWMCLIST[val]
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
    handleCurrentChange(val) {
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size
      this.tableData = this.list.slice(start, end)
      this.currentData.currentPage = val
    },
    handleSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },
    handleEdit(row) {},
    handleViewOther(row) {},
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
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'dwmc') {
              if (item.zhssdw.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zhhm') {
              if (item.yhzh.includes(this.searchData[i])) {
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
<style>
.page-div {
  text-align: right;
}
</style>
