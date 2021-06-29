import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

export default ({ Vue, options, router }) => {
  Vue.config.productionTip = false;
  Vue.use(Antd);
};