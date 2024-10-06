<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="w-full flex flex-row items-center"
    >
      <div
        v-for="(member, index) in members"
        :key="index"
        class="pl-5"
        style="width: 2100px; margin: auto"
      >
        <img
          class="w-full object-center object-cover"
          :src="'/clients/' + member.image"
          alt=""
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        useTransform: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      members: [
        {
          title: "",
          image: "1. BTN White.png",
        },
        {
          title: "",
          image: "3. Mandiri  White.png",
        },
        {
          title: "",
          image: "6. WIKA  White.png",
        },
        {
          title: "",
          image: "2. TAP  White.png",
        },
        {
          title: "",
          image: "4. JNTO  White..png",
        },
        {
          title: "",
          image: "5. UNSRI  White.png",
        },
        {
          title: "",
          image: "7. WRI  White.png",
        },
        {
          title: "",
          image: "8. INPF  White.png",
        },
        {
          title: "",
          image: "9. LBS  White.png",
        },
      ],
    };
  },
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script> 
