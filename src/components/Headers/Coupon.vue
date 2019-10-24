<template>
  <div>
    <div class="cou-hade">
      <router-link to="/headers" class="order-sp" tag="span">返回</router-link>
      <span>优惠券中心</span>
    </div>
    
    <div class="cou-div">
        <p><span>兑换优惠券</span> <span>使用说明</span></p>
    </div>

    <router-link to="/headers" tag="div" class="cou-wan">飞</router-link>
   
  </div>
</template>

<script>
export default {
  name: "Coupon"
};
</script>

<style>
.order-sp {
  padding: 0 10px;
}

.cou-hade {
  width: 100%;
  height: 40px;
  background: #2f374a;
  color: #fff;
  line-height: 40px;
}
.cou-div{
    float: right;
}
.cou-wan{
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 50px;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    right: 0;
    top: 450px;
}
</style>