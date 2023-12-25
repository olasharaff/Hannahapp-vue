<template>
    <div class="max-w-6xl px-9 mx-auto lg:mt-[19%] mt-[20%]">
          <div class="flex flex-col justify-center items-center">
            <h1 class="lg:mb-28 mb-10">Login</h1>
            <span
              to="/"
              class="fixed top-10 left-5 text-xl hover:border-8 hover:border-[#7234F51A] hover:rounded-full p-2 "
            >
              <i class="pi pi-directions-alt"></i>
            </span>
            <div class="font-bold text-3xl max-w-[200px] text-center lg:mb-0 mb-5">
              <h1>Lets get you back in.</h1>
            </div>
            <div class="w-full ">
              <form class="flex flex-col" onSubmit={handSubmitForm}>
                <div class="mb-6">
                  <label class="text-sm">
                    Email or Username
                    <span class="text-[#7234F5] text-xs">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="username"
                    id="username"
                    placeholder="you@email.com"
                    onChange={handleSelectChange}
                    class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div class="mb-6">
                  <label class="text-sm">
                    Password <span class="text-[#7234F5] text-xs">*</span>
                  </label>
                  <input
                    type="text"
                    v-model="password"
                    id="password"
                    onChange={handleSelectChange}
                    placeholder="Password (min. of 8 characters)"
                    class="w-full rounded-md px-5 py-3 border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                  />
                </div>
                <div class="text-center mt-6">
                  <h1 class="text-sm font-light mb-5">
                    Forgot Password?
                    <span to="" class="text-[#7234F5] font-extrabold">
                      Reset
                    </span>
                  </h1>
                  <h1 class="text-sm font-light mb-10">
                    Don't have an account?
                    <router-link to="/register" class="text-[#7234F5] font-extrabold">
                      Sign Up
                    </router-link>
                  </h1>
                  <button class="bg-[#7234F5] lg:text-base text-sm lg:px-28 lg:py-4 px-10 py-2 rounded-full text-white">
                    Log me in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: ''
        }
    },

}
</script>

<style>

</style>