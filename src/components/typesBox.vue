<template>
  <ul class="nav-list">
    <tapItem
      @tap="onTap"
      :content="item"
      :active="item.active"
      v-for="item in types"
      :key="item.tag"
    >
    </tapItem>
  </ul>
</template>

<script>
import tapItem from "./tapItem.vue";
import { getTypes } from "../services/index.js"; //import {函数名} from 位置

export default {
  components: {
    tapItem,
  },
  data() {
    return {
      types: [],
    };
  },
  created() {
    //数据引入
    getTypes((res) => {
      this.types = res;
    });
    console.log(333, this.types); //？？？
  },
  methods: {
    //tap切换
    onTap(tag, name) {
      let types = [];
      this.types.map((abc) => {
        if (abc.tag == tag) {
          abc.active = true;
        } else {
          abc.active = false;
        }
        types.push(abc);
        // return abc
      });
      this.types = types;

      this.$emit("tapChange", tag, name);
    },
  },
};
</script>

<style scoped>
/* !! 属性选择器 */
.nav-list {
  height: 72px;
  background-color: rgba(248, 248, 248, 0.82);
}
</style>