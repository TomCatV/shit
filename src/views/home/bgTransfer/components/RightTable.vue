<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
      max-height="190px"
    >
      <el-table-column label="连接状态" prop="state" min-width="100px" />
      <el-table-column label="CPU" prop="cpu" />
      <el-table-column label="内存使用率" prop="memory" min-width="120px" />
      <el-table-column label="完全事件" prop="memory" min-width="100px" />
      <el-table-column label="告警" prop="warn" />
      <el-table-column label="链路稳定性" prop="stable" min-width="120px" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "002",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "003",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "004",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "005",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "006",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
  {
    id: "007",
    state: "成功",
    cpu: "90%",
    memory: "90%",
    event: "事件",
    warn: "告警",
    stable: "稳定",
  },
]);
</script>

<style lang="scss" scoped>
:deep(.table-list.el-table) {
  background: transparent;
  .el-table__header-wrapper {
    .el-table__header {
      tr {
        .el-table__cell {
          background: linear-gradient(
            180deg,
            #004f87 0%,
            #174b78 52%,
            #0069a7 100%
          );

          box-sizing: border-box;
          border: 1px solid;
          border-image: linear-gradient(180deg, #29b3fa 0%, #bbf1ff 100%) 1;
          text-align: center;
          font-weight: normal;
          font-family: YouSheBiaoTiHei;
          font-size: 20px;
          color: #fff;
          letter-spacing: 0px;
        }
      }
    }
  }
  .el-table__body-wrapper {
    .el-table__empty-block {
      min-height: 100px !important;
    }
  }
  .el-table__body {
    height: 32px;
    .el-table__row {
      background: linear-gradient(
        180deg,
        rgba(0, 128, 254, 0.102) 0%,
        rgba(0, 128, 254, 0.1961) 100%
      );
      border-width: 0px 0px 0.3px 0.3px;
      border-style: solid;
      border-color: #93c9ff;
    }
    .el-table__cell {
      height: 32px;

      background: linear-gradient(
        180deg,
        rgba(0, 128, 254, 0.102) 0%,
        rgba(0, 128, 254, 0.1961) 100%
      );
      border: 0.1px solid #93c9ff;
      .cell {
        font-family: YouSheBiaoTiHei;
        font-size: 16px;
        font-weight: normal;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0px;
        background: linear-gradient(106deg, #cde1fd 3%, #8bbbff 94%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-align: center;
      }
    }
  }
}
</style>
