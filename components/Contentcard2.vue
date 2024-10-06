<template>
  <div class="flex flex-col md:flex-row md:pl-3 gap-5">
    <!-- icon here -->
    <div class="w-20 md:w-20 block flex-shrink-0 pt-9">
      <img :src="image" alt="">
    </div>

    <!-- content -->
    <div class="flex-shrink md:mt-5 mt-2">
    <!-- content title -->
      <div class="w-auto text-xl md:text-2xl font-bold">
          {{ title }}
      </div>
      <!-- description -->
      <div :class="['w-auto text-md md:text-md font-light md:flex']">
          {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    image: {
      type: String,
      default: 'http://www.clker.com/cliparts/N/z/y/R/g/l/white-circle-md.png'
    }
  }
}
</script>
