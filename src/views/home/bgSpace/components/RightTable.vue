<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
      style="widht: 100%"
      max-height="320"
    >
      <el-table-column label="时间" prop="time" min-width="180px" />
      <el-table-column label="来源单位" prop="unit" />
      <el-table-column label="节点" prop="node" />
      <el-table-column label="目标系统" prop="system" />
      <el-table-column label="下发状态" prop="distributionStatus">
        <template #default="scope">
          <div
            class="status-line"
            :style="{
              border:
                scope.row.distributionStatus === '1'
                  ? '1px solid rgba(120, 255, 209, 0.33)'
                  : scope.row.distributionStatus === '2'
                  ? '1px solid rgba(250, 81, 81, 0.33)'
                  : scope.row.distributionStatus === '3'
                  ? '1px solid rgba(255, 195, 0, 0.33)'
                  : '',
            }"
          >
            <div
              class="status"
              :style="{
                background:
                  scope.row.distributionStatus === '1'
                    ? '#85ff94'
                    : scope.row.distributionStatus === '2'
                    ? '#fa5151'
                    : scope.row.distributionStatus === '3'
                    ? '#ffc300'
                    : '',
              }"
            ></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="反馈状态" prop="feedbackStatus">
        <template #default="scope">
          <div
            class="status-line"
            :style="{
              border:
                scope.row.feedbackStatus === '1'
                  ? '1px solid rgba(120, 255, 209, 0.33)'
                  : scope.row.feedbackStatus === '2'
                  ? '1px solid rgba(250, 81, 81, 0.33)'
                  : scope.row.feedbackStatus === '3'
                  ? '1px solid rgba(255, 195, 0, 0.33)'
                  : '',
            }"
          >
            <div
              class="status"
              :style="{
                background:
                  scope.row.feedbackStatus === '1'
                    ? '#85ff94'
                    : scope.row.feedbackStatus === '2'
                    ? '#fa5151'
                    : scope.row.feedbackStatus === '3'
                    ? '#ffc300'
                    : '',
              }"
            ></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "002",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "2",
    feedbackStatus: "2",
  },
  {
    id: "003",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "3",
    feedbackStatus: "3",
  },
  {
    id: "004",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "005",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",

    feedbackStatus: "1",
  },
  {
    id: "006",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "007",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "008",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "009",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "010",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "011",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
  },
  {
    id: "012",
    time: "2024-01-01 12:12:12",
    unit: "星图",
    node: "B1",
    system: "system",
    distributionStatus: "1",
    feedbackStatus: "1",
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
.status-line {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.status {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 auto;
}
</style>
