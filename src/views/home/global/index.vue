<template>
  <div class="global-page">
    <!-- <router-view v-if="path === '/global/globalDeatil'" />
    <template v-else> -->
    <div class="title">全局编目</div>
    <div class="global-content">
      <div class="left-content">
        <div class="search">
          <div v-if="isShowSearch">
            <el-input placeholder="请输入" style="width: 630px" />
            <el-button type="primary" :icon="Search" class="search-but"
              >查询</el-button
            >
            <el-button style="margin-right: 84px" :icon="Refresh"
              >重置</el-button
            >
            <el-button type="primary" class="high-but" @click="handleIsShow"
              >高级筛选</el-button
            >
          </div>
          <div v-else>
            <div style="font-size: 16px; margin-bottom: 24px">高级筛选</div>
            <el-form
              ref="searchForm"
              label-position="right"
              label-width="120px"
              :model="searchForm"
            >
              <el-row :gutter="80">
                <el-col :span="12">
                  <el-form-item label="数据名称：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入数据名称"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="数据类型：">
                    <el-input
                      v-model.trim="searchForm.dataType"
                      placeholder="请输入数据类型"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :span="12">
                  <el-form-item label="数据源单位：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入数据源单位"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="来源节点：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入来源节点"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :span="12">
                  <el-form-item label="可共享节点：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入可共享节点"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="密级：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入密级"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :span="12">
                  <el-form-item label="数据要素：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入数据要素"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="时间分辨率：">
                    <el-input
                      v-model.trim="searchForm.dataName"
                      placeholder="请输入时间分辨率"
                      class="append-input"
                      style="width: 100%"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24" style="text-align: center">
                  <el-button
                    type="primary"
                    :icon="Search"
                    class="search-but"
                    @click="handleHighSearch"
                    >查询</el-button
                  >
                </el-col>
              </el-row>
            </el-form>
          </div>
          <el-radio-group v-model="radio" class="search-radio">
            <el-radio-button label="全部" />
            <el-radio-button label="空间碎片" />
            <el-radio-button label="空间目标" />
            <el-radio-button label="空间物体" />
            <el-radio-button label="空间天气" />
          </el-radio-group>
        </div>
        <ul class="content">
          <li
            v-for="item in list"
            :key="item.id"
            class="content-item"
            @click="gotoDetail"
          >
            <div class="content-img">
              <img :src="item.imgUrl" alt="" />
            </div>
            <img
              :src="
                item.dataSource === 'gj'
                  ? gj
                  : item.dataSource === 'j'
                  ? j
                  : item.dataSource === 'm'
                  ? m
                  : ''
              "
              alt=""
              class="data-source"
            />
            <div class="content-detail">
              <div class="name">{{ item.name }}</div>
              <div class="unit">{{ item.unit }}</div>
              <div>
                <div class="item-line">
                  <div class="item-small-model item-left">
                    <div class="item-label">数据大类：</div>
                    <div class="item-value">{{ item.dataBgType }}</div>
                  </div>
                  <div class="item-small-model item-right">
                    <span class="item-label">数据类别：</span>
                    <span class="item-value">{{ item.dataType }}</span>
                  </div>
                </div>
                <div class="item-line">
                  <div class="item-small-model item-left">
                    <div class="item-label">来源节点：</div>
                    <div class="item-value">{{ item.source }}</div>
                  </div>
                  <div class="item-small-model item-right">
                    <div class="item-label">可共享节点：</div>
                    <div class="item-value">{{ item.shareSource }}</div>
                  </div>
                </div>
                <div class="item-line">
                  <div class="item-small-model item-left">
                    <div class="item-label">时间分辨率：</div>
                    <div class="item-value">{{ item.timeRe }}</div>
                  </div>
                  <div class="item-small-model item-right">
                    <div class="item-label">数据要素：</div>
                    <div class="item-value">{{ item.dataElements }}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="pagination-info">
          <pagination
            v-if="total > 0"
            :total="total"
            :page="queryParams.pageNum"
            :limit="queryParams.pageSize"
            @pagination="handleQuery"
          />
        </div>
      </div>
      <div class="right-content">
        <div class="right-title">
          <div style="display: flex; align-items: center">
            <img
              src="../../../assets/images/home/red-icon.png"
              alt=""
              class="red-icon"
            />
            <span class="title-text">为你推荐</span>
          </div>
          <el-button type="primary" class="add-but">添加订阅</el-button>
        </div>
        <ul class="right-list">
          <li v-for="item in recommendList" :key="item.id" class="right-item">
            <img :src="item.imgUrl" alt="" />
            <span class="item-name">{{ item.name }}</span>
          </li>
        </ul>
        <div class="right-title">
          <div style="display: flex; align-items: center">
            <img
              src="../../../assets/images/home/red-icon.png"
              alt=""
              class="red-icon"
            />
            <span class="title-text">数据可视化映射</span>
          </div>
        </div>
        <GraphChart />
        <div class="right-title">
          <div style="display: flex; align-items: center">
            <img
              src="../../../assets/images/home/red-icon.png"
              alt=""
              class="red-icon"
            />
            <span class="title-text">热门数据</span>
          </div>
        </div>
        <ul class="right-list">
          <li v-for="item in recommendList" :key="item.id" class="right-item">
            <img :src="item.imgUrl" alt="" />
            <span class="item-name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- </template> -->
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
import { Refresh, Search } from "@element-plus/icons-vue";
import GraphChart from "./components/GraphChart.vue";
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();
const path = ref("");

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
// 高级筛选条件
const searchForm = ref({
  dataName: "123",
  dataType: "",
});
const list = ref([
  {
    id: "001",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global1,
    dataSource: "gj",
  },
  {
    id: "002",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global2,
    dataSource: "j",
  },
  {
    id: "003",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global3,
    dataSource: "m",
  },
  {
    id: "004",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global4,
    dataSource: "gj",
  },
  {
    id: "005",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global5,
    dataSource: "gj",
  },
  {
    id: "006",
    name: "每5分钟高分电子微分通量",
    unit: "美国国家海洋和大气管理局",
    dataBgType: "光学测轨数据",
    dataType: "磁层",
    source: "B4",
    shareSource: "B1-B7",
    timeRe: "每5分钟",
    dataElements: "",
    imgUrl: global6,
    dataSource: "gj",
  },
]);
const recommendList = ref([
  {
    id: "001",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight1,
  },
  {
    id: "002",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight2,
  },
  {
    id: "003",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight3,
  },
  {
    id: "004",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight4,
  },
  {
    id: "005",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight5,
  },
  {
    id: "006",
    name: "每5分钟高分电子微分通量",
    imgUrl: globalRight6,
  },
]);
const total = list.value.length;
const isShowSearch = ref(true);
/** 查询 */
const handleQuery = () => {};
const handleIsShow = () => {
  isShowSearch.value = false;
  console.log("点击高级搜索", isShowSearch.value);
};
const handleHighSearch = () => {
  isShowSearch.value = true;
  console.log("点击查询", isShowSearch.value);
};
const gotoDetail = () => {
  router.push("/globalDetail");
};
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
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }
  .left-content {
    width: 1180px;
    background: #fff;
    margin-right: 20px;

    .search {
      margin: 20px;
      padding: 28px 32px;
      // height: 140px;
      box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
        0px 1px 0px 0px #e5e6eb;
      .search-but {
        margin-left: 56px;
        padding: 4px 16px;
        margin-right: 20px;
        height: 32px;
        background: #165dff;
      }
      .high-but {
        height: 32px;
        padding: 4px 16px;
        background: #165dff;
      }
      .search-radio {
        margin-top: 20px;
        .el-radio-button {
          margin-right: 8px;
          :deep .el-radio-button__inner {
            display: block;
            width: 120px;
            border-radius: 0;
            border: 1px solid #c0cbe8;
          }
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: wrap;
      padding: 0 20px;
      justify-content: space-between;
      .content-item {
        position: relative;
        width: 360px;
        height: 316px;
        margin: 10px 0;
        border-radius: 16px;
        box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06),
          0px 1px 0px 0px #e5e6eb;
        margin-bottom: 20px;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.56);
        }
        .content-img {
          width: 360px;
          height: 167px;
          background: blue;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
        }
        .data-source {
          position: absolute;
          top: 0;
          right: 0;
        }
        .content-detail {
          padding: 8px 40px;
          .name {
            height: 24px;
            font-family: Microsoft YaHei;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #000000;
          }
          .unit {
            height: 18px;
            font-family: Microsoft YaHei;
            font-size: 14px;
            color: #000000;
            margin-top: 8px;
            margin-bottom: 4px;
          }
          .item-line {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            .item-left {
              width: 150px;
            }
            .item-right {
              width: 120px;
            }
            .item-small-model {
              display: flex;
              height: 24px;
              line-height: 24px;
              text-align: left;
            }
            .item-label {
              text-align: left;
              white-space: nowrap;
              color: #000;
              text-align: left;
            }
            .item-value {
              color: #566172;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .pagination-info {
      float: right;
      margin: 40px;
    }
  }
  .right-content {
    width: 240px;
    background: #fff;
    padding: 16px 10px;
    .right-title {
      height: 32px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 16px;
      .red-icon {
        height: 20px;
      }
      .title-text {
        margin-left: 8px;
        color: #3d3d3d;
      }
      .add-but {
        background: #67c23a;
        border-color: #67c23a;
      }
    }
    .right-list {
      margin-bottom: 36px;
    }
    .right-item {
      display: flex;
      align-items: center;
      height: 36px;
      border-radius: 4px;
      background: rgba(200, 227, 255, 0.08);
      margin: 6px 0;
      .item-name {
        margin-left: 10px;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #000000;
      }
    }
  }
}
</style>
