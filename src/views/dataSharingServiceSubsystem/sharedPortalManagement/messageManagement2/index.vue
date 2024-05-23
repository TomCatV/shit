<template>
  <!-- 共享数据名称 -->
  <div>
    <div class="box">
      <div class="screen_box">
        <div class="screen_item_box">
          <div class="screen_item_one">
            <el-tag type="primary" effect="dark">按天统计</el-tag>
          </div>
          <div class="screen_item">
            <el-tag>按周统计</el-tag>
          </div>
          <div class="screen_item">
            <el-tag>按月统计</el-tag>
          </div>
          <div class="screen_item">
            <el-tag>按年统计</el-tag>
          </div>
        </div>

        <div class="screen_button_box">
          <el-button color="#165DFF" @click="editInfoClick">
            <el-icon :size="size" :color="color">
              <Upload />
            </el-icon>
            导出报表</el-button
          >
        </div>
      </div>

      <div class="table_box">
        <el-table
          :data="tableData"
          border
          :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
        >
          <el-table-column
            label="序号"
            width="60"
            type="index"
            align="center"
          />
          <el-table-column
            prop="name"
            label="单位"
            width="180"
            align="center"
          />
          <el-table-column prop="type" label="数据种类" align="center" />
          <el-table-column prop="status" label="数据条数" align="center" />
          <el-table-column prop="miji" label="数据值" align="center" />
          <el-table-column prop="time" label="时间" align="center" />
        </el-table>
        <el-pagination layout="total,prev, pager, next" :total="1000" />
      </div>
      <div class="table_box">
        <el-table
          :data="tableData2"
          border
          :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
        >
          <el-table-column prop="name" label="" width="180" align="center" />
          <el-table-column prop="type" label="检测数据" align="center" />
          <el-table-column prop="status" label="数据产品" align="center" />
          <el-table-column prop="miji" label="信息产品" align="center" />
        </el-table>
        <el-pagination layout="total,prev, pager, next" :total="1000" />
      </div>
      <div class="box3">
        <div class="pie_box">
          <div
            id="pie"
            ref="chartContainer"
            style="width: 70%; height: 100%"
          ></div>
          <div class="legend">
            <div class="item" v-for="(item, index) in pieData" :key="index">
              <div class="dian color"></div>
              <div class="text">{{ item.title }}</div>
              <div class="number color">{{ item.data }}</div>
            </div>
          </div>
        </div>

        <div class="detail_box">
          <div class="item" v-for="(item, index) in pieData" :key="index">
            <div class="top inner">{{ item.title }}</div>
            <div class="bottom inner">{{ item.data }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";
import * as echarts from "echarts";

const screenName = ref("");
const typeValue = ref("");
const statusValue = ref("");
const timeValue = ref("");
const viewPage = ref(false);
const pieData = reactive([
  {
    title: "空间目标",
    data: "30T",
  },
  {
    title: "空间物体",
    data: "25T",
  },
  {
    title: "空间天气",
    data: "35T",
  },
  {
    title: "空间碎片",
    data: "10T",
  },
]);
const chartContainer = ref(null);
const option = reactive({
  title: {
    show: false,
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center",
  },
  grid: {
    left: "0%",
    // right: "10%",
    top: "5%",
    width: "100%",
    // bottom: "0%",
    containLabel: true,
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    show: false,
    orient: "vertical",
    right: "20%", // 设置图例距离右侧的距离
    top: "center",
  },
  series: [
    {
      name: "空气质量",
      type: "pie",
      radius: "70%",
      data: [
        { value: 30, name: "空间目标", data: "30T" },
        { value: 25, name: "空间物体" },
        { value: 10, name: "空间天气" },
        { value: 35, name: "空间碎片" },
      ],
      label: {
        show: true,
        position: "inside",
        formatter: "{d}%", // 显示百分比
        color: "white", // 设置标签文字颜色为白色
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});

const hintDialogVisible = ref(false);
const lookDialogVisible = ref(false);
let chartInstance: echarts.ECharts | null = null;
const typeOptions = [
  {
    value: "subscribe",
    label: "数据订阅",
  },
  {
    value: "download",
    label: "数据在线下载",
  },
];
const statusOptions = [
  {
    value: "read",
    label: "已读",
  },
  {
    value: "unread",
    label: "未读",
  },
];
const timeOptions = [
  {
    value: "7",
    label: "最近7天",
  },
  {
    value: "30",
    label: "最近30天",
  },
  {
    value: "60",
    label: "最近60天",
  },
];

const tableData = ref([
  {
    name: "xx单位",
    type: "空间目标",
    status: "30",
    miji: "200",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "xx单位",
    type: "空间目标",
    status: "30",
    miji: "200",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "xx单位",
    type: "空间目标",
    status: "30",
    miji: "200",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "xx单位",
    type: "空间目标",
    status: "30",
    miji: "200",
    time: "2024-04-14 13:21:34",
  },
]);
const tableData2 = ref([
  {
    name: "空间目标",
    type: "20T",
    status: "10T",
    miji: "21",
  },
  {
    name: "空间物体",
    type: "20T",
    status: "10T",
    miji: "21",
  },
  {
    name: "空间天气",
    type: "20T",
    status: "10T",
    miji: "21",
  },
  {
    name: "空间碎片",
    type: "20T",
    status: "10T",
    miji: "21",
  },
]);

const batchDeleteClick = () => {
  hintDialogVisible.value = true;
};
const hintCancelClick = () => {
  hintDialogVisible.value = false;
};
const hintConfirmClick = () => {
  hintDialogVisible.value = false;
};
function initializeChart() {
  chartInstance = echarts.init(chartContainer.value);
  chartInstance.setOption(option);
  window.addEventListener("resize", resizeChart);
}

function resizeChart() {
  if (chartInstance) {
    chartInstance.resize();
  }
}

onMounted(() => {
  initializeChart();
});

onUnmounted(() => {
  if (chartInstance) {
    window.removeEventListener("resize", resizeChart);
    chartInstance.dispose();
  }
});
const lookClick = () => {
  viewPage.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/styles/backstage_management_system.scss";
.screen_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.table_box {
  padding-top: 0;
}
::v-deep .el-table {
  margin-bottom: 20px !important;
}
.box3 {
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 360px;
  margin-bottom: 20px;
  .pie_box {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .legend {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      .item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
        .dian {
          width: 15px;
          height: 15px;
          border-radius: 3px;
          background-color: #3f6ee4;
          margin-right: 10px;
        }
        .text {
          margin-right: 10px;
        }
        .number {
          font-weight: bolder;
          color: #3f6ee4;
          margin-right: 10px;
        }
      }
      .item:nth-child(1) .dian {
        background-color: #3f6ee4;
      }
      .item:nth-child(1) .number {
        color: #3f6ee4;
      }
      .item:nth-child(2) .dian {
        background-color: #06a8f9;
      }
      .item:nth-child(2) .number {
        color: #06a8f9;
      }
      .item:nth-child(3) .dian {
        background-color: #f2c924;
      }
      .item:nth-child(3) .number {
        color: #f2c924;
      }
      .item:nth-child(4) .dian {
        background-color: #00b578;
      }
      .item:nth-child(4) .number {
        color: #00b578;
      }
    }
  }
  .detail_box {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      width: 23%;
      height: 80px;
      .inner {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bolder;
      }
      .bottom {
        color: #000;
        font-weight: normal;
        border: 1px solid #ccc;
      }
    }
    .item:nth-child(1) .top {
      background-color: #3f6ee4;
    }
    .item:nth-child(2) .top {
      background-color: #06a8f9;
    }
    .item:nth-child(3) .top {
      background-color: #f2c924;
    }
    .item:nth-child(4) .top {
      background-color: #00b578;
    }
  }
}
</style>
