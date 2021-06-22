<template>
  <div class="sec-mb">
    <!-- {{ name }} -->
    <contentItem
      v-for="item in sec"
      :key="item.id"
      :content="item"
      :name="name"
    ></contentItem>
  </div>
</template>

<script>
import { getData } from "../services/index.js"; //import {函数名} from 位置
import contentItem from "./contentItem.vue";

export default {
  props: {
    tag: Number,
    name: String,
  },
  components: {
    contentItem,
  },
  data() {
    return {
      sec: [],
      //   item: {},
    };
  },
  methods: {
    getDataFn() {
      getData((res) => {
        this.sec = res;
      }, this.tag);
    },
  },
  created() {
    this.getDataFn();
  },
  watch: {
    tag: function (a, b) {
      console.log(this.tag, this.name);
      this.getDataFn(); //调用methods中的局部函数
    },
  },
};
</script>

<style>
.sec-mb {
  padding-bottom: 50px;
}
</style>