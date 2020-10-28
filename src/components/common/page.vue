<!--
   element分页器封装组件
  -->
<template>
  <div class="page-div">
    <el-pagination
      v-if="hackReset"
      :page-sizes="[5, 10, 20, 30, 40, 50, 60, 80, 100]"
      :page-size="limit"
      :current-page.sync="nowPage"
      layout="total , sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    total: {
      required: true
    },
    limit: {
      default: 10
    }
  },
  data() {
    return {
      nowPage: 1,
      hackReset: true
    }
  },
  watch: {
    nowPage(value) {
      this.$emit('pageChange', value)
    },
    total(val) {
      this.hackReset = false
      this.$nextTick(() => {
        this.total = val
        this.hackReset = true
      })
    },
    limit(val) {
      this.hackReset = false
      this.$nextTick(() => {
        this.limit = val
        this.hackReset = true
      })
    }
  },

  methods: {
    handleSizeChange(val) {
      this.$emit('sizeChange', val)
      this.nowPage = 1
    }
  }
}
</script>

<style scoped>
.page-div {
  margin-top: 5px;
  display: block;
  text-align: right;
}
</style>
