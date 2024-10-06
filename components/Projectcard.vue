<template>
  <div class="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
  <NuxtLink :to="linkto">
      <div class="rounded-t-lg h-projectcard w-auto" :style="`background-image: url(${image}); background-position: left top; background-size: cover;`">

      </div>
      <div class="font-bold text-xl md:text-2xl xl:text-4xl mt-3 mb-1">
          {{ title }}
      </div>
  </NuxtLink> 
      <div class="font-light">
        {{ content }}
      </div>
  </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: 'Project title here'
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    image: {
      type: String,
      default: 'data:image/jpeg;base64,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'
    },
    linkto: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style>
.h-projectcard {
  height: 420px;
}
@media screen and (max-width: 1280px)  {
  .h-projectcard {
    height: 280px; 
  }  
}
@media screen and (max-width: 768px)  {
  .h-projectcard {
    height: 200px;
  }  
}


</style>