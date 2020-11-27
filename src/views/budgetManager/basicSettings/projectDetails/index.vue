<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>项目明细模板设置</span>
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
      // 表格
      tableDataTwo: [
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '999888000',
          accountName: '阿里巴巴88',
          bankName: '中国人民银行营业处',
          openBankName: '',
          status: '通过',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20071016590269',
          accountPhone: '20111006',
          accountName: '测试非直连支付确认',
          bankName: '中国工商银行',
          openBankName: '北京分行',
          status: '已确认',
          connection: '非直联'
        },
        {
          bto: false,
          documentNumber: 'KH20081316150311',
          accountPhone: '12311',
          accountName: '123131',
          bankName: '中国人民银行营业处',
          openBankName: '1231',
          status: '复核拒绝',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        }
      ],

      // 表格
      tableData: [
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '999888000',
          accountName: '阿里巴巴88',
          bankName: '中国人民银行营业处',
          openBankName: '',
          status: '通过',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20071016590269',
          accountPhone: '20111006',
          accountName: '测试非直连支付确认',
          bankName: '中国工商银行',
          openBankName: '北京分行',
          status: '已确认',
          connection: '非直联'
        },
        {
          bto: false,
          documentNumber: 'KH20081316150311',
          accountPhone: '12311',
          accountName: '123131',
          bankName: '中国人民银行营业处',
          openBankName: '1231',
          status: '复核拒绝',
          connection: '直联'
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: ''
        }
      ],
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
        label: '模板名称:',
        prop: 'unitNo',
        placeholder: '请填写模板名称',
        selectList: this.unitNoList
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      { label: '操作', type: 'btn', width: '' },
      {
        prop: 'documentNumber',
        width: '150',
        label: '模板编号'
      },

      {
        prop: 'accountName',
        width: '',
        label: '模板名称'
      },
      {
        prop: 'bankName',
        width: '',
        label: '模板状态'
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
      this.$confirm('此操作将删除该账号?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // // eslint-disable-next-line no-unused-vars
        // let json = {
        //   id: v.id
        // };
        // deleteAdmin(json).then(res => {
        //   console.log(res);
        //   this.getList();
        // });
      })
    },
    handleStatus(v) {
      if (v.status == 0) {
        this.$confirm('此操作将停用该账号?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //   // eslint-disable-next-line no-unused-vars
          //   let json = {
          //     id: v.id
          //   };
          //   updateAdminStatus(json).then(res => {
          //     console.log(res);
          //     this.getList();
          //   });
        })
      } else {
        this.$confirm('此操作将恢复该账号?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // eslint-disable-next-line no-unused-vars
          const json = {
            id: v.id
          }
          updateAdminStatus(json).then((res) => {
            console.log(res)
            this.getList()
          })
        })
      }
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

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      this.tableDataTwo.forEach((item, index) => {
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
    }
  }
}
</script>
<style scoped></style>
