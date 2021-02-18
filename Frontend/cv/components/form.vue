<template>
  <div>
    <b-form @submit.prevent="submit" @reset="onReset" v-if="show">
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="invisible largInput"
          id="boxC"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Enter email"
            required
            v-model.trim="$v.email.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.email.required && submitStatus === 'ERROR'"
          >
            Field is required
          </div>
          <div class="error" v-if="!$v.email.email">
            écrire un email valide ex: marty@hotmail.com
          </div>
          <div class="error" v-if="!$v.email.maxLength">
            .Max 70 nrbs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class=" invisible largInput"
          id="boxE"
          label="Your Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            placeholder="Enter name"
            required
            v-model.trim="$v.nom.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.nom.required && submitStatus === 'ERROR'"
          >
            Field is required
          </div>
          <div class="error" v-if="!$v.nom.strongNom">
            Ecrire un nom sans charactére spéciaux .Max 70 letrs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="invisible largInput"
          id="boxD"
          label="Message:"
          label-for="input-4"
        >
          <b-form-textarea
            id="input-4"
            v-model.trim="$v.message.$model"
            type="text-area"
            placeholder="Enter Message"
            required
          ></b-form-textarea>
          <div
            class="error"
            v-if="!$v.message.required && submitStatus === 'ERROR'"
          >
            Field is required
          </div>
          <div class="error" v-if="!$v.message.strongMessage">
            Ecrire un message sans charactére spéciaux .Max 250 letrs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class="invisible largInput"
          id="boxF"
          label="Your Phone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model.trim="$v.phone.$model"
            placeholder="Enter phone"
            required
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.phone.required && submitStatus === 'ERROR'"
          >
            Field is required
          </div>
          <div class="error" v-if="!$v.phone.numeric">
            Ecrire des chiffres sans espace sans charactére spéciaux Merci!
          </div>
          <div class="error" v-if="!$v.phone.maxLength">
            .Max 20 nrbs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-around">
        <b-button
          id="res"
          class="lienSouris cursorNone bgFour btnReset invisible"
          type="reset"
          >Reset</b-button
        >
        <b-button
          id="sub"
          class="lienSouris cursorNone invisible text-secondary colorSubmit"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
          >Submit</b-button
        >
      </div>
      <div>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR SERVEUR'">
          erreur serveur:Le mot de passe ou l'email ne correponde pas OU server
          HS !
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

        <br />
        <br />
      </div>
    </b-form>
    <b-card class="mt-3 displayNone" header="Form Data Result">
      <pre class="m-0">{{ email }} <br>
        {{ nom }} <br> {{ message }} <br> {{ phone }} </pre>
    </b-card>
  </div>
</template>

<script>
import { required, email, maxLength, numeric } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "formulaire",
  data() {
    return {
      email: "",
      nom: "",
      message: "",
      phone: "",

      client: [],
      show: true,
      submitStatus: null
    };
  },
  validations: {
    email: { required, email, maxLength: 70 },
    nom: {
      required,
      strongNom(nom) {
        return (
          /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            nom
          ) && nom.length <= 70
        );
      }
    },
    message: {
      required,

      strongMessage(message) {
        return (
          // regex espace chiffre lettre seulement
          ///^[a-zA-Z0-9_ ]*$/.test(message) && // checks for a-z

          // regex accepte espace accent sans charactéeres spéciaux
          /^[a-zA-Z0-9'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            message
          ) && message.length <= 250
        );
      }
    },
    phone: { required, numeric, maxLength: 20 }
  },
  mounted() {
    const boxC = document.getElementById("boxC");
    const boxD = document.getElementById("boxD");
    const boxE = document.getElementById("boxE");
    const boxF = document.getElementById("boxF");
    const sub = document.getElementById("sub");
    const res = document.getElementById("res");

    window.addEventListener("scroll", () => {
      let scrollValue =
        (window.innerHeight + window.scrollY) / document.body.offsetHeight;

      if (scrollValue > 0.94) {
        boxC.classList.remove("invisible");
        boxC.classList.add("boxC");

        boxD.classList.remove("invisible");
        boxD.classList.add("boxD");

        boxE.classList.remove("invisible");
        boxE.classList.add("boxE");

        boxF.classList.remove("invisible");
        boxF.classList.add("boxF");

        sub.classList.remove("invisible");
        sub.classList.add("para2");

        res.classList.remove("invisible");
        res.classList.add("para2");
      }
    });
  },
  /*
  async created() {
    axios
      .get("")
      .then(response => ((this.client = response.data), console.log(response)))
      .catch(error => console.log(error));
  },
  */
  methods: {
    submit() {
      console.log("requete ver serveur!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("A echouer informations non complete!");
      } else {
        // do your submit logic here
        console.log("En attente");
        this.submitStatus = "PENDING";

        axios
          .post("", {
            email: this.email,
            nom: this.nom,
            message: this.message,
            phone: this.phone
          })
          .then(response => {
            (this.submitStatus = "OK"), console.log(response);
            this.$router.go("/Acceuil");
          })
          .catch(
            error => ((this.submitStatus = "ERROR SERVEUR"), console.log(error))
          );
      }
    },

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.email, this.nom, this.message, this.phone));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.nom = "";
      this.message = "";
      this.phone = "";

      // Trick to reset/clear native browser form validation state
      /*
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      */
    }
  }
};
</script>
<style>
.btnReset:hover {
  background-color: rgb(206, 46, 46) !important;
}
.boxC {
  animation: 1s linear boxC;
}
@keyframes boxC {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxD {
  animation: 1s linear boxD;
}
@keyframes boxD {
  0% {
    opacity: 0;
    transform: translateX(80%);
  }
  100% {
    opacity: 1;
  }
}
.boxE {
  animation: 1s linear boxE;
}
@keyframes boxE {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxF {
  animation: 1s linear boxF;
}
@keyframes boxF {
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
  }
}
</style>
