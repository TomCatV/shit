<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">需求编号：</span>
          <el-input v-model="screenNum" placeholder="请输入编号" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">需求内容：</span>
          <el-input
            v-model="screenContent"
            placeholder="请输入内容"
            clearable
          />
        </div>
        <div class="screen_item">
          <span class="screen_label">需求状态：</span>
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
          <span class="screen_label">需求提交时间：</span>
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
        <el-button color="#165DFF" @click="editInfoClick" :icon="Search"
          >查询</el-button
        >
        <el-button color="#F2F3F5" :icon="RefreshRight">重置</el-button>
      </div>
    </div>

    <el-table
      :data="tableData"
      border
      :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
    >
      <el-table-column label="序号" width="60" type="index" align="center" />
      <el-table-column prop="num" label="需求编号" width="84" align="center" />
      <el-table-column prop="content" label="需求内容" align="center" />
      <el-table-column
        prop="submitTime"
        label="需求提交时间"
        width="160"
        align="center"
      />
      <el-table-column
        prop="fusionNum"
        label="融合需求编号"
        width="110"
        align="center"
      />
      <el-table-column prop="fusionContent" label="融合内容" align="center" />
      <el-table-column
        prop="fusionCreateTime"
        label="融合生成时间"
        width="160"
        align="center"
      />
      <el-table-column
        prop="status"
        label="需求处理状态"
        width="110"
        align="center"
      />
      <el-table-column label="操作" width="110" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="lookClick">
            查看处理进度
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="total,prev, pager, next" :total="1000" />
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";

const screenNum = ref("");
const screenContent = ref("");
const statusValue = ref("");
const pickerValue = ref("");

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

const tableData = ref([
  {
    num: "XQ-001",
    content: "GOES卫星监测的每日质子通量数据",
    submitTime: "2024-04-09 12:00:00",
    fusionNum: "RHXQ-001",
    fusionContent: "GOES数据，质子通量",
    fusionCreateTime: "2024-03-19 12:00:00",
    status: "未处理",
  },
  {
    num: "XQ-001",
    content: "GOES卫星监测的每日质子通量数据",
    submitTime: "2024-04-09 12:00:00",
    fusionNum: "RHXQ-001",
    fusionContent: "GOES数据，质子通量",
    fusionCreateTime: "2024-03-19 12:00:00",
    status: "未处理",
  },
  {
    num: "XQ-001",
    content: "GOES卫星监测的每日质子通量数据",
    submitTime: "2024-04-09 12:00:00",
    fusionNum: "RHXQ-001",
    fusionContent: "GOES数据，质子通量",
    fusionCreateTime: "2024-03-19 12:00:00",
    status: "未处理",
  },
]);
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
      width: 170px;
      height: 32px;
    }
    :deep(.el-button) {
      width: 84px;
      height: 32px;
    }
    :deep(.el-select) {
      width: 170px;
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
    margin: 20px 0 20px;
  }
  :deep(.el-pagination) {
    display: flex;
    justify-content: end;
    .el-pager li.is-active {
      background: #e8f4ff;
      color: #1664ff;
    }
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>
