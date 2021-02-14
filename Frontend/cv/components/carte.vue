<template>
  <div>
    <div>
      <!--
    <div id="exemple">
      <div>
        <p>Tout contenu que vous voulez montrer aux utilisateurs.</p>
        <button @click="exemple()">Cliquez ici pour fermer la boîte</button>
      </div>
    </div>
    -->

      <div
        class="pb-5 mx-5 px-5 stopPadMargX d-flex flex-wrap justify-content-around align-items-center "
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class=" my-5 col-xxl-3 col-xl-4 col-lg-5 col-md-7 col-sm-12"
        >
          <div class="bordureCarte ombreCarte card ">
            <div @click="insertImage(image)">
              <img
                width="325px"
                height="370px"
                @click="toggleModale()"
                role="button"
                class="hautImg card-img-top"
                :src="image.link"
                :alt="'Projet de développement site internet : ' + image.nom"
              />
            </div>

            <div class="bg-secondary hautDivColor"></div>
            <div class="card-body">
              <h5 class="card-title">{{ image.nom }}</h5>

              <button @click="afficherMasquer(image)" class="btn btn-secondary">
                Détails
              </button>

              <p :id="image.id" class="nonAfficher pt-3 card-text"></p>

              <button
                class="ml-3 btn btnCarte btn-secondary"
                @click="clickUrl(image)"
              >
                Voir Projet
              </button>
            </div>
          </div>
        </div>
        <modale
          id="modale"
          v-bind:revele="revele"
          v-bind:toggleModale="toggleModale"
        >
          <img
            id="imageModale"
            class="hautImgModale largImgModaleMob"
            src="../assets/resto400.jpg"
            alt="Maquette projet site internet applications web"
          />
        </modale>
      </div>
    </div>
  </div>
</template>

<script>
import Modale from "./modaleImage.vue";
export default {
  name: "carte",
  components: {
    modale: Modale
  },
  data() {
    return {
      //imageModale: localStorage.getItem("imageMod"),
      revele: false,
      images: [
        {
          id: 1,
          link: require("../assets/cv400.jpg"),
          link2: require("../assets/cv.jpg"),
          nom: "Maquette Cv",
          description: `Cv responsive. Ceci est un site fait entiérement en html et css il est optimiser
           pour mobile.
           il est le premiet projet concret que j'ai fait dans la formation developpeur web d'openclassroom.
           Celui ci est une intégration d'apres une maquette fournit qui à été reproduit à la lettre et au
            graphisme prés.
           Celui ci récapitule aussi mon parcours professionnel dans le domaine du web.Vous pouvez en voir
            un aperçu sur mon github page ici :`,
          url: "https://gerald1983.github.io/moncv/"
        },
        {
          id: 2,
          link: require("../assets/resto400.jpg"),
          link2: require("../assets/resto.jpg"),
          nom: "Oh My Food",
          description: `Projet oh my food restaurant.
          Ceci est un rendu d'une maquette faite en HTML Css et du préprocesseur Saas.
          Une reproduction et version MVP de réservation de restaurants.
          il a été réaliser dans le cadre du projet 3 du parcours Openclassroom.
          Il dispose de petites animations et de l'utilisation de police en conformité avec la maquette
          fournit et des spécifications demandées par le projet.
          Vous découvrirez l'intégralité de mon travail à cette adresse Git Page: `,
          url: "https://gerald1983.github.io/PROJET3/"
        },
        {
          id: 3,
          link: require("../assets/site400.jpg"),
          link2: require("../assets/site.jpg"),
          nom: "Projet Site Perso",
          description: `Mon portfolio cette maquette a été entiérement réaliser par mes soins de sa conception graphique ,
           jusqu' à son développement.
           Il a été conçu en Vue.js avec le framework Nuxt.js ,
          un backend à également été réaliser en Node.js et Express avec une base de donnée SQL sécurisée`,
          url: "#"
        },
        {
          id: 4,
          link: require("../assets/chouette400.jpg"),
          link2: require("../assets/agence.jpg"),
          nom: "Agence Web",
          description: `Amelioration site la chouette agence, Seo optimisation.
          Ceci est le site chouette agence après optimisation des Seo des graphismes
          des différentes erreur et bug sur la plate-forme.
          Ceci a été revu grace à des outils comme Gt metirx et bien d'autres applications en ligne.
          Le code a été revu et accompagné d'une liste de recommandations avant son optimisation
          et d'un rapport après la mise en oeuvre de celle-ci.
          Vous pouvez découvrir l'application revue à cette adresse git hub Page`,
          url: "https://gerald1983.github.io/chouette-modifier/"
        },
        {
          id: 5,
          link: require("../assets/orinoco400.jpg"),
          link2: require("../assets/orinoco2.jpg"),
          nom: "E-commerce Orinoco",
          description: `Site E-commerce Orinoco version Mvp.
          Ceci est l'application e-commerce front-end réaliser par mes soins à l'aide
          du Framework bootstrap et en Javascript vanilla.
          Le code est commenté et utilise des promises en requête Ajax sous forme de fonction.
          Ce projet a été fait dans le cadre du projet 5 d'Openclassrooms.
          Le backend été fourni ainsi que les informations et les différentes données affichaient en front-end.`,
          url: "https://github.com/GERALD1983/FrontEndP5"
        },
        {
          id: 6,
          link: require("../assets/sauce400.jpg"),
          link2: require("../assets/sauce400.jpg"),
          nom: "Critique Gastronomique",
          description: `Backend projet6 api d'ajout de vos sauces, likes et dislikes.
          Ceci est une application de critique gastronomique pour une agence de sauces Sopekocko
          le côté front-end était ici déjà fourni.
          Ici j'ai donc réalisé le back end de l'application en Api rest avec Nodejs et Express.
          Les règles de sécurité Owasp ont été également mis en place afin de sécuriser
          l'application et la navigation de l'utilisateur.
          Ce projet a été réalisé dans le cadre du projet 6 d'openclassroom.`,
          url: "https://github.com/GERALD1983/Projet6_SoPekocko"
        },
        {
          id: 7,
          link: require("../assets/groupomania400.jpg"),
          link2: require("../assets/groupomania.jpg"),
          nom: "Réseau social",
          description: `Conception Backend et Frontend
          en base de donnee Mysql pour le projet Groupomania.
          Ceci est le dernier projet de ma formation où j'ai développé entièrement
          l'application d'A à Z du Back au Front.
          Ce site à été réalisé en Node Js Express avec une api rest et les
          règles de sécurité Owasp en Back-end.
          Pour ce qui du Front-END les techniques utilisés sont: boostrap HTML Css et Vue .js.
          Le projet Groupomania est un réseau social d'entreprise qui permet de partager
          des postes textes, vidéos, images.
          Un admin peut également modérer le site, l'utilisateur peut modifier ou supprimer son profil.`,
          url: "https://github.com/GERALD1983/Projet7_Reseau_social_entreprise"
        }
      ]
    };
  },
  mounted() {},
  created() {},

  methods: {
    afficherMasquer(image) {
      if (
        document.getElementById(`${image.id}`).style.display == "none" ||
        document.getElementById(`${image.id}`).style.display == ""
      ) {
        document.getElementById(`${image.id}`).style.display = "block";
        document.getElementById(
          `${image.id}`
        ).textContent = `${image.description}`;
      } else {
        document.getElementById(`${image.id}`).style.display = "none";
      }
    },
    clickUrl(image) {
      window.open(`${image.url}`);
    },
    toggleModale() {
      //
      // localStorage.setItem("imageMod", image.link);
      this.revele = !this.revele;
    },

    insertImage(image) {
      localStorage.setItem("imageMod", image.link2);
      document.getElementById("imageModale").src = `${image.link2}`;
      document.getElementById("imageModale").alt = `${image.nom}`;
    }

    /*
    clearDom(imageModale) {
      // document.getElementById(`${this.imageModale}`).removeAttribute("src");
      const name = `<img src="${imageModale}" />`;
      document.getElementById("modale").innerHTML = name; // affiche l'alerte
    },
  */
    /*
    exemple() {
      document.getElementById("exemple").style.visibility =
        document.getElementById("exemple").style.visibility == "visible"
          ? "hidden"
          : "visible";
    },
    */
  }
};
</script>

<style>
.hautImg {
  height: 370px;
}
.hautImgModale {
  height: auto;
  width: auto;
}
.hautDivColor {
  height: 40px;
  width: 100%;
}
.bordureCarte {
  border: 0.5mm ridge#a6b622ff !important;
}
.ombreCarte:hover {
  box-shadow: 0 0 0 0 #748928ff;
  animation: pulse 1.3s infinite;
}
.ombreCarte {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
.nonAfficher {
  display: none;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}

/* 
#exemple {
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;
}
#exemple div {
  width: 350px;
  height: 300px;
  margin: 100px auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border: 1px solid #666666;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  border: 3px solid #cccccc;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
*/
</style>
