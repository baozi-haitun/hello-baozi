<template>
  <div class="sec-mb">
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
import { down } from "../services/index.js";

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
      page: 0,
    };
  },
  methods: {
    //局部函数储存
    getDataFn() {
      console.log(22);
      getData(
        (res) => {
          // for (let item of res) {
          //   this.sec.push(item); //不能追加数组，应追加数组的项目
          // }
          var newArr = this.sec.concat(res);
          console.log(newArr);
          this.sec = newArr;
        },
        this.tag,
        this.page
      );
    },
  },
  created() {
    //执行环境
    this.getDataFn();
    down(() => {
      // if () {
      this.page++;
      // }
      this.getDataFn();
    });
  },
  watch: {
    //执行环境
    tag: function (a, b) {
      this.sec = [];
      this.page = 0;
      this.getDataFn(); //调用methods中的局部函数
    },
  },
};
</script>

<style scoped>
.sec-mb {
  padding-bottom: 50px;
}
</style>