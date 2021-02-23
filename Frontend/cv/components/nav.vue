<template>
  <div
    id="nav"
    class="navSize mobileNavSize  d-flex justify-content-between align-items-center"
  >
    <div @click="toTop" class=" ombreNav">
      <Logo />
    </div>
    <!--
    <div class="my-3">
      <img
        width="90px"
        height="60px"
        class="bg-white bordureLogo"
        src="../assets/gf3.png"
        alt="logo développeur gérald ferron"
      />
    </div>
    -->
    <div class="mobileNavProjet col-lg-5 px-0 d-flex justify-content-around">
      <div
        @click="toProject"
        class="mobileNavLink30 mobileNavLink70 px-0 ombreNav col-md-4 col-lg-5 bgPrimary bordureLogo d-flex
        align-items-center justify-content-center"
      >
        <h4 class="lienSouris my-1 ">Mes Projets</h4>
      </div>
      <div
        @click="toFoot"
        class="mobileNavLink30 mobileNavLink70 px-0 ombreNav col-md-4 col-lg-5 bgPrimary bordureLogo d-flex
        align-items-center justify-content-center"
      >
        <h4 class="lienSouris my-1 ">
          Contact
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo.vue";
import jump from "jump.js";
export default {
  name: "navbar",
  components: {
    Logo
  },
  mounted() {
    var navbar = document.getElementById("nav");
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
    toTop() {
      // window.scrollTo(0, 400);
      jump("#backMaPage", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    },
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
.navNoOpac {
  opacity: 1 !important;
}
.navFixed {
  position: fixed;
  z-index: 9;
  top: 0;
  opacity: 0.5;
}
.navSize {
  height: 90px;

  background: #9e9d9d;
  width: 100%;
}
.ombreNav:hover {
  /* box-shadow: 0 0 0 0 #748928ff; */
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
  /* background: #9e9d9d !important;
  color: white !important;*/
}
.bordureLogo {
  border-radius: 0.5em;

  background: gray;
  color: white;
  border: 0.1px solid #ffdea4;
  /*border: 1mm ridge#ffdea4;*/
}
</style>
