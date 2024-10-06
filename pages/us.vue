<template>
  <div class="bg-black whitespace-pre-line">
    <Hero
      title="We are here not to Take Part, we are here to Take Over"
      label="About Us"
      content=""
    />

    <!-- section 1 -->
    <section class="grid md:grid-cols-2 grid-cols-1 gap-10 pb-18 md:pb-24">
      <div class="flex flex-col">
        <p class="m-10 md:ml-20 mt-0 text-gray-300 text-xl font-light">
          Infinitec is your software development partner with rich experience in
          web, mobile, platforms and more IT solutions together with deep
          technology use in modern industry by agile teams that you can trust.
        </p>
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

    <!-- section 2 -->
    <section class="py-18 md:py-24">
      <div class="flex flex-col m-10 md:ml-20">
        <div
          class="md:w-1/2 flex flex-row text-white font-bold text-center justify-center md:text-left md:justify-left"
        >
          <div class="flex-col flex-1 mb-10">
            <p class="text-2xl md:text-4xl">2+</p>
            <p class="text-md md:text-md">Years</p>
          </div>
          <div class="flex-col flex-1">
            <p class="text-2xl md:text-4xl">20+</p>
            <p class="text-md md:text-md">Professionals</p>
          </div>
          <div class="flex-col flex-1">
            <p class="text-2xl md:text-4xl">10+</p>
            <p class="text-md md:text-md">Projects</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          <p class="text-md md:text-md font-light text-gray-300">
            Within a few years, our company has grown larger at an exponential
            rate. The first journey started in 2017 with a small team that
            managed to build several mobile apps and various websites in more
            than 5 different industries.
          </p>
          <p class="text-md md:text-md font-light text-gray-300">
            We employ more professionals from different domains in quality than
            quantity to provide the highest quality products by improving and
            updating every aspect during our process. Cultivating a strong
            relationships are the key to our success, both internally and
            externally.
          </p>
        </div>
      </div>
      <div class="block h-full md:mr-20 mx-10">
        <!-- <img class="md:mx-0 h-full object-cover " src="https://res.cloudinary.com/azkalonia/image/upload/v1633315979/Infinitec-Assets/Images/3_b5geso.png" alt=""> -->
      </div>
    </section>

    <!-- section 3 -->
    <!-- <section class="px-8 py-20 md:px-20 bg-black">
    <Title
    title=" Successful things coming from a great team"
    label="Our Team"
    content=""
    class="mb-12 md:mb-20"
    />
    <div class="block sm:hidden">
      <Membersgrid/>
    </div>
    
    <div class="flex-1 w-3/4 text-md font-light text-gray-300 mt-10">
      Business will not succeed without the cooperation of the team and our team works hard together to achieve that success.
    </div>
  </section> -->

    <!-- section 4 -->
    <section class="px-8 py-20 md:px-20 bg-black">
      <Title
        title="From product design to continuous services"
        label="Featured Services"
        content=""
        class="mb-12 md:mb-20"
      />
      <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
        <Accordionservices />
        <div class="relative h-auto">
          <img
            class="absolute md:mx-0 h-full object-cover"
            src="https://res.cloudinary.com/azkalonia/image/upload/v1633315978/Infinitec-Assets/Images/4_ioajhf.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- section 5 -->
    <section class="px-8 py-20 md:px-20 bg-black">
      <Title
        title="People behind the scene are the one who create success"
        label="Our Values"
        content=""
        class="mb-12 md:mb-20"
      />
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 text-white px-2 md:px-5"
      >
        <contentcard
          title="Integrity"
          content="New challenges indeed are exciting, but we have nothing to hide when it comes to state our capabilities in work."
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950370/Infinitec-Assets/Icons/Value/Integrity_4x_fkfem8.png"
        />

        <contentcard
          title="User-Centered"
          content="Diving to their thoughts, needs and behaviour is our best practice for reaching the most possible solutions. "
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950373/Infinitec-Assets/Icons/Value/Usertarget_4x_stkmpo.png"
        />

        <contentcard
          title="Transparency"
          content="We firmly say that translucent information will encourage the exchange of ideas that lead us to a better environment."
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950372/Infinitec-Assets/Icons/Value/Transparency_4x_s7l30o.png"
        />

        <contentcard
          title="Motivated & Passionate"
          content="Our home is filled with strong-willed problem-solvers with a thirst for knowledge. We start with a coffee in the morning to share thoughts."
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950371/Infinitec-Assets/Icons/Value/Creativity_4x_lzvqiw.png"
        />

        <contentcard
          title="Quality Over Quantity"
          content="We pour all our capabilities and experience to achieve the highest quality of a product."
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950372/Infinitec-Assets/Icons/Value/Qualityquantity_4x_th8a2i.png"
        />

        <contentcard
          title="Relationship & Happiness"
          content="When it comes to something, every individual on our team always contributes even if it's not their responsibility, that's what makes us solid, like a family."
          image="https://res.cloudinary.com/azkalonia/image/upload/v1629950372/Infinitec-Assets/Icons/Value/Relationship_4x_smvwkq.png"
        />
      </div>
    </section>

    <!-- section 6 -->
    <!-- <section class="px-8 pt-20 pb-20 md:pb-40">
    <div class="text-white font-bold text-lg mb-10">
      More Projects
    </div>
    <div class="text-white grid grid-cols-1 md:grid-cols-2 gap-10 text-justify">
      <Projectcard
      title="Field Tracking Mobile Application"
      content="Mobile application for the census of palm oil records that can be used offline"
      image="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2020/08/mockup-templates-to-download-now.png.webp"
      />
      <Projectcard
      title="Field Tracking Mobile Application"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      image="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2020/08/mockup-templates-to-download-now.png.webp"
      />
    </div>
  </section> -->
  </div>
</template>

<script>
export default {};
</script>
<style></style>
