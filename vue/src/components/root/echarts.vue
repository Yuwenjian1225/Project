<template>
    <div>
        <div ref="chartColumn" id="myChart" style="width:100%; height:395px;margin-top:1rem"></div>
    </div>
</template>
  
<script>
import * as echarts from 'echarts';
import api from '@/api/root/rootApi.js'


export default {
    data() {
        this.chartColumn = null;
        return {
            date: [],
            option: {
                title: {
                    left: 'center',
                    text: '平台近一周订单金额',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: '{c0}元'
                },

                xAxis: {
                    type: 'category',
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        color: '#fff'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        color: '#fff'
                    }
                },
                series: [
                    {
                        data: [],
                        type: 'line',
                        itemStyle: {
                            color: "#8e55e9" //图标颜色
                        },
                        lineStyle: {
                            width: 2,  //连线粗细
                            color: "#1196db"  //连线颜色
                        },
                    }
                ]
            },
        }
    },
    mounted() {
        api.getMoney().then(result => {
            let res = result.data
            for (let i = 0; i < res.length; i++) {
                const dateTime = new Date(res[i].date);
                const date = dateTime.toISOString().split('T')[0];
                this.option.xAxis.data.unshift(date);
                this.option.series[0].data.unshift(res[i].total_money);
            }

        })
    },
    methods: {
        initChart() {
            let myChart = echarts.getInstanceByDom(document.getElementById("myChart"))
            if (myChart == null) {
                this.chartColumn = echarts.init(this.$refs.chartColumn)
                this.chartColumn.setOption(this.option)
            } else {
                echarts.dispose(document.getElementById('myChart'));
                this.chartColumn = echarts.init(this.$refs.chartColumn)
                this.chartColumn.setOption(this.option)
            }

        }
    },
    watch: {
        option: {
            handler() {
                this.initChart();
            },
            deep: true,
        },
    },
    beforeDestroy() {
        if (this.chartColumn) {
            this.chartColumn.dispose();
        }
    }

}

</script>
  