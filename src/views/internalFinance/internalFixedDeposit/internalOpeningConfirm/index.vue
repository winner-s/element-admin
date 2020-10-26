<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>收款人信息维护</span>
      </div>
      <div>
        <Search
          :searchData="searchData"
          :searchItem="searchItem"
          :searchBto="searchBto"
          :showAll="showAll"
          @getDataList="getDataList"
          @handleInsert="handleInsert"
          @dropDown="dropDown"
          @dropUp="dropUp"
        ></Search>

        <Table
          :tableData="tableData"
          :tableListData="tableListData"
          :tableBtn="tableBtn"
          :currentData="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleEdit="handleEdit"
          @handleStatus="handleStatus"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        ></Table>
      </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  data() {
    // 这里存放数据
    return {
      showAll: false,
      unitNoList: UNITNOLIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      //顶部按钮
      searchBto: [],
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {},
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
          connection: '直联',
        },
        {
          bto: false,
          documentNumber: 'KH20071016590269',
          accountPhone: '20111006',
          accountName: '测试非直连支付确认',
          bankName: '中国工商银行',
          openBankName: '北京分行',
          status: '已确认',
          connection: '非直联',
        },
        {
          bto: false,
          documentNumber: 'KH20081316150311',
          accountPhone: '12311',
          accountName: '123131',
          bankName: '中国人民银行营业处',
          openBankName: '1231',
          status: '复核拒绝',
          connection: '直联',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
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
          connection: '直联',
        },
        {
          bto: false,
          documentNumber: 'KH20071016590269',
          accountPhone: '20111006',
          accountName: '测试非直连支付确认',
          bankName: '中国工商银行',
          openBankName: '北京分行',
          status: '已确认',
          connection: '非直联',
        },
        {
          bto: false,
          documentNumber: 'KH20081316150311',
          accountPhone: '12311',
          accountName: '123131',
          bankName: '中国人民银行营业处',
          openBankName: '1231',
          status: '复核拒绝',
          connection: '直联',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '',
          accountName: '',
          bankName: '',
          openBankName: '',
          status: '',
          connection: '',
        },
      ],
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
  // 方法集合
  methods: {
    //收起
    dropUp() {
      this.showAll = false
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = false
        }
      })
    },
    //展开
    dropDown() {
      this.showAll = true
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = true
        }
      })
    },
    //单击新增按钮
    handleInsert() {},
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
        type: 'warning',
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
          type: 'warning',
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
          type: 'warning',
        }).then(() => {
          // eslint-disable-next-line no-unused-vars
          let json = {
            id: v.id,
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
      let list = []
      let this_ = this
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
    },
  },

  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //顶部按钮
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
        prop: 'insert',
        type: 'primary',
        label: '提交',
      },
      {
        prop: 'insert',
        type: 'primary',
        label: '删除',
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
        label: '存款开立流水号:',
        prop: 'documentNumber',
        placeholder: '请填写存款开立流水号',
      },
      {
        type: 'input',
        label: '存款期限:',
        prop: 'openApplicant',
        placeholder: '请选择存款期限',
      },
      {
        type: 'select',
        label: '存款单位编号:',
        prop: 'openApplicant',
        placeholder: '请选择存款单位编号',
      },
      {
        type: 'input',
        label: '存款单位名称:',
        prop: 'openApplicant',
        placeholder: '请填写存款单位名称',
      },
      {
        type: 'time',
        label: '存款开立日期 从:',
        prop: 'openApplicant',
        placeholder: '请选择存款开立日期',
        show:this.showAll
      },
      {
        type: 'time',
        label: '到:',
        prop: 'openApplicant',
        placeholder: '请选择存款开立日期',
        show:this.showAll
      },
      {
        type: 'select',
        label: '存款利率转换天数:',
        prop: 'openApplicant',
        placeholder: '请选择存款利率转换天数',
        show:this.showAll
      },
      {
        type: 'select',
        label: '到期续存方式:',
        prop: 'openApplicant',
        placeholder: '请填写到期续存方式',
        show:this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      { label: '操作', type: 'btn', width: '' },
      {
        prop: 'documentNumber',
        width: '150',
        label: '存款开立流水号',
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '存款状态',
      },
      {
        prop: 'accountName',
        width: '',
        label: '存款单位名称',
      },
      {
        prop: 'accountName',
        width: '',
        label: '存款金额',
      },
      {
        prop: 'accountName',
        width: '',
        label: '存款开立日期',
      },
      {
        prop: 'accountName',
        width: '',
        label: '内部账号 ',
      },
      {
        prop: 'accountName',
        width: '',
        label: '状态',
      },
      {
        prop: 'accountName',
        width: '',
        label: '存款期限',
      }
      ,
      {
        prop: 'accountName',
        width: '',
        label: '利率转换天数',
      }
      ,
      {
        prop: 'accountName',
        width: '',
        label: '到期续存方式',
      }
    ]
    // 按钮
    this.tableBtn = []
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
}
</script>
<style scoped></style>
