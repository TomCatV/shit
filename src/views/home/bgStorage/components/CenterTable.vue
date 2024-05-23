<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
    >
      <el-table-column label="节点" prop="node" />
      <el-table-column label="空间大小" prop="spaceSize" />
      <el-table-column label="已用空间" prop="usedSize" />
      <el-table-column label="今日释放" prop="release" />
      <el-table-column label="今日新增" prop="add" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    node: "B1",
    spaceSize: "50T",
    usedSize: "30T",
    release: "10T",
    add: "10T",
  },
  {
    id: "002",
    node: "B2",
    spaceSize: "40T",
    usedSize: "30T",
    release: "10T",
    add: "10T",
  },
  {
    id: "003",
    node: "B3",
    spaceSize: "40T",
    usedSize: "30T",
    release: "10T",
    add: "10T",
  },
  {
    id: "004",
    node: "B4",
    spaceSize: "30T",
    usedSize: "20T",
    release: "10T",
    add: "10T",
  },
  {
    id: "005",
    node: "B5",
    spaceSize: "30T",
    usedSize: "20T",
    release: "10T",
    add: "10T",
  },
  {
    id: "006",
    node: "B6",
    spaceSize: "30T",
    usedSize: "20T",
    release: "10T",
    add: "10T",
  },
  {
    id: "007",
    node: "B7",
    spaceSize: "20T",
    usedSize: "10T",
    release: "10T",
    add: "10T",
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
