<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>直联账户历史交易导入</span>
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
        />
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
      list: [
        {
          dwbh: '1324',
          dwmc: '单位1',
          zhhm: '123456',
          yhjybs: 'T-165489',
          jysj: '2020-11-11',
          dfyhzh: '777888',
          dfzhmc: '张三',
          jyfx: 1,
          jyje: '100.00',
          bz: '11'
        },
        {
          dwbh: '546',
          dwmc: '单位1',
          zhhm: '123456',
          yhjybs: 'T-165846',
          jysj: '2020-11-11',
          dfyhzh: '777888',
          dfzhmc: '张三',
          jyfx: 1,
          jyje: '100.00',
          bz: '11'
        },
        {
          dwbh: '13265',
          dwmc: '单位1',
          zhhm: '123456',
          yhjybs: 'T-1654',
          jysj: '2020-11-11',
          dfyhzh: '777888',
          dfzhmc: '张三',
          jyfx: 1,
          jyje: '100.00',
          bz: '11'
        },
        {
          dwbh: '13265',
          dwmc: '单位1',
          zhhm: '123456',
          yhjybs: 'T-16548',
          jysj: '2020-11-11',
          dfyhzh: '777888',
          dfzhmc: '张三',
          jyfx: 1,
          jyje: '100.00',
          bz: '11'
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
        placeholder: '请填写单位编号',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '账户号码:',
        prop: 'zhhm',
        placeholder: '请填写账户号码'
      },
      {
        type: 'input',
        label: '查询日期范围从:',
        prop: 'rqfwc',
        placeholder: '请填写日期范围'
      },
      {
        type: 'input',
        label: '到:',
        prop: 'rqfwd',
        placeholder: '请填写范围日期',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'yhjybs',
        width: '',
        label: '银行交易标识',
        fixed: 'left'
      },
      {
        prop: 'jysj',
        width: '',
        label: '交易时间',
        fixed: 'left'
      },
      {
        prop: 'dfyhzh',
        width: '',
        label: '对方银行账号'
      },
      {
        prop: 'dfzhmc',
        width: '',
        label: '对方账户名称'
      },
      {
        prop: 'jyfx',
        width: '150',
        label: '交易方向'
      },
      {
        prop: 'jyje',
        width: '',
        label: '交易金额(元)'
      },
      {
        prop: 'bz',
        width: '',
        label: '备注'
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
              if (item.dwbh.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'dwmc') {
              if (item.dwmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'zhhm') {
              if (item.zhhm.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'rqfwc') {
              if (Date.parse(item.jysj) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'rqfwd') {
              if (Date.parse(item.jysj) <= Date.parse(this.searchData[i])) {
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
