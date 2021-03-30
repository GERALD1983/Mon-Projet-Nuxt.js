<template>
  <div id="contenu" class="">
    <div class="displayBlock displayNone">
      <img
        width="300px"
        height="300px"
        class=" mb-2 mt-3 justify-content-left bordureProfil rounded-circle ombre"
        src="../assets/moi300.jpg"
        alt="photo profil développeur web"
      />
    </div>

    <div>
      <div class="d-flex justify-content-center align-items-center">
        <h2
          id="objectif"
          class="lienSouris objectif aos-item nonvis py-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Objectifs
        </h2>
      </div>
      <div class="mx-0 row mobileCube3DBottom">
        <div
          class="col-8 bgSecondary backParagrapheSize bordureDivD d-flex justify-content-center align-items-center paragraphe mobileParagraphe mobileParagraphe550"
        >
          <div class="my-5 col-md-8">
            <h4
              class="d-flex justify-content-center align-items-center mobileFont pb-3 objectif aos-item paratop1 text-white "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              " Je m'appelle Gérald Ferron je suis développeur d'applications
              Web, je conçois et développe des sites internet pour le web, je
              suis en veille technologique constante. "
            </h4>
            <h4
              class=" d-flex justify-content-center align-items-center mobileFont pt-3 objectif aos-item paratop2 text-white"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              "Les objectifs sont d'accomplir vos projets en intégrant les
              dernières technologies numériques, pour un rendu de qualité , du
              travail bien fait , un service optimisé. "
            </h4>
          </div>
        </div>

        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <Cube />
        </div>
      </div>
    </div>
    <div>
      <Competences />
    </div>

    <div class="mobileProjetTitre mb-5">
      <div class="d-flex justify-content-center align-items-center">
        <h2
          id="textPop"
          class="lienSouris backPopMobile d-flex justify-content-center align-items-center aos-item my-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Offres ?
        </h2>
      </div>

      <div class="mx-0 row mobileCube3DBottomReverse">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <Cube />
        </div>

        <div
          class="col-8 ml-auto d-flex justify-content-center align-items-center backParagrapheSize bordureDivG bgSecondary paragraphe mobileParagraphe mobileParagraphe2 mobileParagraphe550"
        >
          <div class="my-5 col-sm-9 col-md-12 col-lg-12">
            <h5 class="text-white pt-3">
              <ul
                id="liste"
                class="aos-item"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous avez un projet : création de plateforme E-commerce.
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous rêvez d'avoir votre propre Réseau social et marquer
                  l'histoire.
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous aspirez à faire valoir votre Savoir-faire.
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous voulez développer votre Entreprise.
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Où simplement afficher votre présence dans le monde
                  Numérique.
                </li>
              </ul>
            </h5>

            <h4
              @click="toFoot"
              id="liste2"
              class="lienSouris mobileFontpara aos-item phraseContact pt-3 mobileStopPadTop"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Mes services sont à votre disposition n'hésitez pas à me Contacter
              !
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center">
      <h2
        id="titreProjet"
        class="mobileCompetenceTitre lienSouris aos-item mb-0 pb-5 pt-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Projets
      </h2>
    </div>

    <div id="carte" class="mb-5">
      <Carte />
    </div>
  </div>
</template>

<script>
import aos from "aos";
import jump from "jump.js";
import Competences from "./competences.vue";
import Carte from "./carte.vue";
export default {
  name: "contenu",
  components: {
    Competences,
    Carte
  },
  mounted() {},
  methods: {
    toFoot() {
      // window.scrollTo(0, 400);
      jump(".ancreForm", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    }
  }
};
</script>

<style>
.phraseContact {
  color: #ffdea4;
}
ul {
  list-style: none;
}
li {
  font-size: 24px;
}
.boxt {
  animation: 0.5s linear boxt;
}
.boxb {
  animation: 0.5s linear boxb;
}
.para1 {
  animation: 1s linear para1;
}
.para2 {
  animation: 1s linear para2;
}
.para3 {
  animation: 1s linear para3;
}
@keyframes boxt {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes boxb {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes para1 {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
@keyframes para2 {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
@keyframes para3 {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
.text-pop-up-top {
  height: 60px;
  width: 15em;
  background-color: #aca5a5;
  animation: text-shadow-pop-top 0.6s both;
}
@keyframes text-shadow-pop-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
</style>
