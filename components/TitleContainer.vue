<template>
    <div :class="['grid grid-cols-3 justify-items-center', paddingTop]">
        <div class="col-span-1">
            <p class="text-xl md:text-3xl font-bold m-7 md:m-2">{{ title }}</p>
        </div>
        <div class="col-span-2 mr-5 md:mr-20">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: '',
    },
    paddingTop: {
      type: String,
      default: '',
    }
  }
}
</script>
