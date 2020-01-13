<template>
  <div id="app">
    <v-app>
      <Navbar/>
      <router-view></router-view>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Router from 'vue-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new Router({
  routes: routes,
  mode: 'history'
})

export default {
  name: 'app',
  router,
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
