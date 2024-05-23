<template>
  <div>
    <el-table
      row-key="id"
      class="table-list"
      ref="mytable"
      :data="list"
      :stripe="false"
      size="small"
      max-height="190"
    >
      <el-table-column
        label="AgentServer名称"
        prop="agentName"
        min-width="180px"
      />
      <el-table-column label="IP" prop="ip" />
      <el-table-column label="连接server">
        <el-table-column label="名称" prop="serverName" />
        <el-table-column label="IP" prop="serverIp" />
      </el-table-column>
      <el-table-column label="服务">
        <el-table-column label="名称" prop="serviceName" />
        <el-table-column label="IP" prop="serviceIp" />
      </el-table-column>
      <el-table-column label="状态" prop="status" align="center">
        <template #default="scope">
          <div
            class="status-line"
            :style="{
              border:
                scope.row.status === '1'
                  ? '1px solid rgba(120, 255, 209, 0.33)'
                  : scope.row.status === '2'
                  ? '1px solid rgba(250, 81, 81, 0.33)'
                  : scope.row.status === '3'
                  ? '1px solid rgba(255, 195, 0, 0.33)'
                  : '',
            }"
          >
            <div
              class="status"
              :style="{
                background:
                  scope.row.status === '1'
                    ? '#85ff94'
                    : scope.row.status === '2'
                    ? '#fa5151'
                    : scope.row.status === '3'
                    ? '#ffc300'
                    : '',
              }"
            ></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="采集时间" prop="time" min-width="180px" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "1",
    time: "2024-03-09 12:!2:12",
  },
  {
    id: "002",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "2",
    time: "2024-03-08 12:!2:12",
  },
  {
    id: "003",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "3",
    time: "2024-03-07 12:!2:12",
  },
  {
    id: "004",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "1",
    time: "2024-03-06 12:!2:12",
  },
  {
    id: "005",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "1",
    time: "2024-03-05 12:!2:12",
  },
  {
    id: "006",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "1",
    time: "2024-03-04 12:!2:12",
  },
  {
    id: "007",
    agentName: "AgentServer001",
    ip: "ip001",
    serverName: "50T",
    serverIp: "ip001",
    serviceName: "ser001",
    serviceIp: "ip001",
    status: "1",
    time: "2024-03-03 12:!2:12",
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
