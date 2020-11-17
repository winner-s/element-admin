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
      list: [
        {
          clbh:'ZJGJ20072011081832',
          clmc:'11',
          clms:'资金上划',
          sjdwbh:'002',
          sjdwmc:'二级单位1',
          sjyhzh:'2222334455667700',
          sjzhmc:'二级单位1CNY直联账户1',
          childerList:[
            {
              dwmc:'二级单位1',
              yhzh:'11111111111111111111',
              zhmc:'二级单位1CNY直联账户1',
              yhlx:'中国银行',
              zhye:'0.00',
              gjje:'0.00'
            }
          ]
        }
      ],
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
        prop: 'clbh',
       
        label: '策略编号',
        fixed: 'left'
      },{
        prop: 'clmc',
        label: '策略名称',
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
.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>

