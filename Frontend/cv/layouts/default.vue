<template>
  <div id="app" class="bg-secondary ">
    <div
      id="nav"
      class="mobileNavProjet d-flex justify-content-between align-items-center"
    >
      <div class="mb-3">
        <img
          width="90px"
          height="60px"
          class="bg-light bordureLogo"
          src="../assets/gf3.png"
          alt="logo développeur gérald ferron"
        />
      </div>
      <div class="mobileNavProjet col-lg-5 px-0 d-flex justify-content-around">
        <div
          @click="toProject"
          role="button"
          class="ombreNav col-md-4 col-lg-5 bg-light bordureLogo d-flex
        align-items-center justify-content-center"
        >
          <h4 class="my-1 ">Mes projets</h4>
        </div>
        <div
          @click="toFoot"
          role="button"
          class="ombreNav col-md-4 col-lg-5 bg-light bordureLogo d-flex
        align-items-center justify-content-center"
        >
          <h4 class="my-1 ">
            Contact
          </h4>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import jump from "jump.js";
export default {
  mounted() {},
  methods: {
    toFoot() {
      // window.scrollTo(0, 400);
      jump(".ancreForm", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    },
    toProject() {
      // window.scrollTo(0, 400);
      jump("#titreProjet", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    }
  }
};
</script>
<style>
.ombreNav:hover {
  /* box-shadow: 0 0 0 0 #748928ff; */
  box-shadow: 0 0 0 0 rgb(35, 173, 162);
  animation: pulse 1.3s infinite;
  background: #9e9d9d !important;
  color: white !important;
}
.bordureLogo {
  border-radius: 0.5em;
  border: 1mm ridge#a6b622ff;
}
html::-webkit-scrollbar {
  background-color: #6c757d;
}
html::-webkit-scrollbar-thumb {
  background: #aca5a5;
}
#app {
  font-family: /*Avenir,  Helvetica, Arial, sans-serif*/ "Times New Roman",
    Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: white;
}

/*
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
*/
</style>
