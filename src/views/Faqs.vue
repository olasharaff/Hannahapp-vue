<template>
    <div class="lg:mt-[13%] mt-[40%]">
        <div class="max-w-6xl px-6 mx-auto my-20">
              <h1 class="text-base font-bold mb-6 text-[#7234F5]">FAQs</h1>
              <p class="lg:text-5xl font-bold text-3xl">
                Some of the Questions you might have
              </p>
            </div>
            <!-- {/* faq General Question */} -->
            <div class="max-w-6xl px-6 mx-auto my-20">
              <h1 class="text-3xl font-bold mb-6">General</h1>
                <div v-for="faq in FaqGeneral" :key="faq.id" @click="toggleAnswer(faq)">
                  <div class="lg:px-10 px-6 border-b border-gray-300 py-7" :class="{'bg-black text-white': faq.isOpen }">
                    <div class="flex justify-between items-center mb-6">
                      <h1 class="font-bold text-lg">{{faq.question}}</h1>
                      <p class="border border-gray-200 lg:text-base lg:px-4 lg:py-2 text-xs px-3 py-2 rounded-lg" v-html="faq.isOpen ? '<i class=\'pi pi-minus\'></i>' : '<i class=\'pi pi-plus\'></i>'" :class="{'bg-white text-black': faq.isOpen}">
                     
                      </p>
                    </div>

                  <div v-if="faq.isOpen">
                          <p class="text-white">
                            {{faq.answer}}
                          </p>
                      
                  </div>
                  </div>
                </div>
             
            </div>

            <!-- faq Security Question -->
             
            <div class="max-w-6xl px-6 mx-auto my-20">
              <h1 class="text-3xl font-bold mb-6">Security</h1>

             <div v-for="security in FaqSecurity" :key="security.id" @click="toggleSecurity(security)">
                      <div class="lg:px-10 px-6 border-b border-gray-300 py-7" :class="{ 'bg-black text-white': security.isOpen }">
                        <div class="flex justify-between items-center mb-6">
                          <h1 class="font-bold text-lg">{{ security.question }}</h1>
                          <p class="border border-gray-200 lg:text-base lg:px-4 lg:py-2 text-xs px-3 py-2 rounded-lg"  :class="{ 'bg-white text-black': security.isOpen }">
                             <i v-if="security.isOpen" class="pi pi-minus"></i>
                  <i v-else class="pi pi-plus"></i>
                          </p>
                        </div>

                      <div v-if="security.isOpen">
                              <p class="text-white">
                                {{ security.answer }}
                              </p>
                      
                      </div>
                      </div>
                    </div>
               
            </div>
       <Slider/>
    </div>
</template>

<script>
import { FaqGeneral, FaqSecurity } from '@/datas/FaqData';
import Slider from '../views/sub-views/Sliders.vue'
export default {
    name: 'Faqs',
    components:{
        Slider
    },
    data() {
        return {
            FaqGeneral: FaqGeneral.map((faq) => ({ ...faq, isOpen: false })),
            FaqSecurity: FaqSecurity.map((security) => ({ ...security, isOpen: false })),

            
        }
    },
    methods: {
        toggleAnswer(faq) {
            faq.isOpen = !faq.isOpen;
            
        },
        toggleSecurity(security){
            security.isOpen = !security.isOpen;

        }
    }

}
</script>

<style></style>