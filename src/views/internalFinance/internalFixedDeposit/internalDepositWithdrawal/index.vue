<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>内部存款支取</span>
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
      // 顶部按钮
      searchBto: [],
      list: [
        {
          ckkllsh: '132',
          ckll: '4.00',
          ckqx: 1,
          klrq: '2020-10-10',
          ckje: '200',
          ckye: '200',
          ckdwbh: '123',
          ckdwmc: '单位名称',
          nbzh: '123',
          nbzhye: '200',
          nbzhmc: '不知道',
          dqxcfs: 1,
          llzhts: 1,
          bz: '',
          ckzqlsh: '99988877',
          zqje: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
          bzer: ''
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
    for (var i = 3; i < 15; i++) {
      this.list.push({
        ckkllsh: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        ckll: '4.00',
        ckqx: Math.round(Math.random() * (10 - 1) + 1),
        klrq: '2020-10-10',
        ckje: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        ckye: Math.round(Math.random() * (99988 - 10000) + 10000),
        ckdwbh: '123',
        ckdwmc: '单位名称',
        nbzh: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        nbzhye: '200',
        nbzhmc: '不知道',
        dqxcfs: 1,
        llzhts: 1,
        bz: '',
        ckzqlsh: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        zqje: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        zqrq: '',
        bzer: ''
      })
    }
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
        prop: 'insert',
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
        label: '存款支取流水号:',
        prop: 'ckzqlsh',
        placeholder: '存款支取流水号'
      },
      {
        type: 'input',
        label: '存款开立流水号:',
        prop: 'ckkllsh',
        placeholder: '请填写存款开立流水号'
      },

      {
        type: 'select',
        label: '存款单位编号:',
        prop: 'ckdwbh',
        placeholder: '请选择存款单位编号'
      },

      {
        type: 'time',
        label: '存款支取日期 从:',
        prop: 'ckzqrqks',
        placeholder: '请选择存款支取日期',
        show: this.showAll
      },
      {
        type: 'time',
        label: '到:',
        prop: 'ckzqrqjs',
        placeholder: '请选择存款开立日期',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'ckzqlsh',
        width: '150',
        type: 'a',
        label: '存款支取流水号'
      },
      {
        prop: 'ckkllsh',
        width: '150',
        label: '存款开立流水号'
      },

      {
        prop: 'ckdwmc',
        width: '150',
        label: '存款单位名称'
      },

      {
        prop: 'nbzh',
        width: '150',
        label: '内部账号 '
      },
      {
        prop: 'ckqx',
        width: '150',
        label: '存款期限'
      },
      {
        prop: 'ckje',
        width: '150',
        label: '存款金额'
      },
      {
        prop: 'zqje',
        width: '150',
        label: '支取金额'
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
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete'
      }
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
        if (item.documentNumber === res.documentNumber) {
          ind = index
        }
      })
      console.log(ind)

      const fore = this.tableData[ind]
      Object.keys(fore).forEach(item => {
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
        type: 'warning'
      }).then(() => {
        console.log()
        this.list.splice(this.list.indexOf(v), 1)
        this.tableData = this.list
        this.currentData.total = this.list.length
      })
    },

    handleEdit(row) {
      this.dialogObj.id = row.ckzqlsh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.ckzqlsh
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
            if (i === 'ckzqlsh') {
              if (item.ckzqlsh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'ckkllsh') {
              if (item.ckkllsh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'ckdwbh') {
              if (item.ckdwbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'ckzqrqks') {
              if (Date.parse(item.ckzqrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'ckzqrqjs') {
              if (Date.parse(item.ckzqrq) <= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
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
