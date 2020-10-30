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
    <dialog-com :dialog-obj="dialogObj" />
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
      showAll: false,
      unitNoList: UNITNOLIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
     
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },

      // 表格
      tableData: [
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '999888000',
          accountName: '阿里巴巴88',
          bankName: '中国人民银行营业处',
          bankOpenName: '',
          status: '通过',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20071016590269',
          accountPhone: '20111006',
          accountName: '测试非直连支付确认',
          bankName: '中国工商银行',
          bankOpenName: '北京分行',
          status: '已确认',
          connection: '非直联'
        },
        {
          bto: false,
          documentNumber: 'KH20081316150311',
          accountPhone: '12311',
          accountName: '123131',
          bankName: '中国人民银行营业处',
          bankOpenName: '1231',
          status: '复核拒绝',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          bankOpenName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          bankOpenName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        }
      ],
      tableBtn: [],
       // 顶部按钮
      searchBto: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
       
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},

  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
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
        label: '单据编号:',
        prop: 'documentNumber',
        placeholder: '请填写单据编号'
      },
      {
        type: 'input',
        label: '开户申请人:',
        prop: 'openApplicant',
        placeholder: '请填写开户申请人'
      },
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
        placeholder: '请填写银行名称',
        show: this.showAll
      },
      {
        type: 'input',
        label: '开户行名称:',
        prop: 'bankOpenName',
        placeholder: '请填写开户行名称',
        show: this.showAll
      },
      {
        type: 'input',
        label: '开户申请日期 从:',
        prop: 'accountOpenTimeStart',
        placeholder: '请填写开户申请日期',
        show: this.showAll
      },
      {
        type: 'input',
        label: '开户申请日期 到:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写开户申请日期',
        show: this.showAll
      },
      {
        type: 'select',
        label: '单据状态:',
        prop: 'start',
        placeholder: '请填写银行名称',
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
        prop: 'documentNumber',
        width: '150',
        label: '单据编号',
        fixed: 'left'
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '账户号码',
        fixed: 'left'
      },
      {
        prop: 'accountName',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'bankName',
        width: '',
        label: '银行名称'
      },
      {
        prop: 'bankOpenName',
        width: '',
        label: '开户行名称'
      },
      {
        prop: 'status',
        width: '',
        label: '单据状态'
      },
      {
        prop: 'connection',
        width: '',
        label: '是否直联'
      },
      {
        prop: 'currency',
        width: '',
        label: '币种'
      },
      {
        prop: 'unitName',
        width: '',
        label: '单位名称'
      },
      {
        prop: 'connection',
        width: '',
        label: '账户用途'
      },
      {
        prop: 'connection',
        width: '',
        label: '开户申请日期'
      },
      {
        prop: 'connection',
        width: '',
        label: '开户日期'
      },
      {
        prop: 'connection',
        width: '',
        label: '申请人'
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: "编 辑",
        btnType: "primary",
        handleFn: "handleEdit"
      },
      {
        name: "删 除",
        btnType: "danger",
        handleFn: "handleDelete"
      }
    ]
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
      this.currentData.currentPage = val
      this.getList()
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },
    // 删除产品
    handleDelete(v) {

    },
    handleStatus(v) {
      if (v.status == 0) {

      } else {

      }
    },
    handleEdit(row) {

    },
    handleViewOther(row) {

    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.tableData))
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
