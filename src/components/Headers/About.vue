<template>
  <div>
    <div class="about-hade">
      <router-link to="/headers" class="order-sp" tag="span">返回</router-link>
      <span>木点工坊</span>
    </div>

    <div class="about-img">
      <img src="1.jpg" alt="">
      
    </div>

    <div class="about-con">
        <h2>品牌简介</h2>
      <p>
        木点工坊，100%实木家具工厂批量生产。木点工坊常年长年
        服务于英国财富家具公司的家具设计和制作。自08年开始从
        事国内销售，所制做全部实木家具，木门,橱柜，完全按照
        欧线环保标准，英国传统榫铆结构制作。目前致力于各种风
        格的北欧风格，轻奢风格的实木整屋订制。
      </p>
    </div>


    <ul class="ab-ul">
        <li>官方网站<span>></span></li>
        <li>客服电话<span>></span></li>
        <li>门店地址<span>></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
.about-hade {
  width: 100%;
  height: 40px;
  background: #2f374a;
  color: #fff;
  line-height: 40px;
}
.about-img {
  width: 100%;
  height: 200px;
}
.about-img img{
    width: 100%;
    height: 100%;
}
.about-con{
    display: flex;
    flex-direction: column;
    padding:  0 0 0 15px;
    border: 1px solid #ddd;
    
}
h2{
    margin: 10px 0;
}
.ab-ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0 5px;
}
.ab-ul li{
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.ab-ul li span{
    float: right;
}
</style>