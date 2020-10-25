<template>
  <div class="foundsCollsection">
    <el-card>
      <div slot="header">
        <span>账户归集关系设置</span>
      </div>
      <div class="table-box">
        <div>
          <!-- <Search
            :search-data="searchData"
            :search-item="searchItem"
            :search-bto="searchBto"
            :show-all="showAll"
            @getDataList="getDataList"
            @dropDown="dropDown"
            @dropUp="dropUp"
          /> -->
          <Table
            :table-data="tableData"
            :table-list-data="tableListData"
            :current-data="currentData"
            @onPageChange="onPageChange"
            @onSizeChange="onSizeChange"
          />
        </div>
        <div class="detail">
          <div class="top-con">
            <div class="con">
              <div>
                <span>策略编号</span>
                <el-input v-model="detailInfo.number" type="text" />
              </div>
              <div>
                <span>策略名称</span>
                <el-input v-model="detailInfo.name" type="text" />
              </div>
              <div>
                <span>策略模式</span>
                <el-input v-model="detailInfo.pattern" type="text" />
              </div>
              <div>
                <span>上级单位编号</span>
                <el-input v-model="detailInfo.superiorCompanyNum" type="text" />
              </div>
              <div>
                <span>上级单位名称</span>
                <el-input v-model="detailInfo.superiorCompanyName" type="text" />
              </div>
              <div>
                <span>上级银行帐号</span>
                <el-input v-model="detailInfo.superiorAccountNum" type="text" />
              </div>
              <div>
                <span>上级银行名称</span>
                <el-input v-model="detailInfo.superiorAccountName" type="text" />
              </div>
            </div>
            <el-button type="primary">指令发送</el-button>
          </div>
          <div class="bottom-con">
            <div class="title">下级账户列表</div>
            <Table
              :table-data="tableDetailData"
              :table-list-data="tableListDetailData"
              :current-data="currentData"
              @onPageChange="onPageChange"
              @onSizeChange="onSizeChange"
            />
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
// import Search from '@c/common/search'
import Table from '@c/common/table'
import data from '../../components/data'
export default {
  name: 'FoundsCollsection',
  components: {
    // Search,
    Table
  },
  data() {
    return {
      searchItem: data.foundsCollsection.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.foundsCollsection.searchBto,
      showAll: false,
      tableData: [],
      tableListData: data.foundsCollsection.tableListData,
      tableDetailData: data.foundsCollsection.tableDetailData,
      tableListDetailData: data.foundsCollsection.tableListDetailData,
      list: data.foundsCollsection.tableData,
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      },
      detailInfo: {
        number: '',
        name: '',
        pattern: '',
        superiorCompanyNum: '',
        superiorCompanyName: '',
        superiorAccountNum: '',
        superiorAccountName: ''
      }
    }
  },
  created() {
    this.getList()
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
    handleEdit(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑账号'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看账号'
      this.dialogObj.form = row
    },
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = data.foundsCollsection.tableData.length
    }
  }
}
</script>

