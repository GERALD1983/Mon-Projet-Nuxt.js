<template>
  <div class="bg-white margTitre">
    <div class="d-flex justify-content-center align-items-center">
      <h2 id="competence" class="invisible bg-white py-5">
        Mes Compétences
      </h2>
    </div>

    <div
      id="animBack"
      class=" backSkillSize invisible slider d-flex justify-content-center align-items-center"
    >
      <div
        id="animLogos"
        class="invisible backLogos col-md-6 d-flex flex-wrap justify-content-around align-items-center "
      >
        <div v-for="(image, index) in images" :key="index">
          <img
            @click="readSkill(image)"
            role="button"
            class=" cube ombreLogo"
            :src="image.link"
            alt=""
          />
        </div>
      </div>
      <div id="animModal" class="backModal efface col-md-8 d-flex flex-column ">
        <h4 class="text-right text-danger">
          <span @click="clearReadSkill" role="button"> X </span>
        </h4>
        <div>
          <img id="imgMod" class="cube" src="../assets/html.png" alt="" />
        </div>
        <div>
          <h3 id="titreMod">TITRE</h3>
        </div>
        <div
          class="d-flex  justify-content-center align-content-center align-items-center"
        >
          <div
            class="d-flex col-xxl-6 col-xl-10 col-lg-11 col-md-12 flex-column justify-content-left"
          >
            <div class="d-flex justify-content-left align-items-center">
              <b-icon icon="circle-fill" variant="info"></b-icon>
              <p class="stopMargPad ml-5" id="descriMod1">
                DESCRIPTION1
              </p>
            </div>
            <div class="d-flex justify-content-left align-items-center">
              <b-icon icon="circle-fill" variant="info"></b-icon>
              <p class="stopMargPad ml-5" id="descriMod2">
                DESCRIPTION2
              </p>
            </div>
            <div class="d-flex justify-content-left align-items-center">
              <b-icon icon="circle-fill" variant="info"></b-icon>
              <p class="stopMargPad ml-5" id="descriMod3">DESCRIPTION3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competences",
  data() {
    return {
      images: [
        {
          link: require("../assets/html.png"),
          nom: "Mes compétences en Html 5 :",
          description1: "Intégrer du contenu conformément à une maquette.",
          description2:
            "Implémenter des balises de navigation au travers de l'application.",
          description3:
            "Mettre en place une structure de navigation Html pour un site web."
        },
        {
          link: require("../assets/css.png"),
          nom: "Mes compétences en Css 3 :",
          description1: "Mettre en œuvre des effets CSS graphiques avancés.",
          description2: "Assurer la cohérence graphique d'un site web.",
          description3:
            "Maîtriser les translations, les rotations et l’opacité."
        },
        {
          link: require("../assets/js.png"),
          nom: "Mes compétences en Javascript",
          description1: "Gérer des événements JavaScript.",
          description2: "Interagir avec un web service avec JavaScript.",
          description3:
            "Gérer la logique d'un programme en JavaScript (conditions, boucles et erreurs)."
        },
        {
          link: require("../assets/json.png"),
          nom: "Mes compétences en Json",
          description1: "Manipuler des données au format Json",
          description2:
            "Convertir des données Json en Javascript et inversement",
          description3: "Interagir avec un objet Json."
        },
        {
          link: require("../assets/vuejs.png"),
          nom: "Mes compétences en Vue.js",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/bootstrap.png"),
          nom: "Mes compétences en Bootstrap",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/npm.png"),
          nom: "Mes compétences en Npm",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/vscode.png"),
          nom: "Mes compétences en Visual Studio Code",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/mysql.png"),
          nom: "Mes compétences en MySql",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/sql.png"),
          nom: "Mes compétences en SQL",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/mongodb.png"),
          nom: "Mes compétences en MongoDb",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/git.png"),
          nom: "Mes compétences en Git",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/github.png"),
          nom: "Mes compétences en GitHub",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/gimp.png"),
          nom: "Mes compétences en Gimp",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/node1.png"),
          nom: "Mes compétences en Node.js",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/cline.png"),
          nom: "Mes compétences en Ligne de Commande",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/postman.jpg"),
          nom: "Mes compétences avec Postman",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        },
        {
          link: require("../assets/express.png"),
          nom: "Mes compétences avec Express.js",
          description1: "Site ambiance naturelle",
          description2: "Site ambiance naturelle",
          description3: "Site ambiance naturelle"
        }
      ]
    };
  },
  mounted() {
    const competence = document.getElementById("competence");
    const back = document.getElementById("animBack");
    const logos = document.getElementById("animLogos");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        competence.classList.remove("invisible");
        competence.classList.add("boxt");

        back.classList.remove("invisible");
        back.classList.add("backSkill");

        logos.classList.remove("invisible");
        logos.classList.add("logos");
      }
    });
  },
  methods: {
    readSkill: function(image) {
      const backMod = document.getElementById("animModal");
      const logos = document.getElementById("animLogos");
      backMod.classList.remove("efface");
      logos.classList.add("efface");

      localStorage.setItem("titre", image.nom);
      document.getElementById("titreMod").textContent = `${image.nom}`;

      localStorage.setItem("link", image.link);
      document.getElementById("imgMod").src = `${image.link}`;

      localStorage.setItem("descri1", image.description1);
      document.getElementById(
        "descriMod1"
      ).textContent = `${image.description1}`;

      localStorage.setItem("descri2", image.description2);
      document.getElementById(
        "descriMod2"
      ).textContent = `${image.description2}`;

      localStorage.setItem("descri3", image.description3);
      document.getElementById(
        "descriMod3"
      ).textContent = `${image.description3}`;

      console.log(image.link);
    },
    clearReadSkill: function() {
      const backMod = document.getElementById("animModal");
      const logos = document.getElementById("animLogos");
      logos.classList.remove("efface");
      backMod.classList.add("efface");
    }
  }
};
</script>

<style scoped>
.ombreLogo:hover {
  box-shadow: 0 0 0 0 #748928ff;
  animation: pulse 1.3s infinite;
}
.backModal {
  width: 20em;
  height: 300px;
  border-radius: 25px;
  background-color: white;
}
.backLogos {
  height: 80%;
}
.efface {
  display: none !important;
}
.logos {
  animation: 1.5s linear logo;
}
@keyframes logo {
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  100% {
    opacity: 1;
  }
}
.backSkill {
  background-image: url("../assets/flux.jpg");

  animation: rotate-vert-center 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
    opacity: 1;
  }
}
</style>
