<template>
  <div class="summary">
    <el-card>
      <div slot="header">
        <span> 账户交易明细汇总表 </span>
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
  name: 'Summary',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: [],
      searchData: {
        cxrqks: '2020-11-01',
        cxrqjs: '2020-11-16'
      },
      searchBto: [],
      tableData: [],
      tableListData: [],
      list: [
        {
          id: 1,
          dwbh: 123,
          sjdw: '上级单位',
          zzmc: '组织名称',
          yhzh: '222',
          dfdw: 'xxx公司',
          dfzh: '20121006',
          bz: '人民币',
          sryb: '1200',
          zcyb: '0',
          ybce: '1200',
          zy: 'gggg',
          sffx: '贷',
          jyje: '1200',
          yhmc: '建行'
        },
        {
          id: 2,
          dwbh: '321',
          sjdw: '上级单位',
          zzmc: '组织名称',
          yhzh: '111',
          dfdw: 'xxx公司',
          dfzh: '20121006',
          bz: '人民币',
          sryb: '1200',
          zcyb: '0',
          ybce: '1200',
          zy: 'gggg',
          sffx: '借',
          jyje: '2400',
          yhmc: '建行'
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
    this.searchItem = [
      {
        type: 'select',
        label: '单位编号:',
        prop: 'dwbh',
        selectList: [

          {
            value: '123',
            id: 123
          }
        ],
        placeholder: '请选择单位编号'
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '银行编号:',
        prop: 'yhbh',
        selectList: [

          {
            value: '111',
            id: 111
          },
          {
            value: '222',
            id: 222
          },
          {
            value: '333',
            id: 333
          },
          {
            value: '444',
            id: 444
          }
        ],
        placeholder: '请选择'
      },
      {
        type: 'input',
        label: '银行名称:',
        prop: 'yhmc',
        placeholder: '请填写银行名称'
      },
      {
        type: 'select',
        label: '账户号码:',
        selectList: [

          {
            value: '20111006',
            id: 20111006
          },
          {
            value: '20111007',
            id: 20111007
          }
        ],
        prop: 'zhhm',
        placeholder: '请填写账户号码'
      },
      {
        type: 'input',
        label: '账户名称:',
        prop: 'zhmc',
        placeholder: '请填写账户名称'
      },

      {
        type: 'input',
        label: '金额开始:',
        prop: 'jeks',
        placeholder: '请填写金额'
      },
      {
        type: 'input',
        label: '金额结束:',
        prop: 'jejs',
        placeholder: '请填写金额'
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        selectList: [

          {
            value: '人民币',
            id: '人民币'
          },
          {
            value: '美元',
            id: '美元'
          },
          {
            value: '越南盾',
            id: '越南盾'
          },
          {
            value: '欧元',
            id: '欧元'
          },
          {
            value: '泰国铢',
            id: '泰国铢'
          },
          {
            value: '加元',
            id: '加元'
          }
        ],
        placeholder: '请选择币种'
      },
      {
        type: 'select',
        label: '收付方向:',
        prop: 'sffx',
        selectList: [

          {
            value: '借',
            id: '借'
          },
          {
            value: '贷',
            id: '贷'
          }
        ],
        placeholder: '请选择收付方向'
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
        type: 'daterange',
        label: '查询日期:',
        disabled: true,
        timeList: ['cxrqks', 'cxrqjs'],
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
        prop: 'sjdw',
        width: '150',
        label: '上级单位'
      },
      {
        prop: 'zzmc',
        width: '150',
        label: '组织名称'
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '银行帐号'
      },
      {
        prop: 'dfdw',
        width: '150',
        label: '对方单位'
      },
      {
        prop: 'dfzh',
        width: '150',
        label: '对方帐号'
      },
      {
        prop: 'bz',
        width: '150',
        label: '币种'
      },
      {
        prop: 'sryb',
        width: '150',
        label: '收入原币'
      },
      {
        prop: 'zcyb',
        width: '150',
        label: '支出原币'
      },
      {
        prop: 'ybce',
        width: '150',
        label: '原币差额'
      },
      {
        prop: 'zy',
        width: '150',
        label: '摘要'
      },
      {
        prop: 'sffx',
        width: '150',
        label: '收付方向'
      },
      {
        prop: 'jyje',
        width: '150',
        label: '交易金额'
      },
      {
        prop: 'yhmc',
        width: '150',
        label: '银行名称'
      }
    ]
  },
  methods: {
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
            if (i == 'dwbh') {
              if (item.dwbh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i == 'yhbh') {
              if (item.yhzh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'zhhm') {
              if (item.dfzh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'jeks') {
              if (item.jyje >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'jejs') {
              if (item.jyje <= this.searchData[i]) {
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
            if (i == 'sffx') {
              if (item.sffx.toString().includes(this.searchData[i])) {
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
