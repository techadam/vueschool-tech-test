<template>
  <section id="hero relative">
    <div class="flex items-center gap-[50px] ml-[135px]">
      <div class="pt-8">
        <!-- Please note that the custom class here header-title is using applied tailwind styles see style.css -->
        <h1 class="header-title">
          Complete <span class="text-brand-primary">Vue.js</span> <br />
          <span class="text-brand-primary">training</span> solutions <br />
          for companies
        </h1>

        <p class="my-10 text-[22px] text-light-grey leading-[30px]">
          Training solutions designed for companies, agencies <br />
          and organisations with developers using or who are <br />
          considering using the Vue.js framework
        </p>

        <button
          class="bg-brand-primary py-5 px-10 text-brand-black rounded-[10px] font-medium"
        >
          Talk to Sales
        </button>
      </div>

      <img
        src="@/assets/images/hero.png"
        class="ml-28 justify-self-end"
        alt=""
      />
    </div>
  </section>

  <section id="about" class="relative -top-12">
    <img
      src="@/assets/images/2.png"
      class="w-full absolute right-0 top-0 bottom-0 left-0 z-1"
      alt=""
    />

    <div class="relative z-2">
      <img
        src="@/assets/images/1.png"
        class="w-full absolute right-0 top-0 bottom-0 left-0 z-3"
        alt=""
      />

      <div class="mx-[135px] relative z-4 pt-[136px]">
        <div
          class="rounded-3xl p-10 flex gap-10 items-center bg-brand-black2/90 mb-16"
        >
          <img src="@/assets/images/logoicon.png" class="w-[280px]" alt="" />

          <div class="w-auto">
            <h1 class="mb-5 font-bold text-[40px] text-white">
              About Vue School corporate training
            </h1>
            <p class="text-[22px] leading-[30px] text-light-grey">
              School is the #1 training resource for Vue.js and has provided the
              most comprehensive Vue.js video library in the world to over
              140,000 developers. Private individuals and small to enterprise
              companies have used our services to develop their skills since
              2016.
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between flex-wrap">
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
        </div>
      </div>
    </div>

    <div class="relative z-2 mx-[135px] mt-40">
      <small
        class="block uppercase mb-3 text-[24px] leading-[28.44px] text-brand-primary"
        >YOUR #1 SOURCE OF VUE.JS COURSES</small
      >
      <div class="flex items-center justify-between">
        <div>
          <h2 class="header-title">
            Full Stack
            <span class="text-brand-primary"
              >Vue <br />
              Training
            </span>
            Solutions
          </h2>
        </div>

        <div class="flex justify-between gap-[61px] flex-nowrap">
          <div class="text-center">
            <h2
              class="text-[90px] leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              763
            </h2>
            <div class="flex items-center justify-center gap-2">
              <img src="@/assets/icons/play.svg" alt="" />
              <small class="text-[14px] text-light-grey">Video lessons</small>
            </div>
          </div>

          <div class="text-center">
            <h2
              class="text-[90px] leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              40
            </h2>
            <div class="flex items-center justify-center gap-2">
              <img src="@/assets/icons/book.svg" alt="" />
              <small class="text-[14px] text-light-grey">Courses</small>
            </div>
          </div>

          <div class="text-center">
            <h2
              class="text-[90px] leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              64
            </h2>
            <div class="flex items-center justify-center gap-2">
              <img src="@/assets/icons/clock.svg" alt="" />
              <small class="text-[14px] text-light-grey">15 Hours</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pt-44">
    <h1 class="text-center header-title font-bold relative">
      Discounted
      <span class="text-brand-secondary"
        >Corporate <br />
        Training</span
      >
      Bundles
    </h1>

    <div class="relative -top-20">
      <img
        src="@/assets/images/3.png"
        class="w-full absolute right-0 top-0 bottom-0 left-0 z-1"
        alt=""
      />

      <img
        src="@/assets/images/4.png"
        class="w-full absolute right-0 top-[358px] bottom-0 left-0 z-2"
        alt=""
      />

      <div
        class="grid grid-cols-3 items-start gap-[30px] mx-[135px] z-3 relative pt-48"
      >
        <pricing-card title="Basic" :icon="LeafIcon" />
        <pricing-card title="Professional" :icon="RocketIcon">
          <template #extra>
            <div
              class="rounded-2xl p-6 mb-6 bg-brand-primary/20 flex gap-3 items-center"
            >
              <img src="@/assets/icons/banner.svg" alt="" />
              <div>
                <small
                  class="inline-block mb-1 text-brand-grey-light font-medium text-[14px]"
                  >Enough time to watch:</small
                >
                <h3 class="text-light-grey font-medium text-[18px]">
                  The Vue 3 Masterclass
                </h3>
              </div>
            </div>
          </template>
        </pricing-card>
        <pricing-card title="Basic" :icon="BoltIcon" />
      </div>
    </div>
  </section>

  <section id="workshop pt-40">
    <div class="mx-[135px] flex justify-between items-center mt-20 mb-[72px]">
      <h1 class="header-title">Available Workshops</h1>
      <button
        class="bg-brand-primary py-5 px-10 text-brand-black rounded-[10px] font-medium"
      >
        See all the workshops
      </button>
    </div>

    <div class="ml-[135px] flex flex-nowrap overflow-hidden mb-44">
      <work-shop-card />
      <work-shop-card />
      <work-shop-card />
    </div>
  </section>
</template>

<script setup>
import PricingCard from "~/components/PricingCard.vue";
import WorkShopCard from "~/components/WorkShopCard.vue";
import LeafIcon from "@/assets/icons/leaf.svg";
import RocketIcon from "@/assets/icons/rocket-launch.svg";
import BoltIcon from "@/assets/icons/bolt.svg";
import { ref } from "vue";
</script>
