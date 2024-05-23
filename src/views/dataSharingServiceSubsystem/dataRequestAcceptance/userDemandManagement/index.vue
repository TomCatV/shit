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
          >检索</el-button
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
      <el-table-column
        prop="content"
        label="需求内容"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column
        prop="status"
        label="需求状态"
        width="84"
        align="center"
      />

      <el-table-column
        prop="submitTime"
        label="提交时间"
        width="160"
        align="center"
      />
      <el-table-column
        prop="disposeTime"
        label="处理时间"
        width="160"
        align="center"
      />
      <el-table-column label="操作" width="140" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="lookClick">
            查看
          </el-button>
          <el-button link type="primary" size="small" @click="examineClick">
            审批
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="total,prev, pager, next" :total="1000" />

    <el-dialog v-model="lookDialogVisible" width="700">
      <template #title><b>查看</b></template>
      <div style="padding: 0 20px">
        <el-descriptions title="基本信息" :column="2">
          <template #title>
            <div style="display: flex; align-items: center; gap: 10px">
              <div style="height: 18px; width: 4px; background: #165dff"></div>
              <div>基本信息</div>
            </div>
          </template>
          <el-descriptions-item label="需求编号：">XQ-001</el-descriptions-item>
          <el-descriptions-item label="用户账户：">admin</el-descriptions-item>
          <el-descriptions-item label="需求状态：">已通过</el-descriptions-item>
          <el-descriptions-item label="提交时间："
            >2023-11-19 12:00:00</el-descriptions-item
          >
        </el-descriptions>
        <div
          style="
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            color: #333;
            font-weight: bold;
          "
        >
          <div style="height: 18px; width: 4px; background: #165dff"></div>
          <div>数据列表</div>
        </div>
        <el-table
          :data="lookTableData"
          border
          :header-cell-style="{
            background: '#f2f3f5',
            color: '#1D2129',
          }"
        >
          <el-table-column
            prop="index"
            label="序号"
            width="60"
            align="center"
          />
          <el-table-column prop="name" label="数据名称" align="center" />
          <el-table-column
            prop="fileNum"
            label="文件数量"
            width="90"
            align="center"
          />
          <el-table-column
            prop="dataSize"
            label="数据大小"
            width="90"
            align="center"
          />
        </el-table>
        <div style="display: flex; justify-content: flex-end">
          <el-pagination layout="total,prev, pager, next" :total="1000" />
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="lookDialogVisible = false"
            >取消</el-button
          >
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="examineDialogVisible" width="500">
      <template #title><b>审批</b></template>
      <div style="padding: 0 40px">
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
          <el-form-item label="是否同意：" prop="agree">
            <el-radio-group v-model="ruleForm.agree">
              <el-radio value="yes">同意</el-radio>
              <el-radio value="no">拒绝</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="理由：" prop="reason">
            <el-input v-model="ruleForm.reason" type="textarea" :rows="4" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="examineCloseClick">取消</el-button>
          <el-button color="#165DFF" @click="examineSavaClick">保存</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";

const screenNum = ref("");
const screenContent = ref("");
const statusValue = ref("");
const pickerValue = ref("");

const lookDialogVisible = ref(false);
const examineDialogVisible = ref(false);

const ruleFormRef = ref();
const rules = reactive({
  agree: [{ required: true, message: "请选择", trigger: "blur" }],
});
const ruleForm = reactive({
  agree: "",
  reason: "",
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

const tableData = ref([
  {
    num: "XQ-001",
    content: "GOES16 X射线通量，GOES卫星监测的每日X射线通量数据",
    status: "已通过",
    submitTime: "2023-11-19 12:00:00",
    disposeTime: "2023-12-19 12:00:00",
  },
  {
    num: "XQ-001",
    content: "GOES16 X射线通量，GOES卫星监测的每日X射线通量数据",
    status: "已通过",
    submitTime: "2023-11-19 12:00:00",
    disposeTime: "2023-12-19 12:00:00",
  },
  {
    num: "XQ-001",
    content: "GOES16 X射线通量，GOES卫星监测的每日X射线通量数据",
    status: "已通过",
    submitTime: "2023-11-19 12:00:00",
    disposeTime: "2023-12-19 12:00:00",
  },
]);
const lookTableData = reactive([
  {
    index: "1",
    name: "G0ES16 X射线通量",
    fileNum: "文件123",
    dataSize: "123kb",
  },
  {
    index: "2",
    name: "白光日冕仪（SOHO）数据",
    fileNum: "文件110",
    dataSize: "234kb",
  },
]);

const lookClick = () => {
  lookDialogVisible.value = true;
};

const examineClick = () => {
  examineDialogVisible.value = true;
};
const examineCloseClick = () => {
  examineDialogVisible.value = false;
};
const examineSavaClick = () => {
  examineDialogVisible.value = false;
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
    :deep(.el-select) {
      width: 180px;
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
  :deep(.el-descriptions__body) {
    padding-left: 20px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>
