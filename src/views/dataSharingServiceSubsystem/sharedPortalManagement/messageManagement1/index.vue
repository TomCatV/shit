<template>
  <!-- 共享数据名称 -->
  <div>
    <ViewPage v-if="viewPage"></ViewPage>
    <div class="box" v-else>
      <div class="screen_box">
        <div class="screen_item_box">
          <div class="screen_item_one">
            <span class="screen_label">数据名称：</span>
            <el-input v-model="screenName" placeholder="请输入名称" clearable />
          </div>
          <div class="screen_item">
            <span class="screen_label">数据大类：</span>
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
            <span class="screen_label">来源节点：</span>
            <el-select v-model="statusValue" placeholder="请选择状态" clearable>
              <el-option
                v-for="item in statusOptions"
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
          <el-table
            :data="tableData"
            border
            :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
          >
            <el-table-column
              label="序号"
              width="60"
              type="index"
              align="center"
            />
            <el-table-column
              show-overflow-tooltip
              prop="name"
              label="数据名称"
              width="180"
              align:string="center"
            />
            <el-table-column prop="type" label="数据大类" align="center" />
            <el-table-column prop="status" label="数据类别" align="center" />
            <el-table-column prop="miji" label="数据密级" align="center" />
            <el-table-column prop="jiedian" label="来源节点" align="center" />
            <el-table-column
              prop="sharejiedian"
              label="可共享节点"
              align="center"
            />
            <el-table-column prop="time" label="最新接入时间" align="center" />
            <el-table-column label="操作" width="120" align="center">
              <template #default>
                <el-button link type="primary" size="small" @click="lookClick">
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination layout="total,prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";
import ViewPage from "./ViewPage.vue";

const screenName = ref("");
const typeValue = ref("");
const statusValue = ref("");
const timeValue = ref("");
const viewPage = ref(false);

const hintDialogVisible = ref(false);
const lookDialogVisible = ref(false);

const typeOptions = [
  {
    value: null,
    label: "请选择",
    disabled: true, // 使默认选项不可选
  },
  {
    value: "subscribe",
    label: "监测数据",
  },
  {
    value: "download",
    label: "数据产品",
  },
  {
    value: "download1",
    label: "信息产品",
  },
];
const statusOptions = [
  {
    value: null,
    label: "请选择",
    disabled: true, // 使默认选项不可选
  },
  {
    value: "B1",
    label: "B1",
  },
  {
    value: "B2",
    label: "B2",
  },
  {
    value: "B3",
    label: "B3",
  },
  {
    value: "B4",
    label: "B4",
  },
  {
    value: "B5",
    label: "B5",
  },
  {
    value: "B6",
    label: "B6",
  },
  {
    value: "B7",
    label: "B7",
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
    name: "每5分钟高分电子微分通量",
    type: "监测数据",
    status: "磁层",
    miji: "MM",
    jiedian: "B4",
    sharejiedian: "B1-B7",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "每5分钟高分电子微分通量",
    type: "监测数据",
    status: "磁层",
    miji: "MM",
    jiedian: "B4",
    sharejiedian: "B1-B7",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "每5分钟高分电子微分通量",
    type: "监测数据",
    status: "磁层",
    miji: "MM",
    jiedian: "B4",
    sharejiedian: "B1-B7",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "每5分钟高分电子微分通量",
    type: "监测数据",
    status: "磁层",
    miji: "MM",
    jiedian: "B4",
    sharejiedian: "B1-B7",
    time: "2024-04-14 13:21:34",
  },
  {
    name: "每5分钟高分电子微分通量",
    type: "监测数据",
    status: "磁层",
    miji: "MM",
    jiedian: "B4",
    sharejiedian: "B1-B7",
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
  viewPage.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/styles/backstage_management_system.scss";
</style>
