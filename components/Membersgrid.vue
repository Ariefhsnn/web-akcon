<template>
  <div class="">
    <VueSlickCarousel v-bind="settings" class="grid grid-cols-4">
      <div
        v-for="(member, index) in members"
        :key="index"
        class="bg-black p-5 mb-5"
      >
        <div class="flex flex-col text-white text-center place-items-center">
          <div class="image-wrapper">
            <img
              :src="member.image"
              :class="`image object-cover h-72 mb-5 lg:${member.margin}`"
              alt="normal"
            />
            <img
              :src="member.imageHover"
              :class="`image-hover object-cover h-72 mb-5 lg:${member.margin}`"
              alt="hover"
            />
          </div>
          <p class="text-xl md:text-2xl font-bold">{{ member.title }}</p>
          <p class="text-md md:text-md font-light">{{ member.content }}</p>
        </div>
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
      transition: {
        name: "fade",
        mode: "out-in",
        afterLeave(el) {
          console.log("afterLeave", el);
        },
      },
      settings: {
        arrows: true,
        dots: true,
        infinite: false,
        useTransform: true,
        speed: 500,
        slidesToShow: 4,
        rows: 2,
        adaptiveHeight: true,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1220,
            settings: {
              rows: 2,
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              rows: 2,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              rows: 2,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              rows: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      hovered: null,
      members: [
        {
          content: "Chief Executive Officer",
          title: "Hanif Fathoni",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/1.Hanif_aTMNgdBKmcM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901298408",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/1.Hanif_9ueak1jOu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901356487",
          margin: "",
        },

        {
          content: "Business Analyst",
          title: "Juliar Fitra",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/8.Ical_2g5wU9crY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901299440",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/8.Ical_JZQaL1n3v.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901358766",
          margin: "",
        },
        {
          content: "Chief Technology Officer",
          title: "Lukman Indrajaya K",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/3.Lukman_XIHlr2dhMwbG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901298172",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/3.Lukman_INdNAmZ9K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901356498",
          margin: "mt-10",
        },
        {
          content: "UI & UX Designer",
          title: "Azka Nazhara Arrafi",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/9.Azka_EjYNiVlxMLP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901299948",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/9.Azka_f2Cb-frMK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901359174",
          margin: "",
        },
        {
          content: "Marketing",
          title: "Rani Sahfitri",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/4.Rani_c6e5RB5BL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901298039",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/4.Rani_C38YbhnOD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901357211",
          margin: "",
        },
        
        {
          content: "Front-end Developer",
          title: "Jumakri Ridho Fauzi",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/13.Ridho_bm-slTRB9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901301745",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/13.Ridho_WDecNDC7N.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901361830",
          margin: "",
        },
        {
          content: "Admin & General Affair",
          title: "Apriliyani Wulandari",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/6.April_M5vWOOZvk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901298918",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/6.April_PV3tTFRYI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901358195",
          margin: "mt-10",
        },
        {
          content: "Back-end Developer",
          title: "Dinar Hamid",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/10.Dinar_eLTDYgvNK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901300541",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/10.Dinar_o58l9mI5j8dr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901359476",
          margin: "",
        },
        {
          content: "Front-end Developer",
          title: "Kamaludin",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/14.Kamal_J0U8qkOZxnJq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901302139",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/14.Kamal_46yd2yo0-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901360975",
          margin: "",
        },
        {
          content: "Front-end Developer",
          title: "M Iqfar Mutaqin",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/15.Iqfar_fzokDfKRi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901302626",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/15.Iqfar_O5ViR9iqf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901361245",
          margin: "",
        },
        {
          content: "Senior Front-end Developer",
          title: "Wahyu Hidayat",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/11.Wahyu_PDLxBlKoy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901300798",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/11.Wahyu_hHGdt3PIob6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901359818",
          margin: "mt-10",
        },
        {
          content: "Front-end Developer",
          title: "Muhammad Adib F",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/12.Adib_E5lopr_zh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901301280",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/12.Adib_1kLVlxWZ_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901360144",
          margin: "",
        },
        {
          content: "Quality Control",
          title: "Kevin Luis Sanjaya",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/17.Kevin_vOb7d0D1O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901302873",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/17.Kevin_esqasBEdE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901361997",
          margin: "",
        },
        {
          content: "Quality Control",
          title: "M Farmi Rizqi A",
          image:
            "https://ik.imagekit.io/infinitec/Teams/Main/18.Eki_EtXJfpcML.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901303167",
          imageHover:
            "https://ik.imagekit.io/infinitec/Teams/Second/18.Eki_iMxeicUok.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646901362049",
          margin: "",
        },
      ],
    };
  },

  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script> 

<style>
.image-wrapper {
  position: relative;
}
.image-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 400ms ease-in-out;
}
.image-hover:hover {
  animation: position 300ms;
  opacity: 1;
}

@keyframes position {
  0% {
    top: 20px;
  }
  100% {
    bottom: 10px;
  }
}
</style>