<template>
  <a class="sec-box-link">
    <div class="sec-header-box">
      <div class="sec-header">
        <img class="sec-header-img" :src="content.avatarUrl" />
        <div class="sec-header-title">
          <h6 class="sec-header-name">
            {{ content.nickName }}
          </h6>
          <span class="sec-header-txt">
            {{ time(content.createdAt) }} {{ content.companyName }}
          </span>
        </div>
        <div class="sec-header-nav">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="sec-content-box">
      <div class="sec-content" v-if="content.tag == 1">
        <table>
          <tr v-for="it in content.data.market" :key="it.id">
            <td>
              {{ it.name }}
            </td>
            <td>{{ it.price }}{{ content.data.unit }}</td>
          </tr>
        </table>
        <div>{{ content.data.remark }}</div>
      </div>
      <div class="sec-content" v-else>
        <div>
          {{ content.data.text }}
        </div>
        <img
          :src="ite"
          v-for="ite in content.data.images"
          class="sec-content-img"
          :key="ite.id"
        />
      </div>
    </div>
    <div class="sec-lacation-box">
      <p class="sec-lacation sec-header-txt">
        {{ loc(content.region) }}
      </p>
    </div>
  </a>
</template>

<script>
import { time } from "../services/index.js";
import { loc } from "../services/index.js";

export default {
  props: {
    content: Object,
    name: String,
  },
  methods: {
    time,
    loc,
  },
};
</script>

<style>
.sec-box-market-link {
  display: block;
  height: 223px;
  background-color: #ffffff;
  /* margin-bottom: 12px; */
}
.sec-header-box {
  height: 71px;
}
.sec-header {
  padding: 15px 15px 0px;
}
.sec-header-img {
  float: left;
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border-radius: 5px;
}
.sec-header-title {
  width: 248px;
  float: left;
  margin-right: 7px;
  font-family: PingFangSC-Medium, PingFang SC;
}
.sec-header-name {
  font-size: 16px;
  margin-bottom: 5px;
}
.sec-header-txt {
  font-size: 12px;
  color: #999999;
}
.sec-header-nav {
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

.sec-content-table-box {
  height: 108px;
  margin-bottom: 12px;
}
.sec-box-link {
  display: block;
  /* height:357px; */
  background-color: #ffffff;
  margin-bottom: 12px;
}

.sec-content {
  width: 258px;
  /* height: 100%; */
  margin-left: 71px;
  /* border: solid 1px #EEEEEE; */
}
.sec-content-img {
  width: 72px;
  height: 70px;
  margin-right: 5px;
}
.sec-lacation-box {
  height: 30px;
  clear: both;
}
.sec-lacation {
  padding: 3px 0px 10px 71px;
}
.sec-more-box {
  height: 37px;
  line-height: 37px;
  text-align: center;
}
.sec-more-link {
  color: #666666;
  font-size: 12px;
}
</style>