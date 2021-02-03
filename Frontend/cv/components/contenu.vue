<template>
  <div class="bg-white">
    <div>
      <div class="  d-flex justify-content-center align-items-center">
        <h2 id="objectif" class="objectif invisible nonvis py-5">
          Mes Objectifs
        </h2>
      </div>

      <div
        class=" d-flex flex-column justify-content-center paragraphe mobileParagraphe bg-secondary"
      >
        <h3 class="mobileFont pb-3 objectif invisible paratop1 text-white ">
          " Je m'appelle Gérald Ferron je suis développeur d'applications Web,
          je conçois et développe des site internet pour le web, je suis en
          veille technologique constante. "
        </h3>
        <h3 class="mobileFont pt-3 objectif invisible paratop2 text-white">
          "Mes objectifs sont d'accomplir vos projets en intégrant les derniéres
          technologies digitales, pour un rendu de qualité , du travail bien
          fait , un service optimiser. "
        </h3>
      </div>
    </div>
    <div>
      <Competences />
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-center align-items-center">
        <h2
          id="textPop"
          class="backPopMobile d-flex justify-content-center align-items-center rounded-pill invisible text-white my-5"
        >
          Quelles sont mes offres ?
        </h2>
      </div>
      <div class="bg-secondary paragraphe mobileParagraphe2">
        <h5 class="text-white pt-5">
          <ul id="liste" class="invisible">
            <li>
              - Vous avez un projet : création de plate-forme e-commerce
            </li>
            <br />
            <li>
              - Vous révez d'avoir votre propre réseau social et marquer
              l'histoire
            </li>
            <br />
            <li>
              - Vous aspirez à faire valoir votre savoir-faire
            </li>
            <br />
            <li>
              - Vous voulez dévelloper votre entreprise
            </li>
            <br />
            <li>
              - Où simplement afficher votre présence dans le monde digitale
            </li>
          </ul>
        </h5>
        <h4 id="liste2" class="invisible text-white pt-5 mobileStopPadTop">
          Mes services sont à votre disposition n'hésitez pas à me contacter !
        </h4>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <h2 id="titreProjet" class="invisible mb-0 pb-5 pt-5">Mes projets</h2>
    </div>
    <div id="carte" class="invisible">
      <Carte />
    </div>
  </div>
</template>

<script>
import Competences from "./competences.vue";
import Carte from "./carte.vue";
export default {
  name: "contenu",
  components: {
    Competences,
    Carte
  },
  mounted() {
    /*
    let observer = new IntersectionObserver(
      function(observables) {
        observables.forEach(function(observable) {
          // L'élément devient visible
          if (observable.intersectionRatio > 0.9) {
            const element = observable.target;

            element.classList.remove("invisible");
          }
        });
      },
      {
        threshold: [0.9],
      }
    );
    let objectifs = document.querySelectorAll(".objectif");
    objectifs.forEach(function(objectif) {
      observer.observe(objectif);
      //objectif.classList.remove("invisible");
      //objectif.classList.add("boxt");
    });
    /*
    let para11 = document.querySelectorAll(".paratop1");
    para11.forEach(function(para1) {
      observer.observe(para1);
      //para1.classList.remove("invisible");
      //para1.classList.add("para1");
    });
    let para22 = document.querySelectorAll(".paratop2");
    para22.forEach(function(para2) {
      observer.observe(para2);
      //para2.classList.remove("invisible");
      //para2.classList.add("para2");
    });
*/

    const objectif = document.getElementById("objectif");
    const paratop1 = document.querySelector(".paratop1");
    const paratop2 = document.querySelector(".paratop2");
    const textPop = document.getElementById("textPop");
    const liste = document.getElementById("liste");
    const liste2 = document.getElementById("liste2");
    const titProjet = document.getElementById("titreProjet");
    const carte = document.getElementById("carte");

    window.addEventListener("scroll", () => {
      let scrollValue =
        (window.innerHeight + window.scrollY) / document.body.offsetHeight;

      if (window.scrollY >= 0) {
      }
      if (window.scrollY > 100) {
        objectif.classList.remove("invisible");
        objectif.classList.add("boxt");
      }
      if (window.scrollY > 200) {
        paratop1.classList.remove("invisible");
        paratop2.classList.remove("invisible");
        paratop1.classList.add("para1");
        paratop2.classList.add("para2");
      }
      if (window.scrollY > 1400) {
        textPop.classList.remove("invisible");
        textPop.classList.add("text-pop-up-top");
      }
      if (window.scrollY > 1550) {
        liste.classList.remove("invisible");
        liste.classList.add("para1");
      }
      if (window.scrollY > 1700) {
        liste2.classList.remove("invisible");
        liste2.classList.add("para2");
      }
      if (window.scrollY > 2000) {
        titProjet.classList.remove("invisible");
        titProjet.classList.add("boxt");
      }
      if (window.scrollY > 2200) {
        carte.classList.remove("invisible");
        carte.classList.add("para3");
      }
    });
  }
};
</script>

<style>
.boxt {
  animation: 1s linear boxt;
}
.boxb {
  animation: 1s linear boxb;
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
    transform: translateX(200%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes boxb {
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
  }
}
@keyframes para1 {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    visibility: hidden;
    opacity: 1;
  }
}
@keyframes para2 {
  0% {
    opacity: 0;
    transform: translateY(200%);
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
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
      0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555,
      0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
</style>
