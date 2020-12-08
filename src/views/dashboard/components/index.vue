<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">展示列表设置</h3>

      <el-checkbox-group
        v-model="checkList"
        class="box"
        @change="checkChange"
      >
        <el-checkbox label="结算笔数">结算笔数</el-checkbox>
        <el-checkbox label="结算金额">结算金额</el-checkbox>
        <el-checkbox label="资金流入">资金流入</el-checkbox>
        <el-checkbox label="资金流出">资金流出</el-checkbox>
        <el-checkbox label="资金归集">资金归集</el-checkbox>
        <el-checkbox label="资金下拨">资金下拨</el-checkbox>
        <el-checkbox
          label="预算执行情况"
        >预算执行情况</el-checkbox>
      </el-checkbox-group>

    </div>
  </div>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      checkList: ['结算笔数', '结算金额', '资金流入', '资金流出']
    }
  },
  computed: {

  },
  methods: {
    checkChange(res) {
      console.log(res)
      this.$emit('checkChange', res)
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}
.drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
}

.box {
  line-height: 22px;
}
</style>
