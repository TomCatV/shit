<!-- 饼状图 -->
<template>
  <div class="pie-chart">
    <div
      :id="id"
      :class="className"
      :style="{ height: chartHeight, width }"
    ></div>
    <div class="loop-bg">
      <img
        class="loop-img"
        src="../../../../assets/images/bgScreen/loop-bg.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

//参数container为图表盒子节点.charts为图表节点

const props = defineProps({
  id: {
    type: String,
    default: "pieChart",
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
    // bottom: "2%",
    containLabel: true,
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "right",
    data: ["单位1", "单位2", "单位3"],
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
    icon: "circle", //图标样式设置
    itemHeight: 8, //修改icon图形大小
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data: [
        {
          value: 200,
          name: "单位1",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: "#4E93F9" },
              { offset: 1, color: "#021FCA" },
            ]),
          },
        },
        {
          value: 260,
          name: "单位2",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: "#40BB4F" },
              { offset: 1, color: "#7FEB8C" },
            ]),
          },
        },
        {
          value: 335,
          name: "单位3",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#ffc300" },
              { offset: 1, color: "#fff6b7" },
            ]),
          },
        },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        show: true,
        color: "#fff",
      },
      labelLine: {
        lineStyle: {
          // color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
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

onActivated(() => {
  if (chart.value) {
    chart.value.resize();
  }
});
</script>
<style lang="scss" scoped>
.pie-chart {
  position: relative;
  // height: 100%;
  .left-table {
    position: absolute;
    bottom: 100px;
    width: 100%;
  }
  .loop-bg {
    position: absolute;
    z-index: 999;
    left: 50%;
    top: 55%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    transform: translate(-50%, -80%);
  }
  .loop-img {
    width: 70px;
    height: 70px;
  }
}
</style>
