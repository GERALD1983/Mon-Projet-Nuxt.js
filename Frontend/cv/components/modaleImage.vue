<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay"></div>
    <div class="tailleModaleProjMob modale card">
      <div
        @click="toggleModale(), clearImage()"
        class="cursorNone btn-modale btn btn-dark"
      >
        X
      </div>
      <h2>Maquette</h2>
      <div>
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modale",
  data() {
    return {};
  },
  props: ["revele", "toggleModale"],
  methods: {
    clearImage() {
      localStorage.clear("imageMod");
    }
  }
};
</script>

<style>
.bloc-modale {
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.modale {
  overflow: auto;
  height: 90vh;
  width: 100vh;
  background: white;
  position: fixed;
  padding: 50px;
}
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
