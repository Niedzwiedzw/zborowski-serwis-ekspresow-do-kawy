<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, onMounted } from "vue";

const mobilePhoneNumber = "+48 797 273 118";
const removeWhitespace = (number: string): string => {
  for (let sign of [" ", "(", ")"]) {
    number = number.split(sign).join("");
  }
  return number;
};
const sanitizeNumber = (number: string): string => {
  for (let sign of [" ", "+", "(", ")"]) {
    number = number.split(sign).join("");
  }
  return number;
};
const address = "Trzebnicka 15, 50-245 Wrocław";
const whatsappMessage =
  "Dzień dobry, proszę o kontakt w sprawie Państwa oferty.";
const getWhatsappLink = (phoneNumber: string): string =>
  `https://wa.me/${sanitizeNumber(phoneNumber)}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

const windowNotLoaded = ref(true);
const startLoadingVideo = () => {
  setTimeout(() => (windowNotLoaded.value = false), 1000);
};
</script>

<template>
  <div class="HomeView">
    <div class="title section" id="title">
      <video
        playsinline
        autoplay
        muted
        loop
        :class="{ windowNotLoaded }"
        :onloadstart="startLoadingVideo"
      >
        <source src="../assets/video-compressed.webm" type="video/webm" />
        Twoja przeglądarka nie wspiera plików wideo.
      </video>
      <img
        class="logo"
        src="../assets/logo-main.png"
        alt="Zborowski - Serwis
      Ekspresów do Kawy"
      />
    </div>
    <div id="links" class="section">
      <div class="container">
        <a class="link" :href="getWhatsappLink(mobilePhoneNumber)">
          <div class="icon">
            <i class="pi pi-whatsapp"></i>
          </div>
          <div class="text">{{ mobilePhoneNumber }}</div>
        </a>

        <a class="link" :href="`tel:${removeWhitespace(mobilePhoneNumber)}`">
          <div class="icon">
            <i class="pi pi-phone"></i>
          </div>
          <div class="text">{{ mobilePhoneNumber }}</div>
        </a>
        <a class="link" href="https://goo.gl/maps/snrv2K3EczHnxtru8">
          <div class="icon">
            <i class="pi pi-google"></i>
          </div>
          <div class="text">{{ address }}</div>
        </a>
      </div>
      <div class="map container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1288.8298774957937!2d17.035251844610475!3d51.12177092519084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe91180b2e65d%3A0xcd63d73b264cdac4!2sZborowski%20Serwis%20Ekspres%C3%B3w%20do%20Kawy!5e0!3m2!1spl!2spl!4v1652523501174!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main";
.HomeView {
  @include grid-center;
  .section {
    @include grid-center;
    height: 100vh;
    padding: 0.4rem;
  }
  .title {
    video {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    overflow-y: hidden;
    padding: 1rem;
    .logo {
      max-width: 90vw;
      max-height: 90vh;
    }
  }
  #links {
    grid-template-columns: 1fr;

    @include for-desktop-up {
      grid-template-columns: 1fr 2fr;
    }
    .container {
      @include grid-center;
      gap: 0.4rem;
      width: unset;
      height: unset;
      max-width: 90vw;
      min-width: 15rem;
      grid-auto-rows: 1fr;
      &.map {
        height: 100%;
        width: 100%;
      }
      .link {
        $size: 1.4rem;
        $gap: $size * 0.5;
        @include grid-center;
        grid-template-columns: 3rem 1fr;
        gap: $gap * 3;
        font-weight: 700;
        border: 4px solid black;
        padding: $gap;
        border-radius: $gap * 0.5;

        text-align: left;
        font-size: $size;
        .text {
          width: 100%;
        }
        .pi {
          font-size: $size * 1.5 !important;
          transform: translateY($size * 0.2);
        }
        cursor: pointer;
        &:hover {
          color: white;
          background-color: black;
        }
      }
    }
  }
}

.video-wrapper {
  /* Telling our absolute positioned video to 
  be relative to this element */
  position: relative;

  width: 400px;
  height: 200px;

  /* Will not allow the video to overflow the 
  container */
  overflow: hidden;

  /* Centering the container's content vertically 
  and horizontally */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
video {
  &.windowNotLoaded {
    opacity: 0;
  }
  opacity: 1;
  transition: opacity 0.7s ease-in;
  /** Simulationg background-size: cover */
  object-fit: cover;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
</style>
