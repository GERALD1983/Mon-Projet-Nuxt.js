<template>
  <div id="footer" class="ancreForm bg-white ">
    <div class="backFooter foot mobileFootHeight">
      <div>
        <h3
          id="contact"
          class=" aos-item text-light pt-5 pb-3"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Contact
        </h3>
      </div>

      <div class="mb-5 mt-3 d-flex justify-content-center ">
        <div id="logosReseaux" class=" larg50 d-flex justify-content-between">
          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickFacebook"
              class="lienSouris "
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="facebook"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickGit"
              class="lienSouris "
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="github"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickLinkedIn"
              class="lienSouris "
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="linkedin"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickTwitter"
              class="lienSouris"
              icon="twitter"
              font-scale="2"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class=" mobileFoot d-flex justify-content-around">
        <div
          class="aos-item margBlocAdresseMobile d-flex flex-column justify-content-center text-light"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h5 id="boxK"><b-icon icon="house-door-fill"></b-icon> Adresse :</h5>
          <p id="boxJ">
            3 rue de la gare
          </p>
          <p id="boxI">
            REDANGE 57390
          </p>
          <p id="boxH">
            <b-icon class="mr-2" icon="telephone-plus"></b-icon> Tel: (+33) 03
            82 52 26 42
          </p>
          <p>
            Bureau: (+33) 09 70 44 46 21
          </p>
          <p id="boxG">
            <b-icon class="mr-2" icon="mailbox"></b-icon> Mail:
            ferron-gerald@outlook.fr
          </p>
        </div>
        <div class="mobileLarg100 larg50">
          <Formulaire />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Formulaire from "./form.vue";
export default {
  name: "foot",
  components: {
    Formulaire
  },
  data() {
    return {
      urlGitHub: "https://github.com/GERALD1983",
      urlLinkedIn: "https://www.linkedin.com/in/gerald-ferron/",
      urlFacebook: "https://fr-fr.facebook.com/",
      urlTwitter: "https://twitter.com/?lang=fr"
    };
  },

  mounted() {
    /*
    const contact = document.getElementById("contact");
    const logos = document.getElementById("logosReseaux");
    const boxK = document.getElementById("boxK");
    const boxJ = document.getElementById("boxJ");
    const boxI = document.getElementById("boxI");
    const boxH = document.getElementById("boxH");
    const boxG = document.getElementById("boxG");

    window.addEventListener("scroll", () => {
      let scrollValue =
        (window.innerHeight + window.scrollY) / document.body.offsetHeight;

      if (scrollValue > 0.94) {
        contact.classList.remove("invisible");
        contact.classList.add("para1");

        logos.classList.remove("invisible");
        logos.classList.add("para1");

        boxK.classList.remove("invisible");
        boxK.classList.add("boxK");

        boxJ.classList.remove("invisible");
        boxJ.classList.add("boxJ");

        boxI.classList.remove("invisible");
        boxI.classList.add("boxI");

        boxH.classList.remove("invisible");
        boxH.classList.add("boxH");

        boxG.classList.remove("invisible");
        boxG.classList.add("boxG");
      }
    });
    */
  },
  methods: {
    clickGit() {
      window.open(`${this.urlGitHub}`);
    },
    clickLinkedIn() {
      window.open(`${this.urlLinkedIn}`);
    },
    clickFacebook() {
      window.open(`${this.urlFacebook}`);
    },
    clickTwitter() {
      window.open(`${this.urlTwitter}`);
    }
  }
};
</script>

<style>
.boxG {
  animation: 1s linear boxG;
}
@keyframes boxG {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxH {
  animation: 1s linear boxH;
}
@keyframes boxH {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
  }
}
.boxI {
  animation: 1s linear boxI;
}
@keyframes boxI {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxJ {
  animation: 1s linear boxJ;
}
@keyframes boxJ {
  0% {
    opacity: 0;
    transform: translateX(80%);
  }
  100% {
    opacity: 1;
  }
}
.boxK {
  animation: 1s linear boxK;
}
@keyframes boxK {
  0% {
    opacity: 0;
    transform: translateX(-80%);
  }
  100% {
    opacity: 1;
  }
}
</style>
