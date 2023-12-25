<template>
    <div class="home">
        <h1>About</h1>
       
        <h1>{{msg}}</h1>
    </div>
  
</template>

<script>

export default {
   
    data() {
        return{
        msg: 'Welcome to Your about route'
        }
        
    },
    mounted() {
        console.log('About component mounted');
    }

}
</script>

<style scoped>


</style>