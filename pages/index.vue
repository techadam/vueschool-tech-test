<template>
  <section id="hero relative">
    <div
      class="flex justify-center lg:justify-normal items-center gap-[50px] mx-6 sm:mx-10 lg:ml-[135px] md:mr-0 flex-wrap"
    >
      <div class="pt-8 md:text-left text-center">
        <!-- Please note that the custom class here header-title is using applied tailwind styles see style.css -->
        <h1 class="header-title" v-html="heroContent?.title"></h1>

        <p
          class="my-10 text-[16px] sm:text-[22px] text-light-grey leading-[30px]"
          v-html="heroContent?.desc"
        ></p>

        <button
          class="bg-brand-primary py-5 px-10 text-brand-black rounded-[10px] font-medium"
        >
          {{ heroContent?.cta }}
        </button>
      </div>

      <img
        src="@/assets/images/hero.png"
        class="ml-0 lg:ml-28 justify-self-end"
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

      <div class="mx-6 sm:mx-10 lg:mx-[135px] relative z-4 pt-[136px]">
        <div
          class="rounded-3xl p-6 md:p-10 flex flex-wrap sm:flex-nowrap justify-center sm:justify-normal gap-4 md:gap-10 items-start md:items-center bg-brand-black2/90 mb-16"
        >
          <img
            src="@/assets/images/logoicon.png"
            class="w-[85px] lg:w-[280px] sm:w-[152px]"
            alt=""
          />

          <div class="w-auto text-center sm:text-left">
            <h1
              class="mb-5 font-bold text-[24px] sm:text-[32px] md:text-[40px] text-white"
            >
              About Vue School corporate training
            </h1>
            <p
              class="text-[14px] sm:text-[18px] lg:text-[22px] leading-[30px] text-light-grey"
            >
              School is the #1 training resource for Vue.js and has provided the
              most comprehensive Vue.js video library in the world to over
              140,000 developers. Private individuals and small to enterprise
              companies have used our services to develop their skills since
              2016.
            </p>
          </div>
        </div>

        <div class="hidden md:flex items-center justify-between flex-wrap">
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
          <img src="@/assets/images/brand.png" alt="" />
        </div>
      </div>
    </div>

    <div
      class="relative z-2 mx-10 md:mx-[135px] mt-40 text-center md:text-left"
    >
      <small
        class="block uppercase mb-3 text-[16px] sm:text-[24px] leading-[28.44px] text-brand-primary"
        >YOUR #1 SOURCE OF VUE.JS COURSES</small
      >
      <div
        class="flex items-center justify-center md:justify-between flex-wrap"
      >
        <div class="mb-6 sm:mb-2">
          <h2 class="header-title">
            Full Stack
            <span class="text-brand-primary"
              >Vue <br class="hidden sm:inline-block" />
              Training
            </span>
            Solutions
          </h2>
        </div>

        <div class="flex justify-between gap-3 sm:gap-[61px] flex-nowrap">
          <div class="text-center">
            <h2
              class="text-[64px] sm:text-[90px] leading-[75.84px] sm:leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              {{ lessonContent?.numberOfLesson }}
            </h2>
            <div class="flex items-center justify-center gap-1 sm:gap-2">
              <img src="@/assets/icons/play.svg" alt="" />
              <small class="text-[14px] text-light-grey">Video lessons</small>
            </div>
          </div>

          <div class="text-center">
            <h2
              class="text-[64px] sm:text-[90px] leading-[75.84px] sm:leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              {{ lessonContent?.numberOfCourses }}
            </h2>
            <div class="flex items-center justify-center gap-1 sm:gap-2">
              <img src="@/assets/icons/book.svg" alt="" />
              <small class="text-[14px] text-light-grey">Courses</small>
            </div>
          </div>

          <div class="text-center">
            <h2
              class="text-[64px] sm:text-[90px] leading-[75.84px] sm:leading-[106.65px] text-brand-primary font-medium mb-1"
            >
              {{ lessonContent?.numberOfHours }}
            </h2>
            <div class="flex items-center justify-center gap-1 sm:gap-2">
              <img src="@/assets/icons/clock.svg" alt="" />
              <small class="text-[14px] text-light-grey">15 Hours</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pt-44">
    <h1 class="text-center header-title font-bold relative mx-6 sm:mx-auto">
      Discounted
      <span class="text-brand-secondary"
        >Corporate <br class="hidden sm:inline-block" />
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
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-[30px] mx-6 sm:mx-10 lg:mx-[135px] z-3 relative pt-48"
      >
        <pricing-card title="Basic" :icon="LeafIcon" subType="basic" :bulletpoints="bulletpointsContent" />
        <pricing-card title="Professional" :icon="RocketIcon" subType="professional" :bulletpoints="bulletpointsContent">
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
        <pricing-card title="Basic" :icon="BoltIcon" subType="premium" :bulletpoints="bulletpointsContent" />
      </div>
    </div>
  </section>

  <section id="workshop pt-40">
    <div
      class="mx-6 sm:mx-10 lg:mx-[135px] flex justify-between items-center mt-20 mb-[72px] flex-wrap"
    >
      <h1 class="header-title">Available Workshops</h1>
      <button
        class="bg-brand-primary py-5 px-10 text-brand-black rounded-[10px] font-medium"
      >
        See all the workshops
      </button>
    </div>

    <div
      class="ml-6 sm:ml-10 lg:ml-[135px] flex flex-nowrap overflow-hidden mb-44"
    >
      <Flicking
        :options="{ circularFallback: 'linear', bound: true }"
        :plugins="plugins"
        @move-end="onMoveEnd"
      >
        <work-shop-card v-for="idx in 4" :key="idx" />
      </Flicking>
    </div>
  </section>
</template>

<script setup>
import PricingCard from "~/components/PricingCard.vue";
import WorkShopCard from "~/components/WorkShopCard.vue";
import LeafIcon from "@/assets/icons/leaf.svg";
import RocketIcon from "@/assets/icons/rocket-launch.svg";
import BoltIcon from "@/assets/icons/bolt.svg";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { ref, computed } from "vue";

const plugins = ref([
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
]);

const queryHero = groq`{ "hero": *[_type == "hero"] }`;
const queryLessons = groq`{ "lesson": *[_type == "lesson"] }`;
const queryBulletpoints = groq`{ "price": *[_type == "price"] }`;

const sanity = useSanity();

const hero = await useAsyncData(() => sanity.fetch(queryHero));
const lesson = await useAsyncData(() => sanity.fetch(queryLessons));
const bulletpoints = await useAsyncData(() => sanity.fetch(queryBulletpoints));

const heroContent = computed(() => {
  const content = hero?.data?._value?.hero[0];
  const title = content?.heroTitle[0]?.children[0]?.text;
  const desc = content?.heroDesc[0]?.children[0]?.text;

  return {
    title,
    desc,
    cta: content?.heroCta,
  };
});

const lessonContent = computed(() => {
  const { _type, _key, ...data } = lesson?.data?._value?.lesson[0]?.example[0];
  return data || {};
});

const bulletpointsContent = computed(() => {
  const content = bulletpoints?.data?._value?.price;
  const bullets = content?.map((item) => {
    return {
      name: item?.name.toLowerCase(),
      points: item?.example,
    };
  });
  return bullets;
});
</script>
