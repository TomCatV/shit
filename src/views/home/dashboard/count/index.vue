<template>
  <div class="count-page">
    <div class="title">
      <span
        @click="goto"
        style="color: #4e5969; margin-right: 16px; cursor: pointer"
        >首页</span
      >
      <span>/ 统计信息</span>
    </div>
    <div class="count-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="数据统计" name="first" class="first-contet">
          <div v-if="activeName === 'first'">
            <el-radio-group v-model="searchType" style="margin-bottom: 30px">
              <el-radio-button label="空间碎片">空间碎片</el-radio-button>
              <el-radio-button label="空间目标">空间目标</el-radio-button>
              <el-radio-button label="空间物体">空间物体</el-radio-button>
              <el-radio-button label="空间天气">空间天气</el-radio-button>
            </el-radio-group>
            <div class="card-content">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">存储数据监控</div>
              </div>
              <div class="search">
                <div>
                  <el-radio v-model="firstModel.timeType" label="1" border
                    >本周</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="2" border
                    >本月</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="3" border
                    >本季</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="4" border
                    >全年</el-radio
                  >
                </div>
                <div style="margin-left: 32px">
                  <el-date-picker
                    v-model="firstModel.time"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  />
                </div>
              </div>
              <BarMoreChart />
            </div>
            <div class="card-content card-bottom">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">存储设备磁盘状态</div>
              </div>
              <div class="search">
                <div>
                  <el-radio v-model="firstModel.timeType" label="1" border
                    >本周</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="2" border
                    >本月</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="3" border
                    >本季</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="4" border
                    >全年</el-radio
                  >
                </div>
                <div style="margin-left: 32px">
                  <el-date-picker
                    v-model="firstModel.time"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  />
                </div>
              </div>
              <el-row class="bottom-content">
                <el-col :span="8">
                  <!-- <WaterChart /> -->
                  <dv-water-level-pond
                    :config="[55, 45]"
                    shape="round"
                    style="width: 200px; height: 200px"
                  />
                </el-col>
                <el-col :span="16">
                  <LineChart1 />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="数据需求统计" name="second">
          <div v-if="activeName === 'second'">
            <el-radio-group v-model="searchType" style="margin-bottom: 30px">
              <el-radio-button label="空间碎片">空间碎片</el-radio-button>
              <el-radio-button label="空间目标">空间目标</el-radio-button>
              <el-radio-button label="空间物体">空间物体</el-radio-button>
              <el-radio-button label="空间天气">空间天气</el-radio-button>
            </el-radio-group>
            <div class="card-content">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">数据需求分布统计</div>
              </div>
              <div>地图</div>
            </div>
            <div class="card-content card-bottom">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">用户访问次数统计</div>
              </div>
              <div class="search">
                <div>
                  <el-radio v-model="firstModel.timeType" label="1" border
                    >本周</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="2" border
                    >本月</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="3" border
                    >本季</el-radio
                  >
                  <el-radio v-model="firstModel.timeType" label="4" border
                    >全年</el-radio
                  >
                </div>
              </div>
              <div :gutter="20" class="bottom-content">
                <div class="left-bottom">
                  <LineChart2 />
                </div>
                <div class="right-bottom">
                  <LineChart3 />
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="系统建设情况" name="third">
          <div v-if="activeName === 'third'">
            <div class="card-content" style="height: 320px">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">系统简介</div>
              </div>
              <div class="card-text">
                XXX信息共享平台主要服务于空间天气空间，基于空间天气，空间物体，空间目标，空间天气等数据，基于雷达，望远镜，摄像等空基和地基载体获取的相关数据，进行共享操作，系统建设周期未X年，主要设计XX模块，共享模块，存储模块，计算模块，包含30多个分子系统，基于分布式任务调度引擎，微服务应用架构，可视化引擎等技术，建设具有可扩展能力的通用平台，具备制定和修改存储策略和动态生效功能，对数据进行兼容性转换，存储，检索，维护，备份等，完成共性数据的整个生命周期内的统一管理。信息共享平台主要服务于空间天气空间，基于空间天气，空间物体，空间目标，空间天气等数据，基于雷达，望远镜，摄像等空基和地基载体获取的相关数据，进行共享操作，系统建设周期未X年，主要设计XX模块，共享模块，存储模块，计算模块，包含30多个分子系统，基于分布式任务调度引擎，微服务应用架构，可视化引擎等技术，建设具有可扩展能力的通用平台，具备制定和修改存储策略和动态生效功能，对数据进行兼容性转换，存储，检索，维护，备份等，完成共性数据的整个生命周期内的统一管理
              </div>
            </div>
            <div class="card-content" style="height: 100%">
              <div class="card-title">
                <div class="title-icon"></div>
                <div class="title-text">系统能力</div>
              </div>
              <div class="third-bottom-content">
                <ul class="card-bottom-content">
                  <li
                    class="item-content"
                    v-for="item in firstList"
                    :key="item.name"
                    @click="goJump(item)"
                  >
                    <img class="item-img" :src="item.imgUrl" alt="" />
                    <div class="card-text">
                      <div class="left">
                        <div class="circle"></div>
                        <div class="card-name">{{ item.name }}</div>
                      </div>
                      <el-button
                        type="primary"
                        :icon="Search"
                        class="search-but"
                        >查看</el-button
                      >
                    </div>
                    <div class="des">{{ item.desc }}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Refresh, Search } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import { watch } from "vue";
import shopping1 from "@/assets/images/home/shopping1.png";
import shopping2 from "@/assets/images/home/shopping2.png";

import manage1 from "@/assets/images/home/manage-1.png";
import manage2 from "@/assets/images/home/manage-2.png";
import manage3 from "@/assets/images/home/manage-3.png";
import manage4 from "@/assets/images/home/manage-4.png";
import manage5 from "@/assets/images/home/manage-5.png";
import manage6 from "@/assets/images/home/manage-6.png";
import manage7 from "@/assets/images/home/manage-7.png";

import BarMoreChart from "./components/BarMoreChart.vue";
import LineChart1 from "./components/LineChart1.vue";
import LineChart2 from "./components/LineChart2.vue";
import LineChart3 from "./components/LineChart3.vue";

// import WaterChart from "./components/WaterChart.vue";

const goto = () => {
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
    code: "202404100001",
    type: "光学测轨数据",
    level: "L0",
    startTime: "2024-04-10 10:30:00",
    term: "1个月",
    mode: "FTP",
    status: "已审批",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    id: "002",
    code: "202404100001",
    type: "光学测轨数据",
    level: "L0",
    startTime: "2024-04-10 10:30:00",
    term: "1个月",
    mode: "FTP",
    status: "已审批",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    id: "003",
    code: "202404100001",
    type: "光学测轨数据",
    level: "L0",
    startTime: "2024-04-10 10:30:00",
    term: "1个月",
    mode: "FTP",
    status: "已审批",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    id: "004",
    code: "202404100001",
    type: "光学测轨数据",
    level: "L0",
    startTime: "2024-04-10 10:30:00",
    term: "1个月",
    mode: "FTP",
    status: "已审批",
    pushTime: "2024-04-10 10:30:00",
  },
  {
    id: "005",
    code: "202404100001",
    type: "光学测轨数据",
    level: "L0",
    startTime: "2024-04-10 10:30:00",
    term: "1个月",
    mode: "FTP",
    status: "已审批",
    pushTime: "2024-04-10 10:30:00",
  },
]);
const router = useRouter();
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
const list = ref([
  {
    id: "001",
    imgUrl: shopping1,
    name: "GOES16 X射线通量",
    desc: "GOES卫星监测的每日X射线通量数据",
    source: "B4",
  },
  {
    id: "002",
    imgUrl: shopping2,
    name: "白光日冕仪（SOHO）数据",
    desc: "LASCO/C2、C3日冕成像图",
    source: "B4",
  },
  {
    id: "003",
    imgUrl: shopping1,
    name: "FY-2H电子通量",
    desc: "FY-2H卫星监测的每日电子通量数据",
    source: "B6",
  },
  {
    id: "004",
    imgUrl: shopping2,
    name: "电离TEC数据",
    desc: "全球实时电离层TEC Map",
    source: "B6",
  },
]);
const total = list.value.length;

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
const activeName = ref("first");
const handleClick = (tab, event) => {
  console.log(tab, event);
};
const searchType = ref("空间碎片");
const radio1 = ref("1");
const firstModel = ref({
  timeType: "1",
  time: "",
});
const firstList = ref([
  {
    name: "共享数据管理分系统",
    imgUrl: manage1,
    desc: "共享数据管理分系统是共享服务平台的数据基础支撑系统，负责将空间目标、空间碎片、空间物体、空间天气的监测数据、数据产品、信息产品从支撑平台或业务系统......",
    // path: "/monitorData/dataAccess",
  },
  {
    name: "数据共享服务分系统",
    imgUrl: manage2,
    dec: "数据共享服务分系统",
    // path: "/sharedPortalManagement/personalCenter",
  },
  {
    name: "共享服务支持分系统",
    imgUrl: manage3,
    desc: "共享服务支持分系统",

    // path: "/system/user",
  },
  {
    name: "数据同步管理分系统",
    imgUrl: manage4,
    desc: "数据同步管理分系统",
  },
  {
    name: "跨网安全交换分系统",
    imgUrl: manage5,
    desc: "跨网安全交换分系统",
  },
  {
    name: "运行数据分析分系统",
    imgUrl: manage6,
    desc: "运行数据分析分系统",
  },
  {
    name: "综合信息显示分系统",
    imgUrl: manage7,
    desc: "综合信息显示分系统",
  },
]);
const secondList = ref([
  {
    name: "数据同步管理分系统",
    imgUrl: manage4,
  },
  {
    name: "跨网安全交换分系统",
    imgUrl: manage5,
  },
  {
    name: "运行数据分析分系统",
    imgUrl: manage6,
  },
  {
    name: "综合信息显示分系统",
    imgUrl: manage7,
  },
]);
const goJump = (item: any) => {
  router.push(item.path);
  localStorage.setItem("currentModel", item.name);
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
.count-page {
  // background-color: #faf8f8;
  // background-image: url("../../../assets/images/home/home-bg.png");
  // background-repeat: no-repeat; /* 如果需要，设置不重复 */
  // background-position: center; /* 设置图片居中 */
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
  .count-content {
    // height: 100%;
    width: 1440px;
    min-height: calc(100vh - 122px);
    box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
      0px 1px 0px 0px #e5e6eb;
    margin: 0 auto;
    padding: 20px;
    .first-contet {
      // padding: 20px
    }
    .card-content {
      height: 400px;
      border-radius: 16px;
      padding: 20px;
      background: #ffffff;

      box-shadow: 0px 2.5px 33px 0px rgba(42, 28, 205, 0.06);
      .card-title {
        height: 48px;
        display: flex;
        align-items: center;
        .title-icon {
          background: url("../../../assets/images/home/shopping-title-icon.png")
            no-repeat;
          background-size: contain;
          width: 10px;
          height: 10px;
        }
        .title-text {
          height: 24px;
          font-family: MicrosoftYaHei;
          font-size: 16px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0.04em;
          color: #000000;
          margin-left: 10px;
        }
      }
      .search {
        display: flex;
        justify-content: flex-end;
      }
      .card-text {
        font-family: Microsoft YaHei;
        font-size: 16px;
        font-weight: normal;
        line-height: 36px;
        text-align: justify; /* 浏览器可能不支持 */
        letter-spacing: 0.06em;

        font-variation-settings: "opsz" auto;
        color: #4e5969;
      }
    }
    .card-bottom {
      height: 520px;
      margin: 20px 0;
    }
    .bottom-content {
      height: 470px;
      display: flex;
      justify-content: space-between;
      .left-bottom,
      .right-bottom {
        height: 470px;
        width: 50%;
      }
    }
    .third-bottom-content {
      margin: 0 auto;
      .card-bottom-content {
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        // justify-content: flex-start;
        // margin: 100px 0;
      }
      .item-content {
        border: 1px solid #e5e8ef;
        width: 495px;
        margin: 24px 50px;
        height: 338px;
        text-align: center;
        position: relative;
        border-radius: 16px;
        padding: 8px;
        .item-img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .card-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          width: 100%;
          border-radius: 16px;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 12px;
          .left {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .circle {
            width: 10px;
            height: 10px;
            background: #6aa1ff;
            border-radius: 50%;
            margin-right: 14px;
          }
          .card-name {
            color: #000000;
            font-size: 16px;
            font-weight: 700;
          }
        }
        .search-but {
          margin-left: 56px;
          padding: 4px 16px;
          margin-right: 20px;
          height: 32px;
          background: #165dff;
        }
        .des {
          padding: 10px;
          // margin: 10px;
          height: 108.45px;
          width: 100%;
          opacity: 1;

          background: rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(10px);
          box-shadow: 6px 0px 20px 0px rgba(34, 87, 188, 0.1);
          position: absolute;
          bottom: 0;
          left: 0;
          text-align: left;
        }
      }
    }
  }
}
</style>
