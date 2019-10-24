<template>
  <div>
    <div class="order-hade">
      <router-link to="/headers" class="order-sp" tag="span">返回</router-link>
      <span>订单</span>
    </div>
    <ul class="order-ul">
      <router-link to="/order/erji" tag="li" v-for="(v,i) in list" :key="i">
        <p>{{v.name}}</p>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      list: [
        { name: "全部" },
        { name: "代付款" },
        { name: "代发货" },
        { name: "已完成" },
        { name: "退款/售后" }
      ]
    };
  }
};
</script>

<style>
.order-hade{
    width: 100%;
    height: 40px;
      background: #2f374a;
      color: #fff;
      line-height: 40px;
}
.order-ul {
  list-style: none;
  width: 100%;
  display: flex;
}
.order-ul li {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.order-sp {
  padding: 0 10px;
}
/* .router-link-active{
    border-bottom: 3px solid sienna;
} */
</style>