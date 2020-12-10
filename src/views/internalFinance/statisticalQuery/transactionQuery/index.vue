<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>交易信息查询</span>
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
          @handleViewOther="handleViewOther"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST, FKLX, FKLXLIST } from '@u/wordbook'
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
        title: '',
        read: false,
        show: false,
        form: {}
      },
      fklxList: FKLXLIST,
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
          jybh: 'JY546546',
          jyrq: '2020-11-20',
          bfdwbh: '002',
          dfdwbh: '3335667',
          bfdwmc: '二级单位',
          dfdwmc: '上海市xx公司',
          bfzh: '0022340',
          je: '上海市xx公司',
          zc: '3345644',
          sr: '123233',
          dx: '433333',
          szfx: '贷',
          qxr: '2020-11-20',
          zy: '没有',
          fklx: 1,
          dfzh: '1333456',
          jyzt: '支付成功'
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
        jybh: 'JY' + Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        jyrq: '2020-10-' + Math.round(Math.random() * (30 - 10) + 10),
        bfdwbh: Math.round(Math.random() * (9988 - 1000) + 1000),
        dfdwbh: '上海市xx公司',
        bfdwmc: '二级单位',
        dfdwmc: '上海市xx公司',
        bfzh: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        je: '上海市xx公司',
        zc: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        sr: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        dx: Math.round(Math.random() * (9999988 - 1000000) + 1000000),
        szfx: '贷',
        qxr: '2020-11-' + Math.round(Math.random() * (30 - 10) + 10),
        zy: '没有',
        fklx: 1,
        dfzh: Math.round(Math.random() * (999998 - 100000) + 100000),
        jyzt: '支付成功'
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
        placeholder: '请填写单位编号'
      },
      {
        type: 'input',
        label: '交易编号:',
        prop: 'jybh',
        placeholder: '请填写交易编号'
      },
      {
        type: 'select',
        label: '账户编号:',
        prop: 'zhbh',
        placeholder: '请填写账户编号'
      },
      {
        type: 'time',
        label: '交易日期由:',
        prop: 'jyrqy',
        placeholder: '请填写交易日期'
      },
      {
        type: 'time',
        label: '到:',
        prop: 'jyrqd',
        placeholder: '请填写交易日期'
      },
      {
        type: 'select',
        label: '付款类型:',
        prop: 'fklx',
        selectList: this.fklxList,
        placeholder: '请填写付款类型'
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'xjdw'
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        prop: 'jybh',
        width: '150',
        type: 'a',
        label: '交易编号'
      },
      {
        prop: 'jyrq',
        width: '150',
        label: '交易日期'
      },

      {
        prop: 'fklx',
        width: '150',
        label: '付款类型 ',
        type: 'wordbook',
        wordbookList: this.fklx
      },

      {
        prop: 'zc',
        width: '150',
        label: '支出'
      },
      {
        prop: 'sr',
        width: '150',
        label: '收入'
      },
      {
        prop: 'bfdwmc',
        width: '150',
        label: '本方单位名称 '
      },
      {
        prop: 'bfzh',
        width: '150',
        label: '本方账户'
      },
      {
        prop: 'dfdwmc',
        width: '150',
        label: '对方单位名称'
      },
      {
        prop: 'dfzh',
        width: '150',
        label: '对方账户'
      },
      {
        prop: 'jyzt',
        width: '150',
        label: '交易状态'
      },
      {
        prop: 'zy',
        width: '150',
        label: '摘要'
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
    // 过滤
    fklx(val) {
      return FKLX[val]
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
    handleInsert() {},

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

    handleEdit(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.jybh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
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
              if (item.dwbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'fklx') {
              if (item.fklx.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'jybh') {
              if (item.jybh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'zhbh') {
              if (item.zhbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'jyrqy') {
              if (Date.parse(item.jyrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'jyrqd') {
              if (Date.parse(item.jyrq) <= Date.parse(this.searchData[i])) {
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
