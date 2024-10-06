<template>
  <div class="bg-white whitespace-pre-line">
    <Hero
      title="Product Support& Maintenance"
      label="Expertises"
      content="From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way."
    />

    <!-- section 1-->
    <section class="px-10 py-20 md:px-20 npb-18 md:pb-24 bg-white text-black">
      <TitleContainer 
      title="Design"
      content="In a project we often find the difference between what you want and what you need, looking similar doesn't mean it's right for the time and budget you have. this leads to dissatisfaction or even worst, the failure of a product. Or maybe, your budget and time are too much for a simple product. Let us do the things for you."
      />

      <hr class="border-t-2 border-slate-400 border-solid my-20">

      <DesignContent />
    </section>

    <!-- section 2 -->
    <section class="px-10 py-20 my-11 md:px-20 npb-18 md:pb-24 bg-black text-white">
      <div class="grid grid-cols-3 justify-items-center pt-5 mx-10">
        <div class="col-span-1 my-10 md:my-0">
          <p class="text-xl md:text-5xl font-bold">Research & Development</p>
          <p class="pt-3 text-sm md:text-lg">From day one, we’ve put users at the center of</p>
        </div>
        <div class="col-span-2 ml-16 my-5">
          <p>From day one, we’ve put users at the center of everything we do. Why? Because users are people. To reach people, we have to understand them. Know them. Walk in their shoes. We know that influence is earned and impact is possible— only when we get out of our own way.</p>
        </div>
      </div>
    </section>

    <!-- section 3 -->
     <section class="px-8 pt-20 pb-20 md:pb-50">
      <Label
      label="More Projects"
      textcolor="text-gray-400"
      background="bg-gray-400"
      />
        <div class="grid grid-cols-1 md:grid-cols-2 text-black p-10 gap-10">
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
</script>