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
            label="策略编号："
            prop="clbh"
            class="formItem"
          >
            <el-input
              v-model="form.clbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="策略名称："
            prop="clmc"
            class="formItem"
          >
            <el-input
              v-model="form.clmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="归集方式：" prop="gjfs">
            <el-select v-model="form.zqsz" placeholder="请选择" size="mini">
              <el-option
                v-for="item in collectionList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="归集比例(%)：" prop="gjbl">
            <el-input
              v-model="form.gjbl"
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
          <el-form-item label="执行状态：" prop="clzt">
            <el-input
              v-model="form.clzt"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加急发送指令：" prop="jjfszl">
            <el-select v-model="form.jjfszl" placeholder="请选择" size="mini">
              <el-option
                v-for="item in scorllList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="周期设置：" prop="zqsz">
            <el-select v-model="form.zqsz" placeholder="请选择" size="mini">

              <el-option
                v-for="item in scorllList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="执行时间：" prop="zxsj">
            <el-input
              v-model="form.zxsj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="form.zqsz == 1">
        <el-col :span="12">
          <el-form-item label="选择时间段">
            <el-time-picker
              v-model="value1"
              is-range
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="form.zqsz == 2">
        <el-col>
          <el-form-item label="选择时间">
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0" />
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="form.zqsz == 3">
        <el-col>
          <el-form-item label="选择时间段">
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0" />
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in citiess" :key="city" :label="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="节假日是否归集：" prop="sfgj">
            <el-input
              v-model="form.sfgj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row style="background-color:#CCCCCC">
        <el-col>
          <el-form-item label="帮助信息：" prop="sysStudentNumber">
            <ul>
              <li>归集金额单位设置可参考如下公式:归集金额=归集金额+(归集金额%归集金额单位) (注:%为取余) 归集金额与归集单位的余数为零，才能全部归集 </li>
              <li>执行时间录入格式为：[小时：分钟] 例如09:00、23:59</li>
              <li>调拨额度设置中可以录入的数据为： 1、2、3、4、5、6、7、8、9、0、+、-、*、/、%、(、) </li>
              <li>调拨启动条件中可以录入的数据为： 1、2、3、4、5、6、7、8、9、0、+、-、*、/、>、<、>=、<=、(、)、or、and</li>
            </ul>
          </el-form-item>
        </el-col>

      </el-row>

    </el-form>

    <div class="dialog-footer">
      <el-button type="primary" @click="dialogObj.show = false">保存</el-button>
      <el-button type="primary" @click="dialogObj.show = false">校验</el-button>
      <el-button type="primary" @click="dialogObj.show = false">删除</el-button>
      <el-button type="primary" @click="dialogObj.show = false">激活</el-button>
      <el-button type="primary" @click="dialogObj.show = false">停止</el-button>
      <el-button @click="dialogObj.show = false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import { COLLECTIONLIST, SCORLLLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      scorllList: SCORLLLIST,
      collectionList: COLLECTIONLIST,
      checkAll: false,
      cities: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ],
      citiess: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31'
      ],
      checkedCities: [],
      value: '',
      placeholderTips: placeholderTips,
      form: {
        clbh: '',
        clmc: '',
        gjfs: '',
        gjbl: '',
        clzt: '激活',
        jjfszl: '',
        zqsz: '',
        zxsj: '',
        sfgj: ''

      },
      options: [
        {
          label: '日',
          value: 1
        },
        {
          label: '周',
          value: 2
        },
        {
          label: '月',
          value: 3
        }
      ],
      rules: {
        gjfs: [
          { required: true, message: '请选择归集方式', trigger: 'blur' }
        ],
        gjbl: [
          { required: true, message: '请填写归集比例', trigger: 'blur' }
        ],
        zqsz: [
          { required: true, message: '请选择周期设置', trigger: 'blur' }
        ],
        zxsj: [
          { required: true, message: '请填写周期设置', trigger: 'blur' }
        ],
        sfgj: [
          { required: true, message: '请选择节假日是否归集', trigger: 'blur' }
        ]

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
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
          this.form.clzy = '激活'
        })
      }
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
