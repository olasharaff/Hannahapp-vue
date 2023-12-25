<template>
    <section class="flex justify-center items-center flex-col overflow-hidden">
        <div v-for="item in GiftCardContent" :key="item.id" class="text-center px-6 mb-14">
                <h1 class="lg:text-4xl text-2xl font-black mb-3">
                  {{item.textheader}}
                </h1>
                <p class="text-base">{{item.textcontent}}</p>
         </div>
        <div class="image-container">
             <p class="flex image">
                 <img
                    loading="lazy"
                    class="lg:max-w-sm"
                   src='../../assets/img/Steam-ebay.svg'
                    alt="steam-ebay"
                  />
                  <img
                    loading="lazy"
                    class="lg:max-w-md"
                    src='../../assets/img/bitcoin-van-seph.svg'
                    alt="bitcoin-van-seph"
                  />
                  <img
                    loading="lazy"
                    class="lg:max-w-lg"
                    src='../../assets/img/Nord-razor-nike.svg'
                    alt="Nord-razor-nike"
                  />
                  <img
                    loading="lazy"
                    class="lg:w-96"
                    src='../../assets/img/Itunes-google.svg'
                    alt="Itunes-google"
                  />
                  <img
                    loading="lazy"
                    class="lg:max-w-lg"
                    src='../../assets/img/American-wal-mac.svg'
                    alt="americaW"
                  />
                  <img
                    loading="lazy"
                    class="lg:w-96"
                    src='../../assets/img/Amazon-t.svg'
                    alt="americaT"
                  />
             </p>
          </div>
           <div class="flex px-9 justify-center items-center gap-4 mb-6 mt-16">
                  <img
                    loading="lazy"
                    class="lg:w-[150px] w-10"
                    src='../../assets/img/Punch.svg'
                    alt="Punch"
                  />
                  <img
                    loading="lazy"
                    class="lg:w-[150px] w-10"
                    src='../../assets/img/Trinune.svg'
                    alt="Trinune"
                  />
                  <img
                    class="lg:w-[150px] w-10"
                    src='../../assets/img/Legit NG.svg'
                    alt="Legit-NG"
                    loading="lazy"
                  />
                  <img
                    class="lg:w-[150px] w-10"
                    src='../../assets/img/Premium Times.svg'
                    loading="lazy"
                    alt="Premium-Times"
                  />
                  <img
                    loading="lazy"
                     class="lg:w-[200px] w-10"
                    src='../../assets/img/Techcabal.svg'
                    alt="Techcabal"
                  />
                </div>

    </section>
</template>

<script>
import { GiftCardContent } from '@/datas/HomeData'

export default {
    data(){
        return{
            GiftCardContent: GiftCardContent,
               
        }
    }

}
</script>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px; /* Adjust the height as needed */
}

.image {
  position: absolute;
  top: 0;
  left: 100%; /* Initially position the image outside the container on the right */
  animation: moveLeft 10s linear infinite; /* Adjust the duration and timing function as needed */
}
.fixed-image {
  width: 100px; /* Set the desired width for your images */
  height: 100px; /* Set the desired height for your images */
}

@keyframes moveLeft {
  0% {
    left: 10%; /* Starting position (outside the container on the right) */
  }
  
  100% {
    left: -100%; /* Ending position (outside the container on the left) */
  }
}

</style>