<template>
  <a-spin :spinning="spinning" size="large">
    <a-tabs tab-position="left">
      <a-tab-pane v-for="item in data" :key="item.remark" :tab="item.remark">
        <div
          id="components-table-demo-size"
          v-if="item.players_info.length > 0"
        >
          <a-list
            class="demo-loadmore-list"
            item-layout="horizontal"
            :data-source="item.players_info"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta :description="item.steamid">
                <a slot="title" :href="url + item.steamid">{{
                  item.player_name
                }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
              <span>
                <a-tag
                  :color="
                    item.ping > 50
                      ? 'volcano'
                      : item.ping < 10
                      ? 'green'
                      : 'geekblue'
                  "
                >
                  {{ item.ping }}ms
                </a-tag>
              </span>
            </a-list-item>
          </a-list>
        </div>
        <div id="components-table-demo-size" v-else>
          <a-result title="服务器空闲中，快来玩吧！">
            <template #icon>
              <a-icon type="coffee" />
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
import reqwest from "reqwest";

export default {
  data() {
    return {
      data: [],
      spinning: true,
      url: "https://steamcommunity.com/profiles/",
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleButtonClick() {
      this.fetch();
    },
    getData(callback) {
      reqwest({
        url: "https://s1.csgowiki.top:8080/api/server_info?qq_group=762993431",
        type: "json",
        method: "get",
        contentType: "application/json",
        success: (res) => {
          callback(res);
        },
        error: (res) => {
          this.$message.error("服务器列表加载失败：" + res.message);
        },
      });
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
      this.getData((res) => {
        this.spinning = false;
        this.data = res.results;
      });
    },
  },
};
</script>