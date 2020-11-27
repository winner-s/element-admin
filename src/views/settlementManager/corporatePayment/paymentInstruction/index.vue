<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>对公付款指令发送</span>
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
          djbh:'5840367419082358',
          zlcjsj:'2020-11-01',
          zlzt:'已发送',
          ffzh:'4259315714566',
          ffhm:'张三',
          fkfyh:'中国银行',
          je:'100',
          sfzh:'94247891275',
          sfhm:'李四',
          yhfhxx:'nice'
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
        label: '复核'
      },
      {
        prop: 'commit',
        type: 'primary',
        label: '拒绝'
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
        label: '单据编号:',
        prop: 'documentNumber',
        placeholder: '请填写单据编号'
      },
      {
        type: 'select',
        label: '指令状态:',
        prop: 'openApplicant',
        placeholder: '请选择指令状态'
      },
      {
        type: 'input',
        label: '指令创建时间 从:',
        prop: 'unitNo',
        placeholder: '请填写指令创建时间',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '到:',
        prop: 'unitName',
        placeholder: '请填写指令创建时间'
      },

      {
        type: 'input',
        label: '付方账号:',
        prop: 'bankOpenName',
        placeholder: '请填写付方账号',
        show: this.showAll
      },
      {
        type: 'input',
        label: '收方账号:',
        prop: 'accountOpenTimeStart',
        placeholder: '请填写收方账号',
        show: this.showAll
      },
      {
        type: 'input',
        label: '收方户名:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写收方户名',
        show: this.showAll
      },
      {
        type: 'input',
        label: '金额(元) 从:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写金额(元)',
        show: this.showAll
      },
      {
        type: 'select',
        label: '到:',
        prop: 'start',
        placeholder: '请填写金额(元)',
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
      {
        prop: 'djbh',
        width: '150',
        label: '单据编号',
        fixed: 'left'
      },
      {
        prop: 'zlcjsj',
        width: '150',
        label: '指令创建时间',
        fixed: 'left'
      },
      {
        prop: 'zlzt',
        width: '',
        label: '指令状态'
      },
      {
        prop: 'ffzh',
        width: '',
        label: '付方账号'
      },
      {
        prop: 'ffhm',
        width: '',
        label: '付方户名'
      },
      {
        prop: 'fkfyh',
        width: '',
        label: '付款方银行'
      },
      {
        prop: 'je',
        width: '',
        label: '金额(元)'
      },
      {
        prop: 'sfzh',
        width: '',
        label: '收方账号'
      },
      {
        prop: 'sfhm',
        width: '',
        label: '收方户名'
      },
      {
        prop: 'yhfhxx',
        width: '',
        label: '银行返回信息'
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
      this.tableDataTwo.forEach((item, index) => {
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
