<template>
  
   
    <navbar/>
   
    <Footer/>
    
   
   
 
  
</template>
<script>
import Contacts from './views/Contacts.vue'
import navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    navbar,
    Footer,
    Contacts
  },
  data() {
    return{
      
    }
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}


</style>
