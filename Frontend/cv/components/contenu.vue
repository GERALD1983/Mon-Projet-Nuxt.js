<template>
  <div id="contenu" class="">
    <div class="displayBlock displayNone">
      <img
        width="300px"
        height="300px"
        class=" mb-2 mt-3 justify-content-left bordureProfil rounded-circle ombre"
        src="../assets/moi350.jpg"
        alt="photo profil développeur web"
      />
    </div>

    <div>
      <div class="  d-flex justify-content-center align-items-center">
        <h2 id="objectif" class="lienSouris objectif invisible nonvis py-5">
          Mes Objectifs
        </h2>
      </div>
      <div class="row mobileCube3DBottom">
        <div
          class="col-8 bgSecondary backParagrapheSize bordureDivD d-flex justify-content-center align-items-center paragraphe mobileParagraphe mobileParagraphe550"
        >
          <div class="col-md-8">
            <h4
              class="d-flex justify-content-center align-items-center mobileFont pb-3 objectif invisible paratop1 text-white "
            >
              " Je m'appelle Gérald Ferron je suis développeur d'applications
              Web, je conçois et développe des sites internet pour le web, je
              suis en veille technologique constante. "
            </h4>
            <h4
              class=" d-flex justify-content-center align-items-center mobileFont pt-3 objectif invisible paratop2 text-white"
            >
              "Mes objectifs sont d'accomplir vos projets en intégrant les
              derniéres technologies digitales, pour un rendu de qualité , du
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
          class="lienSouris backPopMobile d-flex justify-content-center align-items-center  invisible my-5"
        >
          Quelles sont mes offres ?
        </h2>
      </div>
      <div class="row mobileCube3DBottomReverse">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <Cube />
        </div>
        <div
          class="col-8 ml-auto d-flex justify-content-center align-items-center backParagrapheSize bordureDivG bgSecondary paragraphe mobileParagraphe mobileParagraphe2 mobileParagraphe550"
        >
          <div class=" col-sm-9 col-md-12 col-lg-12">
            <h5 class="text-white pt-3">
              <ul id="liste" class=" invisible">
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous avez un projet : création de plate-forme e-commerce
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous rêvez d'avoir votre propre réseau social et marquer
                  l'histoire
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous aspirez à faire valoir votre savoir-faire
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Vous voulez développer votre entreprise
                </li>
                <br />
                <li class="ecranFontparagraphe mobileFontpara">
                  - Où simplement afficher votre présence dans le monde digitale
                </li>
              </ul>
            </h5>
            <h4
              id="liste2"
              class="mobileFontpara invisible text-white pt-3 mobileStopPadTop"
            >
              Mes services sont à votre disposition n'hésitez pas à me contacter
              !
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center">
      <h2
        id="titreProjet"
        class="mobileCompetenceTitre lienSouris invisible mb-0 pb-5 pt-5"
      >
        Mes projets
      </h2>
    </div>
    <div id="carte" class="mb-5 invisible">
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
        textPop.classList.add("boxt");
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
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}
</style>
