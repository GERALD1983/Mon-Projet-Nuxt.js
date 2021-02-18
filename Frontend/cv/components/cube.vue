<template>
  <div class="container">
    <div class="cube">
      <div class=" face front flexName">JS</div>
      <div class="face back flexName">CSS</div>
      <div class="face right flexName">HTML</div>
      <div class="face left flexName">NODE</div>
      <div class="face top flexName">VUE</div>
      <div class="face bottom flexName">CODE</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cube3D"
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

.container {
  width: 100px;
  height: 100px;
  perspective: 1000px;
  margin: 100px auto 100px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 4s infinite linear;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 0.5px solid #909090;
}

.top {
  background: #886526;
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: #886526;

  transform: rotateX(-90deg) translateZ(50px);
}

.right {
  background: #886526;

  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: #886526;

  transform: rotateY(-90deg) translateZ(50px);
}

.front {
  background: #886526;

  transform: rotateX(0deg) translateZ(50px);
}
.back {
  background: #886526;

  transform: rotateX(-180deg) translateZ(50px);
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
