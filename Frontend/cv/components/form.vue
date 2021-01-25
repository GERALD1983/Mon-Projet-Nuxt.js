<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="invisible largInput"
          id="boxC"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class=" invisible largInput"
          id="boxE"
          label="Your Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
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
            v-model="form.message"
            type="text-area"
            placeholder="Enter Message"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          class="invisible largInput"
          id="boxF"
          label="Your Phone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.tel"
            placeholder="Enter phone"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-around">
        <b-button id="sub" class="invisible colorSubmit" type="submit"
          >Submit</b-button
        >
        <b-button id="res" class="invisible" type="reset" variant="danger"
          >Reset</b-button
        >
      </div>
    </b-form>
    <b-card class="mt-3 displayNone" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "formulaire",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
        tel: ""
      },
      show: true
    };
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
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      this.form.tel = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style>
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
