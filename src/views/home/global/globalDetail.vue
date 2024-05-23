<template>
  <div class="global-page">
    <div class="title">
      <span
        @click="gotoGlobal"
        style="color: #4e5969; margin-right: 16px; cursor: pointer"
        >全局编目</span
      >
      <span>/ 全局编目详情</span>
    </div>
    <div class="global-content">
      <div class="card-top">
        <h3 class="top-title">{{ obj.name }}</h3>
        <ul class="title-content">
          <li class="top-item">
            <div class="top-icon icon-1"></div>
            <div class="info">
              <div class="info-text">产品发布时间</div>
              <div class="info-num">100个</div>
            </div>
          </li>
          <li class="top-item">
            <div class="top-icon icon-2"></div>
            <div class="info">
              <div class="info-text">产品发布时间</div>
              <div class="info-num">42.7MB</div>
            </div>
          </li>
          <li class="top-item">
            <div class="top-icon icon-3"></div>
            <div class="info">
              <div class="info-text">产品发布时间</div>
              <div class="info-num">344次</div>
            </div>
          </li>
          <li class="top-item">
            <div class="top-icon icon-4"></div>
            <div class="info">
              <div class="info-text">产品发布时间</div>
              <div class="info-num">100个</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-center">
        <div class="card-title">
          <div class="card-icon"></div>
          <div class="card-text">基本信息</div>
        </div>
        <div class="card-content">
          <el-row class="card-line">
            <el-col :span="8" class="content-item">
              <div class="item-label">数据名称：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
            <el-col :span="8" class="content-item">
              <div class="item-label">数据大类：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>

            <el-col :span="8" class="content-item">
              <div class="item-label">数据类型：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
          </el-row>
          <el-row class="card-line">
            <el-col :span="8" class="content-item">
              <div class="item-label">数据来源单位：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
            <el-col :span="8" class="content-item">
              <div class="item-label">来源节点：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>

            <el-col :span="8" class="content-item">
              <div class="item-label">可共享节点：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
          </el-row>
          <el-row class="card-line">
            <el-col :span="8" class="content-item">
              <div class="item-label">数据名称：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
            <el-col :span="8" class="content-item">
              <div class="item-label">数据名称：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>

            <el-col :span="8" class="content-item">
              <div class="item-label">数据名称：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
          </el-row>
          <el-row class="card-line">
            <el-col :span="8" class="content-item">
              <div class="item-label">数据名称：</div>
              <div class="item-value">{{ baseObj.name }}</div>
            </el-col>
            <el-col :span="16" />
          </el-row>
        </div>
      </div>
      <div class="card-bottom">
        <!-- <div class="card-title">
          <div class="card-icon"></div>
          <div class="card-text">数据</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gj from "@/assets/images/home/gj.png";
import j from "@/assets/images/home/j.png";
import m from "@/assets/images/home/m.png";

import global1 from "@/assets/images/home/global-1.png";
import global2 from "@/assets/images/home/global-2.png";
import global3 from "@/assets/images/home/global-3.png";
import global4 from "@/assets/images/home/global-4.png";
import global5 from "@/assets/images/home/global-5.png";
import global6 from "@/assets/images/home/global-6.png";

import globalRight1 from "@/assets/images/home/global-right-1.png";
import globalRight2 from "@/assets/images/home/global-right-2.png";
import globalRight3 from "@/assets/images/home/global-right-3.png";
import globalRight4 from "@/assets/images/home/global-right-4.png";
import globalRight5 from "@/assets/images/home/global-right-5.png";
import globalRight6 from "@/assets/images/home/global-right-6.png";

import globalDetail1 from "@/assets/images/home/global-detail-1.png";
import globalDetail2 from "@/assets/images/home/global-detail-2.png";
import globalDetail3 from "@/assets/images/home/global-detail-3.png";
import globalDetail4 from "@/assets/images/home/global-detail-4.png";

import { Refresh, Search } from "@element-plus/icons-vue";
import GraphChart from "./components/GraphChart.vue";
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();
const path = ref("");
const gotoGlobal = () => {
  router.push("/global");
};
const obj = ref({
  name: "GOES16 X射线通量",
  publicTime: "2024-02-23 12:12:12",
  size: "42.7MB",
  visNum: "344次",
  downSize: "3次",
});
const baseObj = ref({
  name: "GOES16 X射线通量",
  bgType: "监测数据",
  type: "GOES数据",
  source: "",
  node: "B5",
  shareNode: "B1-B7",
  power: "1分钟",
  format: "Json",
  element: "质子通量",
  level: "MM",
});
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    path.value = newValue.fullPath;
  },
  { immediate: true }
);
const radio = ref("全部");
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
});
/** 查询 */
const handleQuery = () => {};
</script>

<style lang="scss" scoped>
.global-page {
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
  .global-content {
    width: 1440px;
    margin: 0 auto;
    .card-top {
      height: 272px;
      padding: 56px 100px;
      border-radius: 16px;
      opacity: 1;
      background: rgba(255, 255, 255, 0.66);

      box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
        0px 1px 0px 0px #e5e6eb;
      .top-title {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        line-height: 40px;
        letter-spacing: 0.08em;
        /* 纯黑 */
        color: #000000;
        margin-top: 0;
      }
      .title-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .title-content {
          display: flex;
        }
        .top-item {
          display: flex;
          height: 80px;
          justify-content: space-between;
          align-items: center;
          .top-icon {
            width: 80px;
            height: 80px;
            background-position: center;
            margin-right: 10px;
          }
          .icon-1 {
            background: url("@/assets/images/home/global-detail-1.png")
              no-repeat;
          }
          .icon-2 {
            background: url("@/assets/images/home/global-detail-2.png")
              no-repeat;
          }
          .icon-3 {
            background: url("@/assets/images/home/global-detail-3.png")
              no-repeat;
          }
          .icon-4 {
            background: url("@/assets/images/home/global-detail-4.png")
              no-repeat;
          }
          .info-text {
            height: 40px;
            font-family: Microsoft YaHei;
            font-size: 28px;
            font-weight: bold;
            line-height: 40px;
            letter-spacing: 0.04em;
            color: #000000;
            margin-bottom: 10px;
          }
          .info-num {
            font-family: Microsoft YaHei;
            font-size: 22px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: 0.04em;
            color: #4e5969;
          }
        }
      }
    }
    .card-title {
      display: flex;
      align-items: center;
      .card-icon {
        background: url("../../../assets/images/home/shopping-title-icon.png")
          no-repeat;
        background-size: contain;
        width: 10px;
        height: 10px;
        margin-right: 10px;
      }
      .card-text {
        font-family: Microsoft YaHei;
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        letter-spacing: 0.04em;

        font-variation-settings: "opsz" auto;
        /* 纯黑 */
        color: #000000;
      }
    }
    .card-center {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 200px;
      border-radius: 16px;
      opacity: 1;

      background: #ffffff;

      box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
        0px 1px 0px 0px #e5e6eb;
      padding: 24px;
      .card-content {
        padding: 10px 80px 20px 100px;
        .card-line {
          margin: 7px;
        }
        .content-item {
          display: flex;
          .item-label {
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            letter-spacing: 0px;

            font-variation-settings: "opsz" auto;
            color: #4e5969;

            z-index: 0;
          }
          .item-value {
            margin-left: 8px;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            letter-spacing: 0px;

            font-variation-settings: "opsz" auto;
            color: #1d2129;

            z-index: 0;
          }
        }
      }
    }
    .card-bottom {
      // height: 1167px;
      border-radius: 16px;
      opacity: 1;

      background: #ffffff;

      box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
        0px 1px 0px 0px #e5e6eb;
    }
  }
}
</style>
