<template>
  <div class="bg-white ">
    <div class="backFooter foot">
      <div>
        <h3 id="contact" class="invisible text-light pt-5 pb-3">Contact</h3>
      </div>

      <div class="mb-5 mt-3 d-flex justify-content-center ">
        <div
          id="logosReseaux"
          class="invisible larg50 d-flex justify-content-between"
        >
          <b-icon icon="facebook" font-scale="2"></b-icon>
          <b-icon icon="github" font-scale="2"></b-icon>
          <b-icon icon="linkedin" font-scale="2"></b-icon>
          <b-icon icon="twitter" font-scale="2"></b-icon>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="d-flex flex-column justify-content-center text-light">
          <h5 id="boxK" class="invisible">
            <b-icon icon="house-door-fill"></b-icon> Adresse :
          </h5>
          <p id="boxJ" class="invisible">3 rue de la gare</p>
          <p id="boxI" class="invisible">REDANGE 57390</p>
          <p id="boxH" class="invisible">
            <b-icon class="mr-2" icon="telephone-plus"></b-icon> Tel: 03 82 52
            26 42
          </p>
          <p id="boxG" class="invisible">
            <b-icon class="mr-2" icon="mailbox"></b-icon> Mail: dfggggfdgrr
          </p>
        </div>
        <div class="larg50">
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

  mounted() {
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
