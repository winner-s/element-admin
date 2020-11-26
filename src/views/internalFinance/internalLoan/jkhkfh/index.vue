<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>借款还款处理</span>
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
          @handleSelectionChange="handleSelectionChange"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleEdit="handleEdit"
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
import { DJZT, DJZTLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table,dialogCom },
  data() {
    // 这里存放数据
    return {
      djztList: DJZTLIST,
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
          clzt: 1,
          dqr: '2020-06-30',
          dxje: '200.00',
          fkdbh: 'FK2000000000',
          fkdye: '200.00',
          fkr: '2020-06-01',
          fxfs: 1,
          fxje: '0.31',
          hbfs: 1,
          hbje: '',
          hkdbh: 'HK2020118097777',
          hklx: 1,
          hknbzh: '0021001',
          hkrq: '2020-01-01',
          htzxll: '5.000',
          jkhtbh: 'DK2000000000',
          lllx: 1,
          yhbj: '',
          yhlx: '0.31',
          zhmc: '二级单位1内部账号',
          zwrmc: '二级单位1',
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
      selectChange: [],
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
        prop: 'commit',
        type: 'primary',
        label: '复核',
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
        label: '还款单编号:',
        prop: 'hkdbh',
        placeholder: '请填写还款单号',
      },
      {
        type: 'select',
        label: '债务人名称:',
        prop: 'zwrmc',
        placeholder: '请选择债务人名称',
      },
      {
        type: 'time',
        label: '还款日期从:',
        prop: 'hkrqc',
        placeholder: '请选择还款日期',
        show: this.showAll,
      },
      {
        type: 'input',
        label: '到:',
        prop: 'hkrqd',
        placeholder: '请填写还款日期',
        show: this.showAll,
      },
      {
        type: 'select',
        label: '处理状态:',
        prop: 'clzt',
        selectList: this.djztList,
        placeholder: '请选择处理状态',
        show: this.showAll,
      },
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'hkdbh',
        width: '',
        type:'a',
        label: '还款单编号',
      },
      {
        prop: 'zwrmc',
        width: '',
        label: '债务人名称',
      },

      {
        prop: 'fkdbh',
        width: '',
        label: '放款单编号 ',
      },

      {
        prop: 'jkhtbh',
        width: '',
        label: '合同号',
      },
      {
        prop: 'hkrq',
        width: '',
        label: '还款日期',
      },
      {
        prop: 'hbje',
        width: '',
        label: '还本金额 ',
      },
      {
        prop: 'fxje',
        width: '',
        label: '付息金额',
      },
      {
        prop: 'clzt',
        width: '',
        label: '处理状态',
        type: 'wordbook',
        wordbookList: this.djzt,
      },
      { label: '操作', type: 'btn', width: '', fixed: 'right' },
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '复 核',
        btnType: 'primary',
        type:'isNoShow',
        isShowValue:'3',
        isShowStatus:'clzt',
        handleFn: 'handleEdit',
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    handleCommit() {
      if (this.selectChange.length != 0) {
        this.selectChange.forEach((item, index) => {
          this.list.forEach((res, index) => {
            if (res.hkdh == item.hkdh) {
              res.clzt = 3
            }
          })
        })
      } else {
        this.$message({
          message: '请选择数据再进行提交操作！',
          type: 'warning',
        })
      }
    },
    handleSelectionChange(res) {
      this.selectChange = res
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
    add() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '添加账号'
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
      this.$confirm('确定通过嘛?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
       row.clzt=3
      })
    },
    handleViewOther(row) {
      this.dialogObj.id = row.hkdbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看账号'
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
            if (i == 'hkdh') {
              if (item.hkdh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zwr') {
              if (item.zwr.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'hkrqc') {
              if (Date.parse(item.hkrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'hkrqd') {
              if (Date.parse(item.hkrq) <= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'clzt') {
              if (item.clzt.toString().includes(this.searchData[i])) {
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
