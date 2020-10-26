<template>
  <div class="map-wrapper">
    {{userName}}，欢迎你来到北京小地图!
    <div v-for="item in addressJson" :key='item.id'>
      <p @mousemove="move" @click="currentClick(item)" :style="{cour:'pointer',position:'relative',left:`${item.left}%`,top:`${item.top}px`}">{{item.name}}</p>
      <p @mousemove="move" class="toast" v-if="curId===item.id" :style="{cour:'pointer',position:'absolute',left:`${item.left}%`,top:`${item.top}px`}">
        {{item.name}}的AQI：{{item.mark}},
        <span> {{item.desc}} </span>
      </p>
    </div>
  </div>
</template>
<script>
const componentName = 'Map';
import addressJson from './login'
export default {
  name: componentName,
  data() {
    return {
      componentName,
      userName:'',
      addressJson,
      curId:undefined,
    };
  },
  created(){
    this.userName=sessionStorage.getItem('user_info')
  },
  methods:{
    currentClick(item){
      this.curId=item.id
    },
    move(){
      this.curId=undefined
    }
  }
};
</script>
<style scoped>
.toast{
  width: 300px;
  height: 100px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.map-wrapper{
  height: 800px;
  position: relative;
}

</style>
