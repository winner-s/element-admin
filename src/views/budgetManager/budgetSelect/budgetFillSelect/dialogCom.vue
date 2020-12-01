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

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="版本号："
            prop="bbh"
            class="formItem"
          >
            <el-input
              v-model="form.bbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="预算年度："
            prop="ysnd"
            class="formItem"
          >
            <el-select
              v-model="form.ysnd"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ysndList"
                :key="item.ysnd"
                :label="item.ysnd"
                :value="item.ysnd"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算体系：" prop="ystx">
            <el-select
              v-model="form.ystx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ystsList"
                :key="item.txmc"
                :label="item.txmc"
                :value="item.txmc"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算周期：" prop="zqmc">
            <el-select
              v-model="form.zqmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in yszqList"
                :key="item.zqmc"
                :label="item.zqmc"
                :value="item.zqmc"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算开始日期：" prop="ksrq">
            <el-date-picker
              v-model="form.ksrq"
              type="date"
              value-format="yyyy-MM-dd"
              style="width: 200px"
              size="mini"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算结束日期：" prop="jsrq">
            <el-date-picker
              v-model="form.jsrq"
              type="date"
              value-format="yyyy-MM-dd"
              style="width: 200px"
              size="mini"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="预算编制单位：" prop="ysbzdw">
            <el-input
              v-model="form.ysbzdw"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算描述：" prop="ysms">
            <el-input
              v-model="form.ysms"
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
          <el-form-item label="状态：" prop="bbzt">
            <el-input
              v-model="form.bbzt"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额单位：" prop="jedw">
            <el-input
              v-model="form.jedw"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title"><i class="el-icon-user" /> 预算项目</div>
      <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      
      prop="xm"
      label="项目"
      sortable
      width="250">
    </el-table-column>
    <el-table-column
      prop="ysje"
      label="预算金额"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="ysyje"
      label="已使用金额">
    </el-table-column>
    <el-table-column
      prop="syje"
      label="剩余金额">
    </el-table-column>
  </el-table>

    </el-form>

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
      tableData: [{
          id: 1,
          xm: '期初金额',
          ysje: '0.00',
          ysyje: '0.00',
          syje:'0.00'
        }, {
          id: 2,
          xm: '现金收入',
          ysje: '11.00',
          ysyje: '0.00',
          syje:'11.00',
          children: [{
              id: 31,
              xm: '销售商品、提供劳务收到的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00'
            }, {
              id: 32,
              xm: '收回前期款项',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00'
            },
            {
              id: 33,
              xm: '收到的税费返还',
              ysje: '11.00',
              ysyje: '0.00',
              syje:'11.00'
          }
            ]
        }, {
          id: 3,
          xm: '现金支出',
          ysje: '11.00',
          ysyje: '0.00',
          syje:'11.00',
          children: [{
              id: 31,
              xm: '购买材料、商品及接受劳务支付的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '发放职工薪酬及缴纳保险支付现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '支付的相关税费',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '六项费用日常支出所需现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '拨付所属资金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '购置固定资产支付的现金',
              ysje: '11.00',
              ysyje: '0.00',
              syje:'11.00',
            }, {
              id: 32,
              xm: '购置无形资产及其他资产支付的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '对外投资支付的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }, {
              id: 32,
              xm: '偿还已有借款支付的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }
            , {
              id: 32,
              xm: '偿还已有借款利息支付的现金',
              ysje: '0.00',
              ysyje: '0.00',
              syje:'0.00',
            }
            ]
        }],
      yszqList:[
        {
          zqbh:'2020027',
          zqmc:'test',
          zqlx:'年',
        },
        {
          zqbh:'2020029',
          zqmc:'ABCDEFG',
          zqlx:'月',
        },
      ],
      ystsList:[
        {
          txbh:'2020001',
          txmc:'2020'
        },
        {
          txbh:'2020006',
          txmc:'测试1'
        },
        {
          txbh:'2020008',
          txmc:'测试2'
        },
        {
          txbh:'2020014',
          txmc:'测试3'
        },

      ],
      ysndList:[
        {
          ysnd:'2017'
        },
        {
          ysnd:'2018'
        },
        {
          ysnd:'2019'
        },
        {
          ysnd:'2020'
        },
        {
          ysnd:'2021'
        },
        {
          ysnd:'2022'
        },
        {
          ysnd:'2023'
        },
        {
          ysnd:'2024'
        }
      ],
      rules:{
        bbh:[
          { required: true, message: '请输入版本号', trigger: 'blur' },
        ],
        ysnd:[
          { required: true, message: '请选择预算年度', trigger: 'blur' },
        ],
        ystx:[
          { required: true, message: '请选择预算体系', trigger: 'blur' },
        ],
        yszq:[
          { required: true, message: '请选择预算周期', trigger: 'blur' },
        ],
        ysksrq:[
          { required: true, message: '请选择预算开始日期', trigger: 'blur' },
        ],
        ysjsrq:[
          { required: true, message: '请选择预算结束日期', trigger: 'blur' },
        ],
      },
      form: {
        bbh:'',
        ysnd:'',
        ystx:'',
        zqmc:'',
        ksrq:'',
        jsrq:'',
        ysbzdw:'二级单位',
        ysms:'',
        bbzt:'保存'
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    "dialogObj.show"(val) {
      if (val) {
        this.initDialog();
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog(){
      
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item];
        });
      } else{
        let bbh = ''
        for(let i=0;i<16;i++){
          bbh+= Math.round(Math.random() * 10)
        }
        Object.keys(this.form).forEach(item => {this.form[item] = ''});
        this.form.bbh= bbh
        this.form.ysbzdw="二级单位1"
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
    updateSub(){
      this.$emit('updateSub',JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show=false
    },
    addSub() {
      console.log(this.form)
      this.form.bbzt='保存'
      this.form.bzr='admin'
      this.$emit('addSub',JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show=false
    },
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
