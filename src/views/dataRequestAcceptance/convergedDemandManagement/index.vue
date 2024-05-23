<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">融合需求编号：</span>
          <el-input v-model="screenNum" placeholder="请输入编号" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">融合内容：</span>
          <el-input
            v-model="screenContent"
            placeholder="请输入内容"
            clearable
          />
        </div>
        <div class="screen_item">
          <span class="screen_label">融合需求状态：</span>
          <el-select v-model="statusValue" placeholder="请选择类型" clearable>
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="screen_item">
          <span class="screen_label">融合生成时间：</span>
          <el-date-picker
            v-model="pickerValue"
            type="daterange"
            size="large"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </div>
      </div>

      <div class="screen_button_box">
        <el-button color="#165DFF" :icon="Search">查询</el-button>
        <el-button color="#F2F3F5" :icon="RefreshRight">重置</el-button>
      </div>
    </div>

    <el-table
      :data="formatTableData"
      border
      :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
      :span-method="objectSpanMethod"
    >
      <el-table-column label="序号" width="60" prop="index" align="center" />
      <el-table-column
        prop="num"
        label="融合需求编号"
        width="110"
        align="center"
      />
      <el-table-column prop="content" label="融合内容" align="center" />
      <el-table-column
        prop="status"
        label="融合处理状态"
        width="110"
        align="center"
      />
      <el-table-column prop="createTime" label="融合生成时间" align="center" />
      <el-table-column prop="demandNum" label="需求编号" align="center" />
      <el-table-column prop="demandContent" label="需求内容" align="center" />
      <el-table-column
        prop="submitTime"
        label="需求提交时间"
        width="160"
        align="center"
      />
      <el-table-column
        prop="disposeTime"
        label="融合需求处理时间"
        width="160"
        align="center"
      />
    </el-table>

    <el-pagination layout="total,prev, pager, next" :total="1000" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RefreshRight, Search } from "@element-plus/icons-vue";

const screenNum = ref("");
const screenContent = ref("");
const statusValue = ref("");
const pickerValue = ref("");
function objectSpanMethod({ row, rowIndex, column, columnIndex }) {
  if (columnIndex <= 4) {
    const rowspan = row.demandData.length || 1;
    if (row.demandDataIndex === 0) {
      return {
        rowspan,
        colspan: 1,
      };
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      };
    }
  }
}
const tableData = [
  {
    num: "RHXQ-002",
    content: "GOES数据，质子通量",
    status: "已通过",
    createTime: "2024-01-15 12:35:00",
    demandData: [
      {
        demandNum: "RHXQ-002-1",
        demandContent: "GOES卫星监测的每日质子通量数据",
        submitTime: "2023-11-19 12:00:00",
        disposeTime: "2023-12-19 12:00:00",
      },
      {
        demandNum: "RHXQ-002-2",
        demandContent: "GOES卫星监测的每日质子通量数据",
        submitTime: "2023-11-19 12:00:00",
        disposeTime: "2023-12-19 12:00:00",
      },
    ],
  },
  {
    num: "RHXQ-003",
    content: "GOES数据，质子通量",
    status: "未通过",
    createTime: "2024-01-15 18:00:00",
    demandData: [
      {
        demandNum: "RHXQ-003-1",
        demandContent: "GOES卫星监测的每日质子通量数据",
        submitTime: "2023-11-19 12:00:00",
        disposeTime: "2023-12-19 12:00:00",
      },
      {
        demandNum: "RHXQ-003-2",
        demandContent: "GOES卫星监测的每日质子通量数据",
        submitTime: "2023-11-19 12:00:00",
        disposeTime: "2023-12-19 12:00:00",
      },
      {
        demandNum: "RHXQ-003-3",
        demandContent: "GOES卫星监测的每日质子通量数据",
        submitTime: "2023-11-19 12:00:00",
        disposeTime: "2023-12-19 12:00:00",
      },
    ],
  },
];
const formatTableData = ref([]);
tableData.forEach((m, index) => {
  m.demandData.forEach((cm, cindex) => {
    formatTableData.value.push({
      ...m,
      index: index + 1,
      demandDataItem: cm,
      demandDataIndex: cindex,
      ...cm,
    });
  });
});

const statusOptions = [
  {
    value: "undisposed",
    label: "未处理",
  },
  {
    value: "already",
    label: "已通过",
  },
  {
    value: "declined",
    label: "已拒绝",
  },
];
</script>

<style lang="scss" scoped>
.box {
  background: #fafcfe;
  padding: 0 32px;
  .screen_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 96px;
    margin-bottom: 20px;
    box-shadow:
      0px 4px 10px 0px rgba(78, 89, 105, 0.06),
      0px 1px 0px 0px #e5e6eb;
    .screen_item_box {
      display: flex;
    }
    .screen_item_one {
      display: flex;
      align-items: center;
    }
    .screen_item {
      margin-left: 20px;
      display: flex;
      align-items: center;
    }
    :deep(.el-input) {
      width: 150px;
      height: 32px;
    }
    :deep(.el-button) {
      width: 84px;
      height: 32px;
    }
    :deep(.el-select) {
      width: 150px;
      div {
        font-size: 12px;
      }
    }
    :deep(.el-date-editor) {
      width: 260px;
      input {
        font-size: 12px;
      }
    }
  }
  :deep(.el-table) {
    margin: 20px 0 100px;
  }
  :deep(.el-pagination) {
    display: flex;
    justify-content: end;
    .el-pager li.is-active {
      background: #e8f4ff;
      color: #1664ff;
    }
  }
}
</style>
