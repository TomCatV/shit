<template>
  <div class="box">
    <div class="screen_box">
      <div class="screen_item_box">
        <div class="screen_item_one">
          <span class="screen_label">标题：</span>
          <el-input v-model="screenTitle" placeholder="请输入标题" clearable />
        </div>
        <div class="screen_item">
          <span class="screen_label">发布人：</span>
          <el-input
            v-model="screenIssuer"
            placeholder="请输入发布人"
            clearable
          />
        </div>
        <div class="screen_item">
          <span class="screen_label">发布时间：</span>
          <el-input
            v-model="screenTime"
            placeholder="请输入发布时间"
            clearable
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
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column
        prop="issuer"
        label="发布人"
        width="100px"
        align="center"
      />
      <el-table-column prop="status" label="状态" width="68px" align="center" />
      <el-table-column prop="level" label="重要等级" align="center">
        <template #default="scope">
          <el-rate v-model="scope.row.rate" disabled />
        </template>
      </el-table-column>
      <el-table-column prop="time" label="发布时间" align="center" />
      <el-table-column label="操作" align="center">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            查看
          </el-button>
          <el-button link type="primary" size="small" @click="addClick">
            编辑
          </el-button>
          <el-button link type="primary" size="small" @click="handleClick">
            发布
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

    <el-dialog v-model="tableRowDialogVisible" width="600">
      <template #title><b>新建</b></template>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormRef"
        label-width="auto"
      >
        <div
          style="
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 20px;
          "
        >
          <div style="height: 18px; width: 4px; background: #165dff"></div>
          <div>基本信息</div>
        </div>
        <div style="padding: 0 20px">
          <el-form-item label="标题:" prop="title">
            <el-input
              v-model="ruleForm.title"
              placeholder="请输入标题"
            ></el-input>
          </el-form-item>
          <el-form-item label="摘要:" prop="digest">
            <el-input
              type="textarea"
              v-model="ruleForm.digest"
              placeholder="请输入摘要"
              rows="4"
            ></el-input>
          </el-form-item>
          <el-form-item label="类型:" prop="type">
            <el-radio-group v-model="ruleForm.type">
              <el-radio value="ordinary">普通</el-radio>
              <el-radio value="link">链接</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标题图片:" prop="titleImg">
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
                  <span>上传文件</span>
                </el-button>
              </el-upload>
              <span style="color: #606266; font-size: 14px"
                >支持扩展名：.jpg .png</span
              >
            </el-space>
          </el-form-item>
          <el-form-item label="是否发布到门户:" prop="portal">
            <el-radio-group v-model="ruleForm.portal">
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="重要等级:" prop="level">
            <el-rate v-model="ruleForm.level"></el-rate>
          </el-form-item>
          <el-form-item label="有效期:" prop="period">
            <el-select v-model="ruleForm.period" placeholder="请选择有效期">
              <el-option value="3" label="3年" />
              <el-option value="5" label="5年" />
              <el-option value="10" label="10年" />
            </el-select>
          </el-form-item>
          <el-form-item label="是否置顶:" prop="top">
            <el-radio-group v-model="ruleForm.top">
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 20px;
          "
        >
          <div style="height: 18px; width: 4px; background: #165dff"></div>
          <div>正文内容</div>
        </div>
        <div style="padding: 0 20px">
          <el-form-item label="关键词:" prop="keyword">
            <el-input
              v-model="ruleForm.keyword"
              placeholder="请输入关键词"
            ></el-input>
          </el-form-item>
          <el-form-item label="正文内容:" prop="bodyContent">
            <div style="border: 1px solid #ccc; width: 100%">
              <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                mode="default"
              />
              <Editor
                style="height: 170px"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                mode="default"
                @onCreated="handleCreated"
                @on-change="handleChange"
              />
            </div>
          </el-form-item>
          <el-form-item label="上传附件" prop="type">
            <el-space style="align-items: baseline">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
                accept=".doc,.docx,.xls,.xlsx,.pdf"
              >
                <el-button size="small" plain>
                  <ElIcon :size="12" color="grey">
                    <Upload />
                  </ElIcon>
                  <span>上传文件</span>
                </el-button>
              </el-upload>
              <span style="color: #606266; font-size: 14px"
                >支持扩展名：.doc .docx .xls .xlsx .pdf</span
              >
            </el-space>
          </el-form-item>
        </div>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="addCancelClick">取消</el-button>
          <el-button color="#165DFF" @click="addSaveClick"> 保存 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { RefreshRight, Search } from "@element-plus/icons-vue";
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
const emit = defineEmits(["update:editorValue"]);
const props = defineProps({
  editorValue: {
    type: String,
    default: "",
  },
});
const valueHtml = ref(props.editorValue);
const editorRef = shallowRef();
const toolbarConfig = {
  excludeKeys: ["headerSelect", "italic", "group-more-style", "group-video"],
};
const editorConfig: any = {
  placeholder: "请输入内容...",
  readOnly: false,
  MENU_CONF: {},
};
editorConfig.MENU_CONF["uploadImage"] = {
  base64LimitSize: 1024 * 1024 * 1024,
};
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const handleCreated = (editor: any) => {
  editorRef.value = editor;
};
const handleChangeText = (editor: any) => {
  emit("update:editorValue", editor.getHtml());
};

const screenTitle = ref("");
const screenIssuer = ref("");
const screenTime = ref("");

const hintDialogVisible = ref(false);
const tableRowDialogVisible = ref(false);

const tableData = ref([
  {
    title: "数据需求申请数据共享服务管理制度",
    issuer: "admin",
    status: "未发布",
    time: "2024-04-02 13:01:29",
    rate: 1,
  },
  {
    title: "数据需求申请数据共享服务管理制度",
    issuer: "admin",
    status: "未发布",
    time: "2024-04-02 13:01:29",
    rate: 1,
  },
  {
    title: "数据需求申请数据共享服务管理制度",
    issuer: "admin",
    status: "未发布",
    time: "2024-04-02 13:01:29",
    rate: 2,
  },
  {
    title: "数据需求申请数据共享服务管理制度",
    issuer: "admin",
    status: "未发布",
    time: "2024-04-02 13:01:29",
    rate: 1,
  },
]);

const ruleFormRef = ref();
const rules = reactive({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  type: [{ required: true, message: "请选择类型", trigger: "blur" }],
  titleImg: [{ required: true, message: "请选择标题图片", trigger: "blur" }],
  portal: [
    { required: true, message: "请选择是否发布到门户", trigger: "blur" },
  ],
  level: [{ required: true, message: "请选择标题图片", trigger: "blur" }],
  period: [{ required: true, message: "请选择有效期", trigger: "blur" }],
  top: [{ required: true, message: "请选择是否置顶", trigger: "blur" }],
  keyword: [{ required: true, message: "请输入关键词", trigger: "blur" }],
  bodyContent: [{ required: true, message: "请输入关键词", trigger: "blur" }],
});

const ruleForm = reactive({
  title: "",
  digest: "",
  type: "",
  portal: "",
  level: "",
  period: "",
  top: "",
  keyword: "",
  bodyContent: null,
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
  tableRowDialogVisible.value = true;
};
const addCancelClick = () => {
  tableRowDialogVisible.value = false;
};
const addSaveClick = () => {
  tableRowDialogVisible.value = false;
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
  .hint_dialog_content {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
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
}
</style>
