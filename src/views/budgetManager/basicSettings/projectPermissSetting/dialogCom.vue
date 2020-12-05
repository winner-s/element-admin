<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    :visible.sync="dialogObj.show"
    :close-on-click-modal="false"
    width="800px"
    class="abow_dialog"
  >

    <el-tree
      ref="vuetree"
      :data="treeData"
      default-expand-all
      show-checkbox
      node-key="id"
      :props="defaultProps"
      @check="oncheck"
    />
    <div v-if="!dialogObj.read" class="dialog-footer">
      <el-button type="primary" size="mini" @click="updateSub">确 定</el-button>
      <el-button size="mini" @click="dialogObj.show = false">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>

export default {
  name: 'DialogCom',
  props: ['dialogObj'],
  data() {
    return {
      RoleSelectList: [],

      form: {
        zqbh: '',
        list: []
      },
      sysRoleShowList: [],
      rules: {},
      dataArr: {},
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            txmx: 1,
            mxmb: ''

          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
            txmx: 1,
            mxmb: ''
          }, {
            id: 6,
            label: '二级 2-2',
            txmx: 1,
            mxmb: ''
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
            txmx: 1,
            mxmb: ''
          }, {
            id: 8,
            label: '二级 3-2',
            txmx: 1,
            mxmb: ''
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    'dialogObj.show'(val) {
      if (val) {
        this.initDialog()
      }
    }
  },
  methods: {

    initDialog() {
      var _this = this
      this.form.zqbh = this.dialogObj.form.zqbh
      this.dataArr = this.dialogObj.form.list
      console.log(this.dataArr)
      this.$nextTick(function() {
        _this.$refs.vuetree.setCheckedNodes(this.dataArr)
      })
    },
    oncheck(checkedkeys, info) {
      console.log(checkedkeys, info)
      // 合并子父节点,此项目不合并
      this.form.list = info.checkedNodes
      console.log(this.form.list)
    },

    updateSub() {
      this.$emit('updateSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    }
  }
}
</script>
<style scoped lang="scss">
.switch-wrap {
  margin-left: 5px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
