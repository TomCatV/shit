<!-- 横向柱状图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "BarCrossChart",
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
    default: "100%",
    required: true,
  },
});

const options = {
  grid: {
    top: "3%",
    left: "2%",
    right: "3%",
    // bottom: "2%",
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      crossStyle: {
        color: "#999",
      },
    },
  },
  legend: {
    x: "right",
    y: "top",
    data: ["空间目标", "空间物体", "空间天气", "空间碎片"],
    textStyle: {
      color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: {
    show: true,
    axisLabel: {
      formatter: "{value}",
      show: true,
      color: "#fff",
    },
    splitLine: { show: false },
    axisLine: {
      show: true,
    },
  },
  yAxis: {
    type: "category",
    inverse: true, // 倒叙
    axisLabel: {
      color: "#fff",
      formatter: (val) => {
        return `${val}`;
      },
    },
    axisLine: {
      show: false, // 轴线
    },
    axisTick: {
      show: false, // 刻度线
    },
    data: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"],
  },
  series: [
    {
      name: "Echarts",
      type: "bar",
      barWidth: 10,
      showBackground: true,
      barMaxWidth: 20,
      barMinWidth: 5,
      itemStyle: {
        borderRadius: [0, 10, 10, 0],
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: "rgba(183, 75, 238)" },
          { offset: 1, color: "rgba(50, 229, 255, 1)" },
        ]),
        borderWidth: 1,
        borderColor: "black",
      },
      data: [50, 100, 150, 200, 220, 250, 300],
    },
  ],
};

const chart = ref<any>("");
onMounted(() => {
  // 图表初始化
  chart.value = markRaw(
    echarts.init(document.getElementById(props.id) as HTMLDivElement)
  );

  chart.value.setOption(options);

  // 大小自适应
  window.addEventListener("resize", () => {
    chart.value.resize();
  });
});

onActivated(() => {
  if (chart.value) {
    chart.value.resize();
  }
});
</script>
<style lang="scss" scoped></style>
