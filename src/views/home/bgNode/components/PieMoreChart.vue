<!-- 饼状图 -->
<template>
  <div class="pie-chart">
    <div :id="id" :class="className" :style="{ height, width }"></div>
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

const props = defineProps({
  id: {
    type: String,
    default: "pieMoreChart",
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
    default: "90%",
    required: true,
  },
});

const options = {
  grid: {
    top: "1%",
    left: "1%",
    right: "1%",
    containLabel: true,
  },
  legend: {
    // orient: "vertical",
    left: "right",
    data: ["推送", "下载"],
    textStyle: {
      color: "#fff",
      fontSize: 10,
    },
    // icon: "circle", //图标样式设置
    itemHeight: 8, //修改icon图形大小
  },

  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  series: [
    //内圈
    {
      name: "次数",
      type: "pie",
      // roseType: "area", //area比例缩放 ，radius
      // radius: ["30%", "40%"],
      radius: "50%",

      center: ["50%", "35%"], //位置
      // color: ["#078686", "#00d0d0", "#034079", "#6f81da", "#00ffb4"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: "inner", //center
          formatter: "{d}%", //{d}
          textStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 14,
          },
        },
        // emphasis: {
        //   show: true,
        //   textStyle: {
        //     fontSize: "30",
        //     fontWeight: "bold",
        //   },
        // },
      },
      labelLine: {
        normal: {
          show: true,
        },
      },

      data: [
        {
          value: 11100,
          name: "推送",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "#4E93F9" },
              { offset: 1, color: "#021FCA" },
            ]),
          },
        },
        {
          value: 2220,
          name: "下载",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "#40BB4F" },
              { offset: 1, color: "#7FEB8C" },
            ]),
          },
        },
      ],
    }, //外圈
    {
      name: "数据量",
      type: "pie",
      radius: ["50%", "70%"],
      center: ["50%", "35%"], //位置

      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: "inner", //center
          formatter: "{d}%", //{d}
          // formatter: function (param) {
          //   return param.name + ":\n" + Math.round(param.percent) + "%";
          // },
          textStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 14,
          },
        },

        emphasis: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          smooth: true,
          lineStyle: {
            width: 2,
          },
        },
      },
      itemStyle: {
        normal: {
          shadowBlur: 30,
          shadowColor: "rgba(0, 0, 0, 0.4)",
        },
      },

      data: [
        {
          value: 21321,
          name: "推送",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: "#4E93F9" },
              { offset: 1, color: "#021FCA" },
            ]),
          },
        },
        {
          value: 1212,
          name: "下载",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: "#40BB4F" },
              { offset: 1, color: "#7FEB8C" },
            ]),
          },
        },
      ],
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
<style lang="scss" scoped>
.pie-chart {
  position: relative;
  height: 100%;
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
    transform: translate(-50%, -145%);
  }
  .loop-img {
    width: 70px;
    height: 70px;
  }
}
</style>
