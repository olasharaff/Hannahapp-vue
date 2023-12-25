<template>
    <div class="mt-12 mb-12">
        <div class="bg-[#F5F0FE]">
            <div ref="swiperContainer" class="swiper-container relative">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"  v-for="item in items" :key="item.author">
                        <div v-if="item === activeItem"
                            class="flex flex-col justify-center items-center mx-auto max-w-xl text-center overflow-hidden h-[320px] px-9 mb-9 mt-9">
                            <img :src="item.image" loading="lazy" alt="index"
                                class="rounded-full mb-5" />
                            <h1 class="mb-5">
                                {{ item.text }}
                            </h1>
                            <cite class="font-bold">{{item.author}}</cite>
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
        <div class="flex px-9 justify-center items-center gap-4 mb-6 mt-16">
            <img loading="lazy" class="lg:w-[150px] w-10" src="../../assets/img/Punch.svg" alt="punch" />
            <img loading="lazy" class="lg:w-[150px] w-10" src="../../assets/img/Trinune.svg"  alt="tribune" />
            <img loading="lazy" class="lg:w-[150px] w-10" src="../../assets/img/Legit NG.svg" alt="legit" />
            <img loading="lazy" class="lg:w-[150px] w-10" src="../../assets/img/Premium Times.svg"  alt="premium" />
            <img loading="lazy" class="lg:w-[200px] w-10" src="../../assets/img/Techcabal.svg"  alt="Techcabel" />
        </div>
    </div>
</template>

<script>
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default {
    data() {
        return {
            swiper: null,
            activeItem: null,
            items: [
                {
                    image: "https://www.hannahapp.com/assets/images/avatar.png",
                    text:
                        "Simply amazing! This is the most versatile, intuitive and high quality theme I have ever used! Can't wait to see how it can be even better with future updates.",
                    author: "Daudu Sunday",
                },
                 {
                    image: "https://www.hannahapp.com/assets/images/avatar.png",
                    text:
                        "Simply amazing! This is the most versatile, intuitive and high quality theme I have ever used! Can't wait to see how it can be even better with future updates.",
                    author: "Sharaf Abdullah",
                },
                
            ],
        };
    },
   
    mounted() {
        this.activeItem = this.items[0];
        this.swiper = new SwiperCore(this.$refs.swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 30,
           
           navigation: {
                nextEl: this.$refs.swiperButtonNext,
                prevEl: this.$refs.swiperButtonPrev,
            },
             pagination: {
                el: this.$refs.swiperPagination,
                clickable: true,
            },
            autoplay: {
                delay: 3000,
            },
        });
    },
    beforeDestroy() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    },
};
</script>

<style scoped>
/* Slider configuration  */

.swiper-button-next:after,
.swiper-button-prev:after {
   
    color: rgba(0, 0, 0, 0.426) !important;
   
   

}
.swiper-button-next{
    position: absolute;
    right: 15%;
    transform: translateY(-50%);
     border-radius: 100%;
    border: 1px solid #000;
    padding: 50px;
}
.swiper-button-prev{
    position: absolute;
    left: 15%;
    transform: translateY(-50%);
    border-radius: 100%;
    border: 1px solid #0000007b;
    padding: 50px;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: #fff !important;
}
</style>
