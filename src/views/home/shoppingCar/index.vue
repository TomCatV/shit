<template>
  <div class="shopping-page">
    <div class="title">购物车</div>
    <div class="shopping-content">
      <!-- <div> -->
      <!-- <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group> -->
      <div class="table-content">
        <div class="search">
          <el-input placeholder="请输入" style="width: 630px" />
          <el-button type="primary" :icon="Search" class="search-but"
            >查询</el-button
          >
          <el-button style="margin-right: 84px" :icon="Refresh">重置</el-button>
        </div>
        <div class="table-title">
          <div class="title-left">
            <div class="title-icon"></div>
            <div class="title-text">购物车</div>
            <div class="all-num">全部（{{ total }}）</div>
          </div>
          <div class="title-right">
            <el-button type="primary">生成订单</el-button>
            <el-button type="success" plain>历史信息</el-button>
            <el-button size="mini" type="danger" plain @click="handleClear"
              >清空购物车</el-button
            >
          </div>
        </div>
        <div class="all-check">
          <el-checkbox>全选</el-checkbox>
        </div>
        <el-table
          ref="mytable"
          class="mytable"
          :data="list"
          :max-height="1000"
          :show-header="false"
          style="width: 100%; overflow: auto"
          @selection-change="handleSelect"
        >
          <el-table-column type="selection" width="60" align="center" />
          <el-table-column label="图片" prop="imgUrl" min-width="180">
            <template #default="scope">
              <img :src="scope.row.imgUrl" alt="" />
            </template>
          </el-table-column>

          <el-table-column min-width="380" label="详情" prop="createUser">
            <template #default="scope">
              <div>
                <h3>{{ scope.row.name }}</h3>
                <p>{{ scope.row.desc }}</p>
                <p>{{ scope.row.source }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            width="280"
            fixed="right"
          >
            <template #default="scope">
              <el-button
                size="mini"
                type="danger"
                @click="deleteData(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-info">
          <pagination
            v-if="total > 0"
            :total="total"
            :page="queryParams.pageNum"
            :limit="queryParams.pageSize"
            @pagination="handleQuery"
          />
        </div>
        <div class="table-title">
          <div class="title-left">
            <div class="title-icon"></div>
            <div class="title-text">智能推荐</div>
          </div>
        </div>
        <div class="zhineng">
          <ul class="content">
            <li v-for="item in list2" :key="item.id" class="content-item">
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
const list2 = ref([
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
      // console.log(flag);
      // formObject.selectionList.forEach((row) => {
      //   formObject.ids.push(row.id);
      // });
      // const res = await mulDelInfoList({
      //   ids: formObject.ids,
      // });
      // if (res.code == 20000) {
      //   getData();
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      // } else {
      //   ElMessage({
      //     type: "error",
      //     message: res.data,
      //   });
      // }
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
  background-size: cover;
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
    // background: #fff;
    .search {
      // margin: 20px;
      padding: 28px 32px;

      background: #fff;
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
    .table-content {
      height: 100%;
      background: #fff;
      padding: 20px;
      margin-top: 14px;
      // margin-bottom: 20px;
      .table-title {
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #ffffff;

        border-bottom: 1px solid #d8d8d8;
        .title-left {
          display: flex;
          height: 24px;
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
            font-size: 14px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: 0.04em;
            color: #000000;
            margin-left: 10px;
          }
          .all-num {
            margin-left: 20px;
            height: 24px;
            opacity: 1;

            font-family: MicrosoftYaHei;
            font-size: 14px;
            font-weight: normal;
            line-height: 24px;
            letter-spacing: 0.04em;
            color: #000000;
          }
        }
      }
      .all-check {
        width: 95px;
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        opacity: 1;

        background: #f7f8fa;

        box-sizing: border-box;
        border: 1px solid #e5e6eb;
        margin: 16px 0 22px 18px;
        text-align: center;
      }
    }
    .pagination-info {
      float: right;
      margin: 40px;
    }
    .zhineng {
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
    }
  }
}
</style>
