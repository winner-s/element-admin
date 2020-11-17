<template>
  <div class="accountRelation">
    <el-card>
      <div slot="header">
        <span>账户下拨关系设置</span>
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
          @handleInsert="handleInsert"
        />
        <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :tableBtn="tableBtn"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleEdit="handleEdit"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
import data from '../../components/data'
import dialogCom from './dialogCom'
export default {
  name: 'AccountRelation',
  components: {
    Search,
    Table,
    dialogCom,
  },
  data() {
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {},
      },
      searchItem: data.accountRelation.searchFrom,
      searchData: {
        nickname: '',
      },
      searchBto: data.accountRelation.searchBto,
      showAll: false,
      tableData: [],
      tableListData: [],
      list: [
        {
          clbh:'ZJXB20111315565225',
          clmc:'2222222222',
          clms:'资金下拨',
          sjdwbh:'001',
          sjdwmc:'顶级单位',
          sjyhzh:'202010101148',
          sjzhmc:'ZJ测试单位001',
          childerList:[
            {
              dwmc:'顶级单位',
              yhzh:'8141297854641',
              zhmc:'ABCD',
              khhmc:'中国银行兴国支行',
              zhzt:'正常',
              zhyt:'基本存款户-收支户'
            }
          ]
        }
      ],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0,
      },
    }
  },
  created() {
    this.getList()
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      
      {
        prop: 'clbh',
        width: '',
        label: '策略编号',
      },
      {
        prop: 'clmc',
        width: '',
        label: '策略名称',
      },
      {
        prop: 'clms',
        width: '',
        label: '策略模式',
      },
      { label: '操作', type: 'btn', width: '', fixed: 'right' },
    ]
    this.tableBtn = [
      {
        name: '修 改',
        btnType: 'primary',
        handleFn: 'handleEdit',
      },
      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete',
      },
    ]
  },
  methods: {
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
      console.log(val)
      this.searchData = val
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
    handleEdit(row) {
      this.dialogObj.id = row.clbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑账号'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看账号'
      this.dialogObj.form = row
    },
    
    handleDelete(v) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        console.log()
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },
    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
    },
  },
}
</script>
