<template>
  <div class="whitespace-pre-line">
    <Hero
      title="Product Tailoring & Integration"
      label="Expertises"
      content="From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way."
    />

    <!-- section 1-->
    <section class="px-10 py-20 md:px-20 npb-18 md:pb-24 bg-white text-black">
      <TitleContainer 
      title="Development Process"
      content="In a project we often find the difference between what you want and what you need, looking similar doesn't mean it's right for the time and budget you have. this leads to dissatisfaction or even worst, the failure of a product. Or maybe, your budget and time are too much for a simple product. Let us do the things for you."
      />

      <hr class="border-t-2 border-slate-400 border-solid my-20">

      <div class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 px-2 md:px-5">
        <contentcard
        title="Business Analizing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        colorText=""
        />

        <contentcard
        title="Business Analizing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
        title="Business Analizing"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
        title="Technical Adjustment"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
        title="Technical Adjustment"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
        title="Technical Adjustment"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />
      </div>
    </section>
    <!-- section 2 -->
    <section class="px-10 py-20 md:px-20 npb-18 md:pb-24 bg-black text-white">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="col-span-1 my-10 md:my-0 w-5/6 pt-10">
          <p class="text-xl md:text-6xl font-bold">Conditions</p>
          <p class="pt-10 text-sm md:text-lg">From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way.</p>
        </div>
        <div class="grid grid-cols-2 w-auto ">
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
        </div>
      </div>
    </section>

    <!-- section 3 -->
    <section class="px-10 py-20 my-11 lg:px-20 npb-18 lg:pb-24 bg-white text-black">
      <div class="grid grid-cols-3 justify-items-center pt-5 mx-10">
        <div class="col-span-1 my-10 lg:my-0">
          <p class="text-xl lg:text-5xl font-bold">Research & Development</p>
          <p class="pt-3 text-sm lg:text-lg">From day one, we’ve put users at the center of</p>
        </div>
        <div class="col-span-2 ml-16 my-5">
          <p>From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way.</p>
        </div>
      </div>
    </section>

    <!-- section 4 -->
    <section class="bg-black text-white px-8 pt-20 pb-20 md:pb-50">
      <Label
      label="More Projects"
      textcolor="text-gray-400"
      background="bg-gray-400"
      />
        <div class="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
            <Projectcard 
              title= "BTN CREDIT CARD"
              content= "BTN Credit Card Mobile Application is a mobile application - running in both Android and iOS - operated by BTN in cooperation with BRI through a Co-Branding agreement This application connects both BTN and BRI through an API that allows financial data to be distributed to the Platform."
              image= "https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1600/v1633346459/Infinitec-Assets/Images/BTN-Mockup_uckrro.png"
              linkto= "../portofolio/BTN"
            />
            <Projectcard 
              title= "TAP eBBC Mobile Application"
              content= "Sometimes we don’t have a signal when working in the field. Plantations that are located unreachable from internet connection are one of the places that require offline data storage technology. We apply the technology to the palm oil logging applications requested by our clients."
              image= "https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1600/v1633324942/Infinitec-Assets/Images/TAP-Mockup_mvqd9m.png"
              linkto= "../portofolio/TAP"
            />
        </div>
    </section> 
  </div>
</template>

<script>
import { databases } from '@/db'
import TitleContainer from '../../components/TitleContainer.vue'
export default {
  components: { TitleContainer },
  data() {
    return {
        portos: databases
    }
  },
}
</script>