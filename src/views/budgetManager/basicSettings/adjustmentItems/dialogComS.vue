<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    :visible.sync="dialogObj.show"
    :close-on-click-modal="false"
    width="1000px"
    class="abow_dialog"
  >
    <el-form
      v-if="dialogObj.show"
      ref="form"
      :model="form"
      label-width="140px"
      label-position="left"
      :rules="rules"
      :disabled="dialogObj.read"
      status-icon
      class="form"
    >
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="调剂类型编号："
            prop="tjlxbh"
            class="formItem"
          >
            <el-input
              v-model="form.tjlxbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="调剂类型名称："
            prop="tjlxmc"
            class="formItem"
          >
            <el-input
              v-model="form.tjlxmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="体系名称：" prop="txmc">
            <el-select
              v-model="form.txmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in txmcList"
                :key="item.txmc"
                :label="item.txmc"
                :value="item.txmc"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="周期名称：" prop="zqmc">
            <el-select
              v-model="form.zqmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zqmcList"
                :key="item.zqmc"
                :label="item.zqmc"
                :value="item.zqmc"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <div class="title"><i class="el-icon-user" /> 预算项目列表</div>
    <el-tree
      ref="vuetree"
      :data="treeData"
      default-expand-all
      show-checkbox
      node-key="id"
      :props="defaultProps"
      @check="oncheck"
    />

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="sub"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      placeholderTips: placeholderTips,
      form: {
        tjlxbh: '',
        tjlxmc: '',
        txmc: '',
        zqmc: '',
        list: []
      },
      zqmcList: [
        {
          zqbh: '2020027',
          zqmc: '名称1',
          zqlx: '月'
        },
        {
          zqbh: '2020063',
          zqmc: '名称2',
          zqlx: '月'
        }
      ],
      txmcList: [
        {
          txbh: '2020098',
          txmc: '20201体系'
        },
        {
          txbh: '2020001',
          txmc: '20202体系'
        }
      ],
      rules: {
        tjlxbh: [
          { required: true, message: '请输入调剂类型编号', trigger: 'blur' }
        ],
        tjlxmc: [
          { required: true, message: '请输入调剂类型名称', trigger: 'blur' }
        ],
        txmc: [
          { required: true, message: '请选择体系名称', trigger: 'blur' }
        ],
        zqmc: [
          { required: true, message: '请选择周期名称', trigger: 'blur' }
        ]
      },
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
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    'dialogObj.show'(val) {
      if (val) {
        this.initDialog()
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    oncheck(checkedkeys, info) {
      console.log(checkedkeys, info)
      // 合并子父节点,此项目不合并
      this.form.list = info.checkedNodes
      console.log(this.form.list)
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
        this.$nextTick(function() {
          this.$refs.vuetree.setCheckedNodes(this.form.list)
        })
      } else {
        let tjlxbh = ''
        for (let i = 0; i < 16; i++) {
          tjlxbh += Math.round(Math.random() * 10)
        }
        Object.keys(this.form).forEach(item => { this.form[item] = '' })
        this.form.tjlxbh = tjlxbh
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.addSub()
          }
        }
      })
    },
    updateSub() {
      this.$emit('updateSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    },
    addSub() {
      console.log(this.form)

      this.$emit('addSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  .el-form-item {
    margin: 0px !important;
  }
}

.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>
