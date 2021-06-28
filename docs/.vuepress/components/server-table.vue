<template>
  <div class="servers-table">
    <!--div v-for="item in list" :key="item.id">
      项目：{{item.text}}，状态：{{item.done ? '完成': '进行中'}}
    </div-->
  </div>
</template>
<script>
export default {
  name: "servers-table",
  data() {
    return {
      list: [],
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get("https://message-channel.vercel.app/api/server_info", {
        params: {
          qq_group: 762993431,
        },
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    //     this.list = [
    //       { id: 1, text: 'JavaScript', done: false },
    //       { id: 2, text: 'HTML', done: false },
    //       { id: 3, text: 'CSS', done: true },
    //       { id: 4, text: 'Vue.js', done: true },
    //       { id: 5, text: 'VuePress', done: true }
    //     ]
  },
};
</script>
