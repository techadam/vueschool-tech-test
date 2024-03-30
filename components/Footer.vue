<template>
  <footer class="bg-brand-black text-light-grey">
    <div class="flex gap-10 pb-32 mx-[135px]">
      <div class="w-1/2">
        <img
          src="@/assets/images/logo.png"
          class="max-w-[268px] mb-20"
          alt="LOGO"
        />

        <p class="mb-[61px] text-white text-[16px] leading-[24px]">
          Thanks to fine people like you, Vue School can proudly <br> sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>

        <div>
          <h4 class="text-[22px] capitalize text-brand-grey mb-9">FOLLOW US IN SOCIAL MEDIA</h4>

          <div class="flex gap-4 items-center">
            <div class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5">
              <img src="@/assets/icons/facebook.svg" alt="Facebook icon" />
            </div>

            <div class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5">
              <img src="@/assets/icons/twitter.svg" alt="Facebook icon" />
            </div>

            <div class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5">
              <img src="@/assets/icons/github.svg" alt="Facebook icon" />
            </div>

            <div class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5">
              <img src="@/assets/icons/linkedin.svg" alt="Facebook icon" />
            </div>

            <div class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5">
              <img src="@/assets/icons/youtube.svg" alt="Facebook icon" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 flex gap-24">
        <div>
          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">PRODUCTS</h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="to" class="text-[16px]">Courses</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Workshop</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Vue Masterclass</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="text-[16px]">Mastering Nuxt</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">PRICING</h3>

            <ul>
              <li>
                <nuxt-link to="/" class="text-[16px]">Plans</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">connect with us</h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">About Us</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Careers</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="text-[16px]">Contact Us</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">Events</h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="to" class="text-[16px]">Vuejs Nation</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Nuxt Nation</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="text-[16px]">Vuejs Forge</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">Corporate</h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Corporate Training</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Developer Recruitment</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Course Development</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">On-Site Workshops</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Consulting</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Affiliate Programs</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3 class="text-[22px] text-brand-grey font-medium mb-5 uppercase">Resources</h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[16px]">Articles</nuxt-link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
