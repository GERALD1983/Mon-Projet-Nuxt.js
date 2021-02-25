<template>
  <div class=" mobileMargTitre">
    <div class="d-flex justify-content-center align-items-center">
      <h2
        id="competence"
        class="mobileCompetenceTitre lienSouris aos-item py-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Compétences
      </h2>
    </div>
    <div class="d-flex justify-content-center">
      <div
        id="animBack"
        class="col-md-8 bgTree bordureCercleSkill backSkillSize mobileCercleSkill mobileBackSkillSize aos-item d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div
          id="animLogos"
          class="aos-item backLogos col-md-8 col-lg-8 d-flex flex-wrap justify-content-around align-items-center "
          data-aos="fade"
          data-aos-duration="2000"
        >
          <div v-for="(image, index) in images" :key="index">
            <img
              width="70px"
              height="70px"
              @click="readSkill(image)"
              class="ombreLogo"
              :src="image.link"
              :alt="
                'Langage informatique programmation compétences développeur web : ' +
                  image.titre
              "
            />
          </div>
        </div>
        <div
          id="animModal"
          class="backModal backModalCompMobile efface col-md-8 d-flex flex-column "
        >
          <h4 class="pt-1 text-right">
            <span
              @click="clearReadSkill"
              role="button"
              class="bg-dark text-white"
            >
              X
            </span>
          </h4>
          <div>
            <img
              width="75px"
              height="75px"
              id="imgMod"
              src="../assets/html.png"
              alt="langage programmation logo"
            />
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
              <div
                class="d-flex justify-content-left align-items-center mobileDernierCompMod"
              >
                <b-icon icon="circle-fill" variant="info"></b-icon>
                <p class="stopMargPad ml-5" id="descriMod3">
                  DESCRIPTION3
                </p>
              </div>
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
          titre: "HTML5",
          link: require("../assets/html.png"),
          nom: "Mes compétences en Html 5 :",
          description1: "Intégrer du contenu conformément à une maquette.",
          description2:
            "Implémenter des balises de navigation au travers de l'application.",
          description3:
            "Mettre en place une structure de navigation Html pour un site web."
        },
        {
          titre: "Css3",
          link: require("../assets/css.png"),
          nom: "Mes compétences en Css 3 :",
          description1: "Mettre en œuvre des effets CSS graphiques avancés.",
          description2: "Assurer la cohérence graphique d'un site web.",
          description3:
            "Maîtriser les translations, les rotations et l’opacité."
        },
        {
          titre: "Javascript",
          link: require("../assets/js.png"),
          nom: "Mes compétences en JavaScript",
          description1: "Gérer des événements JavaScript.",
          description2: "Interagir avec un web service avec JavaScript.",
          description3:
            "Gérer la logique d'un programme en JavaScript (conditions, boucles et erreurs)."
        },
        {
          titre: "Json",
          link: require("../assets/json.png"),
          nom: "Mes compétences en Json",
          description1: "Manipuler des données au format Json",
          description2:
            "Convertir des données Json en JavaScript et inversement",
          description3: "Interagir avec un objet Json."
        },
        {
          titre: "Vue.js",
          link: require("../assets/vuejs.png"),
          nom: "Mes compétences en Vue.js",
          description1: "Construire une application Vue.js.",
          description2:
            "Augmenter les capacités d'une application avec Vue CLI",
          description3: "Créer des composants réutilisables dans Vue.js "
        },
        {
          titre: "Bootstrap",
          link: require("../assets/bootstrap.png"),
          nom: "Mes compétences en Bootstrap",
          description1: "Identifier les avantages de Bootstrap.",
          description2:
            "Créer des fonctionnalités et des thèmes personnalisés à l'aide de Bootstrap.",
          description3:
            "Utiliser les composants d'interface utilisateur de Bootstrap."
        },
        {
          titre: "npm",
          link: require("../assets/npm.png"),
          nom: "Mes compétences en Npm",
          description1: "Utiliser Npm à l'aide d'un terminal de commande.",
          description2: "Installer les différents Packages Npm en ligne.",
          description3: "Intégrer les dépendances Npm à l'application."
        },
        {
          titre: "visual studio code",
          link: require("../assets/vscode.png"),
          nom: "Mes compétences en Visual Studio Code",
          description1:
            "Installer les Modules avantageux de l'IDE Visual Studio.",
          description2: "Configurer un projet sur Visual Studio Code.",
          description3:
            "Utiliser Visual Studio à toutes les étapes du cycle de vie d’une application."
        },
        {
          titre: "MySql",
          link: require("../assets/mysql.png"),
          nom: "Mes compétences en MySql",
          description1: "Configurer MySQL , gérer les erreurs SQL.",
          description2: "Manipuler des données dans une base de données MySQL.",
          description3:
            "Gérer les utilisateurs , sécuriser une base de données."
        },
        {
          titre: "SQL",
          link: require("../assets/sql.png"),
          nom: "Mes compétences en SQL",
          description1: "Créer une base de données en requête SQL.",
          description2: "Créer et modifier des tables avec des requêtes SQL.",
          description3:
            "Insérer, modifier, supprimer et sélectionner des données dans la base."
        },
        {
          titre: "MongoDb",
          link: require("../assets/mongodb.png"),
          nom: "Mes compétences en MongoDb",
          description1:
            "Stocker des données de manière sécurisée dans MongoDb.",
          description2:
            "Gérer une base de données MongoDb et ses utilisateurs.",
          description3:
            "Utiliser Mongoose et modéliser des objets MongoDb pour Node.js."
        },
        {
          titre: "Git",
          link: require("../assets/git.png"),
          nom: "Mes compétences en Git",
          description1: "Utiliser les commandes de base de Git",
          description2:
            "Structurer l'arbre Git et garder les branches propres.",
          description3:
            "Initialiser , Commiter et gérer les problèmes de conflit sur Git"
        },
        {
          titre: "GitHub",
          link: require("../assets/github.png"),
          nom: "Mes compétences en GitHub",
          description1: "Gérer plusieurs versions sur GitHub",
          description2: "Envoyer et héberger une application sur GitHub.",
          description3: "Collaborer grâce à GitHub en utilisant les Workflows."
        },
        {
          titre: "Gimp",
          link: require("../assets/gimp.png"),
          nom: "Mes compétences en Gimp",
          description1: "Intégrer une maquette et en saisir le contenu",
          description2:
            "Revoir différents aspects d'une maquette taille , couleurs",
          description3:
            "Concevoir différents modèles de base images, bannières, logos, textes."
        },
        {
          titre: "Node.js",
          link: require("../assets/node.png"),
          nom: "Mes compétences en Node.js",
          description1: "Créer une API REST avec Node.js en modèle MVC.",
          description2: "Concevoir des applications évolutives avec Node.js.",
          description3:
            "Réaliser toute une structure Backend fonctionnelle avec Node.js."
        },
        {
          titre: "Terminal , ligne de commande",
          link: require("../assets/cline.png"),
          nom: "Mes compétences en Ligne de Commande",
          description1: "Utiliser les commandes de base d'un terminal.",
          description2: "Manipuler des fichiers avec un terminal.",
          description3: "Ajouter des Packages et naviguer depuis un terminal."
        },
        {
          titre: "Postman",
          link: require("../assets/postman.png"),
          nom: "Mes compétences avec Postman",
          description1: "Manipuler des API avec l'interface Postman.",
          description2:
            "Tester différentes routes d'un Backend en phase de test.",
          description3:
            "Utiliser et envoyer les données en phase de test avec Postman."
        },
        {
          titre: "Express",
          link: require("../assets/express.png"),
          nom: "Mes compétences avec Express.js",
          description1: "Créer un serveur Web simple avec Express.",
          description2:
            "Mettre en place un système d'authentification sur une application Express.",
          description3:
            "Gérer des fichiers utilisateurs sur une application Express."
        }
      ]
    };
  },
  mounted() {
    /*
    const competence = document.getElementById("competence");
    const back = document.getElementById("animBack");
    const logos = document.getElementById("animLogos");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        competence.classList.remove("invisible");
        competence.classList.add("boxt");
      }
      if (window.scrollY >= 800) {
        back.classList.remove("invisible");
        // back.classList.add("backSkill");
        back.classList.add("bgTree");

        logos.classList.remove("invisible");
        logos.classList.add("logos");
      }
    });
    */
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
      document.getElementById("imgMod").alt = `${image.titre}`;

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
    },

    clearReadSkill: function() {
      const backMod = document.getElementById("animModal");
      const logos = document.getElementById("animLogos");
      logos.classList.remove("efface");
      logos.classList.add("logos");
      //logos.classList.remove("logos");

      backMod.classList.add("efface");
    }
  }
};
</script>

<style scoped>
.ombreLogo:hover {
  /* box-shadow: 0 0 0 0 #748928ff; */
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
  background-color: #fffbf4;
}
.backModal {
  width: 20em;
  height: 360px;
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
  animation: 1s linear logo;
}
@keyframes logo {
  0% {
    opacity: 0;
    /* transform: translateY(150%);*/
  }
  100% {
    opacity: 1;
  }
}
/*
.backSkill {
 

  animation: rotate-vert-center 2s 
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both ease-in-out;
}

@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 0;
  }
  100% {
    /*  -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
    opacity: 1;
  }
}
*/
</style>
