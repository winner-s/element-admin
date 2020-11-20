<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>收款人信息维护</span>
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
          @handleSelectionChange="handleSelectionChange"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub" @updateSub="updateSub" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST,FORMSTATUS,FORMSTATUSLIST,CURRENCY,CURRENCYLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      formStatusList:FORMSTATUSLIST,
      currencyList:CURRENCYLIST,
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
      list:[
        {
          
          zhbh: '0813001',
          dwmc:'0813001',
          zhmc: '123',
          khrq: '2020-10-10',
          zhlx: '活期户',
          bz: 1,
          jxksr: '',
          sqdzt: 1,
          bzhu:'二级单位1内部账户',
          xhrq:'2020-10-10'
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
      },
      selectChangeList:[]
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
        type: 'input',
        label: '单位编号:',
        prop: 'dwbh',
        placeholder: '请选择单位编号'
      },
      
      {
        type: 'select',
        label: '申请单状态:',
        prop: 'sqdzt',
        placeholder: '请选择申请单状态',
        selectList:this.formStatusList
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        placeholder: '请选择币种',
        selectList:this.currencyList
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'xjywdw'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      {
        prop: 'zhbh',
        width: '150',
        label: '账号编号',
        type:'a'
      },
      {
        prop: 'dwmc',
        width: '150',
        label: '单位名称'
      },
      {
        prop: 'zhmc',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'khrq',
        width: '',
        label: '开户日期'
      },
      {
        prop: 'xhrq',
        width: '',
        label: '销户日期'
      },
      {
        prop: 'zhlx',
        width: '',
        label: '账户类型'
      },
      {
        prop: 'bz',
        width: '',
        label: '币种',
        type:'wordbook',
        wordbookList:this.currency
      },
      {
        prop: 'jxksr',
        width: '',
        label: '计息开始日'
      },
      {
        prop: 'sqdzt',
        width: '',
        label: '申请单状态',
        type:'wordbook',
        wordbookList:this.formStatus
      },
      {
        prop: 'xhsm',
        width: '',
        label: '销户说明'
      },
      {
        prop: 'bzhu',
        width: '',
        label: '备注'
      },
      { label: '操作', type: 'btn', width: '',fixed:'right' },
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '修 改',
        btnType: 'primary',
        type:'isNoShow',
        isShowStatus:'sqdzt',
        isShowValue:'2',
        handleFn: 'handleEdit',
      },
      {
        name: '删 除',
        btnType: 'danger',
        type:'isNoShow',
        isShowStatus:'sqdzt',
        isShowValue:'2',
        handleFn: 'handleDelete',
      },
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    handleCommit(){
      
      if(this.selectChangeList.length != 0){
        this.selectChangeList.forEach((item,index)=>{
          this.list.forEach((res,index)=>{
            if(res.zhbh==item.zhbh){
              res.sqdzt =2
            }
          })
          
        })
      }else{
        this.$message({
          message: '请选择数据再进行提交操作！',
          type: 'warning'
        });
      }
    },
    handleSelectionChange(res){
      this.selectChangeList = res
    },
    //过滤
    currency(val){
      return CURRENCY[val]
    },
    formStatus(val){
      return FORMSTATUS[val]
    },
    updateSub(res){
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
    addSub(res) {
      console.log(res)
      this.list.push(res)

      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
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
    // 删除产品
    handleDelete(v) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },
    
    handleEdit(row) {
      this.dialogObj.id = row.zhbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑账号'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.zhbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看账号'
      this.dialogObj.form = row
    },

    getList() {
      
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'dwbh') {
              if (item.dwbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'sqdzt') {
              if (item.sqdzt.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'bz') {
              if (item.bz.toString().includes(this.searchData[i])) {
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
      this_.tableData = list
    }
  }
}
</script>
<style scoped></style>
