<template>
  <div class="flex flex-col md:flex-row pl-2 md:pl-5 items-left md:items-center gap-3">
    <!-- icon here -->
    <div class="h-16 w-16 md:h-16 md:w-16 rounded-full block flex-shrink-0">
      <img :src="image" alt="">
    </div>

    <!-- content -->
    <div class="flex-shrink">
    <!-- content title -->
      <div class="w-auto text-lg md:text-xl font-bold text-white">
          {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum'
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>