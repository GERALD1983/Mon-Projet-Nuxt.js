<template>
  <div id="app">
    <div class="souris"></div>
    <MaPage class="" />
    <Navbar class="" />
    <Contenu class="" />
    <Cube />
    <Foot class="" />
  </div>
</template>

<script>
import Cube3D from "../components/cube.vue";
import MaPage from "../components/maPage.vue";
import Navbar from "../components/nav.vue";
import Contenu from "../components/contenu.vue";
import Foot from "../components/footer.vue";
export default {
  components: {
    MaPage,
    Navbar,
    Contenu,
    Foot,
    Cube3D
  },

  data() {
    return {};
  },
  mounted() {
    let souris = document.querySelector(".souris");
    window.addEventListener("mousemove", cursor);
    function cursor(e) {
      souris.style.top = e.pageY + "px";
      souris.style.left = e.pageX + "px";
    }

    let blackLinks = document.querySelectorAll(".lienBlack");
    blackLinks.forEach(lien => {
      lien.addEventListener("mouseover", () => {
        souris.classList.add("linkGrow");
        lien.classList.add("hoveredLien");
      });
      lien.addEventListener("mouseleave", () => {
        souris.classList.remove("linkGrow");
        lien.classList.remove("hoveredLien");
      });
    });

    let navBar = document.getElementById("nav");
    navBar.addEventListener("mouseover", () => {
      navBar.classList.add("navNoOpac");
    });
    navBar.addEventListener("mouseleave", () => {
      navBar.classList.remove("navNoOpac");
    });

    let navLinks = document.querySelectorAll(".lienSouris");
    navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        souris.classList.add("linkGrow");
        link.classList.add("hoveredLink");
      });
      link.addEventListener("mouseleave", () => {
        souris.classList.remove("linkGrow");
        link.classList.remove("hoveredLink");
      });
    });
  }
};
</script>

<style></style>
