<template>
  <div class="whitespace-pre-line">
    <Hero
      title="Where Your Horizon Begins..."
      label="Let's Get Started"
      content=""
    />

    <!-- section 1 -->

    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 bg-black px-10 md:px-16 text-white"
    >
      <!-- left -->
      <div class="">
        <div class="mb-70 md:mb-40 text-white">
          <button class="mb-5 md:mb-10 text-2xl"></button>
          <p class="text-lg mt-10">
            <b> </b> <b> </b> <span class="text-bold"> </span>
          </p>
        </div>
        <Projectcard
          title="WIKA QIS Mobile Application"
          content="Given the opportunity to redesign the QSHE Mobile App with a sophisticated and better user experience, we are dedicating our best efforts and developing it to be the most user-friendly application for better data logging, better analysis and better actions"
          image="https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1600/v1633350281/Infinitec-Assets/Images/Wika_-_Mockup_zhceln.png"
          class="mb-20"
          linkto="/portofolio/WIKA"
        />
        <!-- <Projectcard
      title="BTN Credit Card Mobile"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      image="https://www.decolore.net/wp-content/uploads/2019/12/mobile-app-mockup-templates-cover.jpg"
      class="mb-20"
      /> -->
      </div>
      <!-- right -->
      <div>
        <Projectcard
          title="TAP eBBC Mobile Application"
          content="Sometimes we don’t have a signal when working in the field. Plantations that are unreachable from internet connection are one of the places that require offline data storage technology. We apply the technology to the palm oil logging applications requested by our clients."
          image="https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1600/v1633324942/Infinitec-Assets/Images/TAP-Mockup_mvqd9m.png"
          class="mb-20"
          linkto="/portofolio/TAP"
        />
        <Projectcard
          title="BTN Credit Card"
          content="BTN Credit Card Mobile Application is a mobile application - running in both Android and iOS - operated by BTN in cooperation with BRI through a Co-Branding agreement This application connects both BTN and BRI through an API that allows financial data to be distributed to the Platform."
          image="https://res.cloudinary.com/azkalonia/image/upload/c_scale,w_1600/v1633346459/Infinitec-Assets/Images/BTN-Mockup_uckrro.png"
          linkto="/portofolio/BTN"
        />
      </div>
    </section>
    <section class="px-8 pt-10 md:px-20 bg-black">
      <Title label="Our Partners" title="" content="" class="" />
      <!-- <div class="md:grid hidden mt-16 grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
      <div
        class="h-16 w-16 md:h-32 md:w-32 rounded-full block flex-shrink-0"
        v-for="(client,index) in clients" :key="index"
      >
        <img :src="'clients/' + client.image" :alt="client.image">
      </div>
    </div> -->
      <div class="">
        <ClientLogo />
      </div>
    </section>

    <!-- section 2 -->
    <section class="px-8 py-10 md:py-20 md:px-20 bg-black">
      <Title
        title="Akcon is a company that specializes in Site Acquisition (SITAC) services, CME (civil, mechanical and electrical),Project Management and Maintenance as well services of Enterprise System."
        label="Our Expertises"
        content=""
        class="mb-12 md:mb-20"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-white px-2 md:px-5"
      >
        <contentcard
          title="Tower Telco"
          content="AKCON is proud to present our Site Acquisition (SITAC) service, which is specifically designed to support the development of 4G and 5G telecommunications technology."
        />

        <contentcard
          title="Internet Connectivity"
          content="Also handles civil, mechanical and electrical telecommunication tower construction work according to customer needs"
        />

        <contentcard
          title="Enterprise System"
          content="Projects manages the entire process to enable efficient and effective implementation of services"
        />
      </div>
    </section>

    <section></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          title: "",
          image: "1. BTN White.png",
        },
        {
          title: "",
          image: "2. TAP  White.png",
        },
        {
          title: "",
          image: "3. Mandiri  White.png",
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
          image: "6. WIKA  White.png",
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
};
</script>
