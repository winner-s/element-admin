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
    <dialog-com :dialog-obj="dialogObj" @handleStatus="handleStatus"  @handleDelete="handleDelete" />
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
          clbh:'ZJXB20072011405091',
          clmc:'111',
          clzt:'激活',
          clsj:'2020-11-13 16：27：44',
          ldye:'3434',
          jjfszl:'是',
          zqsz:1,
          zxsj:'00:00',
          jjrsfxb:'是'
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
    handleStatus(res){
      let ind = 0;
      this.tableData.forEach((item,index)=>{
        if(item.documentNumber == res.documentNumber){
          ind = index
        }
      })
      console.log(ind)
      
      let fore = this.tableData[ind]
       Object.keys(fore).forEach(item => {
         if(res[item]){
           fore[item] = res[item];
         }
          
        });

      this.tableData[ind] = fore
      this.list[ind] = fore
    },
    handleDelete(row){
        this.dialogObj.show= false
         this.list.splice(this.list.indexOf(row), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length

    },
    tableClick(res){
      console.log(res)
      this.dialogObj.id = res.clbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '详情'
      this.dialogObj.form = JSON.parse(JSON.stringify(res))
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

