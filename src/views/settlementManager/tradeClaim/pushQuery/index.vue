<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>交易认领系统维护</span>
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
          @handleSelectionChange="handleSelectionChange"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" @addSub="addSub" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {
  LENDINGLIST,
  LENDING,
  CURRENCY,
  CURRENCYLIST,
  DIRECT,
  DIRECTLIST,
  RLZT,
  RLZTLIST,
} from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      lendingList: LENDINGLIST,
      currencyList: CURRENCYLIST,
      directList: DIRECTLIST,
      rlztList: RLZTLIST,
      showAll: 1,
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
          bfzh: '2222334455667766',
          bfhm: '二级单位1CNY非直联账户1',
          khh: '中国银行总行',
          dfzh: '6244448776666',
          dfhm: '猫人肥沃',
          dfzhkhh: '中国银行',
          jyrq: '2019-12-02',
          je: '20.00',
          bz: 1,
          sfzl: 1,
          jdfx: 1,
          zy: '1A',
          rlzt: 1,
          rlpt: '线下入账',
          rlsj: '2020-11-30',
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
      selectChange: '',
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
        prop: 'insert',
        type: 'primary',
        label: '手工归类',
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
        label: '本方账号:',
        prop: 'bfzh',
        placeholder: '请填写本方账号',
      },
      {
        type: 'input',
        label: '本方户名:',
        prop: 'bfhm',
        placeholder: '请填写本方户名',
      },
      {
        type: 'input',
        label: '对方户名:',
        prop: 'dfhm',
        placeholder: '请填写对方户名',
      },
      {
        type: 'input',
        label: '交易金额 从:',
        prop: 'jyjec',
        placeholder: '请填写交易金额',
      },
      {
        type: 'input',
        label: '至:',
        prop: 'jyjed',
        placeholder: '请填写交易金额',
      },
      {
        type: 'time',
        label: '起止时间:',
        prop: 'qzsj',
        placeholder: '请选择起止时间',
      },
      {
        type: 'time',
        label: '截止时间:',
        prop: 'jzsj',
        placeholder: '请选择截止时间',
      },
      {
        type: 'input',
        label: '摘要:',
        prop: 'zy',
        placeholder: '请填写摘要',
      },
      {
        type: 'select',
        label: '贷款方向:',
        prop: 'dkfx',
        placeholder: '请选择贷款方向',
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'zb',
        placeholder: '请选择币种',
        selectList: this.currencyList,
      },
      {
        type: 'select',
        label: '认领系统:',
        prop: 'rlxt',
        placeholder: '请选择认领系统',
      },
      {
        type: 'select',
        label: '认领状态:',
        prop: 'rlzt',
        placeholder: '请选择认领状态',
        selectList: this.rlztList,
      },
      {
        type: 'select',
        label: '是否关联:',
        prop: 'sfgl',
        placeholder: '请选择是否关联',
        selectList: this.directList,
      },
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'bfzh',
        width: '150',
        label: '本方账户号码',
      },
      {
        prop: 'bfhm',
        width: '150',
        label: '本方账户名称',
      },
      {
        prop: 'khh',
        width: '',
        label: '开户行',
      },
      {
        prop: 'dfzh',
        width: '',
        label: '对方账户号码',
      },
      {
        prop: 'dfhm',
        width: '',
        label: '对方账户名称',
      },
      {
        prop: 'dfzhkhh',
        width: '',
        label: '对方账户开户行',
      },
      {
        prop: 'jyrq',
        width: '',
        label: '交易日期',
      },
      {
        prop: 'je',
        width: '',
        label: '金额',
      },
      {
        prop: 'bz',
        width: '',
        label: '币种',
        type: 'wordbook',
        wordbookList: this.currency,
      },
      {
        prop: 'sfzl',
        width: '',
        label: '是否直联',
        type: 'wordbook',
        wordbookList: this.direct,
      },
      {
        prop: 'jdfx',
        width: '',
        label: '借贷方向',
        type: 'wordbook',
        wordbookList: this.lending,
      },
      {
        prop: 'zy',
        width: '',
        label: '摘要',
      },
      {
        prop: 'rlzt',
        width: '',
        label: '认领状态',
        type: 'wordbook',
        wordbookList: this.rlzt,
      },
      {
        prop: 'rlpt',
        width: '',
        label: '认领平台',
      },
      {
        prop: 'rlsj',
        width: '',
        label: '认领时间',
      },
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
    handleSelectionChange(res) {
      this.selectChange = res
    },
    // 过滤
    currency(val) {
      return CURRENCY[val]
    },
    rlzt(val) {
      return RLZT[val]
    },
    lending(val) {
      return LENDING[val]
    },
    direct(val) {
      return DIRECT[val]
    },
    addSub(val) {
      this.selectChange.forEach((item, index) => {
        this.list.forEach((res, index) => {
          if (res.bfzhhm == item.bfzhhm) {
            res.rlpt = val.rlxt
          }
        })
      })
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
      this.dialogObj.title = '手工归类'
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
          const json = {
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
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
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
}
</script>
<style scoped></style>
