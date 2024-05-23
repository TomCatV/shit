<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">软件名称：</span>
          <el-input v-model="screenTitle" placeholder="请输入名称" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">时间：</span>
          <el-input v-model="screenIssuer" placeholder="请输入时间" clearable />
        </div>
      </div>

      <div class="screen_button_box">
        <el-button color="#165DFF" @click="editInfoClick" :icon="Search"
          >查询</el-button
        >
        <el-button color="#F2F3F5" :icon="RefreshRight">重置</el-button>
      </div>
    </div>

    <el-button color="#165DFF" @click="addClick">新建</el-button>
    <el-button color="#F5F2F2" style="color: #fa5151" @click="batchDeleteClick"
      >批量删除</el-button
    >

    <el-table
      :data="tableData"
      border
      :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" width="60" type="index" align="center" />
      <el-table-column
        prop="name"
        label="软件名称"
        width="160"
        align="center"
      />
      <el-table-column prop="describe" label="软件描述" align="center" />
      <el-table-column
        prop="count"
        label="下载次数"
        width="84"
        align="center"
      />

      <el-table-column prop="time" label="时间" width="160" align="center" />
      <el-table-column label="操作" width="140" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            查看
          </el-button>
          <el-button link type="primary" size="small" @click="addClick">
            编辑
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

    <el-pagination layout="total,prev, pager, next" :total="1000" />

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

    <el-dialog v-model="editDialogVisible" width="600">
      <template #title><b>新建</b></template>
      <div style="display: flex; align-items: center; gap: 10px">
        <div style="height: 18px; width: 4px; background: #165dff"></div>
        <div>基本信息</div>
      </div>
      <div style="padding: 0 80px">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="软件名称" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="运行平台" prop="platform">
            <el-select v-model="ruleForm.platform" placeholder="请选择平台">
              <el-option label="window" value="window"></el-option>
              <el-option label="麒麟(arm)" value="arm"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="描述" prop="desc">
            <el-input
              placeholder="请输入描述"
              type="textarea"
              v-model="ruleForm.desc"
              :rows="4"
            ></el-input>
          </el-form-item>
          <el-form-item label="图标" prop="icon">
            <el-space style="align-items: baseline">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
                accept=".jpg,.png"
              >
                <el-button size="small" plain>
                  <ElIcon :size="12" color="grey">
                    <Upload />
                  </ElIcon>
                  <span>上传图标</span>
                </el-button>
              </el-upload>
              <span style="color: #606266; font-size: 14px"
                >支持扩展名：.jpg .png</span
              >
            </el-space>
          </el-form-item>
          <el-form-item label="程序" prop="procedure">
            <el-space style="align-items: baseline">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
                accept=".zip,.rar"
              >
                <el-button size="small" plain>
                  <ElIcon :size="12" color="grey">
                    <Upload />
                  </ElIcon>
                  <span>上传程序</span>
                </el-button>
              </el-upload>
              <span style="color: #606266; font-size: 14px"
                >支持扩展名：.zip .rar</span
              >
            </el-space>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button color="#F2F3F5" @click="addCancelClick">取消</el-button>
          <el-button color="#165DFF" @click="addSaveClick"> 保存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";

const screenTitle = ref("");
const screenIssuer = ref("");
const screenTime = ref("");

const hintDialogVisible = ref(false);
const editDialogVisible = ref(false);

const tableData = ref([
  {
    name: "数据下载服务客户端",
    describe:
      "用户可以通过客户端下载数据，在数据到达后，在下载服务客户端提示用户，用户可以通.......",
    count: "9999",
    time: "2024-04-02 13:01:29",
  },
  {
    name: "数据下载服务客户端",
    describe:
      "用户可以通过客户端下载数据，在数据到达后，在下载服务客户端提示用户，用户可以通.......",
    count: "9999",
    time: "2024-04-02 13:01:29",
  },
  {
    name: "数据下载服务客户端",
    describe:
      "用户可以通过客户端下载数据，在数据到达后，在下载服务客户端提示用户，用户可以通.......",
    count: "9999",
    time: "2024-04-02 13:01:29",
  },
]);

const ruleFormRef = ref();
const rules = reactive({
  name: [{ required: true, message: "请输入软件名称", trigger: "blur" }],
  platform: [{ required: true, message: "请选择运行平台", trigger: "blur" }],
  desc: [{ required: true, message: "请输入描述", trigger: "blur" }],
  icon: [{ required: true, message: "请选择图标", trigger: "blur" }],
  procedure: [{ required: true, message: "请选择程序", trigger: "blur" }],
});
const editInfoDialogVisible = ref(false);
const descriptionsItems = ref([
  { label: "用户名", text: "admin" },
  { label: "手机", text: "15210141028" },
  { label: "姓名", text: "张智" },
  { label: "角色", text: "系统管理员" },
  { label: "单位", text: "中科星图" },
  { label: "所在节点", text: "B1" },
  { label: "邮箱", text: "zhangzhi@geovis.com" },
  { label: "注册时间", text: "2023-12-15 12:00:00" },
]);
const ruleForm = reactive({
  name: "",
  platform: "",
  desc: "",
});

const batchDeleteClick = () => {
  hintDialogVisible.value = true;
};
const hintCancelClick = () => {
  hintDialogVisible.value = false;
};
const hintConfirmClick = () => {
  hintDialogVisible.value = false;
};

const addClick = () => {
  editDialogVisible.value = true;
};
const addCancelClick = () => {
  editDialogVisible.value = false;
};
const addSaveClick = () => {
  editDialogVisible.value = false;
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
      width: 180px;
      height: 32px;
    }
    :deep(.el-button) {
      width: 84px;
      height: 32px;
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
  :deep(.el-input) {
    height: 32px;
    font-size: 12px;
  }
  :deep(.el-select) {
    div {
      font-size: 12px;
    }
  }
  .hint_dialog_content {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>
