<template>
 <div>
    <div 
    class="flex flex-row align-center items-center gap-3 md:gap-4 mb-5 font-text"
    v-if="label"
    >
      <span :class="`${background} block h-0.5 md:h-1 w-6 md:w-12 bg-gray-400 block`"></span>
      <label :class="`${textcolor} text-gray-400 text-md md:text-md font-light`" for="">{{ label }}</label>
    </div>
 </div>
</template>

<script>

export default {
  props:{
    label: {
      type: String,
      default: 'label'
    },
    textcolor: {
      type: String,
      default: 'text-gray-300'
    },
    background: {
      type: String,
      default: 'bg-gray-300'
    }
  }
}
</script>
