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
        title: {
          text: 'Statistics',
          left: '16'
        },
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
          data: ['直接访问', '邮件营销', '联盟广告'],
          top: '20',
          right: '10'
        },
        grid: {
          left: '20',
          top: '60',
          right: '20',
          bottom: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['欧莱股份有限公司', '立讯精密有限公司', '美的集团']
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
            name: '直接访问',
            type: 'bar',
            data: [2500, 1000, 5000],
            barWidth: 30
          },
          {
            name: '邮件营销',
            type: 'bar',
            data: [2000, 4000, 4000],
            barWidth: 30
          },
          {
            name: '联盟广告',
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
