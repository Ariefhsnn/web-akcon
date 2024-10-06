<template>
  <div class="divide-y divide-gray-600 px-10 md:px-28">
    <div
      v-for="(expertises, index) in Accordionservices"
      :key="expertises.title"
      class="pb-10"
    >
      <p class="text-white text-xl md:text-xl font-bold cursor-pointer" @click="expertisesItemClick(index)">
        {{ expertises.title }}
      </p>
      <div :data-expertises-id="index" class="font-light  text-gray-300 text-md md:text-md hidden md:block md:pt-5">
        <p>{{ expertises.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Accordionservices: [
        {
          title: 'Product Design & Discovery',
          content: 'Analyze, calculate and design plans for your project or business needs to meet the best workmanship solution within the specified timeframe and cost, or let us do the math.'
        },
        {
          title: 'Product Development',
          content: 'Design and assemble your project from a bunch of papers into maintainable code in a user-friendly interface product using up-to-date technology. We ensure your product works fine and stable when it comes to live.'
        },
        {
          title: 'Product Tailoring & Integration',
          content: 'Resume pending work or add new features to existing applications at some point in the technology, to connect the system with third parties.'
        },
        {
          title: 'Product Support & Maintenance',
          content: 'All digital products are never free from bugs and feature updates caused by technology that continues to develop. Therefore, monitoring and maintenance of your software needs to be done regularly or periodically so that the product works optimally.'
        }
      ]
    }
  },
  methods: {
    expertisesItemClick (expertisesIndex) {
      const expertisesInfoElement = document.querySelectorAll('[data-expertises-id="' + expertisesIndex + '"]')[0]
      if (expertisesInfoElement.classList.contains('block')) {
        expertisesInfoElement.classList.remove('block')
        expertisesInfoElement.classList.add('hidden')
      } else {
        expertisesInfoElement.classList.remove('hidden')
        expertisesInfoElement.classList.add('block')
      }
    }
  }
}
</script>