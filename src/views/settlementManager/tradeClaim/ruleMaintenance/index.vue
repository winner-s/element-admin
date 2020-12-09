<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>交易认领系统维护</span>
      </div>
      <div>
        <Search
          :search-data="searchData"
          :search-item="searchItem"
          :search-bto="searchBto"
          :show-all="showAll"
          @getDataList="getDataList"
          @handleInsert="handleInsert"
          @handleStart="handleStart"
          @handleStop="handleStop"
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
          @handleSelectionChange="handleSelectionChange"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub" @updateSub="updateSub" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { GZZT, GZZTLIST, RLXTLIST, RLXT } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      rlxtList: RLXTLIST,
      gzztList: GZZTLIST,
      showAll: 1,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      // 顶部按钮
      searchBto: [],

      list: [],
      // 表格
      tableData: [

      ],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: '',
        documentNumber: ''
      },
      selectChange: ''
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
        prop: 'start',
        type: 'primary',
        label: '启用'
      },
      {
        prop: 'stop',
        type: 'primary',
        label: '停用'
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
        label: '规则编号:',
        prop: 'gzbh',
        placeholder: '请填写规则编号'
      },
      {
        type: 'input',
        label: '规则名称:',
        prop: 'gzmc',
        placeholder: '请填写规则名称'
      },
      {
        type: 'select',
        label: '规则状态:',
        prop: 'gzzt',
        selectList: this.gzztList,
        placeholder: '请选择规则状态'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      { label: '操作', type: 'btn', width: '', fixed: 'right' },
      {
        prop: 'gzbh',
        width: '',
        type: 'a',
        label: '规则编号'
      },
      {
        prop: 'gzmc',
        width: '',
        label: '规则名称'
      },
      {
        prop: 'rlxt',
        width: '',
        type: 'wordbook',
        wordbookList: this.rlxt,
        label: '认领系统'
      },
      {
        prop: 'gzzt',
        width: '',
        label: '规则状态',
        type: 'wordbook',
        wordbookList: this.gzzt
      }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '编 辑',
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
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    // 过滤
    rlxt(val) {
      return RLXT[val]
    },
    gzzt(val) {
      return GZZT[val]
    },
    handleStart() {
      this.selectChange.forEach((item, index) => {
        if (item.gzzt === 2) {
          item.gzzt = 1
        } else {
          this.$confirm('编号：' + item.gzbh + '已是启用状态', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {

          })
        }
      })
    },
    handleStop() {
      this.selectChange.forEach((item, index) => {
        if (item.gzzt === 1) {
          item.gzzt = 2
        } else {
          this.$confirm('编号：' + item.gzbh + '已是停用状态', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {

          })
        }
      })
    },
    handleSelectionChange(res) {
      this.selectChange = res
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
      this.dialogObj.id = row.gzbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.gzbh
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
            if (i === 'gzbh') {
              if (item.gzbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'gzmc') {
              if (item.gzmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'gzzt') {
              if (item.gzzt.toString().includes(this.searchData[i])) {
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
<style scoped></style>
