<template>
  <div class="flex flex-col md:flex-col pl-2 md:pl-5">
    <!-- icon here -->
    <div class=" w-24 md:w-24 block flex-shrink-0">
      <img :src="image" alt="">
    </div>

    <!-- content -->
    <div class="flex-shrink md:mt-5 mt-2">
    <!-- content title -->
      <div class="w-auto text-xl md:text-2xl font-bold mb-2">
          {{ title }}
      </div>
      <!-- description -->
      <div :class="['w-auto text-md md:text-md font-light  md:flex ', colorText]">
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
      default: 'lorem ipsum',
    },
    image: {
      type: String,
      default: ''
    },
    colorText: {
      type: String,
      default: 'text-grey-300',
    }
  }
}
</script>
