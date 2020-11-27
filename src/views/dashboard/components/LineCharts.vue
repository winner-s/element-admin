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
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
    },
    lineChartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mycharts: null
    }
  },
  watch: {
    lineChartData: {
      deep: true,
      handler(val) {
        this._setOption(val.inPrice, val.outPrice)
      }
    }
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
              background: '#6a7985'
            }
          }
        },
        legend: {
          data: ['项目借款', '流动资金借款', '负债合计'],
          top: '20',
          right: '10'
        },
        grid: {
          left: '20',
          top: '50',
          right: '20',
          bottom: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['禹道北京分公司', '禹道上海分公司', '禹道深圳分公司'],
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        color: ['#FBD337', '#37CBCB', '#1890FF'],
        series: [
          {
            name: '',
            type: 'bar',
            data: [2500, 1000, 5000],
            barWidth: 30,
          },
          {
            name: '',
            type: 'bar',
            data: [2000, 4000, 4000],
            barWidth: 30
          },
          {
            name: '',
            type: 'bar',
            data: [1800, 3200, 3000],
            barWidth: 30
          }
        ]
      })
    }
  }
}
</script>
<style></style>
