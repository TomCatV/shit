<template>
  <div class="center-node">
    <ul class="content-node">
      <li class="node" @click="handleNode('B4')">
        <div class="node-title">B4</div>
        <div class="node-dia" v-if="isShow4">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B4节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
    </ul>
    <div class="first-column-line-left"></div>

    <ul class="content-node">
      <li @click="handleNode('B2')" class="node">
        <div class="node-title">B2</div>
        <div class="node-dia" v-if="isShow2">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B2节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
      <li class="line"></li>
      <li @click="handleNode('B3')" class="node">
        <div class="node-title">B3</div>
        <div class="node-dia" v-if="isShow3">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B3节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
      <li class="line"></li>
      <li class="node" @click="handleNode('B6')">
        <div class="node-title">B6</div>
        <div class="node-dia" v-if="isShow6">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B6节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
      <li class="line"></li>
      <li class="node" @click="handleNode('B7')">
        <div class="node-title">B7</div>
        <div class="node-dia" v-if="isShow7">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B7节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
    </ul>
    <div class="third-column-line-start"></div>

    <div class="third-column-line-left"></div>
    <div class="third-column-line-right"></div>
    <div class="third-column-line-end"></div>

    <ul class="content-node third">
      <li class="line-third" style="visibility: hidden"></li>
      <li class="node" @click="handleNode('B5')">
        <div class="node-title">B5</div>
        <div class="node-dia" v-if="isShow5">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B5节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
      <li class="line-third"></li>
      <li class="node" @click="handleNode('B1')">
        <div class="node-title">B1</div>
        <div class="node-dia" v-if="isShow1">
          <div class="dia-title">
            <div class="node-dia-title">
              <div class="dia-img"></div>
              <div class="dia-title-text">B1节点服务信息</div>
            </div>
            <div class="dia-title-colse" @click="handleColse">X</div>
          </div>
          <div class="title-line"></div>
          <el-table
            row-key="id"
            class="table-list"
            ref="mytable"
            :data="list"
            :stripe="false"
            size="small"
            max-height="160"
          >
            <el-table-column
              label="AgentServer"
              prop="agentName"
              min-width="160px"
            />
            <el-table-column
              label="服务状态"
              prop="status"
              align="center"
              min-width="100px"
            >
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
            <el-table-column label="CPU" prop="status" align="center">
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
            <el-table-column label="内存" prop="status" align="center">
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
          </el-table>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: "001",
    agentName: "AgentServer001",
    status: "1",
    cup: "1",
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

const emits = defineEmits(["getName"]);
const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);
const isShow5 = ref(false);
const isShow6 = ref(false);
const isShow7 = ref(false);
const isShow8 = ref(false);

const handleNode = (name: string) => {
  emits("getName", name);
  if (name === "B1") {
    isShow1.value = !isShow1.value;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B2") {
    isShow2.value = !isShow2.value;
    isShow1.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B3") {
    isShow3.value = !isShow3.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B4") {
    isShow4.value = !isShow4.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B5") {
    isShow5.value = !isShow5.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B6") {
    isShow6.value = !isShow6.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow5.value = false;
    isShow4.value = false;
    isShow7.value = false;
  } else if (name === "B7") {
    isShow7.value = !isShow7.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
  }
  // console.log("333", name, isShow3.value);
};
const handleColse = (name: string) => {
  if (name === "B1") {
    isShow1.value = !isShow1.value;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B2") {
    isShow2.value = !isShow2.value;
    isShow1.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B3") {
    isShow3.value = !isShow3.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B4") {
    isShow4.value = !isShow4.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow5.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B5") {
    isShow5.value = !isShow5.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow6.value = false;
    isShow7.value = false;
  } else if (name === "B6") {
    isShow6.value = !isShow6.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow5.value = false;
    isShow4.value = false;
    isShow7.value = false;
  } else if (name === "B7") {
    isShow7.value = !isShow7.value;
    isShow1.value = false;
    isShow2.value = false;
    isShow3.value = false;
    isShow4.value = false;
    isShow5.value = false;
    isShow6.value = false;
  }
};
</script>

<style lang="scss" scoped>
.top-model {
  position: absolute;
  top: -40px;
}
.center-top {
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  .item-model {
    background: url("../../../../assets/images/bgScreen/bottom-bg.png")
      no-repeat;
    background-size: contain;
    width: 200px;
    height: 186px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    .item-text {
      height: 24px;
      opacity: 1;
      font-family: YouSheBiaoTiHei;
      font-size: 22px;
      font-weight: normal;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.1em;
      background: url("../../../../assets/images/bgScreen/bottom-title.png")
        no-repeat;
      background-size: contain;
    }
    .item-num {
      height: 50px;
      opacity: 1;
      font-family: Microsoft YaHei;
      font-size: 30px;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.02em;

      font-variation-settings: "opsz" auto;
      background: linear-gradient(
        295deg,
        #b1ddff 11%,
        #ccf7ff 44%,
        #e8eeff 83%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      text-shadow: 0px 2px 10px rgba(0, 161, 225, 0.8);
    }
  }
  .light-bottom {
    background: url("../../../../assets/images/bgScreen/light-bottom.png")
      no-repeat;
    background-size: contain;
  }
}
.content-node {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .node {
    background: url("../../../../assets/images/bgScreen/node.png") no-repeat;
    background-size: contain;
    width: 120px;
    height: 132px;
    position: relative;
    cursor: pointer;

    .node-dia {
      cursor: default;
      position: absolute;
      left: 70px;
      bottom: 20px;
      z-index: 99;

      width: 420px;
      height: 237px;
      padding: 0 7px;
      opacity: 1;

      background: linear-gradient(
        180deg,
        rgba(23, 54, 105, 0.8) 0%,
        rgba(24, 63, 120, 0.8) 34%,
        rgba(23, 66, 126, 0.64) 71%,
        rgba(21, 84, 161, 0.352) 100%
      );

      border: 1px solid;
      border-image: linear-gradient(
          180deg,
          #426180 0%,
          rgba(66, 97, 128, 0) 100%
        )
        1;
      .dia-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        .node-dia-title {
          display: flex;
          align-items: center;
          height: 16px;
          .dia-img {
            background: url("../../../../assets/images/bgScreen/dia-left-icon.png")
              no-repeat;
            width: 40px;
            height: 12px;
          }
          .dia-title-text {
            height: 16px;
            font-family: Microsoft YaHei;
            font-size: 22px;
            font-weight: bold;
            line-height: 16px;
          }
        }
        .dia-title-colse {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
      .title-line {
        background: url("../../../../assets/images/bgScreen/bottom-line-dia.png")
          no-repeat;
        height: 2px;
        margin-bottom: 14px;
      }
    }
  }
  .node-title {
    background: url("../../../../assets/images/bgScreen/node-title.png")
      no-repeat;
    background-size: contain;
    width: 70px;
    height: 63px;
    line-height: 63px;
    text-align: center;
    position: absolute;
    top: -30px;
    left: 20px;

    // transform: rotate(30deg);
    font-family: Source Han Sans;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.04em;
  }
  .line {
    width: 200px;
    height: 0;
    border: 1.2px solid #6aa1ff;
  }
}
.center-node {
  position: relative;
}
.first-column-line-left {
  width: 150px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(145deg);
  -o-transform: rotate(145deg);
  -moz-transform: rotate(145deg);
  -webkit-transform: rotate(145deg);
  position: absolute;
  left: 437px;
}
.first-column-line-right {
  width: 150px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-125deg);
  -o-transform: rotate(-125deg);
  -moz-transform: rotate(-125deg);
  -webkit-transform: rotate(-125deg);
  position: absolute;
  right: 245px;
}
.third-column-line-start {
  width: 370px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-161deg);
  -o-transform: rotate(-161deg);
  -moz-transform: rotate(-161deg);
  -webkit-transform: rotate(-161deg);
  position: absolute;
  left: 120px;
}
.third-column-line-left {
  width: 90px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-125deg);
  -o-transform: rotate(-125deg);
  -moz-transform: rotate(-125deg);
  -webkit-transform: rotate(-125deg);
  position: absolute;
  left: 427px;
}
.third-column-line-right {
  width: 130px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-37deg);
  -o-transform: rotate(-37deg);
  -moz-transform: rotate(-37deg);
  -webkit-transform: rotate(-37deg);
  position: absolute;
  right: 490px;
}
.third-column-line-end {
  width: 180px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -webkit-transform: rotate(-30deg);
  position: absolute;
  right: 100px;
}
.third {
  justify-content: center;
  .line-third {
    width: 225.5px;
    height: 0;
    border: 1.2px solid #6aa1ff;
  }
}
</style>
<style lang="scss" scoped>
// 表格样式
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
