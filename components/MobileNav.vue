<template>
  <div
    class="bg-brand-black text-light-grey overflow-y-auto fixed z-50 right-0 bottom-0 left-0 top-0 p-6"
  >
    <div
      class="inline-flex justify-center items-center h-[40px] w-[40px] text-[16px] bg-brand-primary text-white rounded-full cursor-pointer mx-6 sm:mx-10"
      @click="close"
    >
      x
    </div>

    <div class="flex justify-center">
      <ul>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Courses</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Plans</span>
          </nuxt-link>
        </li>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Business Service</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Learning Paths</span>
            <img src="@/assets/icons/arrow-down.svg" />
          </nuxt-link>
        </li>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Hiring</span>
          </nuxt-link>
        </li>
        <li class="mb-6">
          <nuxt-link to="/" class="flex items-end gap-1">
            <span>Articles</span>
          </nuxt-link>
        </li>
        <li class="mb-6">
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
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>
