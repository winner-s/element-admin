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
            prop="sysStudentNumber"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="策略名称："
            prop="sysStudentName"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="留底余额(元)：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="执行状态：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
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
          <el-form-item label="加急发送指令：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12"> </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="周期设置：" prop="sysStudentNumber">
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="执行时间：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="value == 1">
        <el-col :span="12">
          <el-form-item label="选择时间段">
            <el-time-picker
              is-range
              v-model="value1"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              size="mini"
            >
            </el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="value == 2">
        <el-col>
          <el-form-item label="选择时间">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <div style="margin: 15px 0"></div>
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="value == 3">
        <el-col >
          <el-form-item label="选择时间段">
           <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <div style="margin: 15px 0"></div>
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in citiess" :label="city" :key="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="节假日是否下拨：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12"> </el-col>
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

export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      checkAll: false,
      cities: ['星期天', '星期一', '星期二','星期三','星期四','星期五','星期六',],
      citiess: ['01', '02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24',
      '25','26','27','28','29','30','31'],
      checkedCities:[],
      value: '',
      placeholderTips: placeholderTips,
      form: {},
      options: [
        {
          label: '日',
          value: 1,
        },
        {
          label: '周',
          value: 2,
        },
        {
          label: '月',
          value: 3,
        },
      ],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {},
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
