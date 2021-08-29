<template>
  <div>
    <a-button type="primary" @click="regenerateToken" icon="deployment-unit">刷新token</a-button>
    <div class="language-yaml line-numbers-mode">
      <pre
        class="language-yaml"
      ><code><span class="token key atrule">access_token</span><span class="token punctuation">:</span> <span class="token number">{{ token }}</span></code></pre>
      <div class="line-numbers-wrapper">
        <span class="line-number">1</span><br />
      </div>
    </div>
  </div>
</template>

<script>

function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } 
    else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

export default {
    data() {
        return {
            token: uuid(32, 16),
        };
    },
    methods: {
        regenerateToken() {
            this.token= uuid(32, 16);
        }
    }
}
</script>