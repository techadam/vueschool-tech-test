<template>
  <header class="py-[20px] px-[48px] text-light-grey text-normal">
    <nav class="flex justify-between items-center">
      <img src="@/assets/images/logo.png" class="w-[170px]" />

      <ul class="flex items-center gap-6">
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Courses</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Plans</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Business Service</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Learning Paths</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Hiring</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Articles</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Events</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Get Certified</span>
          </nuxt-link>
        </li>
      </ul>

      <div class="flex items-center gap-6">
        <nuxt-link to="/" class="inline-block text-white">Log in</nuxt-link>
        <nuxt-link
          to="/"
          class="inline-block py-[20px] px-[40px] rounded-[10px] border-2 border-brand-primary"
          >Sign up</nuxt-link
        >
      </div>
    </nav>
  </header>
</template>
