import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Map from '@/components/map'

Vue.use(Router)

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
router.beforeEach(function(to, from, next){
  if(!sessionStorage.getItem('user_info')&&to.path==='/map'){
    next('/login')
  }else{
    next()
  }
})

export default router
