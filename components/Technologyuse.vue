<template>
    <div class="my-20">
        <span class="text-4xl font-bold">Front End</span>
        <VueSlickCarousel
        v-bind="settings"
        class="w-full flex flex-row items-center"
        >
            <div class="mx-20 my-5" v-for="(frontend, index) in frontends"
            :key="index"
            style="margin: auto">
                <img
                class="w-36 object-center object-cover"
                :src=" frontend.image.default"
                alt=""
                />
            </div>
        </VueSlickCarousel>
        
        <span class="text-4xl font-bold">Back End</span>
        <VueSlickCarousel
        v-bind="settings"
        class="w-full flex flex-row items-center"
        >
             <div class="mx-20 my-5" v-for="(backend, index) in backends"
            :key="index"
            style="margin: auto">
                <img
                class="w-36 object-center object-cover"
                :src=" backend.image.default"
                alt=""
                />
            </div>
        </VueSlickCarousel>

        <span class="text-4xl font-bold">Tools</span>
        <VueSlickCarousel
        v-bind="settings"
        class="w-full flex flex-row items-center"
        >
            <div class="mx-20 my-5" v-for="(tool, index) in tools"
            :key="index"
            style="margin: auto">
                <img
                class="w-36 object-center object-cover"
                :src=" tool.image.default"
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
      frontends: [
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
      ],
      backends: [
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
      ],
      tools: [
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
        {
          image: {
            default:
              "https://www.meme-arsenal.com/memes/939c9da6c31711951e1207d35adc9fc0.jpg",
          },
        },
      ],
    };
  },
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script>
