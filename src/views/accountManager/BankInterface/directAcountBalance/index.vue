<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>直联账户即时余额查询</span>
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
          @handleStatus="handleStatus"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST, ACCOUNTUSAGE, ACCOUNTUSAGELIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  data() {
    // 这里存放数据
    return {
      accountUsageList: ACCOUNTUSAGELIST,
      showAll: 1,
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
          zhhm: '11122233344455',
          zhmc: '一级中心CNY直联账户1',
          jsye: '100.00',
          kyye: '101.00',
          yhfhxx: '',
          dwmc: '一级中心',
          zhyt: 1,
          khyh: '中国银行总行',
          dwbh: '13265'
        },
        {
          zhhm: '18213723593',
          zhmc: '一级中心CNY直联账户1',
          jsye: '100.00',
          kyye: '101.00',
          yhfhxx: '',
          dwmc: '一级中心',
          zhyt: 1,
          khyh: '中国建设银行总行',
          dwbh: '13265'
        },
        {
          zhhm: '7862346823',
          zhmc: '一级中心CNY直联账户1',
          jsye: '100.00',
          kyye: '101.00',
          yhfhxx: '',
          dwmc: '一级中心',
          zhyt: 1,
          khyh: '中国工商银行总行',
          dwbh: '546'
        },
        {
          zhhm: '000999888777',
          zhmc: '一级中心CNY直联账户1',
          jsye: '100.00',
          kyye: '101.00',
          yhfhxx: '',
          dwmc: '一级中心',
          zhyt: 1,
          khyh: '中国农业银行总行',
          dwbh: '1324'
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
        type: 'select',
        label: '单位编号:',
        prop: 'dwbh',
        placeholder: '请填写单位编号',
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
        label: '账户号码:',
        prop: 'zhhm',
        placeholder: '请填写账户号码'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'zhhm',
        width: '150',
        label: '账户号码'
      },

      {
        prop: 'zhmc',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'jsye',
        width: '',
        label: '即时余额(元)'
      },
      {
        prop: 'kyye',
        width: '',
        label: '可用余额(元)'
      },
      {
        prop: 'yhfhxx',
        width: '',
        label: '银行返回信息'
      },
      {
        prop: 'dwmc',
        width: '',
        label: '单位名称'
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途',
        type: 'wordbook',
        wordbookList: this.accountUsage
      },
      {
        prop: 'khyh',
        width: '',
        label: '开户银行'
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
    // 单击新增按钮
    handleInsert() {},
    add() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '添加账号'
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
              }
            }

            if (i === 'dwbh') {
              if (item.dwbh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'zhhm') {
              if (item.zhhm.includes(this.searchData[i])) {
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
