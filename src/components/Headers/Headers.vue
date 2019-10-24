<template>
  <div>
    <div class="head-header">
      <p class="head-p1">我的工坊</p>
      <!-- <p class="head-p2">
        <button>点击登录</button>
      </p>-->
      <div class="head-box" v-show="done">
        <p>
          账号:
          <input type="text" v-model="user" />
        </p>
        <p>
          密码:
          <input type="text" v-model="pass" />
        </p>

        <p><button @click="add()">注册</button></P>
      </div>


      <div class="head-box" v-show="dong">
        <p>
          账号:
          <input type="text" v-model="username" />
        </p>
        <p>
          密码:
          <input type="text" v-model="passname" />
        </p>

        <p><button @click="addCart()">登录</button></P>
      </div>

      <div v-show="good">
        登陆成功！！！！
      </div>
    </div>

    <div>
      <ul class="head-ul">
        <router-link to="/order" tag="li">
          <p class="head-ul-img">
            <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-youhuiquan"></use>
</svg>
            
          </p>
          <p>我的订单</p>
        </router-link>
        <router-link to="/coupon" tag="li">
          <p class="head-ul-img"></p>
          <p>优惠券中心</p>
        </router-link>
        <router-link to="/about" class="head-ul-li" tag="li">
          <p class="head-ul-img"></p>
          <p>关于我们</p>

         
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Headers",
  data() {
    return {
      user:"",
      pass:"",
      username:"",
      passname:"",
      list:[],
      done:true,
      dong:false,
      good:false,
      arr:[]
    }
  },
  methods: {
    add(){
      // var a =localStorage.getItem("todo")
      // var list2 =this.listl;
      if(this.user==""||this.pass==""){
        alert("请输入信息")
        return
      }else{
         this.list.push({userName:this.user,passName:this.pass})
      localStorage.setItem("list",JSON.stringify(this.list))
        this.done=false
        this.dong=true
      }
     
    
      
    },
    addCart(){
     
      this.arr=JSON.parse(localStorage.getItem("list"))
    
      if(this.arr.userName==""||this.passname==""){
          alert("不能输入为空")
          return
      }else{
         for(var i in this.arr){
        if(this.username==this.arr[i].userName&&this.passname==this.arr[i].passName){
          this.dong=false
          this.good=true
        }

      }

      }
     

      
     
    }
  },
};
</script>

<style>
.head-header {
  width: 100%;
  background: #2f374a;
  height: 200px;
  color: #fff;
}
.head-box{
  text-align: center;
  margin-top: 40px;
}
.head-box p{
  margin: 5px 0;
}
.head-box button{
  width: 100px;
  margin-top: 5px 0;
}
.head-p1 {
  font-size: 20px;
  margin-left: 10px;
}
.head-p2 {
  text-align: center;
  line-height: 100px;
}
.head-ul {
  list-style: none;
  width: 100%;
}
.head-ul li {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
  display: flex;
}
.head-ul-img {
  width: 30px;
  height: 100%;
  border: 1px solid #ddd;
}
.head-ul-li {
  margin-top: 10px;
}


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>