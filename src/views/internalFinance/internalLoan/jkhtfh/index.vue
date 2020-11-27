<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>借款合同复核</span>
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
    <dialog-com
      :dialog-obj="dialogObj"
      @addSub="addSub"
      @updateSub="updateSub"
    />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {
  DJZTLIST,
  DJZT,
  HTZTLIST,
  HTZT,
  CURRENCY,
  CURRENCYLIST,
} from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      djztList: DJZTLIST,
      htztList: HTZTLIST,
      currencyList: CURRENCYLIST,
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {},
      },
      showAll: false,
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
          childerList: [
            
          ],
          htbh: 'JK1282358',
          htmc: '123',
          dklx: 1,
          zqr: '二级单位',
          zwr: '二级单位',
          dkbz: 1,
          dkqx: 1,
          ksrq: '2020-11-11',
          jsrq: '2020-11-30',
          jkje: '1',
          jedx: '1',
          llzhts: 1,
          jxfs: 1,
          fxfs: 1,
          htqdll: '2.0',
          hbfs: 1,
          bz: '',
          htzt: 1,
          djzt: 3,
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
        prop: 'insert',
        type: 'primary',
        label: '新增',
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
        label: '单据状态:',
        prop: 'djzt',
        selectList: this.djztList,
        placeholder: '请选择单据状态',
      },

      {
        type: 'select',
        label: '债权人:',
        prop: 'zrq',
        placeholder: '请选择债权人',
      },
      {
        type: 'select',
        label: '债务人:',
        prop: 'zwr',
        placeholder: '请选择债务人',
      },
      {
        type: 'input',
        label: '借款金额 由:',
        prop: 'jkjey',
        placeholder: '请输入贷款金额',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '到:',
        prop: 'jkjed',
        show: this.showAll,
      },
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'htbh',
        width: '',
        type:'a',
        label: '合同编号',
      },
      {
        prop: 'htmc',
        width: '',
        label: '合同名称',
      },

      {
        prop: 'zqr',
        width: '',
        label: '债权人 ',
      },

      {
        prop: 'zwr',
        width: '',
        label: '债务人',
      },
      {
        prop: 'dkbz',
        width: '',
        label: '贷款币种',
        type: 'wordbook',
        wordbookList: this.currency,
      },
      {
        prop: 'jkje',
        width: '',
        label: '借款金额 ',
      },
      {
        prop: 'htqdll',
        width: '',
        label: '合同签订利率',
      },
      {
        prop: 'ksrq',
        width: '',
        label: '开始日期',
      },
      {
        prop: 'jsrq',
        width: '',
        label: '结束日期',
      },
      {
        prop: 'htzt',
        width: '',
        label: '合同状态',
        type: 'wordbook',
        wordbookList: this.htzt,
      },
      {
        prop: 'djzt',
        width: '',
        label: '单据状态',
        type: 'wordbook',
        wordbookList: this.djzt,
      },
      
    ]
    // 按钮
    this.tableBtn = [
      
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    updateSub(res) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.documentNumber == res.documentNumber) {
          ind = index
        }
      })
      console.log(ind)

      let fore = this.tableData[ind]
      Object.keys(fore).forEach((item) => {
        if (res[item]) {
          fore[item] = res[item]
        }
      })

      this.tableData[ind] = fore
      this.list[ind] = fore
    },
    addSub(res) {
      this.list.push(res)

      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
    },
    //过滤
    currency(val) {
      return CURRENCY[val]
    },
    htzt(val) {
      return HTZT[val]
    },
    djzt(val) {
      return DJZT[val]
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
      this.dialogObj.id = row.htbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.htbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'htbh') {
              if (item.htbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'djzt') {
              if (item.djzt.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zrq') {
              if (item.zrq.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zwr') {
              if (item.zwr.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'jkjey') {
              if (item.dkje >= this.searchData[i]) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'jkjed') {
              if (item.dkje <= this.searchData[i]) {
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
