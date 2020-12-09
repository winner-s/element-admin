<!--  -->
<template>
  <el-dialog
    :title="dialogObjNei.title"
    :visible.sync="dialogObjNei.show"
    :close-on-click-modal="false"
    width="1000px"
    class="abow_dialog"
    append-to-body
  >
    <Search
      :search-data="searchData"
      :search-item="searchItem"
      :search-bto="searchBto"
      :show-all="showAll"
      @getDataList="getDataList"

      @handleCommit="handleCommit"
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
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { ACCOUNTUSAGE, ACCOUNTUSAGELIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  props: {
    dialogObjNei: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    // 这里存放数据
    return {
      accountUsageList: ACCOUNTUSAGELIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      showAll: false,
      list: [
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
      ],
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部按钮
      searchBto: [],
      // 顶部搜索
      searchItem: [],
      searchData: {},
      selectionList: []
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
        prop: 'commit',
        type: 'primary',
        label: '确认'
      }
    ]
    // 搜索
    this.searchItem = [
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
        placeholder: '请填写单位名称'
      },
      {
        type: 'input',
        label: '银行账号:',
        prop: 'yhzh',
        placeholder: '请填写银行账号'
      },
      {
        type: 'input',
        label: '账号名称:',
        prop: 'zhmc',
        show: this.showAll,
        placeholder: '请填写账号名称'
      },
      {
        type: 'input',
        label: '开户行名称:',
        prop: 'khhmc',
        show: this.showAll,
        placeholder: '请填写开户行名称'
      },
      {
        type: 'select',
        label: '账户用途:',
        prop: 'yhzh',
        show: this.showAll,
        selectList: this.accountUsageList,
        placeholder: '请选择账户用途'
      }
    ]

    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'dwmc',
        width: '150',
        type: 'a',
        label: '单位名称',
        fixed: 'left'
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '银行账号',
        fixed: 'left'
      },
      {
        prop: 'zhmc',
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'khhmc',
        width: '150',
        label: '开户行名称'
      },
      {
        prop: 'zhzt',
        width: '150',
        label: '账户状态'
      },
      {
        prop: 'zhyt',
        width: '150',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    handleSelectionChange(res) {
      this.selectionList = res
    },
    handleCommit() {
      this.$emit('handleCommit', this.selectionList)
      this.dialogObjNei.show = false
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

    accountUsage(val) {
      return ACCOUNTUSAGE[val]
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
      console.log('2')
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size

      this.tableData = this.list.slice(start, end)

      this.currentData.currentPage = val
    },
    onSizeChange(val) {
      console.log('1')
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
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
            if (i === 'dwmc') {
              if (item.dwmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'yhzh') {
              if (item.yhzh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'unitNo') {
              if (item.unitNo.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
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
<style  scoped>
</style>
