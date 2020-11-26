<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>开户申请</span>
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
          @handleCommit='handleCommit'
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
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub"  @updateSub="updateSub"/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { DJZT,DJZTLIST, CURRENCY,CURRENCYLIST,  UNITNO, UNITNOLIST,BACK,BACKLIST, DIRECT,DIRECTLIST,ACCOUNTUSAGE,ACCOUNTUSAGELIST} from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      djztList:DJZTLIST,
      currencyList:CURRENCYLIST,
      accountUsageList:ACCOUNTUSAGELIST,
      directList:DIRECTLIST,
      backList:BACKLIST,
      showAll: false,
      unitNoList: UNITNOLIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      tableListData:[],
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {},
      },
      list: [
        {
         
          documentNumber: 'KH201124150454455',
          openTime:'2020-11-02',
          khrq:'2020-11-01',
          sqr:'admin',
          accountPhone: '999888000',
          accountName:"aaa",
          unitName: 1324,
          openApplicant:'admin',
          bankName: 1,
          bankOpenName: '11111',
          zhyt:2,
          sfzl:1,
          currency:1,
          status: 1,
          khhss:"1111",
          khrq:'2020-09-09',

        },
        {
         
          documentNumber: 'KH20112315560278',
          openTime:'2020-11-02',
          khrq:'2020-11-01',
          sqr:'admin',
          accountPhone: '999888000',
          accountName:"aaa",
          unitName: 1324,
          openApplicant:'admin',
          bankName: 1,
          bankOpenName: '11111',
          zhyt:2,
          sfzl:1,
          currency:1,
          status: 1,
          khhss:"1111"
        },
        {
         
          documentNumber: 'KH20112309552410',
          openTime:'2020-11-02',
          khrq:'2020-11-01',
          sqr:'admin',
          accountPhone: '999888000',
          accountName:"aaa",
          unitName: 1324,
          openApplicant:'admin',
          bankName: 1,
          bankOpenName: '11111',
          zhyt:2,
          sfzl:1,
          currency:1,
          status: 1,
          khhss:"1111"
        },
        {
         
          documentNumber: 'KH20112415042159',
          openTime:'2020-11-02',
          khrq:'2020-11-01',
          sqr:'admin',
          accountPhone: '999888000',
          accountName:"aaa",
          unitName: 1324,
          openApplicant:'admin',
          bankName: 1,
          bankOpenName: '11111',
          zhyt:2,
          sfzl:1,
          currency:1,
          status: 1,
          khhss:"1111"
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
      selectChange:[]
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
        label: '查询',
      },
      
      {
        prop: 'reset',
        type: '',
        label: '重置',
      },
    ]
    // 搜索
    this.searchItem = [
      {
        type: 'input',
        label: '单据编号:',
        prop: 'documentNumber',
        placeholder: '请填写单据编号',
      },
      {
        type: 'input',
        label: '开户申请人:',
        prop: 'openApplicant',
        placeholder: '请填写开户申请人',
      },
      {
        type: 'select',
        label: '单位编号:',
        prop: 'unitNo',
        placeholder: '请填写单位编号',
        selectList: this.unitNoList,
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'unitName',
        placeholder: '请填写单位名称',
      },
      {
        type: 'select',
        label: '银行名称:',
        prop: 'bankName',
        selectList:this.backList,
        placeholder: '请填写银行名称',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '开户行名称:',
        prop: 'bankOpenName',
        placeholder: '请填写开户行名称',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '开户申请日期 从:',
        prop: 'accountOpenTimeStart',
        placeholder: '请填写开户申请日期',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '开户申请日期 到:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写开户申请日期',
        show: this.showAll,
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'bz',
        placeholder: '请填写币种',
        selectList:this.currencyList,
        show: this.showAll,
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'contain',
        show: this.showAll,
      },
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'documentNumber',
        width: '150',
        type: 'a',
        label: '单据编号',
        fixed: 'left',
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '账户号码',
        fixed: 'left',
      },
      {
        prop: 'accountName',
        width: '',
        label: '账户名称',
      },
      {
        prop: 'bankName',
        width: '',
        label: '银行名称',
        type:'wordbook',
        wordbookList:this.back
      },
      {
        prop: 'bankOpenName',
        width: '',
        label: '开户行名称',
      },
      {
        prop: 'status',
        width: '',
        label: '单据状态',
        type:'wordbook',
        wordbookList:this.djzt
      },
      {
        prop: 'sfzl',
        width: '',
        label: '是否直联',
        type:'wordbook',
        wordbookList:this.direct
      },
      {
        prop: 'currency',
        width: '',
        label: '币种',
        type:'wordbook',
        wordbookList:this.currency
      },
      {
        prop: 'unitName',
        width: '',
        label: '单位名称',
        type:'wordbook',
        wordbookList:this.unitno
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途',
        type:'wordbook',
        wordbookList:this.accountUsage
      },
      {
        prop: 'openTime',
        width: '',
        label: '开户申请日期',
      },
      {
        prop: 'khrq',
        width: '',
        label: '开户日期',
      },
      {
        prop: 'sqr',
        width: '',
        label: '申请人',
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' },
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '补 录',
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
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    handleCommit(){
      if(this.selectChange.length != 0){
        this.selectChange.forEach((item,index)=>{
          this.list.forEach((res,index)=>{
            if(res.documentNumber==item.documentNumber){
              res.status =2
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
      this.selectChange = res
    },
    //过滤
    djzt(val){
      return DJZT[val]
    },
    unitno(val){
      return UNITNO[val]
    },
    currency(val){
      return CURRENCY[val]
    },
    accountUsage(val){
      return ACCOUNTUSAGE[val]
    },
    direct(val){
      return DIRECT[val]
    },
    back(val){
      return BACK[val]
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
    

    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
    },
    // 分页
    onPageChange(val) {
      console.log(val)
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
        console.log()
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },

    handleEdit(row) {
      
      this.dialogObj.id = row.documentNumber
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '修改'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
     
      this.dialogObj.id = row.documentNumber
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
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
              if (item.unitName.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'bankName') {
              if (item.bankName.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'bankOpenName') {
              if (item.bankOpenName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'accountOpenTimeStart') {
              if (Date.parse(item.openTime)>=Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'accountOpenTimeEnd') {
              if (Date.parse(item.openTime)<=Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'bz') {
              if (item.currency.toString().includes(this.searchData[i])) {
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
    },
  },
}
</script>
<style scoped></style>
