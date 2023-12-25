<template>
   <div className="lg:mt-[12%] mt-[18%]">
          <div className="max-w-3xl lg:pl-20 pl-5 my-7 pr-6">
            <h1 className="text-[#7234F5] mb-6">ABOUT US </h1>
            <p className="lg:text-6xl text-2xl font-bold ">
              We're building the next generation finance & trading system.
            </p>
          </div>

          <!-- {/* Floating Card */} -->
          <div class="image-container">
                 <p class="flex image">
                     <img
                        loading="lazy"
                        class="lg:max-w-sm"
                       src='../assets/img/Steam-ebay.svg'
                        alt="steam-ebay"
                      />
                      <img
                        loading="lazy"
                        class="lg:max-w-md"
                        src='../assets/img/bitcoin-van-seph.svg'
                        alt="bitcoin-van-seph"
                      />
                      <img
                        loading="lazy"
                        class="lg:max-w-lg"
                        src='../assets/img/Nord-razor-nike.svg'
                        alt="Nord-razor-nike"
                      />
                      <img
                        loading="lazy"
                        class="lg:w-96"
                        src='../assets/img/Itunes-google.svg'
                        alt="Itunes-google"
                      />
                      <img
                        loading="lazy"
                        class="lg:max-w-lg"
                        src='../assets/img/American-wal-mac.svg'
                        alt="americaW"
                      />
                      <img
                        loading="lazy"
                        class="lg:w-96"
                        src='../assets/img/Amazon-t.svg'
                        alt="americaT"
                      />
                 </p>
              </div>

          <div className="max-w-3xl lg:pl-20 pl-5 my-7 pr-6 ">
            <h1 className="lg:text-6xl text-2xl font-bold mb-6">Our Mission</h1>
            <p className="mb-6">
             
              Lorem ipsum dolor sit amet consectetur. Egestas nulla quisque ornare
              neque hac. Ut etiam a quam eget quam ipsum lectus. Risus in elementum
              egestas magna ipsum convallis a. Nisl nullam mauris aliquam diam
              vitae. Varius et donec orci eros viverra consectetur ac. Consectetur
              ac rhoncus massa lobortis. Mi egestas est risus pellentesque a est
              felis libero enim. Vestibulum vestibulum consequat pellentesque
              sagittis proin augue orci egestas felis. Scelerisque et molestie
              quisque nisl commodo in molestie vulputate sed.
            </p>

            <p className="mb-6">
             
              Lorem ipsum dolor sit amet consectetur. Egestas nulla quisque ornare
              neque hac. Ut etiam a quam eget quam ipsum lectus. Risus in elementum
              egestas magna ipsum convallis a. Nisl nullam mauris aliquam diam
              vitae. Varius et donec orci eros viverra consectetur ac. Consectetur
              ac rhoncus massa lobortis. Mi egestas est risus pellentesque a est
              felis libero enim. Vestibulum vestibulum consequat pellentesque
              sagittis proin augue orci egestas felis. Scelerisque et molestie
              quisque nisl commodo in molestie vulputate sed.
            </p>
          </div>

          <Slider />
        </div>
  
</template>

<script>
import Slider from '../views/sub-views/Sliders.vue'

export default {
   name: 'About',
   components:{
    Slider
   }
   

}
</script>

<style scoped>
.image-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    /* Adjust the height as needed */
}

.image {
    position: absolute;
    top: 0;
    left: 100%;
    /* Initially position the image outside the container on the right */
    animation: moveLeft 10s linear infinite;
    /* Adjust the duration and timing function as needed */
}

.fixed-image {
    width: 100px;
    /* Set the desired width for your images */
    height: 100px;
    /* Set the desired height for your images */
}

@keyframes moveLeft {
    0% {
        left: 10%;
        /* Starting position (outside the container on the right) */
    }

    100% {
        left: -100%;
        /* Ending position (outside the container on the left) */
    }
}
</style>