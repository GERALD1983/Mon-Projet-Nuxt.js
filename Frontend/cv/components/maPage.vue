<template>
  <div>
    <div
      id="backMaPage"
      class=" backSlide backSlideSize mobileBackSlideSize d-flex flex-column justify-content-between align-items-between"
    >
      <div
        class=" larg100 textSlide margTitre margTitreMobile d-flex justify-content-around align-items-center"
      >
        <b-icon
          @mouseenter="stopRotation()"
          @mouseleave="startRotation()"
          @click="prev"
          class="lienBlack bg-white mobileSizeIcon"
          icon="chevron-left"
          animation="fade"
          font-scale="3"
          aria-label="Help"
        ></b-icon>
        <div v-for="number in [currentNumber]" :key="number">
          <h1
            class="rounded-pill backSize mobileBackSize mobileBackSize550 bg-white"
          >
            {{ currentMsg }}
          </h1>
        </div>

        <b-icon
          @mouseenter="stopRotation()"
          @mouseleave="startRotation()"
          @click="next"
          class="lienBlack bg-white mobileSizeIcon"
          icon="chevron-right"
          animation="fade"
          font-scale="3"
          aria-label="Help"
        ></b-icon>
      </div>
      <div
        class="larg100 mb-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div id="dialPhoto" class="afficher mb-3 supprimDialPhotoMob ">
          <div class=" d-flex justify-content-center align-items-center">
            <div
              class="filtreImage backDial blocapMob blocapMob450 d-flex justify-content-around align-items-center"
            >
              <h2
                class="lienSouris dialogueFont text-white d-flex flex-column justify-content-center align-items-center blocapFontMob"
              >
                <div id="dialogue1">
                  <span>Hello ! Je m'appelle Gérald , </span>
                </div>
                <div id="dialogue2">
                  <span>
                    Vous voulez développer votre Projet !
                  </span>
                </div>

                <div id="dialogue3">
                  <span>
                    Bienvenue à vous !
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <img
          @mouseenter="afficherMasquer()"
          @mouseleave="afficherMasquer()"
          width="360px"
          height="360px"
          class="mobileEffacePhotoMoiG mb-2 mt-3 justify-content-left bordureProfil rounded-circle ombre"
          src="../assets/moi345.jpg"
          alt="photo profil développeur web"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maPage",
  data() {
    return {
      messages: [
        "Développeur Web",
        "Spécialisé en JavaScript",
        "Développeur Frontend Vue.js",
        "Développeur Backend Node.js",
        "Intégrateur Prestashop",
        "Webmaster optimisation Seo",
        "Développeur Fullstack Js"
      ],
      currentNumber: 0,
      timer: null
    };
  },
  created() {},
  mounted() {
    this.load();
    this.startRotation();
  },

  methods: {
    afficherMasquer() {
      let dialPhoto = document.getElementById("dialPhoto");
      let dialogue1 = document.getElementById("dialogue1");
      let dialogue2 = document.getElementById("dialogue2");
      let dialogue3 = document.getElementById("dialogue3");

      if (dialPhoto.style.display == "none" || dialPhoto.style.display == "") {
        dialPhoto.style.display = "block";
        dialogue2.style.display = "none";
        dialogue3.style.display = "none";
        dialogue1.classList.add("dialogue1");
        setTimeout(() => {
          dialogue1.classList.remove("dialogue1");
          dialogue2.style.display = "block";
          dialogue2.classList.add("dialogue2");
        }, 5000);
        setTimeout(() => {
          dialogue1.classList.remove("dialogue1");
          dialogue2.classList.remove("dialogue2");
          dialogue3.style.display = "block";
          dialogue3.classList.add("dialogue3");
        }, 10000);
      } else {
        dialPhoto.style.display = "none";
      }
    },
    load: function() {
      window.onload = function() {
        backMaPage.classList.add("backSlide");
      };
    },
    startRotation: function() {
      // this.timer = setInterval(this.next, 5000);
      this.next;
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: async function() {
      let backMaPage = document.getElementById("backMaPage");
      this.currentNumber += 1;
      console.log(this.currentNumber);

      /*
      if (this.currentNumber == 0) {
        backMaPage.classList.add("backSlide");
      }
      */

      if (this.currentNumber == 1) {
        await backMaPage.classList.remove("backSlide");
        await backMaPage.classList.add("backSlide1");
      }
      if (this.currentNumber == 2) {
        backMaPage.classList.remove("backSlide1");
        backMaPage.classList.add("backSlide2");
      }
      if (this.currentNumber == 3) {
        backMaPage.classList.remove("backSlide2");
        backMaPage.classList.add("backSlide3");
      }
      if (this.currentNumber == 4) {
        backMaPage.classList.remove("backSlide3");
        backMaPage.classList.add("backSlide4");
      }
      if (this.currentNumber == 5) {
        backMaPage.classList.remove("backSlide4");
        backMaPage.classList.add("backSlide5");
      }
      if (this.currentNumber == 6) {
        backMaPage.classList.remove("backSlide5");
        backMaPage.classList.add("backSlide6");
      }

      if (this.currentNumber > 6) {
        this.currentNumber = 0;
        backMaPage.classList.remove("backSlide6");
        backMaPage.classList.add("backSlide");
      }
    },
    prev: function() {
      let backMaPage = document.getElementById("backMaPage");
      this.currentNumber -= 1;

      if (this.currentNumber == 0) {
        backMaPage.classList.remove("backSlide1");
        backMaPage.classList.add("backSlide");
      }

      if (this.currentNumber == 1) {
        backMaPage.classList.remove("backSlide2");
        backMaPage.classList.add("backSlide1");
      }
      if (this.currentNumber == 2) {
        backMaPage.classList.remove("backSlide3");
        backMaPage.classList.add("backSlide2");
      }
      if (this.currentNumber == 3) {
        backMaPage.classList.remove("backSlide4");
        backMaPage.classList.add("backSlide3");
      }
      if (this.currentNumber == 4) {
        backMaPage.classList.remove("backSlide5");
        backMaPage.classList.add("backSlide4");
      }
      if (this.currentNumber == 5) {
        backMaPage.classList.remove("backSlide6");
        backMaPage.classList.add("backSlide5");
      }
      if (this.currentNumber == 6) {
        backMaPage.classList.remove("backSlide");
        backMaPage.classList.add("backSlide6");
      }
      if (this.currentNumber < 0) {
        this.currentNumber = 6;
        backMaPage.classList.remove("backSlide");
        backMaPage.classList.add("backSlide6");
      }
    }
  },

  computed: {
    currentMsg: function() {
      return this.messages[Math.abs(this.currentNumber) % this.messages.length];
    }
  }
};
</script>

<style scoped>
.dialogueFont {
  font-weight: 900;
  /*
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  */
  font-family: "Times New Roman", Times, serif Tahoma, Geneva, Verdana,
    sans-serif;
}
.dialogue1 {
  animation: typing1 3s steps(23, end) forwards, blink 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 24ch;
}
.dialogue2 {
  animation: typing2 3s steps(23, end) forwards, blink2 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 32ch;
}
.dialogue3 {
  animation: typing3 2s steps(23, end) forwards, blink3 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 16ch;
}
.filtreImage {
  filter: sepia(100%);
}
.filtreNone {
  filter: none;
}
.backSlide {
  background-image: url("../assets/web.jpg");
  animation: opacBack1 1s ease-in-out;
}
.backSlide1 {
  background-image: url("../assets/jsImg.jpg");
  animation: opacBack2 1s ease-in-out;
}
.backSlide2 {
  background-image: url("../assets/ecole.jpg");
  animation: opacBack3 1s ease-in-out;
}
.backSlide3 {
  background-image: url("../assets/cerveau.jpg");
  animation: opacBack4 1s ease-in-out;
}
.backSlide4 {
  background-image: url("../assets/hebergeur2.jpg");
  animation: opacBack5 1s ease-in-out;
}
.backSlide5 {
  background-image: url("../assets/roche.jpg");
  animation: opacBack6 1s ease-in-out;
}
.backSlide6 {
  background-image: url("../assets/boreale2.jpg");
  animation: opacBack7 1s ease-in-out;
}
.backSize {
  width: 15em;
}
.backDial {
  width: 50em;
  height: 70px;
  border-radius: 25px;
}
/*
.miniFleche {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid white;
}
*/
.afficher {
  display: none;
}
.ombre:hover {
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
}
@keyframes opacBack1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack3 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack4 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack5 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack6 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacBack7 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
@keyframes typing1 {
  0% {
    width: 0ch;
  }
  100% {
    width: 25ch;
  }
}
@keyframes typing2 {
  0% {
    width: 0ch;
  }
  100% {
    width: 32ch;
  }
}
@keyframes typing3 {
  0% {
    width: 0ch;
  }
  100% {
    width: 16ch;
  }
}
@keyframes blink {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
@keyframes blink2 {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
@keyframes blink3 {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
</style>
