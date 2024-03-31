<template>
  <div class="py-10 px-6 rounded-3xl bg-brand-black2/90">
    <div class="flex items-center gap-4 mb-10">
      <img :src="icon" alt="Basic icon" />
      <h3 class="font-bold text-[22px] text-light-grey">{{ title }}</h3>
    </div>

    <div class="">
      <p class="mb-6 text-[16px] text-brand-primary">
        Includes 1 year access to:
      </p>

      <ul class="mb-6">
        <li class="flex gap-1 justify-between items-center mb-4">
          <div class="flex gap-3 items-center">
            <img src="@/assets/icons/check.svg" />
            <span class="text-[14px] text-light-grey" alt="Check icon"
              >All Video Courses
            </span>
          </div>
          <img src="@/assets/icons/info.svg" alt="Info icon" />
        </li>
        <li class="flex gap-1 justify-between items-center mb-4">
          <div class="flex gap-3 items-center">
            <img src="@/assets/icons/check.svg" />
            <span class="text-[14px] text-light-grey" alt="Check icon"
              >Vue.Js Master class
            </span>
          </div>
          <img src="@/assets/icons/info.svg" alt="Info icon" />
        </li>
        <li class="flex gap-1 justify-between items-center mb-4">
          <div class="flex gap-3 items-center">
            <img src="@/assets/icons/check.svg" />
            <span class="text-[14px] text-light-grey" alt="Check icon"
              >Developer assist Slack channel
            </span>
          </div>
          <img src="@/assets/icons/info.svg" alt="Info icon" />
        </li>
        <li class="flex gap-1 justify-between items-center mb-4 opacity-20">
          <div class="flex gap-3 items-center">
            <img src="@/assets/icons/check.svg" />
            <span class="text-[14px] text-light-grey" alt="Check icon"
              >Live Weekly QnA
            </span>
          </div>
          <img src="@/assets/icons/info.svg" alt="Info icon" />
        </li>
        <li class="flex gap-1 justify-between items-center mb-4 opacity-20">
          <div class="flex gap-3 items-center">
            <img src="@/assets/icons/check.svg" />
            <span class="text-[14px] text-light-grey" alt="Check icon"
              >1 x ws ticket per license
            </span>
          </div>
          <img src="@/assets/icons/info.svg" alt="Info icon" />
        </li>
      </ul>

      <slot name="extra"></slot>

      <div class="rounded-2xl bg-brand-black py-8 px-6 mb-10">
        <h3 class="text-white text-[40px] flex items-center gap-2 mb-6">
          <span>$50</span>
          <small class="text-[#A0A8C3] text-[16px] inline-block mb-2"
            >/ seat / month</small
          >
        </h3>

        <p class="mb-4"></p>

        <div class="mb-4">
          <div class="relative mb-1 cursor-pointer">
            <span
              class="inline-block rounded-full bg-brand-primary absolute left-[50%] top-[50%] h-[14px] w-[14px] -translate-y-[50%] -translate-x-[50%]"
            ></span>
            <div class="bg-brand-grey w-full rounded-full h-[4px]">
              <div class="bg-brand-primary w-1/2 rounded-full h-full"></div>
            </div>
          </div>

          <div
            class="flex justify-between items-center text-brand-grey font-medium text-[14px] mb-4"
          >
            <span>5</span>
            <span>20</span>
          </div>

          <div class="flex justify-between items-center gap-5">
            <div
              class="bg-[#0E0E10]/20 rounded-xl p-4 py-3 flex justify-between items-center w-1/2"
            >
              <img src="@/assets/icons/users.svg" alt="" />
              <h2 class="text-[26px] font-bold text-[#E8E6E6]">12</h2>
              <span class="text-[#979FAD] text-[16px]">Seats</span>
            </div>

            <h3 class="text-brand-primary text-[16px] font-medium w-1/2">
              26% discount
            </h3>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          class="py-5 px-10 bg-brand-primary text-brand-black font-medium text-[16px] block w-full mb-6 rounded-xl"
        >
          Start Learning
        </button>
        <nuxt-link to="/" class="text-brand-primary font-medium text-[16px]"
          >Refer your manager</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String },
  icon: { type: String },
});
</script>
