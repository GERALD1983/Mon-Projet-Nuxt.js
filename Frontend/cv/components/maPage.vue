<template>
  <div
    id="backMaPage"
    class="slider backSlide backSlideSize mobileBackSlideSize d-flex flex-column justify-content-between align-items-between"
  >
    <div
      class="larg100 textSlide margTitre margTitreMobile d-flex justify-content-around align-items-center"
    >
      <b-icon
        @mouseenter="stopRotation()"
        @mouseleave="startRotation()"
        @click="prev"
        class="bg-white mobileSizeIcon"
        role="button"
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
        class="bg-white mobileSizeIcon"
        role="button"
        icon="chevron-right"
        animation="fade"
        font-scale="3"
        aria-label="Help"
      ></b-icon>
    </div>
    <div
      class="larg100 mb-3 pl-3 d-flex justify-content-left align-items-center"
    >
      <img
        @mouseenter="afficherMasquer()"
        @mouseleave="afficherMasquer()"
        role="button"
        width="160px"
        height="160px"
        class="mr-3 justify-content-left bordureProfil rounded-circle ombre"
        src="../assets/photo1.jpg"
        alt="photo profil"
      />
      <div id="dialPhoto" class="supprimDialPhotoMob afficher">
        <div class=" d-flex justify-content-center align-items-center">
          <div class="miniFleche"></div>
          <div
            class="backDial blocapMob blocapMob450 bg-white d-flex justify-content-around align-items-center"
          >
            <h5 class="bg-white blocapFontMob">
              Hello ! Je m'appelle Gérald, je suis Développeur web Fullstack
              Javascript . Bienvenue à vous !
            </h5>
          </div>
        </div>
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
        "Spécialisé en javascript",
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
  mounted: function() {
    this.startRotation();
  },

  methods: {
    afficherMasquer() {
      if (
        document.getElementById("dialPhoto").style.display == "none" ||
        document.getElementById("dialPhoto").style.display == ""
      ) {
        document.getElementById("dialPhoto").style.display = "block";
      } else {
        document.getElementById("dialPhoto").style.display = "none";
      }
    },
    startRotation: function() {
      this.timer = setInterval(this.next, 5000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      let backMaPage = document.getElementById("backMaPage");
      this.currentNumber += 1;

      if (this.currentNumber == 0) {
        backMaPage.classList.add("backSlide");
      }

      if (this.currentNumber == 1) {
        backMaPage.classList.remove("backSlide");
        backMaPage.classList.add("backSlide1");
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
.backSlide {
  background-image: url("../assets/roche.jpg");
}
.backSlide1 {
  background-image: url("../assets/js.jpg");
}
.backSlide2 {
  background-image: url("../assets/ecole.jpg");
}
.backSlide3 {
  background-image: url("../assets/cerveau.jpg");
}
.backSlide4 {
  background-image: url("../assets/raw.jpg");
}
.backSlide5 {
  background-image: url("../assets/matrice.jpeg");
}
.backSlide6 {
  background-image: url("../assets/boreale.jpg");
}
.backSize {
  width: 15em;
}
.backDial {
  width: 20em;
  height: 120px;
  border-radius: 25px;
}
.miniFleche {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid white;
}
.afficher {
  display: none;
}
.ombre:hover {
  box-shadow: 0 0 0 0 #748928ff;
  animation: pulse 1.3s infinite;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
</style>
