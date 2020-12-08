<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>内部活期计息</span>
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
          @handInsert="handInsert"
        />

        <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :table-btn="tableBtn"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleViewOther="handleViewOther"
          @handleSelectionChange="handleSelectionChange"
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
      dwbhList: [
        {
          id: '0813',
          value: '0813'
        }
      ],
      zhbhList: [
        {
          value: '0021001',
          id: '0021001',
          zhmc: '二级单位1内部账户'
        },
        {
          value: '0021002',
          id: '0021002',
          zhmc: '二级单位1内部账户'
        }
      ],
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
      list: [
        {
          jx: false,
          dwmc: '二级单位',
          zhbh: '0021001',
          zhmc: '二级单位内部账号',
          ksksr: '2019-12-24',
          ksjsr: '2020-11-19',
          jxts: '331',
          jxye: '78,549,804.8',
          ksrye: '999,999,428.89',
          jsrye: '0.00',
          lljhmc: '活期利率计划',
          lx: '43,000',
          childerList: [
            {
              jxr: '2019-12-24',
              ye: '999,999,428.89',
              ll: '6.00',
              lx: '166,666.57'
            }
          ]
        }
      ],

      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: '',
        documentNumber: ''
      },
      selectChange: []
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
        label: '匡算'
      },

      {
        prop: 'commit',
        type: 'primary',
        label: '结息'
      },
      {
        prop: 'insert',
        type: 'primary',
        label: '取消结息'
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
        type: 'select',
        label: '单位编号:',
        prop: 'dwbh',
        placeholder: '请选择单位编号',
        selectList: this.dwbhList
      },
      // {
      //   type: 'input',
      //   label: '单位名称:',
      //   prop: 'openApplicant',
      //   placeholder: '请填写单位名称'
      // },
      {
        type: 'select',
        label: '账户编号:',
        prop: 'zhbh',
        placeholder: '请选择账户编号',
        selectList: this.zhbhList
      },
      // {
      //   type: 'select',
      //   label: '账户名称:',
      //   prop: 'openApplicant',
      //   placeholder: '请选择账户名称'
      // },
      {
        type: 'time',
        label: '匡算结束日期:',
        prop: 'ksjsrq',
        placeholder: '请选择匡算结束日期'
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'openApplicant'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      {
        prop: 'dwmc',
        width: '150',
        label: '单位名称'
      },
      {
        prop: 'zhbh',
        width: '150',
        label: '账户编号'
      },
      {
        prop: 'zhmc',
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'ksksr',
        width: '150',
        label: '匡算开始日'
      },
      {
        prop: 'ksjsr',
        width: '150',
        label: '匡算结束日'
      },
      {
        prop: 'jxts',
        width: '150',
        label: '计息天数'
      },
      {
        prop: 'jxye',
        width: '150',
        label: '计息余额(元)'
      },
      {
        prop: 'ksrye',
        width: '150',
        label: '开始日余额(元)'
      },
      {
        prop: 'jsrye',
        width: '150',
        label: '结束日余额(元)'
      },
      {
        prop: 'lljhmc',
        width: '150',
        label: '利率计划名称'
      },
      {
        prop: 'lx',
        width: '150',
        type: 'a',
        label: '利息(元)'
      }
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
    // table 复选框
    handleSelectionChange(res) {
      this.selectChange = res
    },
    // 取消结息
    handleInsert() {
      this.selectChange.forEach((item, index) => {
        this.list.forEach((res, index) => {
          if (res.zhbh === item.zhbh) {
            if (res.jx === false) {
              this.$confirm('编号：' + res.zhbh + '没有结息记录，无法取消结息', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              })
            } else {
              res.jx = false
              this.$confirm('编号：' + res.zhbh + '取消结息成功', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              })
            }
          }
        })
      })
    },
    // 点击结息
    handleCommit() {
      this.selectChange.forEach((item, index) => {
        this.list.forEach((res, index) => {
          if (res.zhbh === item.zhbh) {
            if (res.jx === true) {
              this.$confirm('编号：' + res.zhbh + '在该期限内已结息', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              })
            } else {
              res.jx = true
              this.$confirm('编号：' + res.zhbh + '结息成功', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                type: 'warning'
              })
            }
          }
        })
      })

      console.log(this.list)
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
      this.currentData.currentPage = val
      this.getList()
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },

    handleViewOther(row) {
      this.dialogObj.id = row.zhbh
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
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'dwbh') {
              if (item.dwbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'zhbh') {
              if (item.zhbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'ksjsrq') {
              if (item.ksjsrq.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }
          } else {
            continue
          }
        }
        if (bool === true) {
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
