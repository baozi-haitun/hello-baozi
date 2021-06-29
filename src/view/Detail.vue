
<template>
  <div id="app">
    <header class="header-box">
      <div class="header-return"></div>
      <h5 class="head">行情信息</h5>
    </header>
    <div class="sec-box" v-if="content">
      <div class="sec-header-box">
        <div class="sec-header">
          <img class="sec-header-img" :src="content.avatarUrl" />
          <div class="sec-header-title">
            <div class="sec-header-title-row1">
              <h6 class="sec-header-name">
                {{ content.name }}
              </h6>
              <div class="sec-header-market">
                {{ name }}
              </div>
            </div>
            <span class="sec-header-txt">
              {{ time(content.createdAt) }}
            </span>
          </div>
        </div>
      </div>
      <div class="sec-content-box">
        <div class="sec-content" v-if="content.tag == 1">
          <table v-for="(item, index) of content.data.market" :key="item.id">
            <tr>
              <td>{{ index }}{{ item.name }}</td>
              <td>{{ item.price }}{{ content.data.unit }}</td>
            </tr>
          </table>
          <div>{{ content.data.remark }}</div>
        </div>
        <div class="sec-content" v-else>
          <div>
            {{ content.data.text }}
          </div>
          <img
            class="sec-content-img"
            v-for="piece of content.data.images"
            :src="piece"
            :key="piece.id"
          />
        </div>
      </div>
      <div class="sec-footer-box">
        <div class="sec-footer">
          <p class="sec-lacation sec-header-txt">
            {{ loc(content.region) }}
          </p>
        </div>
        <div class="sec-header-delete">删除</div>
      </div>
      <footer class="footer-box">
        <div class="footer-txt-box">
          <p class="footer-txt">
            提示：我是提示内容谢谢我是提示内容谢谢我是提示内我
          </p>
        </div>
        <div class="footer-button-box">
          <div class="footer-button">分享给客户</div>
          <div
            class="footer-button"
            :class="{ active: isActive }"
            id="footerButton"
            @click="click(content)"
          >
            返回
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { getInfo } from "../services/index.js";
import { time } from "../services/index.js";
import { loc } from "../services/index.js";
import { getTypes } from "../services/index.js";

export default {
  data() {
    return {
      content: null,
      id: "",
      name: "",
      isActive: false,
    };
  },
  async created() {
    // console.log(this.$route);
    this.id = this.$route.query.id;
    let ps = await Promise.all([getInfo(this.id), getTypes()]);
    let [res, types] = ps;
    this.content = res;
    types.map((item) => {
      item.tag == this.content.tag ? (this.name = item.name) : false;
    });
  },
  methods: {
    time,
    loc,
    click() {
      this.isActive = true;
      history.back();
    },
  },
};
</script>

<style scoped>
#app {
  background-color: #f8f8f8;
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 14px;
  height: 667px;
}
.header-box {
  overflow: hidden;
  padding-top: 30px;
  background-color: rgba(248, 248, 248, 0.82);
  border-bottom: 1px solid #b9b9b9;
}
.header-return {
  display: block;
  width: 12px;
  height: 21px;
  margin: 0px 133px 11px 9px;
  background-color: #007aff;
  float: left;
}
.head {
  float: left;
  line-height: 33px;
  font-size: 17px;
  font-family: Helvetica;
  font-weight: 400;
}
.sec-box {
  display: block;
  /* height:368px; */
  background-color: #ffffff;
}
.sec-header-box {
  height: 79px;
}
.sec-header {
  padding: 15px 15px 0px;
}
.sec-header-img {
  float: left;
  width: 64px;
  height: 61px;
  margin: 2px 6px 4px 0px;
  border-radius: 4px;
}
.sec-header-title {
  width: 248px;
  float: left;
  margin-right: 7px;
  font-family: PingFangSC-Medium, PingFang SC;
}
.sec-header-title-row1 {
  overflow: hidden;
}
.sec-header-name {
  float: left;
  font-size: 16px;
  margin-right: 8px;
  margin-bottom: 5px;
}
.sec-header-txt {
  font-size: 12px;
  color: #999999;
}
.sec-header-market {
  float: left;
  width: 34px;
  height: 19px;
  line-height: 19px;
  text-align: center;
  color: #cd5e29;
  font-size: 12px;
  background-color: #f6d2c0;
  border-radius: 4px;
}

.sec-content-box {
  /* height: 250px; */
  margin-bottom: 19px;
}
.sec-content {
  width: 278px;
  height: 100%;
  margin-left: 71px;
  /* border: solid 1px #EEEEEE; */
}
.sec-content-img {
  width: 72px;
  height: 70px;
  margin-right: 5px;
}
.sec-footer-box {
  height: 20px;
  overflow: hidden;
}
.sec-footer {
  float: left;
  padding-left: 71px;
  width: 216px;
  margin-right: 49px;
}
.sec-lacation {
  margin-bottom: 8px;
}
.sec-header-delete {
  float: left;
  color: #19ad18;
  font-size: 12px;
}
.footer-box {
  padding-top: 8px;
}
.footer-txt-box {
  height: 40px;
  /* margin-bottom:15px; */
  font-size: 12px;
  color: #999999;
}
.footer-txt {
  width: 348px;
  line-height: 20px;
  margin: 0 12px 0 15px;
}
.footer-button-box {
  height: 110px;
  font-size: 16px;
  line-height: 45px;
  color: #222222;
  text-align: center;
  background-color: #f8f8f8;
  padding: 35px 0 44px;
}
.footer-button {
  width: 240px;
  height: 45px;
  margin: 0 auto 20px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.footer-button.active {
  background-color: #19ad18;
  color: #ffffff;
}
</style>