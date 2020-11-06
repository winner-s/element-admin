<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>预算体系设置</span>
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
          @handleSelect='handleSelect'
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj"  @addSub="addSub" @updateSub="updateSub"/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {}
      },
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
          ysnd:'2017',
          bbh:'7842913',
          ystx:'2020',
          zqmc:'test周期名称',
          ksrq:'2020-11-01',
          jsrq:'2020-11-31',
          bzr:'admin',
          bbzt:'保存'
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
        label: '新增'
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
        label: '体系名称:',
        prop: 'unitNo',
        placeholder: '请填写体系名称',
        selectList: this.unitNoList
      },
      {
        type: 'select',
        label: '周期名称:',
        prop: 'unitName',
        placeholder: '请选择周期名称'
      },
      {
        type: 'select',
        label: '预算年度:',
        prop: 'unitName',
        placeholder: '请选择预算年度'
      },
      {
        type: 'select',
        label: '状态:',
        prop: 'unitName',
        placeholder: '请选择状态'
      },
      {
        type: 'time',
        label: '预算开始日期:',
        prop: 'unitName',
        placeholder: '请选择预算开始日期'
      },
      {
        type: 'time',
        label: '预算结束日期:',
        prop: 'unitName',
        placeholder: '请选择预算结束日期'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      
      {
        prop: 'bbh',
        width: '150',
        label: '版本号'
      },

      {
        prop: 'ystx',
        width: '',
        label: '预算体系'
      },
      {
        prop: 'zqmc',
        width: '',
        label: '周期名称'
      },
      {
        prop: 'ksrq',
        width: '',
        label: '开始日期'
      },
      {
        prop: 'jsrq',
        width: '',
        label: '结束日期'
      },
      {
        prop: 'bzr',
        width: '',
        label: '编制人'
      },
      {
        prop: 'bbzt',
        width: '',
        label: '版本状态'
      },
      { label: '操作', type: 'btn', width: '200',fixed:'right' },
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '修 改',
        btnType: 'primary',
        handleFn: 'handleEdit',
      },
      {
        name: '查看',
        btnType: 'primary',
        handleFn: 'handleSelect',
      },
       {
         name: '提 交',
        btnType: 'primary',
        handleFn: 'handleConfirm',
      },
      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete',
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    updateSub(res){
      let ind = 0;
      this.tableData.forEach((item,index)=>{
        if(item.bbh == res.bbh){
          ind = index
        }
      })
      console.log(ind)
      
      let fore = this.tableData[ind]
       Object.keys(fore).forEach(item => {
          fore[item] = res[item];
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
        type: 'warning'
      }).then(() => {
        console.log()
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },
    
    handleEdit(row) {
      this.dialogObj.id = row.bbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleSelect(row){
       this.dialogObj.id = row.bbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
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
