<template>
  <div class="foundsCollsection">
    <el-card>
      <div slot="header">
        <span>账户归集关系设置</span>
      </div>  
      <div>
        
      </div>
      <Table
            :table-data="tableData"
            :table-list-data="tableListData"
            :current-data="currentData"
            @onPageChange="onPageChange"
            @onSizeChange="onSizeChange"
            @tableClick="tableClick"
          />
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
  </div>
</template>
<script>
import dialogCom from './dialogCom'
import Table from '@c/common/table'
import data from '../../components/data'
export default {
  name: 'FoundsCollsection',
  components: {
    dialogCom,
    Table
  },
  data() {
    return {
      
       
      // 弹出框
      dialogObj: {
        id: '',
        title: '详情',
        read: false,
        show: false,
        form: {}
      },
      tableData: [],
      tableListData: [],
      list: data.foundsCollsection.tableData,
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0,
      }
      
    }
  },
  created() {
    this.getList()
     //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      
      {
        prop: 'number',
       
        label: '策略编号',
        fixed: 'left'
      },{
        prop: 'name',
        label: '策略名称',
        fixed: 'left'
      }
    ]
    
  },
  methods: {
    tableClick(res){
      console.log(res)
      this.dialogObj.id = res.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '详情'
      this.dialogObj.form = res
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
    
    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = data.foundsCollsection.tableData.length
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>

