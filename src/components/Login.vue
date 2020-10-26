<template>
  <div class="login">
    <input placeholder="用户名" v-model='userName'/>
    <input placeholder="密码" type='password' v-model="password"/>
    <button class="login-btn" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data () {
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    login(){
      if(this.userName&&this.password){
        sessionStorage.setItem('user_info',this.userName)
        this.$router.push('/map')
      }else{
        alert('请填写完整')
      }
    }
  }
}
</script>

<style scoped>
.login{
  padding-top:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input,button{
  margin-bottom: 20px;
}
.login-btn{
  width: 100px;
  text-align: center;
}

</style>
