<template>
  <div class="rounded-3xl overflow-hidden w-[345px] sm:w-[570px] mr-[30px]">
    <div
      class="py-6 px-9 flex items-center gap-3 bg-gradient-to-r from-brand-purple to-brand-red"
    >
      <img src="@/assets/icons/calendar.svg" alt="calendar icon" />
      <h5 class="text-[16px] font-medium text-light-grey">
        December 14th - 11:00 AM (GMT-3)
      </h5>
    </div>
    <div class="p-9 bg-brand-black2/90">
      <div class="flex gap-4 mb-5">
        <div class="flex items-center gap-2">
          <img src="@/assets/icons/play2.svg" alt="play icon" />
          <span class="text-brand-grey text-[14px]">LIVE Training</span>
        </div>

        <div class="flex items-center gap-2">
          <img src="@/assets/icons/clock2.svg" alt="play icon" />
          <span class="text-brand-grey text-[14px]">15 hours</span>
        </div>
      </div>

      <h3 class="text-light-grey text-[24px] font-medium mb-3">
        Vue.js Fundamentals
      </h3>

      <p class="text-[14px] leading-[20px] text-brand-grey mb-5">
        A progressive framework for building user interfaces. Unlike other
        monolithic frameworks, Vue is designed from the ground up to be
        incrementally...
      </p>

      <div class="flex items-center gap-2">
        <img src="@/assets/icons/user.svg" alt="user icon" />
        <h5 class="text-[14px] text-brand-grey">Steve Popoola</h5>
      </div>
    </div>
  </div>
</template>
