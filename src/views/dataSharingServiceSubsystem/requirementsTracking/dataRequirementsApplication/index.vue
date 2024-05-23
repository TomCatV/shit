<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">用户名：</span>
          <el-input v-model="screenUser" placeholder="请输入用户名" clearable />
        </div>

        <div class="screen_item">
          <span class="screen_label">提交时间：</span>
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
      <el-table-column prop="user" label="用户名" width="84" align="center" />
      <el-table-column prop="num" label="订单编号" width="84" align="center" />
      <el-table-column
        prop="integrity"
        label="完整度"
        width="80"
        align="center"
      />
      <el-table-column
        prop="efficiency"
        label="效率"
        width="70"
        align="center"
      />
      <el-table-column
        prop="quality"
        label="数据质量"
        width="84"
        align="center"
      />
      <el-table-column
        prop="explain"
        label="说明"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column prop="createTime" label="创建时间" align="center" />
      <el-table-column label="操作" width="110" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="lookClick">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="total,prev, pager, next" :total="1000" />

    <el-dialog v-model="lookDialogVisible" width="640">
      <template #title><b>查看</b></template>
      <div style="padding: 0 20px">
        <el-descriptions :column="2" :size="size">
          <el-descriptions-item label="用户编号：" label-align="right">
            admin</el-descriptions-item
          >
          <el-descriptions-item label="订单编号：" label-align="right"
            >DD001</el-descriptions-item
          >
          <el-descriptions-item label="完整度：" label-align="right"
            >98%</el-descriptions-item
          >
          <el-descriptions-item label="效率：" label-align="right"
            >9</el-descriptions-item
          >
          <el-descriptions-item label="数据质量：" label-align="right"
            >8</el-descriptions-item
          >
          <el-descriptions-item label="说明：" label-align="right"
            >数据需求相关功能使用体验良好</el-descriptions-item
          >
          <el-descriptions-item label="创建时间：" label-align="right"
            >2024-03-19 12:00:00</el-descriptions-item
          >
        </el-descriptions>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="lookDialogVisible = false"
            >取消</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";

const screenUser = ref("");
const pickerValue = ref("");

const lookDialogVisible = ref(false);

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
    user: "admin",
    num: "DD001",
    integrity: "98%",
    efficiency: "9",
    quality: "8",
    explain: "数据需求相关功能使用体验良好",
    createTime: "2024-03-19 12:00:00",
  },
  {
    user: "admin",
    num: "DD001",
    integrity: "98%",
    efficiency: "9",
    quality: "8",
    explain: "数据需求相关功能使用体验良好",
    createTime: "2024-03-19 12:00:00",
  },
  {
    user: "admin",
    num: "DD001",
    integrity: "98%",
    efficiency: "9",
    quality: "8",
    explain: "数据需求相关功能使用体验良好",
    createTime: "2024-03-19 12:00:00",
  },
]);

const lookClick = () => {
  lookDialogVisible.value = true;
};
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
  :deep(.el-descriptions__cell) {
    width: 50%;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
  :deep(.el-descriptions__label) {
    display: inline-block;
    width: 70px;
    text-align: right;
  }
}
</style>
