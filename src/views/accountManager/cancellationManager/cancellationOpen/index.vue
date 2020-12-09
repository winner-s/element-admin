<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>销户申请</span>
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
          @handleCommit="handleCommit"
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
    <dialog-com
      :dialog-obj="dialogObj"
      @addSub="addSub"
      @updateSub="updateSub"
    />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {
  UNITNOLIST,
  CURRENCY,
  CURRENCYLIST,
  DJZT,
  DJZTLIST,
  BACK,
  BACKLIST,
  ACCOUNTUSAGE,
  DIRECT
} from '@u/wordbook'
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
      currencyList: CURRENCYLIST,
      djztList: DJZTLIST,
      backList: BACKLIST,
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
      list: [],

      // 表格
      tableData: [],
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
        prop: 'commit',
        type: 'primary',
        label: '提交'
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
        label: '单据编号:',
        prop: 'djbh',
        placeholder: '请填写单据编号',
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
        selectList: this.backList,
        placeholder: '请填写银行名称'
      },
      {
        type: 'input',
        label: '银行账号:',
        prop: 'yhzh',
        placeholder: '请填写银行账号'
      },
      {
        type: 'select',
        label: '单据状态:',
        prop: 'djzt',
        selectList: this.djztList,
        placeholder: '请选择单据状态',
        show: this.showAll
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        selectList: this.currencyList,
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
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      { label: '操作', type: 'btn', width: '150', fixed: 'right' },
      {
        prop: 'djbh',
        width: '150',
        type: 'a',
        label: '单据编号',
        fixed: 'left'
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '账户号码',
        fixed: 'left'
      },
      {
        prop: 'zhmc',
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'yhmc',
        width: '150',
        type: 'wordbook',
        wordbookList: this.back,
        label: '银行名称'
      },
      {
        prop: 'khhmc',
        width: '150',
        label: '开户行名称'
      },
      {
        prop: 'djzt',
        width: '150',
        label: '单据状态',
        type: 'wordbook',
        wordbookList: this.djzt
      },
      {
        prop: 'sfzl',
        width: '150',
        label: '是否直联',
        type: 'wordbook',
        wordbookList: this.direct
      },
      {
        prop: 'bz',
        width: '150',
        label: '币种',
        type: 'wordbook',
        wordbookList: this.currency
      },
      {
        prop: 'dwmc',
        width: '150',
        label: '单位名称'
      },
      {
        prop: 'zhyt',
        width: '150',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      },
      {
        prop: 'khsqrq',
        width: '150',
        label: '开户申请日期'
      },
      {
        prop: 'khrq',
        width: '150',
        label: '开户日期'
      },
      {
        prop: 'xhsqr',
        width: '150',
        label: '申请人'
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
    handleCommit() {
      if (this.selectChange.length !== 0) {
        this.selectChange.forEach((item, index) => {
          this.list.forEach((res, index) => {
            if (res.djbh === item.djbh) {
              res.djzt = 2
            }
          })
        })
      } else {
        this.$message({
          message: '请选择数据再进行提交操作！',
          type: 'warning'
        })
      }
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
      console.log(res)
      this.list.push(res)

      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
    },
    // 过滤
    direct(val) {
      return DIRECT[val]
    },
    accountUsage(val) {
      return ACCOUNTUSAGE[val]
    },
    currency(val) {
      return CURRENCY[val]
    },
    back(val) {
      return BACK[val]
    },
    djzt(val) {
      return DJZT[val]
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
      this.dialogObj.id = row.djbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.djbh
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
            if (i === 'djbh') {
              if (item.djbh.includes(this.searchData[i])) {
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
              if (item.yhmc.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'yhzh') {
              if (item.yhzh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'djzt') {
              if (item.djzt.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'bz') {
              if (item.bz.toString().includes(this.searchData[i])) {
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
