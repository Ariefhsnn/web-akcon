<template>
 <div>
  <!-- title here -->
      <!-- label -->
    <div 
    class="flex flex-row align-center items-center gap-3 md:gap-4 mb-5"
    v-if="label"
    >
      <span class="block h-0.5 md:h-1 w-8 md:w-16 bg-gray-300 block"></span>
      <label class="text-gray-300 text-md md:text-xl" for="">{{ label }}</label>
    </div>
    <!-- title -->
    <div v-if="title" class="text-white font-bold text-4xl md:text-6xl order-2 my-5 md:w-5/6">
      {{ title }}
    </div>
    <!-- content -->
    <div 
    class="text-white text-md md:text-2xl order-3 my-5 mt-14 md:mt-20 w-5/6 md:w-4/6 font-light"
    v-if="content"
    >
      {{ content }}
    </div>
  <!-- image here -->
 </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: 'label'
    },
    label: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>