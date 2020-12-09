<template>
  <div class="role-info">
    <el-card>
      <div slot="header">
        <span>用户角色</span>
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
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
// import data from '../components/data'
export default {
  name: 'Role',
  components: {
    Search,
    Table
  },
  data() {
    return {
      USERSTATUS: {
        1: '未复核',
        2: '已复核'
      },
      ROLE: {
        1: '测试1',
        2: '测试2'
      },
      searchItem: [],
      searchData: {
      },
      searchBto: [],
      showAll: 1,
      tableData: [],
      tableListData: [],
      list: [
        {
          dwbh: '123',
          accountName: 'lizhihua',
          userName: '李志华',
          role: 1,
          company: '二级单位1',
          userSatus: 1
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
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      }
    ]

    this.searchItem = [
      {
        type: 'select',
        label: '单位编号:',
        prop: 'companyNum',
        selectList: [
          {
            value: '全部',
            id: 0
          },
          {
            value: '0813',
            id: 1
          },
          {
            value: '1213',
            id: 2
          },
          {
            value: '002',
            id: 3
          }
        ],
        placeholder: '请选择单位编号'
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'company',
        placeholder: '请填写单位名称'
      },
      {
        type: 'input',
        label: '真实姓名:',
        prop: 'userName',
        placeholder: '请填写真实姓名'
      },
      {
        type: 'input',
        label: '登录用户名:',
        prop: 'accountName',
        placeholder: '请填写用户名'
      },
      {
        type: 'select',
        label: '用户状态:',
        prop: 'userSatus',
        selectList: [
          {
            value: '未复核',
            id: 1
          },
          {
            value: '已复核',
            id: 2
          }
        ],
        placeholder: '请选择用户状态'
      },
      {
        type: 'select',
        label: '角色:',
        prop: 'role',
        selectList: [
          {
            value: '测试1',
            id: 1
          },
          {
            value: '测试2',
            id: 2
          },
          {
            value: '测试3',
            id: 3
          },
          {
            value: '测试4',
            id: 4
          },
          {
            value: '测试5',
            id: 5
          }
        ],
        placeholder: '请选择用户状态'
      }
    ]
    this.tableListData = [
      {
        prop: 'accountName',
        width: '',
        label: '登陆用户名'
      },
      {
        prop: 'userName',
        width: '',
        label: '真实姓名'
      },
      {
        prop: 'role',
        width: '',
        type: 'wordbook',
        wordbookList: this.role,
        label: '角色'
      },
      {
        prop: 'company',
        width: '',
        label: '单位名称'
      },
      {
        prop: 'userSatus',
        width: '',
        label: '用户状态',
        type: 'wordbook',
        wordbookList: this.userType
      }
    ]
  },
  methods: {
    // 过滤
    userType(val) {
      return this.USERSTATUS[val]
    },
    role(val) {
      return this.ROLE[val]
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
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
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
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'companyNum') {
              if (item.companyNum.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'userName') {
              if (item.userName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'company') {
              if (item.company.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'accountName') {
              if (item.accountName.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'userSatus') {
              if (item.userSatus.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'role') {
              if (item.role.toString().includes(this.searchData[i])) {
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
