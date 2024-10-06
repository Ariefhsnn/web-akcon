<template>
  <div>
    <VueSlickCarousel class="" v-bind="settings" :arrows="false" :dots="false">
      <div v-for="(member,index) in members" :key="index" class="bg-black p-5">
          <div class="flex flex-col text-white text-center justify-center">
              <img class="h-60 object-cover  bg-white mb-5" :src="member.image" alt="">
              <p class="text-xl md:text-2xl font-bold">{{ member.title }}</p>
              <p class="text-md md:text-md font-light">{{ member.content }}</p>
          </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    data() {
        return {
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: '20px',
                focusOnSelect: true,
                infinite: true,
                slidesToShow: 1.2,
                speed: 500
            },
            members: [
                {
                    content: 'Executive Officer',
                    title: 'Hanif Fathoni',
                    image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                },
                {
                    content: 'Project Manager',
                    title: 'Hendri',
                    image: ' https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                }
            ]
        }
    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script> 
