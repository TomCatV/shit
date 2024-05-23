<template>
  <div class="dashboard-container">
    <div class="first">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel
        height="600px"
        v-model="currentIndex"
        :autoplay="true"
        :autoplay-speed="3000"
        indicator-position="none"
        @change="changeCarousel"
      >
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <div class="left-content">
            <div class="first-title">{{ item.title }}</div>
            <div class="first-content">{{ item.content }}</div>
          </div>
          <div class="img-line">
            <img class="first-img" :src="item.imgUrl" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="indicators">
        <div v-for="(item, index) in carouselList" :key="index">
          <div
            :class="
              currentIndex === index ? 'indicator-active' : 'indicator-item'
            "
            :style="{
              backgroundColor:
                currentIndex === index ? activeColor : inactiveColor,
            }"
          ></div>
          <div v-if="currentIndex === index" class="lubo-num">
            <span class="big-num">{{ item.current }}</span>
            <span>/</span>
            <span class="small-num">{{ item.total }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="title">
        <div class="big-title">统计信息</div>
        <div class="title-more" @click="gotoCount">更多 >></div>
      </div>
      <div class="second-content">
        <div>
          <div class="data-total-title">数据总量</div>
          <div class="data-total">
            <div class="left-num">
              <div class="left-info">
                <span class="num">16975.2</span>
                <span class="unit">万条</span>
              </div>
              <div class="left-img" style="margin-bottom: 38px"></div>
            </div>
            <div class="arror"></div>
            <div class="right-num">
              <div class="right-item">
                <div class="right-icon">
                  <img
                    class="icon-img"
                    src="../../../assets/images/home/total.png"
                    alt=""
                  />
                </div>
                <div>
                  <div class="right-text">数据目录总量</div>
                  <div class="right-info">
                    <span class="right-num">783</span>
                    <span class="right-unit">个</span>
                  </div>
                </div>
              </div>
              <div class="right-item">
                <div class="right-icon">
                  <img
                    class="icon-img"
                    src="../../../assets/images/home/down.png"
                    alt=""
                  />
                </div>
                <div>
                  <div class="right-text">下载次数</div>
                  <div class="right-info">
                    <span class="right-num">16039</span>
                    <span class="right-unit">次</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="data-total-title">存储总量</div>
          <div class="data-total">
            <div class="left-num">
              <div class="left-info">
                <span class="num">163.2</span>
                <span class="unit">TB</span>
              </div>

              <div class="left-img"></div>
            </div>
            <div class="arror"></div>
            <div class="right-num">
              <div class="right-item">
                <div class="right-icon">
                  <img
                    class="icon-img"
                    src="../../../assets/images/home/visit.png"
                    alt=""
                  />
                </div>
                <div>
                  <div class="right-text">平台访问次数</div>
                  <div class="right-info">
                    <span class="right-num">2219340</span>
                    <span class="right-unit">次</span>
                  </div>
                </div>
              </div>
              <div class="right-item">
                <div class="right-icon">
                  <img
                    class="icon-img"
                    src="../../../assets/images/home/register.png"
                    alt=""
                  />
                </div>
                <div>
                  <div class="right-text">平台注册用户数</div>
                  <div class="right-info">
                    <span class="right-num">16039</span>
                    <span class="right-unit">人</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third">
      <div>
        <div class="title">
          <div class="big-title">公告通知</div>
          <div class="title-more" @click="gotoNotice">更多 >></div>
        </div>
        <ul class="info-list">
          <li class="list-item" v-for="item in noticeList" :key="item.id" @click="gotoNoticeDetail(item)">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-time">{{ item.time }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="title">
          <div class="big-title">政策法规</div>
          <div class="title-more" @click="gotoPolicy">更多 >></div>
        </div>
        <ul class="info-list">
          <li class="list-item" v-for="item in policyList" :key="item.id" @click="gotoPolicyDetail(item)">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-time">{{ item.time }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="title">
          <div class="big-title">行业动态</div>
          <div class="title-more" @click="gotoIndustry">更多 >></div>
        </div>
        <ul class="info-list">
          <li class="list-item" v-for="item in industryList" :key="item.id" @click="gotoIndustryDetail(item)">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-time">{{ item.time }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fourth">
      <div class="title">
        <div class="fourth-title">
          <img src="../../../assets/images/home/ziyuan.png" alt="" />
          <span class="big-title">资源下载</span>
        </div>
        <!-- <div class="title-more">更多 >></div> -->
      </div>
      <ul class="fourth-content">
        <li
          v-for="item in assetsList"
          :key="item.id"
          @mouseover="onMouseOverT(item)"
          @mouseleave="onMouseOutT(item)"
        >
          <div v-if="item.isShow" class="fourth-item">
            <img class="assets-img" :src="item.imgUrl" alt="" />
            <div class="assets-name">{{ item.name }}</div>
            <div class="assets-version">版本：{{ item.version }}</div>
          </div>
          <div class="fourth-item assets-info" v-else>
            <div class="assets-top">
              <div class="assets-time">上传日期：{{ item.time }}</div>
              <div class="assets-size">软件大小：{{ item.size }}</div>
            </div>
            <div class="assets-desc">{{ item.desc }}</div>
            <div class="down-but">
              <img
                class="down-img"
                src="../../../assets/images/home/down-but.png"
                alt=""
              />
              <div class="down-text" @click="handleDownLoad(item)">
                立即下载
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="left-circle"></div>
    <div class="right-circle"></div>
    <!-- github角标 -->
    <!-- <github-corner class="github-corner" /> -->
    <!-- 
    <el-card shadow="never">
      <el-row justify="space-between">
        <el-col :span="18" :xs="24">
          <div class="flex h-full items-center">
            <img
              class="w-20 h-20 mr-5 rounded-full"
              :src="userStore.user.avatar + '?imageView2/1/w/80/h/80'"
            />
            <div>
              <p>{{ greetings }}</p>
              <p class="text-sm text-gray">
                今日天气晴朗，气温在15℃至25℃之间，东南风。
              </p>
            </div>
          </div>
        </el-col>

        <el-col :span="6" :xs="24">
          <div class="flex h-full items-center justify-around">
            <el-statistic
              v-for="item in statisticData"
              :key="item.key"
              :value="item.value"
            >
              <template #title>
                <div class="flex items-center">
                  <svg-icon :icon-class="item.iconClass" size="20px" />
                  <span class="text-[16px] ml-1">{{ item.title }}</span>
                </div>
              </template>
              <template v-if="item.suffix" #suffix>/100</template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>
    </el-card> -->

    <!-- 数据卡片 -->
    <!-- <el-row :gutter="10" class="mt-3">
      <el-col
        :xs="24"
        :sm="12"
        :lg="6"
        v-for="(item, index) in cardData"
        :key="index"
      >
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="text-[var(--el-text-color-secondary)]">{{
                item.title
              }}</span>
              <el-tag :type="item.tagType">
                {{ item.tagText }}
              </el-tag>
            </div>
          </template>

          <div class="flex items-center justify-between mt-5">
            <div class="text-lg text-right">
              {{ Math.round(item.count) }}
            </div>
            <svg-icon :icon-class="item.iconClass" size="2em" />
          </div>

          <div
            class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
          >
            <span> {{ item.dataDesc }} </span>
            <span> {{ Math.round(item.count * 15) }} </span>
          </div>
        </el-card>
      </el-col>
    </el-row> -->

    <!-- Echarts 图表 -->
    <!-- <el-row :gutter="10" class="mt-3">
      <el-col
        :xs="24"
        :sm="12"
        :lg="8"
        class="mb-2"
        v-for="item in chartData"
        :key="item"
      >
        <component
          :is="chartComponent(item)"
          :id="item"
          height="400px"
          width="100%"
          class="bg-[var(--el-bg-color-overlay)]"
        />
      </el-col>
    </el-row> -->
  </div>
</template>

<script setup lang="ts">
import guge from "@/assets/images/home/guge.png";
import shuju from "@/assets/images/home/shuju.png";
import putty from "@/assets/images/home/putty.png";
import huohu from "@/assets/images/home/huohu.png";
import lunboFirst from "@/assets/images/home/first.png";
import lunboSecond from "@/assets/images/home/second.png";
import lunboThird from "@/assets/images/home/first.png";
import { useRouter } from "vue-router";
const router = useRouter();

const gotoCount = () => {
  router.push("/count");
};
const gotoNotice = () => {
  router.push("/notice");
};
const gotoPolicy = () => {
  router.push("/policy");
};
const gotoIndustry = () => {
  router.push("/industry");
};
const gotoNoticeDetail = () => {
  router.push("/noticeDetail");
};
const gotoPolicyDetail = () => {
  router.push("/policyDetail");
};
const gotoIndustryDetail = () => {
  router.push("/industryDetail");
};
const carouselList = ref([
  {
    title: "共享数据管理分系统",
    imgUrl: lunboFirst,
    content:
      "共享数据管理分系统是共享服务平台的数据基础支撑系统，负责将空间目标、空间碎片、空间物体、空间天气的监测数据、数据产品、信息产品从支撑平台或业务系统进行获取、质控、归一化处理后，统一编目并存入到共享平台数据库中，完成从源端系统引接数据到共享平台中的全流程管理，对接入数据建立索引，为其它分系统提供数据支撑。",
    current: "01",
    total: "03",
  },
  {
    title: "数据共享服务分系统",
    imgUrl: lunboSecond,
    content:
      "数据共享服务分系统为系统用户提供数据共享服务门户，用户通过门户进行空间目标、空间天气等数据的检索和订购，系统根据数据在各节点的分布情况进行数据准备，数据准备完全后对用户发出下载通知，除用户订购外还提供订阅、主动推送、在线下载、离线分发等多种服务方式。",
    current: "02",
    total: "03",
  },
  {
    title: "共享数据服务支持分系统",
    imgUrl: lunboThird,
    content:
      "共享数据管理分系统是共享服务平台的数据基础支撑系统，负责将空间目标、空间碎片、空间物体、空间天气的监测数据、数据产品、信息产品从支撑平台或业务系统进行获取、质控、归一化处理后，统一编目并存入到共享平台数据库中，完成从源端系统引接数据到共享平台中的全流程管理，对接入数据建立索引，为其它分系统提供数据支撑。",
    current: "03",
    total: "03",
  },
]);
const noticeList = ref([
  {
    id: "001",
    name: "2024年4月新闻发布会",
    time: "2024-03-12",
  },
  {
    id: "002",
    name: "关于风云四号B星快扫加密观测的业务公告",
    time: "2024-03-10",
  },
  {
    id: "003",
    name: "2024年世界气象日在京单位开放活动公告",
    time: "2024-03-09",
  },
  {
    id: "004",
    name: "关于风云四号B星实施南北控制期间停图的业务公告",
    time: "2024-03-08",
  },
  {
    id: "005",
    name: "关于风云二号H星东西轨道控制的业务公告",
    time: "2024-03-07",
  },
  {
    id: "006",
    name: "关于风云二号G、H星春季地影的业务公告",
    time: "2024-03-06",
  },
  {
    id: "007",
    name: "第五届空间天气科学青年创新奖通知",
    time: "2024-03-04",
  },
]);
const policyList = ref([
  {
    id: "001",
    name: "中华人民共和国保守国家秘密法",
    time: "2024-03-12",
  },
  {
    id: "002",
    name: "中华人民共和国网络安全法",
    time: "2024-03-10",
  },
  {
    id: "003",
    name: "中华人民共和国数据安全法",
    time: "2024-03-09",
  },
  {
    id: "004",
    name: "联合信息共享服务平台数据共享管理制度",
    time: "2024-03-08",
  },
  {
    id: "005",
    name: "空间目标数据共享制度",
    time: "2024-03-07",
  },
  {
    id: "006",
    name: "空间天气数据共享制度",
    time: "2024-03-06",
  },
  {
    id: "007",
    name: "数据需求申请与数据共享服务管理制度",
    time: "2024-03-04",
  },
]);
const industryList = ref([
  {
    id: "001",
    name: "特大地磁暴!",
    time: "2024-03-12",
  },
  {
    id: "002",
    name: "第四届全球华人空间/太空天气科学大会",
    time: "2024-03-10",
  },
  {
    id: "003",
    name: "“空间天气日”大型科普活动系列－第一季",
    time: "2024-03-09",
  },
  {
    id: "004",
    name: "空间天气科普进西部 —“空间天气日”大型科普活动",
    time: "2024-03-08",
  },
  {
    id: "005",
    name: "如何计划一次说走就走的极光旅行！",
    time: "2024-03-07",
  },
  {
    id: "006",
    name: "新疆现罕见极光？竟是近20年最大地磁暴爆发！",
    time: "2024-03-06",
  },
  {
    id: "007",
    name: "太阳到底长啥模样？看看风云三号E星为它拍的高清照",
    time: "2024-03-04",
  },
]);
const assetsList = ref([
  {
    id: "001",
    name: "Chrome谷歌浏览器",
    version: "99.0.4844.74",
    time: "2023-10-24",
    size: "100M",
    desc: "Google Chrome是由Google开发的一款设计简单、高效的Web浏览工具。Google Chrome的特点是简洁、快速。Google Chrome支持多标签浏览，每个标签页面都在独立的“沙箱”内运行，在提高安全性的同时，一个标签页面的崩溃也不会导致其他标签页面被关闭。此外，Google Chrome基于更强大的JavaScript V8引擎，这是当前Web浏览器所无法实现的。",
    imgUrl: guge,
    isShow: true,
  },
  {
    id: "002",
    name: "数据下载服务客户端",
    version: "V1.0.0",
    time: "2024-04-15",
    size: "50M",
    desc: "用户可以通过客户端下载数据，在数据到达后，在下载服务客户端提示用户，用户可以通过客户端下载数据。客户端由下载任务调度/客户端数据下载服务/消息提醒与记录显示等模块组成。",
    imgUrl: shuju,
    isShow: true,
  },
  {
    id: "003",
    name: "PuTTY",
    version: "0.60",
    time: "2023-09-09",
    size: "40M",
    desc: "PuTTY是一个Telnet/SSH/rlogin/纯TCP以及串行阜连线软件。较早的版本仅支援Windows平台，在最近的版本中开始支援各类Unix平台，并打算移植至Mac OS X上。除了官方版本外，有许多非官方的团体或个人将PuTTY移植到其他平台上，像是以Symbian为基础的移动电话。",
    imgUrl: putty,
    isShow: true,
  },
  {
    id: "004",
    name: "火狐浏览器",
    version: "V124.1.0",
    time: "2023-12-23",
    size: "56M",
    desc: "火狐浏览器（Mozilla Firefox）是一款由Mozilla公司研发的开源网页浏览器，它以保障用户隐私、提高上网安全性和支持开放网络标准为核心理念。Firefox基于开源许可证发布，其源代码可供全球开发者审查、参与和贡献，这使其成为一个开放且透明的项目。跨平台支持广泛，适用于Windows、macOS、Linux等多种桌面操作系统，同时也提供Android和iOS移动平台版本。火狐浏览器因其强大的隐私保护措施、开放的开发模式以及灵活的可定制性而受到广大用户的喜爱和推崇。",
    imgUrl: huohu,
    isShow: true,
  },
]);
const isShow = ref(true);
const currentIndex = ref(0);
const activeColor = ref("#165DFF");
const inactiveColor = ref("rgba(14, 66, 210, 0.16)");
const changeCarousel = (index: any) => {
  currentIndex.value = index;
};
const onMouseOverT = (item: any) => {
  item.isShow = false;
};
const onMouseOutT = (item: any) => {
  item.isShow = true;
};
const handleDownLoad = (item: any) => {
  ElMessage.success("下载成功");
};
// import type { EpPropMergeType } from "element-plus/es/utils/vue/props/types";
// defineOptions({
//   name: "Dashboard",
//   inheritAttrs: false,
// });

// import { useUserStore } from "@/store/modules/user";
// import { useTransition, TransitionPresets } from "@vueuse/core";

// const userStore = useUserStore();
// const date: Date = new Date();

// const greetings = computed(() => {
//   const hours = date.getHours();
//   if (hours >= 6 && hours < 8) {
//     return "晨起披衣出草堂，轩窗已自喜微凉🌅！";
//   } else if (hours >= 8 && hours < 12) {
//     return "上午好，" + userStore.user.nickname + "！";
//   } else if (hours >= 12 && hours < 18) {
//     return "下午好，" + userStore.user.nickname + "！";
//   } else if (hours >= 18 && hours < 24) {
//     return "晚上好，" + userStore.user.nickname + "！";
//   } else {
//     return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛！";
//   }
// });

// const duration = 5000;

// // 销售额
// const amount = ref(0);
// const amountOutput = useTransition(amount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// amount.value = 2000;

// // 访客数
// const visitCount = ref(0);
// const visitCountOutput = useTransition(visitCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// visitCount.value = 2000;

// // IP数
// const dauCount = ref(0);
// const dauCountOutput = useTransition(dauCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// dauCount.value = 2000;

// // 订单量
// const orderCount = ref(0);
// const orderCountOutput = useTransition(orderCount, {
//   duration: duration,
//   transition: TransitionPresets.easeOutExpo,
// });
// orderCount.value = 2000;

// // 右上角数量
// const statisticData = ref([
//   {
//     value: 99,
//     iconClass: "message",
//     title: "消息",
//     key: "message",
//   },
//   {
//     value: 50,
//     iconClass: "todolist",
//     title: "待办",
//     suffix: "/100",
//     key: "upcoming",
//   },
//   {
//     value: 10,
//     iconClass: "project",
//     title: "项目",
//     key: "project",
//   },
// ]);

// interface CardProp {
//   title: string;
//   tagType: EpPropMergeType<
//     StringConstructor,
//     "primary" | "success" | "info" | "warning" | "danger",
//     unknown
//   >;
//   tagText: string;
//   count: any;
//   dataDesc: string;
//   iconClass: string;
// }
// // 卡片数量
// const cardData = ref<CardProp[]>([
//   {
//     title: "访客数",
//     tagType: "success",
//     tagText: "日",
//     count: visitCountOutput,
//     dataDesc: "总访客数",
//     iconClass: "visit",
//   },
//   {
//     title: "IP数",
//     tagType: "success",
//     tagText: "日",
//     count: dauCountOutput,
//     dataDesc: "总IP数",
//     iconClass: "ip",
//   },
//   {
//     title: "销售额",
//     tagType: "primary",
//     tagText: "月",
//     count: amountOutput,
//     dataDesc: "总IP数",
//     iconClass: "money",
//   },
//   {
//     title: "订单量",
//     tagType: "danger",
//     tagText: "季",
//     count: orderCountOutput,
//     dataDesc: "总订单量",
//     iconClass: "order",
//   },
// ]);
// // 图表数据
// const chartData = ref(["BarChart", "PieChart", "RadarChart"]);
// const chartComponent = (item: string) => {
//   return defineAsyncComponent(() => import(`./components/${item}.vue`));
// };
</script>

<style lang="scss" scoped>
.dashboard-container {
  // text-align: center;
  // margin: 0 auto;
}
.first {
  height: 600px;
  background: url("../../../assets/images/home/lunbobg.png") no-repeat;
  background-size: 100%;
  position: relative;
  .el-carousel__item {
    display: flex;
    justify-content: center;
    padding-top: 80px;
    // padding: 0 264px 0 240px;
    .left-content {
      padding-top: 64px;
      margin-right: 32px;
      .first-title {
        height: 80px;
        font-family: Microsoft YaHei;
        font-size: 48px;
        font-weight: bold;
        line-height: 80px;
        letter-spacing: 0.1em;
        margin-bottom: 24px;
      }
    }
    .first-content {
      width: 560px;
      height: 140px;
      font-family: Microsoft YaHei;
      font-size: 16px;
      font-weight: normal;
      line-height: 28px;
      text-align: justify; /* 浏览器可能不支持 */
      letter-spacing: 0.06em;
      font-variation-settings: "opsz" auto;
      color: #3d3d3d;
    }
    .img-line {
      width: 848px;
      height: 424px;
      border-radius: 16px;
      border: 2px solid #ffffff;
      padding: 16px 24px;
    }
  }
  :deep .el-carousel__button {
    background: rgba(14, 66, 210, 0.16);
  }
  :deep .el-carousel__indicator.is-active button {
    background: rgba(14, 66, 210, 0.16);
  }
  .indicators {
    display: flex;
    margin-top: 10px;
    position: absolute;
    right: 100px;
    bottom: 40px;
    .lubo-num {
      margin-top: 10px;
      color: #165dff;
      letter-spacing: 0.06em;
      .big-num {
        font-size: 24px;
        font-weight: 400;
      }
      .small-num {
        font-size: 12px;
      }
    }
  }

  .indicator-active {
    width: 80px;
    height: 2px;
    margin: 0 10px;
  }
  .indicator-item {
    width: 80px;
    height: 2px;
    margin: 0 10px;
  }
  .first-img {
    // width: 800px;
    // height: 392px;
    width: 100%;
    height: 100%;
  }
}
.title {
  text-align: center;
  .big-title {
    height: 42px;
    font-family: Microsoft YaHei;
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    letter-spacing: 0.06em;
    margin-bottom: 18px;
  }
  .title-more {
    font-family: Microsoft YaHei;
    font-size: 16px;
    line-height: 16px;
    font-variation-settings: "opsz" auto;
    color: #165dff;
    margin-bottom: 22px;
    cursor: pointer;
  }
}
.second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 87px;
  margin-bottom: 120px;
  .second-content {
    width: 1440px;
    height: 480px;
    border-radius: 16px;
    opacity: 1;
    box-shadow: 0px 2.5px 33px 0px rgba(42, 28, 205, 0.06);
    padding: 40px 150px 40px 100px;
    .data-total-title {
      width: 238px;
      height: 42px;
      font-family: YouSheBiaoTiHei;
      font-size: 32px;
      font-weight: bold;
      line-height: 42px;
      letter-spacing: 0.06em;
      color: #4e5969;
      text-align: center;
    }
    .data-total {
      display: flex;
      align-items: center;
      .left-num {
        margin-top: 15px;
        .left-info {
          position: absolute;
        }
        .num {
          height: 42px;
          font-family: YouSheBiaoTiHei;
          font-size: 36px;
          font-weight: bold;
          line-height: 42px;
          letter-spacing: 0.06em;
          color: #165dff;
        }
        .unit {
          font-size: 24px;
          color: #424e66;
        }
        .left-img {
          background: url("../../../assets/images/home/two-1.png") no-repeat;
          background-size: 100% 100%;
          width: 238px;
          height: 124px;
        }
      }
      .arror {
        background: url("../../../assets/images/home/arror.png") no-repeat;
        width: 56px;
        height: 40px;
        margin-left: 100px;
        margin-right: 128px;
        background-size: 100%;
      }
      .right-num {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .right-item {
          display: flex;
          .right-icon {
            width: 64px;
            height: 64px;
            margin-right: 6px;
          }
          .right-text {
            height: 20px;
            font-family: Microsoft YaHei;
            font-size: 16px;
            line-height: 20px;
            color: #4e5969;
            margin-bottom: 8px;
          }
          .right-info {
            display: flex;
            align-items: center;
          }
          .right-num {
            height: 40px;
            font-family: Microsoft YaHei;
            font-size: 36px;
            font-weight: bold;
            line-height: 40px;
            color: #1d2129;
          }
          .right-unit {
            height: 20px;
            font-family: Microsoft YaHei;
            font-size: 18px;
            line-height: 20px;
            color: #4e5969;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
.third {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 200px;
  .info-list {
    width: 466px;
    height: 320px;
    border-radius: 16px;
    box-shadow: 0px 2.5px 33px 0px rgba(42, 28, 205, 0.06);
    padding: 20px;
    background: #fff;
    .list-item {
      display: flex;
      justify-content: space-between;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      &:hover {
        cursor: pointer;
      }
      .item-time {
        color: #4e5969;
      }
    }
  }
}
.fourth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 255px;
  .fourth-title {
    display: flex;
    justify-content: center;
  }
  .fourth-content {
    display: flex;
    justify-content: space-between;
    width: 1440px;
    position: relative;
    .fourth-item {
      width: 345px;
      height: 320px;
      border-radius: 16px;
      box-shadow: 0px 2.5px 33px 0px rgba(42, 28, 205, 0.06);
      text-align: center;
      background: #fff;
      .assets-img {
        margin-top: 80px;
        margin-bottom: 40px;
      }
      .assets-name {
        height: 26px;
        font-family: Microsoft YaHei;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.04em;
        color: #000000;
        margin-bottom: 16px;
      }
      .assets-version {
        height: 18px;
        font-family: Microsoft YaHei;
        font-size: 14px;
        letter-spacing: 0em;
        color: #8f8f8f;
      }
    }
    .assets-info {
      padding: 40px 32px;
      position: relative;
      background: #fff;
    }
    .assets-top {
      display: flex;
      justify-content: space-between;
      height: 17px;
      font-family: Microsoft YaHei;
      font-size: 13px;
      letter-spacing: 0em;
      color: #000000;
      margin-bottom: 12px;
    }
    .assets-desc {
      font-family: Microsoft YaHei;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.08em;
      color: #566172;
      text-align: left;
    }
    .down-but {
      width: 200px;
      height: 48px;
      border-radius: 8px;
      background: rgba(22, 93, 255, 0.04);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 32px;
      left: 72px;
      cursor: pointer;
      .down-img {
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 12px;
      }
      .down-text {
        height: 26px;
        opacity: 1;
        font-family: Microsoft YaHei;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.04em;
        color: #000000;
      }
    }
  }
}
.left-circle {
  background: url(/src/assets/images/home/left-circle.png) no-repeat;
  background-size: 100%;
  position: absolute;
  left: -1100px;
  bottom: -1300px;
  z-index: -100;
  width: 100%;
  height: 100%;
}
.right-circle {
  background: url(/src/assets/images/home/right-circle.png) no-repeat;
  background-size: 100%;
  position: absolute;
  right: -700px;
  bottom: -1000px;
  z-index: -100;
  width: 100%;
  height: 100%;
}

/**.dashboard-container {
  position: relative;
  padding: 24px;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    border: 0;
  }

  .data-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }

  .svg-icon {
    fill: currentcolor !important;
  }
}
*/
</style>
