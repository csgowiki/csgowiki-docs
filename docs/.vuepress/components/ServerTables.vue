<template>
  <a-spin :spinning="spinning" size="large">
    <a-tabs tab-position="left">
      <a-tab-pane v-for="item in data" :key="item.remark" :tab="item.remark">
        <div id="components-table-demo-size" v-if="item.players_info.length > 0">
          <a-table
            :columns="columns"
            :data-source="item.players_info"
            :pagination="false"
            :row-key="(data) => data.client_id"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">Player Name</span>
            <span slot="ping" slot-scope="ping">
              <a-tag
                :color="
                  ping > 50 ? 'volcano' : ping < 10 ? 'green' : 'geekblue'
                "
              >
                {{ ping }}ms
              </a-tag>
            </span>
            <span slot="steamid" slot-scope="steamid">
              <a href="#">{{ steamid }}</a>
            </span>
          </a-table>
          
        </div>
        <div id="components-table-demo-size" v-else>
          <a-result title="服务器空闲中，快来玩吧！">
            <template #icon>
              <a-icon type="coffee"/>
            </template>
            <template #extra>
              <a-button type="primary" icon="right"> 连入服务器 </a-button>
            </template>
          </a-result>
        </div>
      </a-tab-pane>
      <a-button
        slot="tabBarExtraContent"
        icon="reload"
        shape="round"
        :loading="spinning"
        @click="handleButtonClick"
      >
        刷新
      </a-button>
    </a-tabs>
  </a-spin>
</template>

<style>
#components-table-demo-size h4 {
  margin-bottom: 16px;
}
</style>

<script>
import axios from "axios";
const queryData = (params) => {
  return axios.get("http://s1.csgowiki.top:8080/api/server_info", {
    params: params,
  });
};
const columns = [
  {
    key: "player_name",
    dataIndex: "player_name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
    width: "20%",
  },
  {
    key: "steamid",
    title: "Steam ID",
    dataIndex: "steamid",
    scopedSlots: { customRender: "steamid" },
    width: "25%",
  },
  {
    key: "ping",
    title: "Ping",
    dataIndex: "ping",
    scopedSlots: { customRender: "ping" },
    width: "10%",
  },
];
export default {
  data() {
    return {
      data: [],
      spinning: true,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleButtonClick() {
      // this.$message.warning("敬请期待");
      this.fetch();
    },
    handleTableChange(filters, sorter) {
      this.fetch({
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.spinning = true;
      queryData({
        qq_group: 762993431,
        server_id: -1,
        ...params,
      }).then(({ data }) => {
        // Read total count from server
        this.spinning = false;
        console.log(data.results);
        if (data.message != "send message success!") {
          this.$message.error("服务器列表加载失败：" + data.message);
        } else {
          this.$message.success("服务器列表加载成功");
          this.data = data.results;
        }
      });
    },
  },
};
</script>