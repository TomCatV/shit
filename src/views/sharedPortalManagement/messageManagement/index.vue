<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">消息名称：</span>
          <el-input v-model="screenName" placeholder="请输入名称" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">消息类型：</span>
          <el-select v-model="typeValue" placeholder="请选择类型" clearable>
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="screen_item">
          <span class="screen_label">消息状态：</span>
          <el-select v-model="statusValue" placeholder="请选择状态" clearable>
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="screen_item">
          <span class="screen_label">消息时间：</span>
          <el-select
            v-model="timeValue"
            placeholder="请选择时间"
            style="width: 180px"
            clearable
          >
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="screen_button_box">
        <el-button color="#165DFF" @click="editInfoClick" :icon="Search"
          >查询</el-button
        >
        <el-button color="#F2F3F5" :icon="RefreshRight">重置</el-button>
      </div>
    </div>

    <div class="table_box">
      <div>
        <el-button color="#165DFF" @click="editInfoClick">全部已读</el-button>
        <el-button color="#F2F3F5">标位已读</el-button>
        <el-button
          color="#F5F2F2"
          style="color: #fa5151"
          @click="batchDeleteClick"
          >批量删除</el-button
        >
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column
            label="序号"
            width="60"
            type="index"
            align="center"
          />
          <el-table-column
            prop="name"
            label="消息名称"
            width="180"
            align="center"
          />
          <el-table-column prop="type" label="消息类型" align="center" />
          <el-table-column prop="status" label="消息状态" align="center" />
          <el-table-column prop="time" label="发送时间" align="center" />
          <el-table-column label="操作" width="120" align="center">
            <template #default>
              <el-button link type="primary" size="small" @click="lookClick">
                查看
              </el-button>
              <el-button
                link
                type="primary"
                style="color: #f56c6c"
                size="small"
                @click="batchDeleteClick"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination layout="total,prev, pager, next" :total="1000" />
    </div>

    <el-dialog v-model="hintDialogVisible" width="400">
      <template #title><b>提示</b></template>
      <div class="hint_dialog_content">
        <el-icon color="#e6a23c" size="17px"><WarningFilled /></el-icon
        ><span>数据删除后不可恢复，确认执行删除操作？</span>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="hintCancelClick">取消</el-button>
          <el-button color="#165DFF" @click="hintConfirmClick">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="lookDialogVisible" width="700">
      <template #title><b>查看</b></template>
      <div style="padding: 0 20px">
        <el-descriptions title="基本信息" :column="1">
          <template #title>
            <div style="display: flex; align-items: center; gap: 10px">
              <div style="height: 18px; width: 4px; background: #165dff"></div>
              <div>基本信息</div>
            </div>
          </template>
          <el-descriptions-item label="消息名称："
            >服务客户端下载已完成</el-descriptions-item
          >
          <el-descriptions-item label="消息类型："
            >数据在线下载</el-descriptions-item
          >
          <el-descriptions-item label="消息状态：">已读</el-descriptions-item>
          <el-descriptions-item label="发送时间："
            >2024-04-14 13:21:34</el-descriptions-item
          >
        </el-descriptions>
        <el-descriptions title="消息内容" :column="1">
          <template #title>
            <div style="display: flex; align-items: center; gap: 10px">
              <div style="height: 18px; width: 4px; background: #165dff"></div>
              <div>消息内容</div>
            </div>
          </template>
          <el-descriptions-item>服务客户端下载已完成</el-descriptions-item>
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

const screenName = ref("");
const typeValue = ref("");
const statusValue = ref("");
const timeValue = ref("");

const hintDialogVisible = ref(false);
const lookDialogVisible = ref(false);

const typeOptions = [
  {
    value: "subscribe",
    label: "数据订阅",
  },
  {
    value: "download",
    label: "数据在线下载",
  },
];
const statusOptions = [
  {
    value: "read",
    label: "已读",
  },
  {
    value: "unread",
    label: "未读",
  },
];
const timeOptions = [
  {
    value: "7",
    label: "最近7天",
  },
  {
    value: "30",
    label: "最近30天",
  },
  {
    value: "60",
    label: "最近60天",
  },
];

const tableData = ref([
  {
    name: "服务客户端下载已完成",
    type: "数据在线下载",
    status: "已读",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "服务客户端下载已完成",
    type: "数据在线下载",
    status: "已读",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "服务客户端下载已完成",
    type: "数据在线下载",
    status: "已读",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "服务客户端下载已完成",
    type: "数据在线下载",
    status: "已读",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "服务客户端下载已完成",
    type: "数据在线下载",
    status: "已读",
    time: "2024-04-14 13:21:34",
  },
]);

const batchDeleteClick = () => {
  hintDialogVisible.value = true;
};
const hintCancelClick = () => {
  hintDialogVisible.value = false;
};
const hintConfirmClick = () => {
  hintDialogVisible.value = false;
};

const lookClick = () => {
  lookDialogVisible.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/styles/backstage_management_system.scss";
</style>
