 <!-- 视图区域，dom结构 -->
<template>
  <div id="app">
    <header class="header-box">
      <h5 class="head">行情资讯</h5>
    </header>

    <!-- 调用(使用)引入的组件 -->
    <typesBox @tapChange="tapChange"></typesBox>

    <!-- tag传入  -->

    <router-link to="/detail">
      <router-view>
        <contentBox :tag="currentTag" :name="currentName"> </contentBox>
      </router-view>
    </router-link>

    <footer class="footer-box">
      <ul class="footer-list">
        <li class="footer-list-content-box">
          <div class="footer-list-content">
            <div class="footer-list-content-icon"></div>
            <span class="footer-list-content-txt"> 交易 </span>
          </div>
        </li>
        <li class="footer-list-content-box">
          <div class="footer-list-content">
            <div class="footer-list-content-icon footer-icon-note"></div>
            <span class="footer-list-content-txt"> 记录 </span>
          </div>
        </li>
        <li class="footer-list-content-box">
          <div class="footer-list-content">
            <div class="footer-list-content-icon footer-icon-my"></div>
            <span class="footer-list-content-txt"> 我的 </span>
          </div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TypesBox from "./components/typesBox.vue"; //(引入)组件
import contentBox from "./components/contentBox.vue";

export default {
  name: "App", //???
  components: {
    // HelloWorld,
    TypesBox, //局部(注册)引入的组件
    contentBox,
  },
  data() {
    return {
      currentTag: 1,
      currentName: "报价",
    };
  },
  methods: {
    tapChange(tag, name) {
      this.currentTag = tag;
      this.currentName = name;
    },
  },
};
</script>

<style>
#app {
  background-color: #f8f8f8;
  font-size: 14px;
}
.header-box {
  padding-top: 30px;
  background-color: rgba(248, 248, 248, 0.82);
  border-bottom: 1px solid #b9b9b9;
}
.head {
  line-height: 33px;
  text-align: center;
  font-size: 17px;
  font-family: Helvetica;
  font-weight: 400;
}

.footer-box {
  height: 49px;
  background-color: #ffffff;
  font-size: 12px;
  color: #666666;
  border-top: 1px solid #eeeeee;
  position: fixed;
  bottom: 0px;
}
.footer-list-content-box {
  float: left;
  width: 125px;
  height: 100%;
}
.footer-list-content {
  width: 24px;
  height: 100%;
  margin: 5px auto;
}
.footer-list-content-icon {
  width: 22px;
  height: 21px;
  background-image: url(./assets/images/exchange-icon.png);
  /* ???图片路径 */
  background-size: 22px;
  background-repeat: no-repeat;
}
.footer-icon-note {
  background-image: url(./assets/images/note-icon.png);
}
.footer-icon-my {
  background-image: url(./assets/images/my-icon.png);
}
</style>
