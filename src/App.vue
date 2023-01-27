
<template>
<div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  <!-- <FooterComponent></FooterComponent> -->
  <FooterComponent></FooterComponent>
  </div>
  
</template>

<script>
// import FooterComponent from './components/FooterCompenent.vue'
import NavBar from './components/NavBar.vue';
// import HomeComponent from './components/HomeComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'app',
  components:{
    NavBar, 
    // HomeComponent,
    FooterComponent
    // , 
    // FooterComponent
  }
}
</script>