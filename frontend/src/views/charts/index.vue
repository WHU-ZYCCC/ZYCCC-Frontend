<template>
  <div class="Echarts" style="margin-top: 20px">
    <div id="chart1" style="width: 500px;height:500px; float: left" />
    <div id="chart2" style="width: 500px;height:500px; float: left" />
  </div>
</template>

<script>
import echarts from 'echarts'
import { signInAPI } from '@/api/signin'

export default {
  data() {
    return {
      monthStatus: [],
      pieEchart: null,
      pieOption: null,
      lineEchart: null,
      lineOption: null
    }
  },
  created() {
    var that = this
    for (var i = 0; i < 1; i++) {
      that.monthStatus[i] =
        [
          { value: 0, name: '区域外', itemStyle: { normal: { color: 'red' }}},
          { value: 0, name: '区域内', itemStyle: { normal: { color: 'green' }}}
        ]
    }
  },
  mounted() {
    this.myEcharts2()
    this.myEcharts1()
  },
  methods: {
    myEcharts1() {
      this.pieEchart = echarts.init(document.getElementById('chart1'))
      var that = this
      // 指定图表的配置项和数据
      this.pieOption = {
        title: {
          text: '签到情况',
          x: 'left',
          textStyle: {
            color: 'black',
            fontSize: 25
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} 人'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          top: 40,
          itemWidth: 70,
          itemHeight: 30,
          formatter: '{name}',
          textStyle: {
            color: 'black'
          },
          data: [{ name: '区域外', icon: 'rect' }, { name: '区域内', icon: 'rect' }] },
        calculable: true,
        series: [
          {
            name: '签到情况',
            type: 'pie',
            radius: '50%', // 饼图的半径大小
            label: { // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inner', // 标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16 // 文字的字体大小
                },
                formatter: '{d}%'

              }
            },
            data: [
              { value: 0, name: '区域外', itemStyle: { normal: { color: 'red' }}},
              { value: 0, name: '区域内', itemStyle: { normal: { color: 'green' }}}
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.pieOption.series[0].data[0] = that.monthStatus[0][0]
      this.pieOption.series[0].data[1] = that.monthStatus[0][1]
      this.pieEchart.setOption(this.pieOption)
    },
    myEcharts2() {
      signInAPI().getAll().then(res => {
        var that = this
        this.lineOption = {
          title: {
            text: '签到数量',
            x: 'left',
            textStyle: {
              color: 'black',
              fontSize: 25
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
          },
          legend: {
            data: ['日期']
          },
          xAxis: {
            data: []
          },
          yAxis: {
          },
          dataZoom: [
            { // 这个dataZoom组件，默认控制x轴。
              type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
              start: 40, // 左边在 10% 的位置。
              end: 60 // 右边在 60% 的位置。
            },
            { // 这个dataZoom组件，也控制x轴。
              type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
              start: 40, // 左边在 10% 的位置。
              end: 60 // 右边在 60% 的位置。
            }
          ],
          series: [{
            name: '签到人数',
            type: 'line',
            data: [],
            smooth: true // true 为平滑曲线，false为直线
          }]
        }
        // 初始化echarts实例
        that.monthStatus = []
        for (const key in res.data) {
          this.lineOption.xAxis.data.push(key)
          this.lineOption.series[0].data.push(res.data[key].length)
          const status = [
            { value: 0, name: '区域外', itemStyle: { normal: { color: 'red' }}},
            { value: 0, name: '区域内', itemStyle: { normal: { color: 'green' }}}
          ]
          status[0].value = res.data[key].length
          status[1].value = res.data[key].length * 2
          that.monthStatus.push(status)
        }
        this.lineEchart = echarts.init(document.getElementById('chart2'))
        // 使用制定的配置项和数据显示图表
        this.lineEchart.setOption(this.lineOption)
        this.lineEchart.on('click', function(params) {
          console.log(params)
          that.pieOption.series[0].data[0] = that.monthStatus[params.dataIndex][0]
          that.pieOption.series[0].data[1] = that.monthStatus[params.dataIndex][1]
          that.pieEchart.setOption(that.pieOption)
        })
      })
    }
  }
}
</script>

<style>

</style>
