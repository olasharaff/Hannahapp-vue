<template>
  <header
    class="bg-[#7234F5] text-white border-b border-gray-400 navbar-header"
  >
    <nav class="flex  justify-between items-center max-w-6xl mx-auto px-6 py-10">
      <div>
        <router-link to="/"   @click="redirectHome">
          <img
            src="../assets/img/nav-logo.svg"
            alt="Header-logo"
            loading="lazy"
          
          />
        </router-link>
      </div>

      <div class="lg:flex items-center gap-10 hidden text-sm text-white font-bold">
        <router-link :to="{ name: 'features' }">Features</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> 
        <router-link :to="{ name: 'blogs' }">Blogs</router-link> 
        <router-link :to="{ name: 'faqs' }">FAQs</router-link> 
        <router-link :to="{ name: 'contacts' }">Contacts</router-link> 
         <router-link :to="{ name: 'login' }">I have an account. Log In</router-link> 
          <button class="px-8 py-3 bg-[#FFE6C4] text-black text-sm rounded-3xl">
              <router-link to="/register" target="_blank" class="text-black">
                Create an account
              </router-link>
            </button>

        
      </div>
      <div class="flex lg:hidden" @click="handleToggle">
        <h1>{{!isMenuOpen ? 'Open' : 'Close'}}</h1>   
      </div>
    </nav>
  </header>
 
      <div v-if="isMenuOpen" class="sticky top-19 left-0 w-full h-screen bg-[#7234F5] z-50 lg:hidden" >
        <div class="flex flex-col items-center justify-center gap-10 pt-28 pb-6  text-white font-bold  ">
         <router-link :to="{ name: 'features' }">Features</router-link>
            <router-link :to="{ name: 'about' }">About</router-link> 
            <router-link :to="{ name: 'blogs' }">Blogs</router-link> 
            <router-link :to="{ name: 'faqs' }">FAQs</router-link> 
            <router-link :to="{ name: 'contacts' }">Contacts</router-link> 
             <router-link :to="{ name: 'contacts' }">I have an account. Log In</router-link> 
              <button class="px-8 py-3 bg-[#FFE6C4] text-sm rounded-3xl">
                  <router-link to="/register" target="_blank">
                    Create an account
                  </router-link>
                </button>
                
        </div>
        
      </div>
  


  <router-view :style="{ marginTop: !isMenuOpen ? '100px' : '0' }" />
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
    methods:{
        handleToggle(){
            this.isMenuOpen = !this.isMenuOpen
            console.log("Open and close working")
        }, 
        redirectHome(){
            this.$router.push({name: 'home'})

        }
    }
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/diagramm');

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
   font-family: 'Diagramm', sans-serif;
}

nav a.router-link-exact-active {
  color: rgba(128, 128, 128, 0.839);
}
.navbar-header{
    position: fixed;
    z-index: 99999;
    width: 100%;
    top: 0;
    filter:transparent(1rem);
   
    
}
button a{
color: black !important;
}
</style>