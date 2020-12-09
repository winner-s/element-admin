<template>
  <div class="collsectionTask">
    <el-card>
      <div slot="header">
        <span>自动归集任务管理</span>
      </div>
      <div>
        <Search
          :search-data="searchData"
          :search-item="searchItem"
          :search-bto="searchBto"
          :show-all="showAll"
          @getDataList="getDataList"
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
          @handleStatus="handleStatus"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
import data from '../../components/data'
export default {
  name: 'CollsectionTask',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: data.collsectionTask.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.collsectionTask.searchBto,
      showAll: false,
      tableData: [],
      tableListData: [],
      list: [
        {
          id: 1,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '激活',
          status: '未运行'
        },
        {
          id: 2,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '激活',
          status: '未运行'
        },
        {
          id: 3,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '激活',
          status: '未运行'
        },
        {
          id: 4,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '停止',
          status: '未运行'
        },
        {
          id: 5,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '激活',
          status: '未运行'
        },
        {
          id: 6,
          number: 'ZJGJ20072011081832',
          name: '412',
          pattern: '0 00 00 ** ?',
          time: '2020-09-28 14:10:27',
          taskStatus: '停止',
          status: '未运行'
        }
      ],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'number',
        width: '150',
        label: '策略编号'
      },
      {
        prop: 'name',
        width: '150',
        label: '策略名称'
      },
      {
        prop: 'pattern',
        width: '150',
        label: '执行模式'
      },
      {
        prop: 'time',
        width: '150',
        label: '激活/停止策略时间'
      },
      {
        prop: 'taskStatus',
        width: '150',
        label: '任务状态'
      },
      {
        prop: 'status',
        width: '150',
        label: '运行状态'
      },
      { label: '操作', type: 'btn', width: '150', fixed: 'right' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '激 活',
        btnType: 'primary',
        type: 'isShow',
        isShowStatus: 'taskStatus',
        isShowValue: '停止',
        handleFn: 'handleStatus'
      },
      {
        name: '停 止',
        btnType: 'danger',
        type: 'isShow',
        isShowStatus: 'taskStatus',
        isShowValue: '激活',
        handleFn: 'handleStatus'
      }
    ]
  },
  methods: {
    handleStatus(v) {
      if (v.taskStatus === '停止') {
        this.$confirm('确定停止?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          v.taskStatus = '激活'
        })
      } else if (v.taskStatus === '激活') {
        this.$confirm('确定停止激活', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          v.taskStatus = '停止'
        })
      }
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
    getDataList(val) {
      console.log(val)
      this.searchData = val
    },
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
    handleEdit(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
    },

    getList() {

    }
  }
}
</script>
