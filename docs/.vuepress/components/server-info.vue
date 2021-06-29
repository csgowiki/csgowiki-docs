<template>
<a-spin :spinning="spinning" size="small">
  <a-table 
    :columns="columns" 
    :data-source="item.players" 
    :pagination="false" 
    :row-key="data => data.client_id"
    v-for="item in data" :key="item.remark"
  >
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Player Name</span>
    <span slot="ping" slot-scope="ping">
      <a-tag
        :color="ping > 50 ? 'volcano' : ping < 10 ? 'green' : 'geekblue'"
      >
      {{ping}}ms
      </a-tag>
    </span>
    <span slot="steamid" slot-scope="steamid">
      <a href="#">{{steamid}}</a>
    </span>
  </a-table>
</a-spin>
</template>

<script>
import axios from 'axios';

const queryData = params => {
  return axios.get('https://message-channel.vercel.app/api/server_info', { params: params });
};

const columns = [
  {
    key: 'client_id',
    title: 'Client ID',
    dataIndex: 'client_id',
    width: '15%'
  },
  {
    key: 'name',
    dataIndex: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
    width: '20%'
  },
  {
    key: 'steamid',
    title: 'Steam ID',
    dataIndex: 'steamid',
    scopedSlots: { customRender: 'steamid' },
    width: '25%'
  },
  {
    key: 'ping',
    title: 'Ping',
    dataIndex: 'ping',
    scopedSlots: { customRender: 'ping' },
    width: '10%'
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
        ...params,
      }).then(({ data }) => {
        // Read total count from server
        this.spinning = false;
        console.log(data.result)
        if (data.status != "ok") {
          this.$message.error("服务器列表加载失败：" + data.message);
        }
        else {
          this.$message.success('服务器列表加载成功');
          this.data = data.result;
        }
      });
    },
  },
};
</script>