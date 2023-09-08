<template>
  <div class=" flexName">
    <div class="container">
      <div class="cube fontCubeLogo">
        <div class=" face front flexName">JS</div>
        <div class="face back flexName">CSS</div>
        <div class="face right flexName">HTML</div>
        <div class="face left flexName">NODE</div>
        <div class="face top flexName">VUE</div>
        <div class="face bottom flexName">CODE</div>
      </div>
    </div>
    <div class=" ml-4">
      <div>
        <h4>GF</h4>
      </div>
      <div>
        Tech
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.flexName {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.fontCubeLogo {
  font-size: 12px;
}

.container {
  width: 35px;
  height: 35px;
  perspective: 300px;
  margin: 0px 0px 0px 20px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 5s infinite linear;
}

.face {
  position: absolute;
  width: 35px;
  height: 35px;
}

.top {
  background: #886526;
  transform: rotateX(90deg) translateZ(25px);
}
.bottom {
  background: #886526;

  transform: rotateX(-90deg) translateZ(25px);
}

.right {
  background: #886526;

  transform: rotateY(90deg) translateZ(25px);
}
.left {
  background: #886526;

  transform: rotateY(-90deg) translateZ(25px);
}

.front {
  background: #886526;

  transform: rotateX(0deg) translateZ(25px);
}
.back {
  background: #886526;

  transform: rotateX(-180deg) translateZ(25px);
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
