<template>
  <div
    ref="myCharts"
    class="lineCharts"
    :style="{ width: width, height: height }"
  />
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons')
// import { getLineData } from '@/api/dashboard'
export default {
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '280px',
    },
    lineChartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mycharts: null,
    }
  },
  watch: {
    lineChartData: {
      deep: true,
      handler(val) {
        this._setOption(val.inPrice, val.outPrice)
      },
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      if (Object.keys(this.lineChartData).length > 0) {
        this._setOption(this.lineChartData.inPrice, this.lineChartData.outPrice)
      }
    },
    _setOption(inprice = [], outprice = []) {
      this.mycharts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              background: '#6a7985',
            },
          },
        },
        grid: {
          left: '20',
          top: '10',
          right: '20',
          bottom: '0',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
          },
        ],
        yAxis: [
          {
            type: 'category',
            data: ['中国银行',  '交通银行', '招商银行', '工商银行','建设银行'],
          },
        ],
        color: ['#3AA0FF'],
        series: [
          {
            name: '账户数量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      })
    },
  },
}
</script>
<style></style>
