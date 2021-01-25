<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay"></div>
    <div class="modale card">
      <div
        @click="toggleModale(), clearImage()"
        class="btn-modale btn btn-danger"
      >
        X
      </div>
      <h2>fenetre modale</h2>
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
