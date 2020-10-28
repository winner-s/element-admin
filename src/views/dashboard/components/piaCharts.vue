<template>
  <div ref="myCharts" style="width:100%;height:300px" />
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'

require('echarts/theme/macarons') // echarts theme
export default {
  mixins: [resize],
  props: ['tableData'],

  data() {
    return {
      mycharts: null
    }
  },
  watch: {
    tableData: function(newVal, OldVal) {
      console.log(newVal, OldVal)
      this._setOtion()
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
      this._setOtion()
    },
    _setOtion() {
      const list = []
      this.tableData.forEach((res, index) => {
        list[index] = {
          value: res.value,
          name: res.name
        }
      })
      this.mycharts.setOption({
        type: 'scroll',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '80',
          top: '90',
          data: list
        },
        color: ['#F2637B', '#3AA0FF', '#4ECB73'],
        series: [
          {
            name: '前置机状态',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['50%', '50%'],
            data: list,
            animationDuration: 2600,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            }
          }
        ]
      })
    }
  }
}
</script>
<style></style>
