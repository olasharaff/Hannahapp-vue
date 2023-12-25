<template>
    <main class="relative lg:mt-[9%] mt-[19%]">
      <!-- SECTION 1 -->
          <div class="bg-[#7234F5] home-style">
            <div class="max-w-6xl mx-auto px-6  flex " v-for="item in HomeDatas1" :key="item.id">
             
                <div class="flex flex-wrap gap-2 mt-10">
                  <div>
                    <h1 class="text-white text-5xl font-bold mb-4">
                      {{item.heroheader}}
                    </h1>
                    <h1 class="lg:text-8xl font-extrabold text-gradient-from-to mb-4 text-6xl">
                      {{item.herotitle}}.
                      
                    </h1>
                    <p class="max-w-[440px] text-sm text-white mb-16">
                      {{item.herocontent}}
                    </p>
                    <div class="flex lg:gap-7 gap-4 mb-6 lg:pb-5 flex-wrap lg:justify-start justify-center items-center">
                      <button class="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2  rounded-full">
                        Android <font-awesome-icon icon="fa-brands fa-google-play" class="ml-3 " />
                      </button>
                      <button class="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
                        iOS <font-awesome-icon icon="fa-brands fa-app-store-ios" class="ml-3" />
                      </button>
                      <button class="flex items-center whitespace-nowrap bg-white text-[#7234F5] lg:text-base text-sm lg:px-5 lg:py-3 px-3 py-2 rounded-full">
                        Web <font-awesome-icon icon="fa-solid fa-globe" class="ml-3" />
                      
                      </button>
                    </div>
                  </div>
                  <div class="lg:max-w-md max-w-sm  relative z-20 lg:top-0 top-10">
                    <img
                      src='../assets/img/iPhone 14 Pro.svg'
                      alt="iphone14"
                      loading="lazy"
                      class="w-full hero-img"
                    />
                  </div>
                </div>
             
            </div>
          </div>
       <!-- SECTION 2 -->
         <section className="px-6">
          <div className="mx-auto lg:bg-white bg-gray-50 rounded-md max-w-6xl relative lg:bottom-20 -bottom-14 lg:mb-6 mb-36 ">
            <div className=" border-b border-gray-300">
              <h1 className="px-9 py-7 font-bold text-3xl">Our Rates</h1>
              <div className="flex gap-7 mt-6 mb-5 px-9 flex-wrap">
                <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-white border border-gray-300 text-[#7234F5] lg:px-7 lg:py-4 px-4 py-2  rounded-full">
                 <i class="pi pi-gift mr-3"></i> Gift Card
                </button>
                <button className="flex items-center whitespace-nowrap lg:text-base text-sm bg-white border border-gray-300 text-[#7234F5] lg:px-7 lg:py-4 px-5 py-2 rounded-full">
                 <i class="pi pi-bitcoin mr-3"></i> Crypto
                 
                </button>
              </div>
            </div>
            <!-- select option  -->
            <div className="flex flex-wrap lg:gap-6 gap-4 lg:px-9 px-3 my-6">
              <div>
                <label htmlFor="dropdown" className="font-medium text-lg">
                  Gift card Category
                </label>
                <br />
                <select
                  id="dropdown"
                  v-model="selectedOption"
                  @change="handleSelectChange"
                  className="border p-2 lg:w-[300px] w-full sm:w-[250px] h-10 mt-3"
                  disabled
                >
                  <option value="">Select...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="dropdown" className="font-medium text-lg">
                  Gift card Sub-Category
                </label>
                <br />
                <select
                  id="dropdown"
                  v-model="selectedOption"
                  @change="handleSelectChange"
                  className="border p-2 lg:w-[300px] w-full sm:w-[250px] h-10 mt-3"
                  disabled
                >
                  <option value="">Select...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>

            <!-- range-->
            <div className="px-9 mb-7">
              <input
                type="range"
                id="slider"
                v-model="sliderValue"
                @change="handleSliderChange"
                min="0.00"
                max="100"
                step="1"
                className="my-6 w-[57%] h-1.5 appearance-none"
                :style="{
                  background:
                    `linear-gradient(to right, #4299e1, #4299e1, #cbd5e0 100%),
                `}"/>
                
             
              <h1 className="text-xl my-6">Card amount</h1>
              <p className="lg:text-4xl text-lg font-bold text-gray-300">
                {{sliderValue}}.00
              </p>
            </div>

            <!-- rate  -->
            <div className="bg-[#7234F5] w-full rounded-b-lg">
              <div className="flex flex-wrap gap-16 px-9 py-9">
                <div>
                  <h1 className="text-white lg:text-lg text:sm font-medium mb-6">
                    Rate
                  </h1>
                  <p className="lg:text-5xl text-lg font-bold text-gray-300">
                    {{rateSettings}}.00
                  </p>
                </div>
                <div>
                  <h1 className="text-white lg:text-lg text:sm font-medium mb-6">
                    How much you would get
                  </h1>
                  <p className="lg:text-5xl text-lg font-bold text-gray-300">
                    ₦{{ isHowMuch.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                    .00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       <GiftCard />
        <Wallet />
      </main>
  
</template>

<script>
import {HomeDatas1} from '../datas/HomeData'
import 'primeicons/primeicons.css'
import GiftCard from './sub-views/GiftCard.vue'
import Wallet from './sub-views/Wallets.vue'

export default {
    name: 'Home',
    components: {
        GiftCard,
        Wallet
    },
    data(){
        return{
            HomeDatas1: HomeDatas1,
            sliderValue: 0,
            rateSettings: 0,
            isHowMuch: 0,
        };
    },
    watch:{
        sliderValue(newValue){
          if (newValue <= 1 && newValue === 1) {
        this.rateSettings = 500;
        this.isHowMuch = newValue * 500
       
      } if (newValue > 1 && newValue >= 1) {
        this.rateSettings = 520;
        this.isHowMuch = newValue * 520
       
      } if (newValue >= 5) {
        this.rateSettings = 580;
        this.isHowMuch = newValue * 580
       
      }
      if (newValue > 20) {
        this.rateSettings = 800;
        this.isHowMuch = newValue * 800
      }
      if (newValue > 50) {
        this.rateSettings = 830;
        this.isHowMuch = newValue * 830
        
      }
        }
    },
    

}
</script>

<style scoped>
.home-style{
    background-image: url('../assets/img/BG.svg');
    background-position: cover;
    background-repeat: no-repeat;
    width: 100%;

}
input[type="range"]::-webkit-slider-thumb {
                background-color: #4299e1;
              }
            .text-gradient {
    background-clip: text;
    color: transparent;
}

.text-gradient-from-to {
    background-image: linear-gradient(92.65deg, rgba(114, 52, 245, 0) -2.55%, rgba(114, 52, 245, 0.37) 47.76%, rgba(114, 52, 245, 0) 93.96%),
        linear-gradient(0deg, #FFE6C4, #FFE6C4);
    background-clip: text;
    color: transparent;
}


</style>