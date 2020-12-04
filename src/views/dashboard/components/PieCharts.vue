<template>
  <div ref="myCharts" style="width: 100%; height: 300px" />
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
      mycharts: null,
    }
  },
  watch: {
    tableData: function (newVal, OldVal) {
      console.log(newVal, OldVal)
      this._setOtion()
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
      this._setOtion()
    },
    _setOtion() {
      const list = []
      this.tableData.forEach((res, index) => {
        list[index] = {
          value: res.value,
          name: res.name,
        }
      })

      var total = function () {
        var count = 0
        list.map((item) => {
          count += item.value
        })
        return count
      }
      this.mycharts.setOption({
        title: {
          text: '￥' + total(),
          x: '28%',
          y: '38%',
          textAlign: 'center',
          textVerticalAlign: 'middle',
          textStyle: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '28',
          },
        },
        type: 'scroll',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          itemHeight: 9,
          icon: 'circle',
          orient: 'vertical',

          right: '20',
          top: '60',
          data: list,
          formatter: function (name) {
            for (var i = 0; i < list.length; i++) {
              if (name === list[i].name) {
                var per = list[i].value / total()
                per = (per * 100).toFixed(2)
                var arr = [
                  '{a|' + name + '}',
                  '{b|| ' + per + '%}',
                  '{c|￥' + list[i].value + '}',
                ]
                return arr.join(' ')
              }
            }
          },
          textStyle: {
            rich: {
              a: {
                width: 45,
                fontSize: 12,
                padding: [0, 0, 0, 0],
                lineHeight: 12,
                color: '#666666',
              },
              b: {
                width: 45,
                fontSize: 12,
                padding: [0, 0, 0, 0],
                lineHeight: 12,
                color: '#999999',
              },
              c: {
                fontSize: 12,
                padding: [0, 0, 0, 0],
                lineHeight: 12,
                color: '#666666',
              },
            },
          },
        },
        color: ['#FBD337', '#975FE4', '#1890FF', '#F04864', '#13C2C2'],
        series: [
          {
            name: '',
            type: 'pie',
            width: '100%',
            radius: ['50%', '70%'],
            center: ['30%', '42%'],
            data: list,
            animationDuration: 2600,
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            labelLine: {
              show: false,
            },
          },
        ],
      })
    },
  },
}
</script>
<style></style>
