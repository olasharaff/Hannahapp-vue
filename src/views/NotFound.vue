<template>
   <div className="max-w-6xl px-9 mx-auto  mb-28 mt-[37%]">
         <div className="flex justify-center items-center" @click="handleRedirect">
           <img
             src="../assets/img/404.svg"
             alt="404"
             className="w-[80%] notfound-img"
            
           />
         </div>
       </div>  
</template>
<script>
export default{
   data(){
      return{

      }
   },
   methods:{
      handleRedirect(){
         this.$router.push('/')
      }
   }
}

</script>
<style scoped>

@media (max-width: 768px) {
 
   
    .notfound-img {
        width: 60%;
    }
}

@media (max-width: 480px) {
   
         .notfound-img {
             width: 70%;
         }

}
</style>