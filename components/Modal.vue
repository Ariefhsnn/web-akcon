<template>
  <div v-if="modal2" class="nav-modal-container">
    <transition
      name="modal-left"
      appear
      @enter="$emit('toggle-status')"
      @before-enter="$emit('d-status', true)"
    >
      <div v-if="leftBg" :class="['nav-modal-left']"></div>
    </transition>
    <transition
      name="modal-right"
      appear
      @after-leave="closePlease"
      @after-enter="activate"
    >
      <div v-if="rightBg" :class="['nav-modal-right']"></div>
    </transition>
    <div class="nav-modal-content">
      <transition
        name="left-nav"
        @after-leave="setBg(false)"
        @after-enter="navContent = true"
      >
        <div v-if="cLeft" class="content-left p-10 2xl:p-20">
          <div class="flex flex-col h-full text-black">
            <div
              class="flex flex-0 h-20 md:h-24 2xl:h-36 text-xl md:text-4xl -ml-12"
            >
              <img class="w-48" src="/infinitec-Full.svg" alt="Infinitec" />
            </div>
            <div
              class="flex flex-1 flex-col font-bold text-3xl 2xl:text-6xl"
              style="line-height: 0px"
            >
              <NuxtLink class="flex py-5" to="/"
                ><span @click="$emit('close')">Home</span>
              </NuxtLink>
              <NuxtLink class="flex py-5" to="/us"
                ><span @click="$emit('close')">About Us</span></NuxtLink
              >
              <!-- <NuxtLink class="flex py-5" to="/approach"><span  @click="$emit('close')">Approach</span></NuxtLink> -->
              <NuxtLink class="flex py-5" to="/portofolio"
                ><span @click="$emit('close')">Work</span></NuxtLink
              >
            </div>
            <div
              class="flex flex-0 font-bold text-xl md:text-4xl h-24 items-center"
            >
              <NuxtLink to="/contact"
                ><span @click="$emit('close')">Let's Talk</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </transition>
      <transition
        name="nav-content"
        @after-leave="closeLeftNav"
        @after-enter="$emit('d-status', false)"
        @before-leave="$emit('d-status', true)"
      >
        <div
          v-if="navContent"
          class="font-text content-main p-10 2xl:p-20 hidden md:flex md:flex-col flex-row"
        >
          <span class="md:h-24 2xl:h-36 flex flex-0 mb-3"></span>
          <div class="grid grid-cols-2 gap-20 flex-1">
            <div
              id="left-content"
              class="flex flex-1 flex-col divide-y divide-gray-400"
            >
              <div id="upper" class="flex flex-1 flex-col pb-10">
                <Label
                  label="Expertises"
                  textcolor="text-gray-400"
                  bacground="bg-gray-400"
                />
                <span
                  class="flex-col font-extrabold text-xl md:text-2xl 2xl:text-4xlflex flex-0"
                >
                  <NuxtLink
                    class="flex py-2 md:py-2"
                    to="/product/designandDiscovery"
                    ><span @click="$emit('close')"
                      >Product Discovery & Design</span
                    >
                  </NuxtLink>
                  <NuxtLink class="flex py-2 md:py-2" to="/product/development"
                    ><span @click="$emit('close')">Product Development</span>
                  </NuxtLink>
                  <NuxtLink
                    class="flex py-2 md:py-2"
                    to="/product/tailoringandIntegration"
                    ><span @click="$emit('close')"
                      >Product Tailoring & Integration</span
                    >
                  </NuxtLink>
                  <NuxtLink class="flex py-2 md:py-2" to="/product/support"
                    ><span @click="$emit('close')">Product Support</span>
                  </NuxtLink>
                </span>
              </div>
            </div>
            <div id="right-content" class="flex flex-1 flex-col">
              <Label
                label="Services"
                textcolor="text-gray-400"
                bacground="bg-gray-400"
              />
              <div
                class="flex-col divide-y divide-gray-400 font-semibold text-md md:text-xl 2xl:text-2xl h-5/6 overflow-scroll"
              >
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>System Architecture</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Enterprise Architecture</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Website Development</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Web Application Development</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Mobile Development</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Cloud & Devops</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>UI/UX Design & Branding</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Maintenance & Support</span>
                </NuxtLink>
                <NuxtLink class="flex flex-0 py-2 md:py-2" to="/"
                  ><span>Quality Assurance</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- <span class="flex flex-end mb-3  tems-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum incidunt aliquam,  </span> -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      modal2: false,
      transition: false,
      leftBg: true,
      rightBg: true,
      cLeft: false,
      text: [false, false, false, false, false],
      navContent: false,
    };
  },
  computed: {
    modal() {
      return this.show;
    },
  },
  methods: {
    setBg(val) {
      this.leftBg = val;
      this.rightBg = val;
    },
    closePlease() {
      this.modal2 = false;
      this.$emit("d-status", false);
      this.setBg(true);
    },
    activate() {
      this.cLeft = true;
    },
    closeModal() {
      this.$emit("toggle-status");
      this.navContent = false;
    },
    closeLeftNav() {
      this.cLeft = false;
    },
  },
  watch: {
    modal(val) {
      if (val) {
        this.modal2 = true;
      } else {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .nav-modal-container {
    overflow: auto;
    flex-flow: column;
  }
  .nav-modal-left,
  .nav-modal-right {
    width: 100% !important;
    height: 50%;
    transform: translate(0, 0) !important;
  }
  /* BACKGROUND TRANSITION */
  .modal-left-enter {
    transform: translate(-100%, 0) !important;
  }

  .modal-left-leave-to {
    transform: translate(150%, 0) !important;
  }

  .modal-left-enter-active {
    transition: transform 0.3s !important;
  }

  .modal-left-leave-active {
    transition: transform 0.5s !important;
  }

  .modal-right-enter {
    transform: translate(-100%, 0) !important;
  }

  .modal-right-leave-to {
    transform: translate(150%, 0) !important;
  }

  .modal-right-enter-active,
  .modal-right-leave-active {
    transition: transform 0.3s;
    transition-delay: 0.2s;
  }
  /* --- BACKGROUND TRANSITION END --- */
}

@media screen and (max-width: 600px) {
  .nav-modal-container {
    overflow: auto;
    flex-flow: column;
  }
  .nav-modal-content {
    overflow: scroll;
    flex-flow: column;
    height: auto !important;
  }
  .content-left {
    width: 100% !important;
    background-color: white;
    height: auto !important;
  }
}

.nav-modal-container {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: blanchedalmond; */
}

.nav-modal-left {
  background-color: rgb(255, 255, 255);
  width: 25%;
  transform: translateY(0);
}

.nav-modal-right {
  background-color: rgb(255, 255, 255);
  width: 75%;
  transform: translateY(0);
}

.nav-modal-active {
  transform: translateY(0);
}

.nav-modal-content {
  position: absolute;
  display: flex;
  top: 0;
  z-index: 5;
  width: 100%;
}

.nav-modal-header {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  width: 100%;
}

.to-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.content-left {
  width: 25%;
  background-color: white;
  height: 100vh;
}

.content-main {
  width: 75%;
  background-color: white;
  height: 100vh;
}

/* CONTENT TRANSITION */
.nav-content-enter {
  transform: translateX(-5%);
  opacity: 0;
}

.nav-content-leave-to {
  transform: translateX(-5%);
  opacity: 0;
}

.nav-content-enter-active {
  transition: transform 0.3s, opacity 0.3s;
}

.nav-content-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

/* BACKGROUND TRANSITION */
.modal-left-enter {
  transform: translateY(-100%);
}

.modal-left-leave-to {
  transform: translateY(150%);
}

.modal-left-enter-active {
  transition: transform 0.3s;
}

.modal-left-leave-active {
  transition: transform 0.5s;
}

.modal-right-enter {
  transform: translateY(-100%);
}

.modal-right-leave-to {
  transform: translateY(100%);
}

.modal-right-enter-active,
.modal-right-leave-active {
  transition: transform 0.3s;
  transition-delay: 0.2s;
}
/* --- BACKGROUND TRANSITION END --- */

/* BODY MODAL NAV TRANSITION */
.left-nav-enter-active,
.left-nav-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.left-nav-enter,
.left-nav-leave-to {
  transform: translateX(-5%);
  opacity: 0;
}

/* --- BODY MODAL NAV END --- */
</style>
