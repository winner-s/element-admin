<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>历史交易查询</span>
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
import { UNITNOLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  data() {
    // 这里存放数据
    return {
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
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      list:[
        {
          jylsh:'216755346547476',
          bfyhzh:'32323232323',
          bfzhmc:'aaa',
          bfdwmc:'bbbb',
          bfyhmc:1,
          bfkhh:'株洲分行',
          dfyhzh:'34343434343',
          dfzhmc:'cccc',
          dfkhh:'北京分行',
          jdfx:1,
          jyrq:'2020-09-01',
          jyje:'1000',
          ye:'1000',
          bz:1,
          zhyt:1,
          sfzl:1,
          zy:'',
          beizhu:''

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
        prop: 'unitNo',
        placeholder: '请填写单位编号',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'unitName',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '银行名称:',
        prop: 'bankName',
        placeholder: '请填写银行名称'
      },
      {
        type: 'select',
        label: '是否直联:',
        prop: 'currency',
        placeholder: '请选择选择是否直联'
      },
      {
        type: 'select',
        label: '银行账号:',
        prop: 'currency',
        placeholder: '请选择银行账号',
        show: this.showAll
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'currency',
        placeholder: '请选择币种',
        show: this.showAll
      },

      {
        type: 'input',
        label: '账户名称:',
        prop: 'accountName',
        placeholder: '请填写账户名称',
        show: this.showAll

      },
      {
        type: 'input',
        label: '日期范围:',
        prop: 'accountName',
        placeholder: '请填写日期范围',
        show: this.showAll

      },
      {
        type: 'input',
        label: '到:',
        prop: 'accountName',
        placeholder: '请填写日期范围',
        show: this.showAll

      },

      {
        type: 'select',
        label: '账户状态:',
        prop: 'connection',
        placeholder: '请填写账户状态',
        show: this.showAll
      },
      {
        type: 'input',
        label: '金额范围:',
        prop: 'connection',
        placeholder: '请填写金额范围',
        show: this.showAll
      },
      {
        type: 'select',
        label: '到:',
        prop: 'connection',
        placeholder: '请填写金额范围',
        show: this.showAll
      },
      {
        type: 'select',
        label: '借贷方向:',
        prop: 'connection',
        placeholder: '请选择借贷方向',
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
      {
        prop: 'jylsh',
        width: '',
        label: '交易流水号',
        fixed: 'left'
      },

      {
        prop: 'bfyhzh',
        width: '150',
        label: '本方银行账号',
        fixed: 'left'
      },
      {
        prop: 'bfzhmc',
        width: '',
        label: '本方账户名称'
      },
      {
        prop: 'bfdwmc',
        width: '',
        label: '本方单位名称'
      },

      {
        prop: 'bfyhmc',
        width: '',
        label: '本方银行名称'
      },
      {
        prop: 'bfkhh',
        width: '',
        label: '本方开户行'
      },
      {
        prop: 'dfyhzh',
        width: '',
        label: '对方银行账号'
      },
      {
        prop: 'dfzhmc',
        width: '',
        label: '对方账号名称'
      },
      {
        prop: 'dfkhh',
        width: '',
        label: '对方开户行'
      },
      {
        prop: 'jdfx',
        width: '',
        label: '借贷方向'
      },
      {
        prop: 'jyrq',
        width: '',
        label: '交易日期'
      },
      {
        prop: 'jyje',
        width: '',
        label: '交易金额'
      },
      {
        prop: 'ye',
        width: '',
        label: '余额'
      },
      {
        prop: 'bz',
        width: '',
        label: '币种'
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途'
      },
      {
        prop: 'sfzl',
        width: '',
        label: '是否直联'
      },
      {
        prop: 'zy',
        width: '',
        label: '摘要'
      },
      {
        prop: 'beizhu',
        width: '',
        label: '备注'
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
    
    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
    },
    // 分页
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

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.tableData))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'documentNumber') {
              if (item.documentNumber.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'openApplicant') {
              if (item.openApplicant.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'unitNo') {
              if (item.unitNo.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
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
<style scoped></style>
