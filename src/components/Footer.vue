<template>
    
      <footer class="max-w-6xl mx-auto px-6 mb-9 mt-5">
            <div class="flex lg:text-none lg:justify-between justify-center mb-8 flex-wrap w-full">
            <div class="lg:max-w-[350px] max-w-sm flex lg:justify-normal lg:text-start text-center justify-center flex-col mb-6 ">
              <div class="footer-logo">
                <img
                  src="../assets/img/footer-logo.svg"
                  alt="footer-logo"
                  loading="lazy"
                  class="lg:mb-6 mb-2 lg:w-[100px] text-center"
                />
              </div>
              <h1 class="lg:text-lg text-md">
                Hannah allows you to convert your gift cards & crypto to cash
                instantly.
              </h1>
            </div>
            <div class="flex lg:gap-12 gap-5 flex-wrap ">
              <div class=" lg:w-32 w-24">
                <h1 class="font-semibold lg:mb-6 mb-3">Features</h1>
                <ul class="lg:text-sm text-xs">
                  <li class="mb-3">
                    <router-link to="/">Buy Gift cards</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/">Sell Gift cards</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/">Trade Crypto</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/">Pay Bills</router-link>
                  </li>
                </ul>
              </div>
              <div class=" lg:w-32 w-24">
                <h1 class="font-semibold lg:mb-6 mb-3">Company</h1>
                <ul class="lg:text-sm text-xs">
                  <li class="mb-3">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/404">Blog</router-link>
                  </li>
                </ul>
              </div>
              <div class=" lg:w-32 w-24">
                <h1 class="font-semibold lg:mb-6 mb-3">Legal</h1>
                <ul class=" lg:text-sm text-xs">
                  <li class="mb-3">
                    <router-link to="/term">Terms</router-link>
                  </li>
                  <li class="mb-3 w-40">
                    <router-link to="/privacy-policy">Privacy Policy</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/aml-policy">AML Policy</router-link>
                  </li>
                </ul>
              </div>
              <div class="lg:w-32 w-24">
                <h1 class="font-semibold lg:mb-6 mb-3">Support</h1>
                <ul class="lg:text-sm text-xs">
                  <li class="mb-3">
                    <router-link to="/404">FAQs</router-link>
                  </li>
                  <li class="mb-3">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <attribution class="flex lg:justify-between items-center flex-wrap justify-center text-center">
            <div>
              <p>© 2023 Hannah Technologies, Inc.</p>
            </div>
            <div class="flex items-center justify-center flex-wrap lg:ml-4 ml-4 lg:gap-7 gap-4 main-attribute">
              <div class="flex gap-7 mb-0  sec-attribute">
                <font-awesome-icon icon="fa-brands fa-instagram" class="text-gray-500 text-xl hover:text-pink-400 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />
                <font-awesome-icon icon="fa-brands fa-twitter"
                  class="text-gray-500 text-xl hover:text-black hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer"
                  
                />
              
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-gray-500 text-xl hover:text-green-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />
                <font-awesome-icon icon="fa-brands fa-facebook" class="text-gray-500 text-xl hover:text-blue-600 hover:text-3xl transition-all duration-300 ease-in-out cursor-pointer" />
              </div>
              <div class="flex lg:gap-2 gap-4 third-attribute">
                <button class="flex items-center whitespace-nowrap lg:text-base text-sm bg-black text-white lg:px-8 lg:py-4 px-5 py-3  rounded-full">
                  Android 
                  <font-awesome-icon icon="fa-brands fa-google-play" class="ml-3 cursor-pointer"/>
                </button>
                <button class="flex items-center whitespace-nowrap lg:text-base text-sm bg-black text-white lg:px-8 lg:py-4 px-5 py-3 rounded-full">
                  iOS
                  <font-awesome-icon icon="fa-brands fa-app-store-ios" class="ml-3 cursor-pointer" />
                </button>
              </div>
            </div>
          </attribution>
            </footer>
  
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 875px){
    .footer-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            width: 100%;
        }
       

}
@media (max-width: 768px) {
   
   .footer-logo {
       display: flex;
       justify-content: center;
       align-items: center;
       max-width: 400px;
       width: 100%;
   }
  .main-attribute{
    margin-top: 20px;
  }
   
   
}

@media (max-width: 480px) {
    .hero-img {
        width: 70%;
        /* Further adjust the size for even smaller screens */
    }
        
                  .footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 300px;
                      width: 100%;
                  }
}

</style>