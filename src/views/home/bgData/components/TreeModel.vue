<!-- 树形图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import Node from "@/assets/images/bgScreen/bg-data-node.png";
import Node1 from "@/assets/images/bgScreen/bg-data-node-1.png";
import Node2 from "@/assets/images/bgScreen/bg-data-node-2.png";
import Node3 from "@/assets/images/bgScreen/bg-data-node-3.png";

const props = defineProps({
  id: {
    type: String,
    default: "tree-model",
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

const data = {
  name: "数据源",
  // name: "",
  label: {
    width: 100,
    height: 40,
    lineHeight: 40,
    borderWidth: 0.5, // 边框宽度
    borderRadius: 20, // 边框圆角
    // borderColor: "#B034FF", // 文字块的边框色
    // backgroundColor: "#fff",
    borderColor: "transparent",
    backgroundColor: "transparent",
    rich: {
      img1: {
        backgroundColor: {
          image: Node,
        },
        height: 150,
      },
    },
    formatter: function (param) {
      var res = "";
      // res += "{img1|}" + param.name;
      res += "{img1|}";
      return res;
    },
  },
  children: [
    {
      name: "表12",
      children: [
        {
          name: "空值检查 15",
          value: 15,
          // children: [
          //   { name: "Converters", value: 721 },
          //   { name: "DelimitedTextConverter", value: 4294 },
          // ],
        },
        {
          name: "值域检查 10",
          value: 10,
        },
        {
          name: "规范检查 19",
          value: 19,
        },
      ],
    },
    {
      name: "表21",
      children: [
        { name: "重复数据检查 12", value: 12 },
        { name: "记录缺失检查 32", value: 32 },
      ],
    },
    {
      name: "表33",
      children: [
        { name: "引用完整性检查 23", value: 23 },
        { name: "重复数据检查 12", value: 12 },
      ],
    },
  ],
};

const options = {
  grid: {
    top: "3%",
    left: "2%",
    right: "3%",
    containLabel: true,
  },
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "tree",
      id: 0,
      name: "tree1",
      data: [data],

      top: "2%",
      left: "8%",
      bottom: "22%",
      right: "20%",

      initialTreeDepth: 2,
      //   symbol: spirit,  // 1
      //   symbolSize: 20,

      edgeShape: "polyline", // 折线
      edgeForkPosition: "63%", // 正交布局下当边的形状是折线时，子树中折线段分叉的位置。这里的位置指的是分叉点与子树父节点的距离占整个子树高度的百分比。默认取值是 '50%'，可以是 ['0', '100%'] 之间。
      // 注意：该配置项只有在 edgeShape = 'polyline' 时才有效。
      // initialTreeDepth: 3,  // 树图初始展开的层级（深度）

      lineStyle: {
        width: 1, // 线的宽度
        color: "#6AA1FF",
      },

      label: {
        position: "right",
        distance: 20,
        verticalAlign: "middle",
        align: "center",
        color: "#CDE1FD",
        fontSize: "14",
        width: 100,
        height: 40,
        lineHeight: 40,
        borderWidth: 0.5, // 边框宽度
        borderRadius: 20, // 边框圆角
        // borderColor: "#B034FF", // 文字块的边框色
        // backgroundColor: "#fff", // 文字块的背景色
        borderColor: "transparent",
        backgroundColor: "transparent",
        rich: {
          img1: {
            backgroundColor: {
              image: Node1,
            },
            height: 60,
          },
        },
        formatter: function (param) {
          console.log("param", param);
          var res = "";
          res += "{img1|}" + "\n" + param.name;
          return res;
        },
      },
      leaves: {
        // 叶子节点的特殊配置，如上面的树图实例中，叶子节点和非叶子节点的标签位置不同。
        label: {
          // 描述了叶子节点所对应的文本标签的样式。
          position: "right",
          verticalAlign: "middle",
          align: "center",
          color: "#CDE1FD",
          fontSize: "14",
          width: 100,
          height: 40,
          lineHeight: 40,
          borderWidth: 0.5, // 边框宽度
          borderRadius: 20, // 边框圆角
          // borderColor: "#B034FF", // 文字块的边框色
          // backgroundColor: "#fff", // 文字块的背景色
          borderColor: "transparent",
          backgroundColor: "transparent",
          rich: {
            img1: {
              backgroundColor: {
                image: Node2,
              },
              height: 40,
            },
          },
          formatter: function (param) {
            // console.log(333, param.name);

            var res = "";
            res += "{img1|}" + "  " + param.name;
            return res;
          },
        },
      },

      expandAndCollapse: true, // 子树折叠和展开的交互，默认打开
      animationDuration: 550,
      animationDurationUpdate: 750,
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
