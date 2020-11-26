<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>借款还款计划</span>
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
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {},
      },
      showAll: false,
      unitNoList: UNITNOLIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      // 顶部按钮
      searchBto: [],
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
          
          fkdbh: 'FH20082615093831',
          htbh: 'DK84602971829345',
          dkdw: '二级单位1',
          fkje: '100.00',
          fkr: '2020-06-07',
          dqr: '2020-06-10',
          jhhbe: '0.00',
          jhhxje:'0.00',
          sjhbje:'0.00',
          sjhxje:'0.00'
        },
      ],
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: '',
        documentNumber: '',
      },
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
        label: '合同编号:',
        prop: 'htbh',
        placeholder: '请填写合同编号',
      },
      {
        type: 'select',
        label: '金额(元) 从:',
        prop: 'jec',
        placeholder: '请选择金额状态',
      },

      {
        type: 'select',
        label: '到:',
        prop: 'jed',
        placeholder: '请选择金额',
      },
      {
        type: 'time',
        label: '放款日期从:',
        prop: 'fkrqc',
        placeholder: '请选择还款日期',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '到:',
        prop: 'fkrqd',
        placeholder: '请填写放款日期',
        show: this.showAll,
      },
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'fkdbh',
        width: '150',
        type:'a',
        label: '放款单编号',
      },
      {
        prop: 'htbh',
        width: '150',
        label: '合同编号',
      },

      {
        prop: 'dkdw',
        width: '',
        label: '贷款单位 ',
      },

      {
        prop: 'fkje',
        width: '',
        label: '放款金额',
      },
      {
        prop: 'fkr',
        width: '',
        label: '放款日',
      },
      {
        prop: 'dqr',
        width: '',
        label: '到期日 ',
      },
      {
        prop: 'jhhbje',
        width: '',
        label: '计划还本金额',
      },
      {
        prop: 'jhhxje',
        width: '',
        label: '计划还息金额',
      },
      {
        prop: 'sjhbje',
        width: '',
        label: '实际还本金额',
      },
      {
        prop: 'sjhxje',
        width: '',
        label: '实际还息金额',
      },
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
    handleDelete(v) {},
    handleStatus(v) {},
    handleEdit(row) {},
    handleViewOther(row) {},

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
    },
  },
}
</script>
<style scoped></style>
