<template>
  <div class="shopping-page">
    <div class="title">
      <span
        @click="gotoHome"
        style="color: #4e5969; margin-right: 16px; cursor: pointer"
        >首页</span
      >
      <span>/ 通知公告</span>
    </div>
    <div class="shopping-content">
      <div class="table-content">
        <div class="search">
          <el-form ref="searchForm" :inline="true" label-width="88px">
            <el-row class="form-betweeen">
              <el-col :span="12">
                <el-form-item label="">
                  <el-input
                    placeholder="请输入"
                    v-model="searchForm.code"
                    size="medium"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" :icon="Search" class="search-but"
                  >查询</el-button
                >
                <el-button :icon="Refresh">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="grid-body" style="padding-top: 0">
          <el-table
            ref="mytable"
            class="vul-table"
            :border="true"
            :data="tableList"
            :header-cell-style="headerStyle"
            :row-class-name="tableRowClassName"
            :cell-style="tableCellstyle"
            :max-height="600"
            style="width: 100%; overflow: auto"
            @selection-change="handleSelect"
          >
            <!-- <el-table-column type="selection" width="58" align="center" /> -->
            <el-table-column label="序号" width="70px" align="center">
              <template #default="scope">
                {{ scope.$index + 1 }}
              </template>
            </el-table-column>
            <el-table-column
              min-width="120"
              label="公告名称"
              prop="name"
              align="center"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              min-width="120"
              label="重要等级"
              prop="level"
              align="center"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              min-width="100"
              label="发布时间"
              prop="pushTime"
              align="center"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="操作"
              align="center"
              width="200"
              fixed="right"
            >
              <template #default="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleDetail(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
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
    .search {
      // margin: 20px;
      margin-bottom: 20px;
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
    .opt-but {
      padding: 24px;
    }
    .table-content {
      height: calc(100vh - 20px);
      background: #fff;
      padding: 20px;
      margin-top: 14px;
      margin-bottom: 20px;
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
  }
  .el-form-item {
    width: 100%;
  }
}
</style>
