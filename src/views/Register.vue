<template>
    <div class="max-w-6xl px-9 mx-auto lg:mt-[10%] mt-[20%] py-20">
            <div class="flex flex-col justify-center items-center">
              <h1 class="mb-10">Create an account </h1>
              <p
               @click="handleBack"
                class="fixed top-10 left-5 text-xl hover:border-8 hover:border-[#7234F51A] hover:rounded-full p-2 "
              >
                <i class="pi pi-arrow-left"></i>
              </p>

              <div class="w-full">
                <form class="flex flex-col" onSubmit={onSubmitForm}>
                  <div class="mb-6">
                    <label class="text-sm">
                      Name
                      <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="name"
                      placeholder="John doe"
                       @change="handleSelectChange"
                      class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="text-sm">
                      Username <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      v-model="username"
                      placeholder="Johndoe"
                       @change="handleSelectChange"
                      class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="text-sm">
                      Email
                      <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="email"
                      placeholder="you@email.com"
                      @change="handleSelectChange"
                      class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="text-sm">
                      Number
                      <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="number"
                      id="number"
                      v-model="number"
                      placeholder="0212345678"
                      @change="handleSelectChange"
                      class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="text-sm">
                      Password <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="text"
                      id="password"
                      v-model="password"
                       @change="handleSelectChange"
                      placeholder="Password (min. of 8 characters)"
                      class="w-full rounded-md px-5 py-3 border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="text-sm">
                      Referral Code <span>(Optional)</span>
                      <span class="text-[#7234F5] text-xs">*</span>
                    </label>
                    <input
                      type="text"
                      id="referral"
                      v-model="referral"
                      @change="handleSelectChange"
                      placeholder="RFC00001"
                      class="w-full rounded-md px-5 py-3  border-none bg-gray-100 hover:bg-gray-200 hover:shadow-sm transition duration-150 ease-in-out"
                    />
                    <span class="text-xs text-gray-400 font-light">
                      You can proceed without a referral code
                    </span>
                  </div>
                  <div class="text-center mt-6 mb-6">
                    <button class="text-[#7234F5] lg:text-base text-sm lg:px-28 lg:py-4 px-10 py-2 rounded-full bg-[#7234F51A]">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            name: '',
            username: '',
            email: '',
            number: '',
            password: '',
            referral: '',
        }
    },
    methods: {
        handleSelectChange(e) {
            this[e.target.id] = e.target.value
        },
        onSubmitForm(e) {
            e.preventDefault()
            const { name, username, email, number, password, referral } = this
            const payload = {
                name,
                username,
                email,
                number,
                password,
                referral,
            }
            console.log(payload)
        },
        handleBack() {
            this.$router.push({ name: 'home' })
        },
    },

}
</script>

<style>

</style>