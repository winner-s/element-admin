<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>预算周期管理</span>
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
          @handleEditSection="handleEditSection"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com-s :dialog-obj="dialogObjS" @SectionupdateSub="SectionupdateSub" />
    <dialog-com
      :dialog-obj="dialogObj"
      @addSub="addSub"
      @updateSub="updateSub"
    />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
import dialogComS from './dialogComS'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom, dialogComS },
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
      // 弹出框
      dialogObjS: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      list: [
        {
          ystxbh: 1,
          sfgd: 1,
          xsls: '1',
          zqbh: 45807196348,
          zqmc: '汤臣一品十套房',
          sstx: '体系1',
          zqlx: '月',
          zqzt: '停用',
          ysnd: 4,
          childerList: [
            {
              qjbh: '1',
              ksrq: '',
              jsrq: '',
              ggdllmmc: ''
            }
          ]
        },
        {
          ystxbh: 1,
          sfgd: 1,
          xsls: '1',
          zqbh: 45807196388,
          zqmc: '周期测试名称',
          sstx: '体系1',
          zqlx: '月',
          zqzt: '停用',
          ysnd: 4,
          childerList: [
            {
              qjbh: '1',
              ksrq: '',
              jsrq: '',
              ggdllmmc: ''
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
        label: '周期类型:',
        prop: 'unitName',
        placeholder: '请选择周期类型'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'zqbh',
        width: '150',
        label: '周期编号'
      },

      {
        prop: 'zqmc',
        width: '',
        label: '周期名称'
      },
      {
        prop: 'sstx',
        width: '',
        label: '所属体系'
      },
      {
        prop: 'zqlx',
        width: '',
        label: '周期类型'
      },
      {
        prop: 'zqzt',
        width: '',
        label: '周期状态'
      },
      { label: '操作', type: 'btn', width: '' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '编 辑',
        btnType: 'primary',
        handleFn: 'handleEdit'
      },

      {
        name: '启 用',
        btnType: 'primary',
        type: 'isShow',
        isShowStatus: 'zqzt',
        isShowValue: '停用',
        handleFn: 'handleStatus'
      },
      {
        name: '编辑周期区间',
        btnType: 'primary',
        handleFn: 'handleEditSection'
      },
      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete'
      },
      {
        name: '停 用',
        btnType: 'danger',
        type: 'isShow',
        isShowStatus: 'zqzt',
        isShowValue: '启用',
        handleFn: 'handleStatus'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    SectionupdateSub(res) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.zqbh == res.zqbh) {
          ind = index
        }
      })
      console.log(ind)

      const fore = this.tableData[ind]
      Object.keys(res).forEach(item => {
        if (res[item]) {
          fore[item] = res[item]
        }
      })

      this.tableData[ind] = fore
      this.list[ind] = fore
    },
    handleEditSection(row) {
      this.dialogObjS.id = row.zqbh
      this.dialogObjS.read = false
      this.dialogObjS.show = true
      this.dialogObjS.title = '编辑'
      this.dialogObjS.form = JSON.parse(JSON.stringify(row))
    },
    updateSub(res) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.documentNumber === res.documentNumber) {
          ind = index
        }
      })
      console.log(ind)

      const fore = this.tableData[ind]
      Object.keys(res).forEach((item) => {
        fore[item] = res[item]
      })

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
    handleStatus(v) {
      console.log(v)
      if (v.zqzt === '启用') {
        this.$confirm('确定停用?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          v.zqzt = '停用'
        })
      } else {
        this.$confirm('确定启用?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          v.zqzt = '启用'
        })
      }
    },
    handleEdit(row) {
      this.dialogObj.id = row.zqbh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.tableData))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'documentNumber') {
              if (item.documentNumber.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'openApplicant') {
              if (item.openApplicant.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'unitNo') {
              if (item.unitNo.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i === 'unitName') {
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
