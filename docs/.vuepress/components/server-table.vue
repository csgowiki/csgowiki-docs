<template>
  <div class="servers-table">
    <div v-for="item in list" :key="item.host">
      {{item}}
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "servers-table",
  data() {
    return {
      list: [],
    };
  },
  beforeCreate() {
    axios
      .get("https://message-channel.vercel.app/api/server_info", {
        params: {
          qq_group: 762993431,
        },
      })
      .then(response => (this.list = response.data.status == "ok" ? response.data.result : []))
      .catch(function(error) {
        console.log(error);
      })
  },
};
</script>
