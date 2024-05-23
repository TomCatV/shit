<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
      max-height="390"
    >
      <el-table-column label="接收方" prop="receiver" />
      <el-table-column label="分发用户" prop="distribute" />
      <el-table-column label="数据大小" prop="dataSize" />
      <el-table-column label="次数" prop="num" />
      <el-table-column label="起止时间" prop="time" min-width="180px" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    receiver: "接收方01",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "002",
    receiver: "接收方02",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "003",
    receiver: "接收方03",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "004",
    receiver: "接收方04",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "005",
    receiver: "接收方05",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "006",
    receiver: "接收方06",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "007",
    receiver: "接收方07",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "008",
    receiver: "接收方08",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
  },
  {
    id: "009",
    receiver: "接收方01",
    distribute: "amdin",
    dataSize: "50T",
    num: "20",
    time: "2024-03-08 12:22:12 - 2024-03-09 12:12:12",
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
