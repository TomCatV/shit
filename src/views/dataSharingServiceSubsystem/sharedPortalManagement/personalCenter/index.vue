<template>
  <div class="box">
    <div class="user_info">
      <el-descriptions :column="2" :size="size" border>
        <el-descriptions-item
          :label="item.label"
          align="center"
          v-for="item in descriptionsItems"
          :key="item.text"
        >
          {{ item.text }}
        </el-descriptions-item>
      </el-descriptions>
      <div class="edit_button">
        <el-button color="#165DFF" @click="editInfoClick">修改信息</el-button>
        <el-button color="#F2F3F5">重置密码</el-button>
      </div>
    </div>

    <el-dialog v-model="editInfoDialogVisible" width="500">
      <template #title><b>修改信息</b></template>
      <el-form
        ref="ruleFormRef"
        style="padding: 0 60px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-form-item label="用户名:" prop="user">
          <el-input v-model="ruleForm.user" />
        </el-form-item>
        <el-form-item label="手机:" prop="phone">
          <el-input v-model="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
        <el-form-item label="单位:" prop="unit">
          <el-input v-model="ruleForm.unit" />
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="角色:" prop="role">
          <el-input v-model="ruleForm.role" disabled />
        </el-form-item>
        <el-form-item label="所在节点:" prop="node">
          <el-input v-model="ruleForm.node" disabled />
        </el-form-item>
        <el-form-item label="注册时间:" prop="registrationDate">
          <el-input v-model="ruleForm.registrationDate" disabled />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button color="#F2F3F5" @click="cancelClick">取消</el-button>
          <el-button color="#165DFF" @click="saveClick"> 保存 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const ruleFormRef = ref();
const rules = reactive({
  user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  phone: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  unit: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  email: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  role: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  node: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  registrationDate: [
    { required: true, message: "请输入用户名", trigger: "blur" },
  ],
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
  user: "admin",
  phone: "15210141028",
  name: "张智",
  password: "123456",
  unit: "中科星图",
  email: "zhangzhi@geovis.com",
  role: "系统管理员",
  node: "B1",
  registrationDate: "2023-12-15 12:00:00",
});

const editInfoClick = () => {
  editInfoDialogVisible.value = true;
};
const cancelClick = () => {
  editInfoDialogVisible.value = false;
};
const saveClick = () => {
  editInfoDialogVisible.value = false;
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  .user_info {
    background: #fff;
    padding: 39px 32px;
  }
  .edit_button {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 40px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>
