<template>
  <div class=" d-flex justify-content-center ">
    <div
      class="col-md-8 bgTree bordureBackCarte py-5   stopMargPad d-flex justify-content-around align-items-center "
    >
      <div class="py-5  d-flex flex-wrap justify-content-around">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="aos-item"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <div class="carteMobile my-5 carteSize bordureCarte ombreCarte card ">
            <div @click="insertImage(image)">
              <img
                width="325px"
                height="370px"
                @click="toggleModale()"
                class="mobileHautImg imageCarte hautImg card-img-top"
                :src="image.link"
                :alt="'Projet de développement site internet : ' + image.nom"
              />
            </div>

            <div class="bgSecondary hautDivColor"></div>
            <div class="card-body">
              <h5 class="card-title">{{ image.nom }}</h5>

              <button
                @click="afficherMasquer(image)"
                class=" cursorNone btn bgTree"
              >
                Détails
              </button>

              <p :id="image.id" class="nonAfficher pt-3 card-text"></p>

              <button
                class=" cursorNone  ml-3 btn btnCarte btn-secondary"
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
          description: `Cv Responsive. Ceci est un site fait entièrement en Html et Css il est optimiser
           pour mobile. Celui-ci est une intégration d'aprés une maquette fournit qui à été reproduit
            à la lettre et au graphisme prés. Celui-ci récapitule aussi mon parcours professionnel fictif
             dans le domaine du web. Vous pouvez en voir un aperçu sur mon GitHub page ici :`,
          url: "https://gerald1983.github.io/moncv/"
        },
        {
          id: 2,
          link: require("../assets/resto400.jpg"),
          link2: require("../assets/resto.jpg"),
          nom: "Oh My Food",
          description: `Projet Oh My Food restaurant.
          Ceci est un rendu d'une maquette faite en HTML CSS et du Préprocesseur Saas.
          Une reproduction et version MVP de réservation de restaurants.
          Il dispose de petites animations et de l'utilisation de police en conformité avec la maquette
          fournit et des spécifications demandées par le projet.
          Vous découvrirez l'intégralité de mon travail à cette adresse Git Page: `,
          url: "https://gerald1983.github.io/PROJET3/"
        },
        {
          id: 3,
          link: require("../assets/site4001.jpg"),
          link2: require("../assets/site1.jpg"),
          nom: "Projet Site Perso",
          description: `Mon portfolio cette maquette a été entièrement réalisée par mes soins
          de sa Conception graphique ,jusqu'à son développement.
          Il a été conçu en Vue.js avec le Framework Nuxt.js ,
          un Backend a également été réaliser en Node.js et Express avec une base de données SQL sécurisée.`,
          url: "#"
        },
        {
          id: 4,
          link: require("../assets/chouette400.jpg"),
          link2: require("../assets/agence.jpg"),
          nom: "Agence Web",
          description: `Amélioration site la chouette agence, SEO optimisation.
          Ceci est le site chouette agence après optimisation des SEO des graphismes
          des différentes erreurs et Bug sur la plateforme.
          Ceci a été revu grâce à des outils comme Gt Metrix ou bien d'autres applications en ligne.
          Le code a été revu et accompagné d'une liste de recommandations avant son optimisation
          et d'un rapport après la mise en oeuvre de celle-ci.
          Vous pouvez découvrir l'application revue à cette adresse Git Hub Page :`,
          url: "https://gerald1983.github.io/chouette-modifier/"
        },
        {
          id: 5,
          link: require("../assets/orinoco400.jpg"),
          link2: require("../assets/orinoco2.jpg"),
          nom: "E-Commerce Orinoco",
          description: `Site E-commerce Orinoco version MVP.
          Ceci est l'application e-commerce front-end réaliser par mes soins à l'aide
          du Framework Bootstrap et en JavaScript Vanilla.
          Le code est commenté et utilise des promises en requête Ajax sous forme de fonction.
          Le Backend était fourni ainsi que les informations et les différentes données affichaient en front-end.`,
          url: "https://github.com/GERALD1983/FrontEndP5"
        },
        {
          id: 6,
          link: require("../assets/sauce400.jpg"),
          link2: require("../assets/sauce400.jpg"),
          nom: "Critiques Gastronomique",
          description: `Backend API d'ajout de vos sauces, Likes et DisLikes.
          Ceci est une application de Critiques Gastronomique pour une agence de sauces Sopekocko
          le côté front-end était ici déjà fourni.
          Ici j'ai donc réalisé le Backend de l'application en Api Rest avec Nodejs et Express.
          Les règles de sécurité Owasp ont été également mis en place afin de sécuriser
          l'application et la navigation de l'utilisateur.`,
          url: "https://github.com/GERALD1983/Projet6_SoPekocko"
        },
        {
          id: 7,
          link: require("../assets/groupomania400.jpg"),
          link2: require("../assets/groupomania.jpg"),
          nom: "Réseau Social",
          description: `Conception Backend et Frontend en base de données Mysql pour le projet Groupomania.
          Développé entièrement de A à Z du Back au Front.
          Ce site a été réalisé en Node Js Express avec une Api Rest et les
          règles de sécurité Owasp en Backend.
          Pour ce qui du Frontend les techniques utilisées sont: Boostrap, Html, Css et Vue.js.
          Le projet Groupomania est un réseau social d'entreprise qui permet de partager
          des postes textes, vidéos, images.
          Un Admin peut également modérer le site, l'utilisateur peut modifier ou supprimer son profil.`,
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
  }
};
</script>

<style>
.carteSize {
  width: 375px;
  min-height: 520px;
}
.bordureCarte {
  filter: grayscale(100%);
  transition: 2s;
}
.bordureCarte:hover {
  filter: none;
}
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
  border: 0.5mm ridge#ffdea4 !important;
}
.ombreCarte:hover {
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
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
</style>
