<template>
  <div class="foundsCollsection">
    <el-card>
      <div slot="header">
        <span>账户归集关系设置</span>
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
import dialogCom from './dialogComs'
import Table from '@c/common/table'
import data from '../../components/data'
export default {
  name: 'FoundsCollsection',
  components: {
    dialogCom,
    Table,
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
      
      list: [
        {
          clbh:'ZJGJ20071409140668',
          clmc:'111',
          clzt:'停止',
          clsj:'2020-11-06 15:59:36',
          gjfs:1,
          gjbl:'1.0000',
          jjfszl:1,
          zxsj:'00:00',
          zqsz:1,
          sfgj:1
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
      { width: '50', label: '', type: 'index', fixed: 'left' },
      
      {
        prop: 'clbh',
        label: '策略编号',
        fixed: 'left'
      },{
        prop: 'clmc',
        label: '策略名称',
        fixed: 'left'
      },{
        prop: 'clzt',
        label: '策略状态',
        fixed: 'left'
      },{
        prop: 'clsj',
        label: '激活/停止策略时间',
        fixed: 'left'
      }
      
    ]
  },
  methods: {
    tableClick(res){
      console.log(res)
      this.dialogObj.id = res.clbh
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
      this.currentData.total = this.list.length
    },
  },
}
</script>

<style lang="scss" scoped>
.searchFloat {
  position: relative;
  left: 30%;
}
</style>

