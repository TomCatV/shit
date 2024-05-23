<!-- 双曲线 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "lineChart",
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
    required: true,
  },
  height: {
    type: String,
    default: "280px",
    required: true,
  },
});

const options = {
  grid: {
    top: "3%",
    left: "2%",
    right: "3%",
    bottom: 10, // 调整这个值可以控制底部与横坐标的距离
    containLabel: true,
    z: 1,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  legend: {
    x: "right",
    y: "top",
    data: ["需求数量", "成功率"],
    textStyle: {
      color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: [
    {
      type: "category",
      data: [
        "2024/04/01",
        "2024/04/02",
        "2024/04/03",
        "2024/04/04",
        "2024/04/05",
        "2024/04/06",
        "2024/04/07",
      ],
      axisLine: {
        show: true, // 是否显示坐标轴轴线
        lineStyle: {
          color: {
            type: "linear", // 线性渐变
            x: 1, // x:  从左向右 1 ——> 0
            y: 0, // y:  从上向下 1 ——> 0
            x2: 0, // x2: 从右向左 1 ——> 0
            y2: 0, // y2: 从下向上 1 ——> 0
            colorStops: [
              { offset: 0, color: "#27457b" },
              { offset: 0.5, color: "#6684bd" },
              { offset: 1, color: "#cadafc" },
            ],
          },
          width: "4", // 坐标轴线线宽
          type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
      },
      axisTick: {
        show: false, // 是否显示坐标轴刻度
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        color: "#FFF", // 刻度标签文字的颜色
      },
    },
  ],
  yAxis: [
    {
      name: "需求数量",
      type: "value",
      min: 0,
      max: 100,
      interval: 25,
      axisLine: {
        show: true, // 是否显示坐标轴轴线
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#27457b" },
            { offset: 0.5, color: "#6684bd" },
            { offset: 1, color: "#cadafc" },
          ]),
          width: "4", // 坐标轴线线宽
          type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
      },
      splitLine: {
        lineStyle: {
          color: "#426180",
          type: "dashed", // 线型为虚线
        },
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        interval: "0", //坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        color: "#FFF", // 刻度标签文字的颜色
      },
    },
    {
      type: "value",
      name: "成功率",
      nameTextStyle: {
        color: "#fff",
        fontSize: 12,
      },
      min: 0,
      max: 100,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      plitLine: {
        show: false,
      },
      axisLabel: {
        formatter: "{value}%",
        textStyle: {
          color: "#fff",
        },
      },
    },
  ],
  series: [
    {
      name: "需求数量",
      type: "line",
      smooth: true,
      symbol: "none",
      data: [30, 50, 60, 50, 60, 30, 25, 10],
      lineStyle: {
        color: "#70d9fc", //用于设置折线颜色
        width: 2, //折现粗细
      },
    },

    // 底部的椭圆形(象形柱图):pictorialBar
    {
      type: "pictorialBar", // pictorialBar(象形柱图)
      label: {
        // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
        show: true, //是否显示标签
        position: ["17", "-30"], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
        color: "#01E4FF",
        fontSize: 14,
      },
      symbolSize: [40, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
      symbolOffset: [0, 10], // 图形相对于原本位置的偏移
      z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
      itemStyle: {
        // 图形样式
        // echarts.graphic.LinearGradient(echarts内置的渐变色生成器)
        // 4个参数用于配置渐变色的起止位置,这4个参数依次对应右 下 左 上
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          // 这里 offset: 0 1 ,表示从下往上的渐变色
          {
            offset: 0, // 0%处的颜色
            color: "#397D90",
          },
          {
            offset: 1, // 100%处的颜色
            color: "#0A497E",
          },
        ]),
      },
      data: [20, 60, 70, 50, 80, 60, 50],
    },
    // 中间的长方形柱状图(柱状图):bar
    {
      type: "bar", // 柱状图
      barWidth: 40, // 柱条的宽度,不设时自适应
      barGap: "0%", // 柱子与柱子之间的距离
      itemStyle: {
        // 图形样式
        // color支持(rgb(255,255,255)、rgba(255,255,255,1)、#fff,也支持渐变色和纹理填充)
        // 下面就是使用线性渐变
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: "linear",
          global: false,
          colorStops: [
            {
              offset: 0, // 0%处的颜色
              color: "#366FEA",
            },
            {
              offset: 1, // 100%处的颜色
              color: "rgba(216, 216, 216, 0)",
            },
          ],
        },
      },
      data: [20, 60, 70, 50, 80, 60, 50],
    },
    // 顶部的椭圆形(象形柱图):pictorialBar
    {
      type: "pictorialBar",
      symbolSize: [40, 20],
      symbolOffset: [0, -10],
      z: 12,
      symbolPosition: "end",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0, // 0%处的颜色
              color: "#021FCA",
            },
            {
              offset: 1, // 100%处的颜色
              color: "#4E93F9",
            },
          ],
          false
        ),
      },
      data: [20, 60, 70, 50, 80, 60, 50],
    },
  ],
};

const chartHeight = ref("280px");

const chart = ref<any>("");
onMounted(() => {
  chartHeight.value = props.height;
  // 图表初始化
  chart.value = markRaw(
    echarts.init(document.getElementById(props.id) as HTMLDivElement)
  );

  chart.value.setOption(options);

  const app = document.getElementById("app");
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 大小自适应
  window.addEventListener("resize", () => {
    resizeChart(app, viewportHeight);
  });

  const resizeChart = (app, viewportHeight) => {
    if (app?.offsetHeight === viewportHeight) {
      chartHeight.value = "280px";
      chart.value.getDom().style.height = "280px";
    } else {
      chartHeight.value = "420px";
      chart.value.getDom().style.height = "420px";
    }
    chart.value.resize();
  };
});

onActivated(() => {
  if (chart.value) {
    chart.value.resize();
  }
});
</script>
<style lang="scss" scoped></style>
