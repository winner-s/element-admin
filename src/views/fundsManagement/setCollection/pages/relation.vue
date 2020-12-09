<template>
  <div class="relation">
    <el-card>
      <div slot="header">
        <span>账户归集关系设置</span>
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
          :current-data="currentData"
          :table-btn="tableBtn"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleEdit="handleEdit"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub" @updateSub="updateSub" />
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
// import data from '../../components/data'
import dialogCom from './dialogCom'
import { STRATEGYMODEL } from '@u/wordbook'
export default {
  name: 'Relation',
  components: {
    Search,
    Table,
    dialogCom
  },
  data() {
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {}
      },
      searchItem: [],
      searchData: {
        nickname: ''
      },
      searchBto: [],
      showAll: 1,
      tableData: [],
      tableListData: [],
      list: [
        {
          clbh: 'ZJGJ20072011081830',
          clmc: '052',
          clms: 1,
          sjyhzh: '202010101148',
          sjzhmc: '测试单位',
          childerList: [
            {
              dwmc: '二级单位',
              yhzh: '111111111111',
              zhmc: '测试1',
              khhmc: '中国农业银行汉中分行',
              zhzt: '正常',
              zhyt: 1
            },
            {
              dwmc: '二级单位',
              yhzh: '22222222222',
              zhmc: '测试1',
              khhmc: '中国农业银行汉中分行',
              zhzt: '正常',
              zhyt: 2
            }
          ]
        },
        {
          clbh: 'ZJGJ20072011081832',
          clmc: '051',
          clms: 1,
          sjyhzh: '202010101148',
          sjzhmc: '测试单位'
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
    this.searchItem = [
      {
        type: 'input',
        label: '策略编号:',
        prop: 'clbh',
        placeholder: '请填写策略编号'
      },
      {
        type: 'input',
        label: '策略名称:',
        prop: 'clmc',
        placeholder: '请填写策略名称'
      }
    ]
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      },
      {
        prop: 'insert',
        type: 'primary',
        label: '新增'
      }
    ]
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'clbh',
        width: '150',
        label: '策略编号'
      },
      {
        prop: 'clmc',
        width: '150',
        label: '策略名称'
      },
      {
        prop: 'clms',
        width: '150',
        label: '策略模式',
        type: 'wordbook',
        wordbookList: this.strategyModel
      },
      { label: '操作', type: 'btn', width: '150', fixed: 'right' }
    ]
    this.tableBtn = [
      {
        name: '修 改',
        btnType: 'primary',
        handleFn: 'handleEdit'
      },
      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete'
      }
    ]
  },
  methods: {
    updateSub(res) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.clbh === res.clbh) {
          ind = index
        }
      })
      console.log(ind)

      const fore = this.tableData[ind]
      Object.keys(fore).forEach(item => {
        if (res[item]) {
          fore[item] = res[item]
        }
      })

      this.tableData[ind] = fore
      this.list[ind] = fore
    },
    addSub(res) {
      this.list.push(res)

      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
    },
    // 过滤
    strategyModel(val) {
      return STRATEGYMODEL[val]
    },
    handleDelete(v) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log()
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },
    handleEdit(row) {
      this.dialogObj.id = row.clbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '修改'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleInsert() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '新增'
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

    handleViewOther(row) {
      this.dialogObj.id = row.clbh
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
            if (i === 'clbh') {
              if (item.clbh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'clmc') {
              if (item.clmc.includes(this.searchData[i])) {
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
