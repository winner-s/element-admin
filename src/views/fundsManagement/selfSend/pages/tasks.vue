<template>
  <div class="selfSendTask">
    <el-card>
      <div slot="header">
        <span>自动下拨任务管理</span>
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
          :current-data="currentData"
          :table-btn="tableBtn"
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
  name: 'SelfSendTask',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: data.selfSendTask.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.selfSendTask.searchBto,
      showAll: false,
      tableData: [],
      tableListData: [],
      list: [
        {
          clbh: 'ZJXB20111610353876',
          clmc: '002',
          zxms: '0 40 10 * * ?',
          rwzt: '停止',
          yxzt: '未运行'
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
    this.getList()
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'clbh',
        width: '150',
        type: 'a',
        label: '策略编号',
        fixed: 'left'
      },
      {
        prop: 'clmc',
        width: '150',
        label: '策略名称',
        fixed: 'left'
      },
      {
        prop: 'zxms',
        width: '150',
        label: '执行模式'
      },
      {
        prop: 'rwzt',
        width: '150',
        label: '任务状态'
      },
      {
        prop: 'yxzt',
        width: '150',
        label: '运行状态'
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '激 活',
        btnType: 'primary',
        type: 'isShow',
        isShowStatus: 'rwzt',
        isShowValue: '停止',
        handleFn: 'handleStatus'
      },
      {
        name: '停 止',
        btnType: 'danger',
        type: 'isShow',
        isShowStatus: 'rwzt',
        isShowValue: '激活',
        handleFn: 'handleStatus'
      }
    ]
  },
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

    handleStatus(val) {
      if (val.rwzt === '停止') {
        this.$confirm('确定激活?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          val.rwzt = '激活'
        })
      } else {
        this.$confirm('确定停止?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          val.rwzt = '停止'
        })
      }
    },

    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
    }
  }
}
</script>
