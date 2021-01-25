<template>
  <div id="page">
    <MaPage />
    <Contenu />
    <Foot />
  </div>
</template>

<script>
import MaPage from "../components/maPage.vue";
import Contenu from "../components/contenu.vue";
import Foot from "../components/footer.vue";
export default {
  name: "Accueil",
  components: {
    MaPage,
    Contenu,
    Foot
  },

  data() {
    return {};
  },
  mounted() {
    const page = document.getElementById("page");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        page.classList.add("scroll");
        console.log("scroll");
      }
    });
  }
};
</script>

<style></style>
