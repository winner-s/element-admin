<template>
  <div class="Flow">
    <el-card>
      <div slot="header">
        <span>银行账户余额流量表</span>
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
import { ACCOUNTUSAGE, ACCOUNTUSAGELIST } from '@u/wordbook'
import Search from '@c/common/search'
import data from '../components/data'
import Table from '@c/common/table'
export default {
  name: 'Flow',
  components: {
    Search,
    Table
  },
  data() {
    return {
      accountUsageList: ACCOUNTUSAGELIST,
      searchItem: [],
      searchData: {
        cxksrq: '2020-11-01',
        cxjsrq: '2020-11-15'
      },
      searchBto: [],
      tableData: [],
      tableListData: [],
      list: [
        {
          id: 1,
          sjdwmc: '顶级单位',
          xmgsmc: '二级单位1',
          khhmc: '中国农业银行',
          zhhm: '20121006',
          zhyt: 1,
          qcye: 0,
          kr: 0,
          lc: 0,
          qmye: 0,
          ce: 0,
          bz: 1
        },
        {
          id: 2,
          sjdwmc: '顶级单位',
          xmgsmc: '二级单位1',
          khhmc: '中国农业银行',
          zhhm: '20121006',
          zhyt: 2,
          qcye: 2000,
          kr: 0,
          lc: 0,
          qmye: 5000,
          ce: 0,
          bz: 2
        }
      ],
      showAll: false,
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
    this.searchItem = [
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
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
            value: '20121006',
            id: 20121006
          },
          {
            value: '20121007',
            id: 20121007
          },
          {
            value: '20111008',
            id: 20121008
          },
          {
            value: '20111009',
            id: 20111009
          },
          {
            value: '20111010',
            id: 20111010
          },
          {
            value: '20111011',
            id: 6
          },
          {
            value: '20111012',
            id: 7
          }
        ],
        prop: 'zhhm',
        placeholder: '请填写账户号码'
      },
      // {
      //   type: 'input',
      //   label: '账户名称:',
      //   show: false,
      //   prop: 'zhmc',
      //   placeholder: '请填写账户名称',
      // },

      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        show: false,
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
      },
      {
        type: 'select',
        label: '账户用途名称:',
        prop: 'zhyt',
        show: false,
        selectList: this.accountUsageList,
        placeholder: '请选择账户用途名称'
      },
      {
        type: 'num',
        label: '期初余额:',
        prop: 'qcye',
        show: false,
        numList: ['qcyeks', 'qcyejs'],
        placeholder: '请输入金额'
      },
      {
        type: 'num',
        label: '期末余额:',
        prop: 'qmye',
        show: false,
        numList: ['qmyeks', 'qmyejs'],
        placeholder: '请输入金额'
      },
      {
        type: 'daterange',
        label: '查询日期:',
        show: false,
        timeList: ['cxksrq', 'cxjsrq'],
        disabled: true,
        timeFormat: 'yyyy-MM-dd',
        prop: 'cxrq',
        placeholder: '请选择日期'
      }
    ]
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      }
    ]
    this.tableListData = [
      {
        prop: 'sjdwmc',
        width: '',
        label: '上级单位名称'
      },
      {
        prop: 'xmgsmc',
        width: '',
        label: '项目公司名称'
      },
      {
        prop: 'khhmc',
        width: '',
        label: '开户行名称'
      },
      {
        prop: 'zhhm',
        width: '',
        label: '帐户号码'
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      },
      {
        prop: 'qcye',
        width: '',
        label: '期初余额（元）'
      },
      {
        prop: 'lr',
        width: '',
        label: '流入（元）'
      },
      {
        prop: 'lc',
        width: '',
        label: '流出（元）'
      },
      {
        prop: 'qmye',
        width: '',
        label: '期末余额（元）'
      },
      {
        prop: 'ce',
        width: '',
        label: '差额（元）'
      }
    ]
  },
  methods: {
    // 过滤
    accountUsage(val) {
      return ACCOUNTUSAGE[val]
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
              if (item.sjdwmc.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'zhhm') {
              if (item.zhhm.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'bz') {
              if (item.bz.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'zhyt') {
              if (item.zhyt.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'qcyeks') {
              if (item.qcye >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'qcyejs') {
              if (item.qcye <= this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'qmyeks') {
              if (item.qmye >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'qmyejs') {
              if (item.qmye <= this.searchData[i]) {
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
