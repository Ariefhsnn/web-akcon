<template>
  <div class="">
    <div
      v-for="(message, index) in Accordion"
      :key="message.title"
      class="pb-10"
    >
      <p class="text-white text-xl md:text-xl lg:text-4xl font-bold cursor-pointer" @click="messageItemClick(index)">
        {{ message.title }}
      </p>
      <div :data-message-id="index" class="font-light text-gray-300 text-md md:text-md hidden md:block lg:mt-10">
        <p>{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Accordion: [
        {
          title: 'Flexible, Scalable & Secure',
          content: 'Some software products have limitations in adaptability to new features that prevent your business from growing. We ensure your software has the capability to evolve according to your business needs, and overall, its secure.'
        },
        {
          title: 'Up-to-date technology',
          content: 'Our professionals will be dedicated to your project with our supervision to deliver the work on time and accurately.'
        },
        {
          title: 'Last thing, Immersion',
          content: 'We pour our vast experience and expertise  to every project, by devouring very-base information and cultivating them into powerful digital solutions that suit you best.'
        }
      ]
    }
  },
  methods: {
    messageItemClick (messageIndex) {
      const messageInfoElement = document.querySelectorAll('[data-message-id="' + messageIndex + '"]')[0]
      if (messageInfoElement.classList.contains('block')) {
        messageInfoElement.classList.remove('block')
        messageInfoElement.classList.add('hidden')
      } else {
        messageInfoElement.classList.remove('hidden')
        messageInfoElement.classList.add('block')
      }
    }
  }
}
</script>