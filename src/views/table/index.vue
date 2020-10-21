<!--  -->
<template>
  <div>
    <el-card shadow="never">
       <Search
          :searchData="searchData"
          :searchItem="searchItem"
          @getDataList="getDataList"
        ></Search>
    </el-card>
    <el-card shadow="never">
      <div slot="header">
        <span>用户管理</span>
      </div>
      <div>
        <div class="operate-area">
          <!-- <el-button @click="add" plain type="success" size="mini"
            >添加用户</el-button
          > -->
          <!-- <el-button @click="exp" plain type="success" size="mini"
            >导出</el-button
          > -->
        </div>
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

import { selectUserPage, updateAdminStatus, deleteAdmin } from "@s/api";

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
        id: "",
        title: "",
        read: false,
        show: false,
        form: {}
      },
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: ""
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
      this.dialogObj.id = "";
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
        // eslint-disable-next-line no-unused-vars
        let json = {
          id: v.id
        };
        deleteAdmin(json).then(res => {
          console.log(res);
          this.getList();
        });
      });
    },
    handleStatus(v) {
      if (v.status == 0) {
        this.$confirm("此操作将停用该账号?", "提示", {
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
      this.dialogObj.id = row.id;
      this.dialogObj.read = false;
      this.dialogObj.show = true;
      this.dialogObj.title = "编辑账号";
      this.dialogObj.form = row;
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id;
      this.dialogObj.read = true;
      this.dialogObj.show = true;
      this.dialogObj.title = "查看账号";
      this.dialogObj.form = row;
    },

    getList() {
      let json = {
        nickname: this.searchData.nickname,
        realname: this.searchData.realname,
        telphone: this.searchData.telphone,
        pageStart: this.currentData.currentPage,
        pageSize: this.currentData.size
      };
      selectUserPage(json).then(res => {
        console.log(res);
        this.tableData = res.list;

        this.currentData.total = res.total;
      });
    }
  },
  
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
    
    // 搜索
    this.searchItem = [
      {
        type: "input",
        label: "用户名称：",
        prop: "nickname",
        placeholder: "请填写用户名称"
      },
      {
        type: "input",
        label: "用户名称：",
        prop: "nickname",
        placeholder: "请填写用户名称"
      },
      {
        type: "input",
        label: "用户名称：",
        prop: "nickname",
        placeholder: "请填写用户名称"
      },
      {
        type: "input",
        label: "用户名称：",
        prop: "nickname",
        placeholder: "请填写用户名称"
      }
      
    ];
    //  table表格
    this.tableListData = [
      { width: "50", label: "", type: "index" },
      { width: "50", label: "", type: "selection" },
      {
        prop: "nickname",
        width: "",
        label: "用户名称"
      },
      {
        prop: "gender",
        width: "",
        label: "性别",
        type: "wordbook",
        wordbookList: this.sex
      },
      {
        prop: "telphone",
        width: "",
        label: "手机号码"
      },
      {
        prop: "createTime",
        width: "",
        label: "注册时间"
      },
      { prop: "avatarUrl", width: "", label: "头像", type: "userImg" }
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
