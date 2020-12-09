<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>借款放款复核</span>
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
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub" @updateSub="updateSub" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { DJZTLIST, DJZT, JXFS, JXFSLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      jxfsList: JXFSLIST,
      fkdztList: DJZTLIST,

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
          fkdbh: 'FK20201112354414',
          jkht: '123',
          fkje: '1',
          dxje: '1',
          fkr: '2020-11-11',
          dqr: '2020-11-11',
          scfxr: '2020-11-11',
          schbrq: '2020-11-11',
          jxfs: 1,
          jknbzh: '123',
          htksr: '2020-11-11',
          htdqr: '2020-11-11',
          fkdzt: 1
        }
      ],
      // 表格
      tableData: [

      ],
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
        prop: 'insert',
        type: 'primary',
        label: '新增'
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
        label: '合同编号:',
        prop: 'htbh',
        placeholder: '请填写合同编号'
      },
      {
        type: 'select',
        label: '金额(元) 从:',
        prop: 'jec',
        placeholder: '请选择金额状态'
      },

      {
        type: 'select',
        label: '到:',
        prop: 'jed',
        placeholder: '请选择金额'
      },
      {
        type: 'time',
        label: '放款日期从:',
        prop: 'fkrqc',
        placeholder: '请选择放款日期',
        show: this.showAll
      },
      {
        type: 'time',
        label: '到:',
        prop: 'fkrqd',
        placeholder: '请填写还款日期',
        show: this.showAll
      },
      {
        type: 'time',
        label: '首次付息日 从:',
        prop: 'scfxrc',
        placeholder: '请选择首次付息',
        show: this.showAll
      },
      {
        type: 'time',
        label: '到:',
        prop: 'scfxrd',
        placeholder: '请选择首次付息',
        show: this.showAll
      },
      {
        type: 'select',
        label: '计息方式:',
        prop: 'jxfs',
        selectList: this.jxfsList,
        placeholder: '请选择计息方式',
        show: this.showAll
      },
      {
        type: 'select',
        label: '放款单状态:',
        prop: 'fkdzt',
        placeholder: '请选择首次付息',
        selectList: this.fkdztList,
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'fkdbh',
        width: '150',
        type: 'a',
        label: '放款单编号'
      },
      {
        prop: 'htbh',
        width: '150',
        label: '合同编号'
      },

      {
        prop: 'fkje',
        width: '150',
        label: '放款金额 '
      },

      {
        prop: 'fkr',
        width: '150',
        label: '放款日'
      },
      {
        prop: 'dqr',
        width: '150',
        label: '到期日'
      },
      {
        prop: 'scfxr',
        width: '150',
        label: '首次付息日 '
      },
      {
        prop: 'jxfs',
        width: '150',
        label: '计息方式',
        type: 'wordbook',
        wordbookList: this.jxfs
      },
      {
        prop: 'cxdjfs',
        width: '150',
        label: '重新定价方式'
      },
      {
        prop: 'schbrq',
        width: '150',
        label: '首次还本日'
      },
      {
        prop: 'fkdzt',
        width: '150',
        label: '放款单状态',
        type: 'wordbook',
        wordbookList: this.fkdzt
      }

    ]
    // 按钮
    this.tableBtn = [

    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    // 过滤
    jxfs(val) {
      return JXFS[val]
    },
    fkdzt(val) {
      return DJZT[val]
    },
    updateSub(res) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.documentNumber === res.documentNumber) {
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
    handleInsert() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '新增'
    },

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
    // 删除产品
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
      this.dialogObj.id = row.fkdbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '修改'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.fkdbh
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
            if (i === 'htbh') {
              if (item.htbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'jxfs') {
              if (item.jxfs === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'fkdzt') {
              if (item.fkdzt === this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'jec') {
              if (item.fkje >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'jed') {
              if (item.fkje <= this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'fkrqc') {
              if (Date.parse(item.fkr) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'fkrqd') {
              if (Date.parse(item.fkr) <= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'scfxrc') {
              if (Date.parse(item.scfxr) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'scfxrd') {
              if (Date.parse(item.scfxr) >= Date.parse(this.searchData[i])) {
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
