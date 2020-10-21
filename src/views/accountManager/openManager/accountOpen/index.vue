<!--  -->
<template>
  <div>
    <el-card >
      <div slot="header">
        <span>用户管理</span>
      </div>
      <div>
          <Search
          :searchData="searchData"
          :searchItem="searchItem"
          @getDataList="getDataList"
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
import { SEX } from "@u/wordbook";
import Search from "@c/common/search";
import Table from "@c/common/table";



export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  data() {
    // 这里存放数据
    return {
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      },
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      // 表格
      tableData: [
        {
            bto:false,
            documentNumber:'KH20082615093831',
            accountPhone:'',
            accountName:'',
            bankName:'',
            openBankName:'',
            status:'',
            connection:''
        }
      ],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: ''
      }
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 过滤
    sex(val) {
      return SEX[val];
    },
    add() {
      this.dialogObj.id = '';
      this.dialogObj.read = false;
      this.dialogObj.show = true;
      this.dialogObj.title = "添加账号";
    },
    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10;
      this.currentData.currentPage = 1;
      this.searchData = val;
      this.getList();
    },
    // 分页
    onPageChange(val) {
      this.currentData.currentPage = val;
      this.getList();
    },
    onSizeChange(val) {
      this.currentData.size = val;
      this.currentData.currentPage = 1;
      this.getList();
    },
    // 删除产品
    handleDelete(v) {
      this.$confirm("此操作将删除该账号?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // // eslint-disable-next-line no-unused-vars
        // let json = {
        //   id: v.id
        // };
        // deleteAdmin(json).then(res => {
        //   console.log(res);
        //   this.getList();
        // });
      });
    },
    handleStatus(v) {
      if (v.status == 0) {
        this.$confirm("此操作将停用该账号?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
        //   // eslint-disable-next-line no-unused-vars
        //   let json = {
        //     id: v.id
        //   };
        //   updateAdminStatus(json).then(res => {
        //     console.log(res);
        //     this.getList();
        //   });
        });
      } else {
        this.$confirm("此操作将恢复该账号?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          // eslint-disable-next-line no-unused-vars
          let json = {
            id: v.id
          };
          updateAdminStatus(json).then(res => {
            console.log(res);
            this.getList();
          });
        });
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
      
    }
  },
  
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
    
    // 搜索
    this.searchItem = [
      {
        type: 'input',
        label: '单据编号:',
        prop: 'documentNumber',
        placeholder: '请填写单据编号'
      },
      {
        type: 'input',
        label: '开户申请人:',
        prop: "openApplicant",
        placeholder: '请填写开户申请人'
      },
      {
        type: 'select',
        label: '单位编号:',
        prop: 'unitNo',
        placeholder: '请填写单位编号'
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'unitName',
        placeholder: '请填写单位名称'
      }
      
    ];
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      { width: '50', label: '', type: 'selection' },
      {
        prop: 'documentNumber',
        width: '',
        label: '单据编号'
      },
      {
        prop: 'accountPhone',
        width: '',
        label: '账户号码'
      },
      {
        prop: 'accountName',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'bankName',
        width: '',
        label: '银行名称'
      },
      {
        prop: 'openBankName',
        width: '',
        label: '开户行名称'
      },
      {
        prop: 'status',
        width: '',
        label: '单据状态'
      },
      {
        prop: 'connection',
        width: '',
        label: '是否直联'
      },
      { label: '操作', type: 'btn', width: '240', fixed: 'right' }

    ];
    // 按钮
    this.tableBtn = [];
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getList();
  }
};
</script>
<style scoped></style>
