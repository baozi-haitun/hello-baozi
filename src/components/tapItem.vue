<template>
  <li class="nav" @click="click" v-bind:class="{ active: active }">
    {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    content: Object, //content==item in types
    active: Boolean,
  },
  data() {
    return {
      name: "",
      tag: null,
    };
  },
  created() {
    let { name, tag } = this.content;
    this.name = name;
    this.tag = tag;
  },
  methods: {
    click() {
      this.$emit("tap", this.tag, this.name); //以子组件事件的方式给父级反馈数据
    },
  },
};
</script>

<style>
/* 位置 */
.nav {
  margin-top: 8px;
  margin-left: 15px;
  float: left;
  width: 55px;
  height: 26px;
  background-color: #ffffff;
  line-height: 26px;
  text-align: center;
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.nav.active {
  border: 1px solid #19ad18;
  color: #19ad18;
  background-color: rgba(25, 173, 24, 0.2);
}
</style>





