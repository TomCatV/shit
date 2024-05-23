<template>
  <div class="shopping-page">
    <div class="title">
      <span
        @click="gotoHome"
        style="color: #4e5969; margin-right: 16px; cursor: pointer"
        >首页</span
      >
      <span
        @click="gotoNotice"
        style="color: #4e5969; margin-right: 16px; cursor: pointer"
        >/ 通知公告</span
      >
      <span>/ 公告详情</span>
    </div>
    <div class="shopping-content">
      <div class="table-content">
        <div class="grid-body" style="padding-top: 0">
          <h3 class="notice-text">{{ obj.name }}</h3>
          <div class="small-title">
            <div class="left">
              <div>发布时间：{{ obj.time }}</div>
              <div>来源：{{ obj.source }}</div>
            </div>
            <div class="right">
              <div>[字体： 大 中 小]</div>
              <div>打印本页</div>
              <div>分享</div>
            </div>
          </div>
          <div class="content">{{ obj.content }}</div>
          <div class="notice-footer">
            <div>特此通知</div>
            <div>
              <div style="margin-bottom: 20px">{{ obj.source }}</div>
              <div>{{ obj.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Refresh, Search } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import { watch } from "vue";
import shopping1 from "@/assets/images/home/shopping1.png";
import shopping2 from "@/assets/images/home/shopping2.png";

// import { useRouter } from "vue-router";
const router = useRouter();

const handleDetail = () => {
  router.push("/noticeDetail");
};
const gotoNotice = () => {
  router.push("/notice");
};
const gotoHome = () => {
  router.push("/dashboard");
};
const headerStyle = ref({
  height: "40px",
  background: "#F7F9FC",
  fontSize: "14px",
  fontWeight: 700,
  color: "#000",
  borderColor: "#E5E6EB",
});
const tableCellstyle = ref({
  height: "40px",
  background: "#ffff",
  fontSize: "14px",
  fontWeight: "normal",
  color: "#4E5969",
  borderColor: "#E5E6EB",
});
const tableList = ref([
  {
    id: "001",
    name: "2024年4月新闻发布会",
    level: "2",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    name: "2024年4月新闻发布会",
    level: "2",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    name: "2024年4月新闻发布会",
    level: "2",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    name: "2024年4月新闻发布会",
    level: "2",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    name: "2024年4月新闻发布会",
    level: "2",
    pushTime: "2024-04-10 10:30:00",
  },
]);
const path = ref("");
const cityOptions = ["上海", "北京", "广州", "深圳"];
const checkAll = ref(false);
const checkedCities = ref(["上海", "北京"]);
const cities = cityOptions;
const isIndeterminate = ref(true);
const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cityOptions : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value) => {
  let checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
const selectTotal = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
});
const searchForm = ref({
  code: "",
  type: "",
  status: "",
  time: "",
});
const statusOPtions = ref([
  {
    label: "待审批",
    id: "1",
  },
  {
    label: "审批通过",
    id: "2",
  },
  {
    label: "未通过",
    id: "3",
  },
]);
const typeOptions = ref([]);
const obj = ref({
  name: "关于风云四号A星东西轨道控制的业务公告",
  time: "2023年12月26日",
  source: "国家卫星气象中心",
  content:
    "根据《2023年风云静止气象卫星业务运行及安全管理实施方案》气测函(2023〕24号，现定于12月8日(星期五)北京时间16:16至16:44对风云四号A星实施东西轨道控制，轨控期间地面应用系统将停止接收风云四号A星的云图。",
});

const selectId = ref([]);
// 勾选
const handleSelect = (val, row) => {
  selectId.value = [];
  val.forEach((element) => {
    selectId.value.push(element.id);
  });
};
const handleSizeChange = () => {};
const handleCurrentChange = () => {};
const handleQuery = () => {};
const deleteData = async () => {
  await ElMessageBox.confirm("数据删除后不可恢复，确认执行删除操作？", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async (flag) => {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    })
    .catch((err) => {
      console.log(err);
      ElMessage({
        type: "info",
        message: "取消",
      });
    });
};
const handleClear = async () => {
  await ElMessageBox.confirm("确定清空购物车的所有数据？", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async (flag) => {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    })
    .catch((err) => {
      console.log(err);
      ElMessage({
        type: "info",
        message: "取消",
      });
    });
};
const activeName = ref("doing");
const handleClick = (tab, event) => {
  console.log(tab, event);
};
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    path.value = newValue.fullPath;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.shopping-page {
  background-color: #faf8f8;
  background-image: url("../../../assets/images/home/home-bg.png");
  background-repeat: no-repeat; /* 如果需要，设置不重复 */
  background-position: center; /* 设置图片居中 */
  background-size: 100% 100%;
  min-height: calc(100vh - 64px);
  width: 100%;
  .title {
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding-left: 280px;
    // border: 1px solid #c0cbe8;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #000000;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
      0px 1px 0px 0px #e5e6eb;
    margin-bottom: 20px;
  }
  .shopping-content {
    width: 1440px;
    margin: 0 auto;
    .table-content {
      height: calc(100vh - 20px);
      background: #fff;
      padding: 40px 20px;
      margin-top: 14px;
      margin-bottom: 20px;
      .notice-text {
        height: 80px;
        opacity: 1;
        font-family: Microsoft YaHei;
        font-size: 48px;
        font-weight: bold;
        line-height: 80px;
        letter-spacing: 0.08em;

        font-variation-settings: "opsz" auto;
        /* 纯黑 */
        color: #000000;
        margin-bottom: 35px;
        text-align: center;
      }
      .small-title {
        height: 48px;
        opacity: 1;

        font-family: Microsoft YaHei;
        font-size: 18px;
        font-weight: bold;
        line-height: 48px;
        text-align: justify; /* 浏览器可能不支持 */
        letter-spacing: 0.06em;

        font-variation-settings: "opsz" auto;
        /* 纯黑 */
        color: #000000;
        display: flex;
        padding: 0 36px;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        // padding-bottom: 20px;
        // justify-content: space-between;
        .left,
        .right {
          width: 40%;
          display: flex;
          justify-content: space-between;
        }
      }
      .content {
        padding: 70px 70px 40px 70px;
        font-family: Microsoft YaHei;
        font-size: 16px;
        font-weight: normal;
        line-height: 36px;
        text-align: justify; /* 浏览器可能不支持 */
        letter-spacing: 0.06em;

        font-variation-settings: "opsz" auto;
        color: #3d3d3d;
      }
      .notice-footer {
        display: flex;
        justify-content: space-between;
        font-family: Microsoft YaHei;
        font-size: 16px;
        font-weight: normal;
        line-height: 28px;
        text-align: justify; /* 浏览器可能不支持 */
        letter-spacing: 0.06em;

        font-variation-settings: "opsz" auto;
        /* 纯黑 */
        color: #000000;
        padding-left: 114px;
        padding-right: 80px;
      }
    }
  }
}
</style>
