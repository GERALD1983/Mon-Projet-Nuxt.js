<template>
  <div
    id="nav"
    class="navSize mobileNavProjet d-flex justify-content-between align-items-center"
  >
    <div class="mb-3">
      <img
        width="90px"
        height="60px"
        class="bg-white bordureLogo"
        src="../assets/gf3.png"
        alt="logo développeur gérald ferron"
      />
    </div>
    <div class="mobileNavProjet col-lg-5 px-0 d-flex justify-content-around">
      <div
        @click="toProject"
        role="button"
        class="ombreNav col-md-4 col-lg-5 bgPrimary bordureLogo d-flex
        align-items-center justify-content-center"
      >
        <h4 class="my-1 ">Mes projets</h4>
      </div>
      <div
        @click="toFoot"
        role="button"
        class="ombreNav col-md-4 col-lg-5 bgPrimary bordureLogo d-flex
        align-items-center justify-content-center"
      >
        <h4 class="my-1 ">
          Contact
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import jump from "jump.js";
export default {
  name: "navbar",
  mounted() {
    var navbar = document.getElementById("nav");
    var contenu = document.getElementById("contenu");
    var footer = document.getElementById("footer");
    var header = document.getElementById("backMaPage");
    var visible = header.offsetHeight;
    console.log(visible);
    window.addEventListener("scroll", () => {
      let scrollValue = window.scrollY;
      console.log(scrollValue);
      if (scrollValue > visible) {
        navbar.classList.add("navFixed");
      } else {
        navbar.classList.remove("navFixed");
      }
    });
  },
  methods: {
    toFoot() {
      // window.scrollTo(0, 400);
      jump(".ancreForm", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    },
    toProject() {
      // window.scrollTo(0, 400);
      jump("#titreProjet", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    }
  }
};
</script>

<style>
.navFixed {
  position: fixed !important;
  z-index: 9999 !important;
  top: 0;
}
.navSize {
  height: 80px;

  background: #9e9d9d;
  width: 100%;
}
.ombreNav:hover {
  /* box-shadow: 0 0 0 0 #748928ff; */
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
  background: #9e9d9d !important;
  color: white !important;
}
.bordureLogo {
  border-radius: 0.5em;
  border: 1mm ridge#ffdea4;
}
</style>
