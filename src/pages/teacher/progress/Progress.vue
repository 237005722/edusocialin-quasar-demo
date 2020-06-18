<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-toolbar class="q-mb-xs">
        <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
          <q-breadcrumbs-el icon="home" to="/teacher/classes" />
          <q-breadcrumbs-el label="考试测验列表" icon="extension" to="/teacher/classes/exam"/>
          <q-breadcrumbs-el label="考试测验详细" icon="announcement" />
        </q-breadcrumbs>
        <q-space/>
      </q-toolbar>
    </div>

    <div class="row">
      <div class="col-12">
        <q-card class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-subtitle1">成绩分析</div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>结果分享</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="flex items-start q-gutter-md">
            <q-select dense rounded standout value="" label="选择年级" style="width: 250px">
              <template slot="prepend">
                <q-icon name="event" />
              </template>
            </q-select>
            <q-select dense rounded standout value="" label="选择日期" style="width: 250px">
              <template slot="prepend">
                <q-icon name="event" />
              </template>
            </q-select>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div id="main" class="full-width" style="height:400px;"></div>
          </q-card-section>
          <q-card-section>
            <div id="main2" class="full-width" style="height:400px;"></div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>

</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Progress',
  data () {
    return {
      items: [{}, {}],
      link: 'myClasses'
    }
  },
  created () {
    this.query = this.$route.query
    console.log('classes query', this.query)
  },
  mounted () {
    this.initEcharts()
    this.initEcharts2()
  },
  methods: {
    initEcharts () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      const xAxisData = []
      const data1 = []
      const data2 = []
      for (let i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      const option = {
        title: {
          text: '成绩分析类型1'
        },
        legend: {
          data: ['bar', 'bar2']
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    initEcharts2 () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main2'))

      // 指定图表的配置项和数据
      const data = [
        [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
        [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
      ]

      const option = {
        title: {
          text: '成绩分析类型2'
        },
        legend: {
          right: 10,
          data: ['类目1', '类目2']
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [{
          name: '类目1',
          data: data[0],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(251, 118, 123)'
            }, {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }])
          }
        }, {
          name: '类目2',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2
          },
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(129, 227, 238)'
            }, {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }])
          }
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
</style>
