<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
      :cell-style="cellStayle"
    >
      <el-table-column label="数据分类" prop="dataType">
        <template #default="scope">
          <span
            v-if="scope.row.dataType === '空间目标'"
            class="data-type-one"
            >{{ scope.row.dataType }}</span
          >
          <span
            v-if="scope.row.dataType === '空间物体'"
            class="data-type-two"
            >{{ scope.row.dataType }}</span
          >
          <span
            v-if="scope.row.dataType === '空间天气'"
            class="data-type-three"
            >{{ scope.row.dataType }}</span
          >
          <span
            v-if="scope.row.dataType === '空间碎片'"
            class="data-type-four"
            >{{ scope.row.dataType }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="监测数据" prop="monitorData" />
      <el-table-column label="数据产品" prop="dataProduct" />
      <el-table-column label="信息产品" prop="infoProduct" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    dataType: "空间目标",
    monitorData: "20T",
    dataProduct: "20T",
    infoProduct: "20T",
  },
  {
    id: "001",
    dataType: "空间物体",
    monitorData: "20T",
    dataProduct: "20T",
    infoProduct: "20T",
  },
  {
    id: "001",
    dataType: "空间天气",
    monitorData: "20T",
    dataProduct: "20T",
    infoProduct: "20T",
  },
  {
    id: "001",
    dataType: "空间碎片",
    monitorData: "20T",
    dataProduct: "20T",
    infoProduct: "20T",
  },
]);
const cellStayle = (row, colum, rowIndex, columnIndex) => {};
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

        font-variation-settings: "opsz" auto;
        background: linear-gradient(106deg, #cde1fd 3%, #8bbbff 94%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-align: center;
      }
      .data-type-one {
        background: linear-gradient(0deg, #cde1fd 0%, #3662ec 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .data-type-two {
        background: linear-gradient(
          90deg,
          #ffffff 0%,
          #ffb772 51%,
          #ff8f1f 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .data-type-three {
        background: linear-gradient(
          90deg,
          #fff8c6 0%,
          #fff8c6 50%,
          #ffc300 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .data-type-four {
        background: linear-gradient(249deg, #40bb4f 20%, #7feb8c 55%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
}
</style>
