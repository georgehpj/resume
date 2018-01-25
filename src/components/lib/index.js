/**
 * Created by georgehupeijie on 2018/1/25.
 */

import Box from "./box";
import ValueWrapper from "./value-wrapper.vue";

const components = [
  Box,
  ValueWrapper
];

export default {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component);
    });
  }
};
