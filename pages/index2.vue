<template>
<div class="whitespace-pre-line">
  <Hero
  title="We make digital products functional and beautiful Strategy, design and development"
  label="Let's Get Started"
  content=""
  />

<!-- section 1 -->

  <section class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 bg-black px-10 md:px-16 text-white">
    <!-- left -->
    <div class="">
      <div class="mb-70 md:mb-40 text-white">
        <button class="mb-5 md:mb-10 text-2xl"> </button>
        <p class="text-lg mt-10"> <b> </b>   <b> </b>     <span class="text-bold"> </span>
        </p> 
      </div>
      <Projectcard
      title="WIKA QIS Mobile Application"
      content="Given the opportunity to redesign the QSHE Mobile App with a sophisticated and better user experience, we are dedicating our best efforts and developing it to be the most user-friendly application for better data logging, better analysis and better actions"
      image="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2020/08/mockup-templates-to-download-now.png.webp"
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
      title="TAP E-BBC Mobile Application"
      content="Sometimes we don’t have a signal when working in the field. Plantations that are unreachable from internet connection are one of the places that require offline data storage technology. We apply the technology to the palm oil logging applications requested by our clients."
      image="https://speckyboy.com/wp-content/uploads/2020/06/mobile-app-mockup-templates-01.jpg"
      class="mb-20 "
      linkto="/portofolio/TAP"
      />
      <Projectcard
      title="BTN Credit Card"
      content="BTN Credit Card Mobile Application is a mobile application - running in both Android and iOS - operated by BTN in cooperation with BRI through a Co-Branding agreement This application connects both BTN and BRI through an API that allows financial data to be distributed to the Platform."
      image="https://www.creativealys.com/blog/wp-content/uploads/2019/03/iphone-in-hand-app-icon-mockup-1280x720.jpg"
      linkto="/portofolio/BTN"
      />
    </div>
  </section>

<!-- section 2 -->
  <section class="px-8 py-20 md:px-20 bg-black">
  
    <Title
    title="From product design to software continuous delivery"
    label="Our Expertises"
    content=""
    class="mb-12 md:mb-20"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-white px-2 md:px-5 text-justify">
      <contentcard
      title="Mobile Application"
      content="Infinitec provides comprehensive Android/iOS application development services that have been adapted to the Indonesian market. Not only design or provide related consultations, we also could optimize the UI/UX design, develop the features and register your application to the App Store / Google Play. We have experience in developing well-performed apps and are a reliable companion app for your field workers, and can help take your business effectiveness to the next level."
      />


      <contentcard
      title="Website Development"
      content="Our team is equipped with the skills and experience in web application development to create and launch successful enterprise solutions and software development services."
      />


      <!-- <contentcard
      title="Software Engineering"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      /> -->


      <contentcard
      title="Cloud & Devops"
      content="We have full services DevOps management cloud servers based in Indonesia to make it convenient and increase business growth of bringing the products to the market. We are very experienced in handling cloud servers for various types of businesses in Indonesia, whether it is with cloud servers from AWS, GCP, or Alibaba. For cloud server management, we provide DevOps services for your business. DevOps (Development and Operations) itself is a mix of culture, practices, and tools that are combined to improve a company's ability to process application or website delivery at high speed. Thus, the process of developing new products, be it a website or application, allows it to be done quickly.
"
      />


      <contentcard
      title="UI/UX Design & Branding"
      content="UI/UX Design and Brand Design have a close reciprocal relationship due to the compatibility of the two services that work together during a new product launch or company initiative. Collaboration between UI/UX Design and Brand Design is one of the important keys so that the company's services can be well received Brand design can be interpreted as a creative and pragmatic approach that focuses on company needs in various fields such as identity, marketing communications, environment, product branding, packaging, and website design. We use brand design and strategic thinking to help companies find the right brand identity that will help them succeed in a competitive market."
      />


      <!-- <contentcard
      title="Quality Assurance"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      /> -->

      
    </div>
  </section>

  <section>

  </section>

</div>
</template>

<script>
export default {
}
</script>
