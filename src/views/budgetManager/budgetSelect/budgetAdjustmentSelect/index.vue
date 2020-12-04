<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>预算调整查询</span>
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
          @handleSelect="handleSelect"
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
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      list: [
        {
          ysnd: '2017',
          bbh: 'BZ002202011021952780',
          ystx: '2020',
          zqmc: 'testlzh',
          ysdw: '二级单位1',
          ksrq: '2020-12-01',
          jsrq: '2020-12-31',
          bzr: 'admin',
          bbzt: '保存'
        }
      ],
      // 表格
      tableData: [

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
        type: 'input',
        label: '体系名称:',
        prop: 'txmc',
        placeholder: '请填写体系名称',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '周期名称:',
        prop: 'zqmc',
        placeholder: '请选择周期名称'
      },
      {
        type: 'input',
        label: '预算年度:',
        prop: 'ysnd',
        placeholder: '请选择预算年度'
      },
      {
        type: 'input',
        label: '状态:',
        prop: 'zt',
        placeholder: '请选择状态'
      },
      {
        type: 'time',
        label: '预算开始日期:',
        prop: 'ysksrq',
        placeholder: '请选择预算开始日期',
        show: this.showAll
      },
      {
        type: 'time',
        label: '预算结束日期:',
        prop: 'ysjsrq',
        placeholder: '请选择预算结束日期',
        show: this.showAll
      },
      {
        type: 'input',
        label: '预算单位编号:',
        prop: 'ysdwbh',
        placeholder: '请选择预算单位编号',
        show: this.showAll
      },
      {
        type: 'input',
        label: '预算单位名称:',
        prop: 'ysdwmc',
        placeholder: '请填写预算单位名称',
        show: this.showAll
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'ywdw',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'bbh',
        width: '150',
        label: '版本号'
      },

      {
        prop: 'ystx',
        width: '',
        label: '预算体系'
      },
      {
        prop: 'zqmc',
        width: '',
        label: '周期名称'
      },
      {
        prop: 'ysdw',
        width: '',
        label: '预算单位'
      },
      {
        prop: 'ksrq',
        width: '',
        label: '开始日期'
      },
      {
        prop: 'jsrq',
        width: '',
        label: '结束日期'
      },
      {
        prop: 'bzr',
        width: '',
        label: '编制人'
      },
      {
        prop: 'bbzt',
        width: '',
        label: '版本状态'
      },
      { label: '操作', type: 'btn', width: '', fixed: 'right' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '查 看',
        btnType: 'primary',
        handleFn: 'handleSelect'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    handleSelect(row) {
      this.dialogObj.id = row.bbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
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

    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
    },
    // 分页
    onPageChange(val) {
      console.log(val)
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

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'txmc') {
              if (item.ystx.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zqmc') {
              if (item.zqmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'ysnd') {
              if (item.ysnd.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'zt') {
              if (item.bbzt.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }
            if (i == 'ysdwbh') {
              if (item.ysdwbh.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }
            if (i == 'ysdwmc') {
              if (item.dwmc.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'ysksrq') {
              if (Date.parse(item.ysksrq) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'ysjsrq') {
              if (Date.parse(item.ysjsrq) <= Date.parse(this.searchData[i])) {
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
