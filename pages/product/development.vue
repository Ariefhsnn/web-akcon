<template>
  <div class="bg-black whitespace-pre-line">
    <Hero
      title="Product Development"
      label="Expertises"
      content="From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way."
    />

    <section class="grid md:grid-cols-2 grid-cols-1 gap-10 pb-18 md:pb-24">
      <div class="flex flex-col">
        <img
          class="md:h-full object-cover md:ml-20 mx-10"
          src="https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1397/v1633315988/Infinitec-Assets/Images/1_idvijl.jpg"
          alt=""
        />
      </div>
      <div class="text-white mx-10 md:mr-20">
        <!-- content -->
        <Accordionmission />
      </div>
    </section>

    <section class="px-10 py-20 md:px-20 npb-18 md:pb-24 text-white">
      <TitleContainer title="Engineering" />

      <hr class="border-t-2 border-slate-400 border-solid my-20" />

      <div
        class="grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 px-2 md:px-5"
      >
        <Contentcard2 title="Product Discovery" />
        <Contentcard2 title="Product Discovery" />
        <Contentcard2 title="Product Discovery" />
        <Contentcard2 title="Product Discovery" />
        <Contentcard2 title="Product Discovery" />
        <Contentcard2 title="Product Discovery" />
      </div>
    </section>

    <section class="px-10 py-20 md:px-20 npb-18 md:pb-24 bg-white text-black">
      <TitleContainer 
      title="Development Process"
      content="In a project we often find the difference between what you want and what you need, looking similar doesn't mean it's right for the time and budget you have. this leads to dissatisfaction or even worst, the failure of a product. Or maybe, your budget and time are too much for a simple product. Let us do the things for you."
      />
      <hr class="border-t-2 border-slate-400 border-solid my-20" />
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 px-2 md:px-5"
      >
        <contentcard
          title="Business Analizing"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
          colorText=""
        />

        <contentcard
          title="Define the Objective"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
          title="Roadmaps"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
          title="Technical Adjustment"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
          title="Technology Plan"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />

        <contentcard
          title="Presentation Deck"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          image="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45166/black-circle-emoji-clipart-sm.png"
        />
      </div>
    </section>

    <section class="text-white mx-10 md:mr-20 pt-20">
      <p class="text-5xl font-bold">Technology Use</p>
      
      <hr class="border-t-2 border-slate-400 border-solid my-20" >

      <Technologyuse />

      <!-- <div class="flex flex-col">
        <span class="">Front End</span>
        <div class="flex flex-row">
        
        </div>
        <span class="">Back End</span>
        <div class="flex flex-row">
          
        </div>
        <span class="">Tools</span>
        <div class="flex flex-row">
        </div>
      </div> -->
      
    </section>

    <section class="bg-white px-8 pt-20 pb-20 md:pb-50">
      <Label
          label="More Projects"
          textcolor="text-gray-400"
          background="bg-gray-400"
          />
        <div class="grid grid-cols-1 md:grid-cols-2 bg-white p-10 gap-10">
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

export default {
  data() {
    return {
        portos: databases
    }
  },
}
</script>
