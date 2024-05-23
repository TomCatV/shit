<template>
  <el-card style="max-width: 100%; margin-bottom: 20px">
    <el-descriptions title="基本信息" :column="2">
      <template #title>
        <div style="display: flex; align-items: center; gap: 10px">
          <div class="quadrate"></div>
          <div>基本信息</div>
        </div>
      </template>
      <el-descriptions-item label="数据名称："
        >每5分钟高分电子微分通量</el-descriptions-item
      >
      <el-descriptions-item label="数据大类："
        >光学测轨数据</el-descriptions-item
      >
      <el-descriptions-item label="数据类别：">磁层</el-descriptions-item>
      <el-descriptions-item label="数据密级：">MM</el-descriptions-item>
      <el-descriptions-item label="来源节点：">B4</el-descriptions-item>
      <el-descriptions-item label="可共享节点：">B1-B7</el-descriptions-item>
      <el-descriptions-item label="最新接入时间："
        >2024-04-14 13:21:34</el-descriptions-item
      >
    </el-descriptions>
  </el-card>
  <div class="box">
    <div class="title" style="padding: 0 20px">
      <div style="display: flex; align-items: center; gap: 10px">
        <div class="quadrate"></div>
        <div style="color: #000; font-weight: bolder; font-size: 16px">
          数据
        </div>
      </div>
    </div>
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">文件名称：</span>
          <el-input v-model="screenName" placeholder="请输入名称" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">数据格式：</span>
          <el-select v-model="typeValue" placeholder="请选择类型" clearable>
            <el-option
              v-for="(item, index) in typeOptions"
              :key="index"
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
          <el-table-column prop="name" label="文件名称" align="center" />
          <el-table-column
            prop="type"
            label="数据格式"
            width="100"
            align="center"
          />
          <el-table-column
            prop="status"
            label="数据量"
            width="100"
            align="center"
          />
          <el-table-column label="操作" width="120" align="center">
            <template #default>
              <el-button link type="primary" size="small" @click="lookClick">
                预览
              </el-button>
              <el-button
                link
                type="primary"
                size="small"
                @click="lookDialogVisible"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination layout="total,prev, pager, next" :total="1000" />
    </div>
  </div>

  <el-dialog v-model="editDialogVisible" width="35%" center>
    <template #title><b>编辑</b></template>
    <div class="main">
      <span>测试测试测试测试测试测试测试测试测试...</span>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="editDialogVisible = false" color="#F2F3F5"
          >取消</el-button
        >
        <el-button
          type="primary"
          @click="editDialogVisible = false"
          color="#165DFF"
          >保存</el-button
        >
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="viewDialog" width="60%">
    <template #title><b>预览</b></template>
    <ViewDialog @close="viewDialog = false"></ViewDialog>
  </el-dialog>
</template>
<script setup>
import ViewDialog from "./ViewDialog.vue";
const name = "ViewPage";
const editDialogVisible = ref(false);
const viewDialog = ref(false);
const typeValue = ref("");
const typeOptions = ref([
  {
    value: null,
    label: "请选择",
    disabled: true, // 使默认选项不可选
  },
  {
    value: "Json",
    label: "Json",
  },
]);
const tableData = ref([
  {
    name: "differential-electrons-2024 04 11 dayjson",
    type: "Json",
    status: "291K",
  },
  {
    name: "differential-electrons-2024 04 11 dayjson",
    type: "Json",
    status: "291K",
  },
  {
    name: "differential-electrons-2024 04 11 dayjson",
    type: "Json",
    status: "291K",
  },
  {
    name: "differential-electrons-2024 04 11 dayjson",
    type: "Json",
    status: "291K",
  },
  {
    name: "differential-electrons-2024 04 11 dayjson",
    type: "Json",
    status: "291K",
  },
]);
const lookDialogVisible = () => {
  editDialogVisible.value = true;
};
const lookClick = () => {
  viewDialog.value = true;
};
</script>
<style lang="scss" scoped>
@import "@/styles/backstage_management_system.scss";
.box {
  margin-bottom: 20px;
}
.box .screen_box {
  margin-bottom: 0px;
  padding-left: 60px;
}
.box .table_box {
  padding-top: 0;
  margin-bottom: 0px;
}
.box {
  background-color: #fff;
  padding-top: 20px;
  .title {
    padding-left: 20px;
  }
}
.main {
  margin: 20px auto;
  width: 95%;
  // max-height: 400px;
  height: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  overflow-y: auto;
}
.item_box {
  width: 100%;
  padding-left: 20px;
}
::v-deep {
  .el-descriptions__body {
    padding-left: 38px;
  }
}
</style>
