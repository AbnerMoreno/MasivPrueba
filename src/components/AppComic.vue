<template>
  <section>
    <header>
      <h1 class="logo">{{ comic?.title }}</h1>
      <div class="clasificacion">
        <h1 v-show="disguise">{{ rating }}</h1>
        <vue3starRatings
          v-model="rating"
          controlSize="20"
          controlBg="#ffffff"
          starSize="20"
          controlColor="#050505"
        />
      </div>
    </header>
    <div class="contenedor">
      <div class="caja">
        <div class="img">
          <img :src="comic?.img" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import vue3starRatings from "vue3-star-ratings";

const comic = ref(null);
const rating = ref(0);

onMounted(async () => {
  const response = await fetch("http://localhost:3000/");
  comic.value = await response.json();
});

const disguise = computed(() => {
  return rating.value > 0;
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
section {
  padding: 100px;
  height: 100vh;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  letter-spacing: 10px;
  font-weight: 800;
}
header .logo {
  position: relative;
  font-size: 20px;
  color: #111;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  animation: slideLeft 0.5s ease-in-out forwards;
  cursor: pointer;
}
.clasificacion {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
}
.contenedor {
  position: absolute;
  display: flex;
  justify-content: center;
  height: calc(100% - 200px);
  width: calc(100% - 200px);
  z-index: 100;
}
.contenedor .caja {
  cursor: pointer;
  animation: slideRight 1.5s ease-in-out forwards;
  animation-delay: calc(0.2s * var(--i));
}
.contenedor .img img {
  width: 100%;
  height: 500px;
  object-fit: contain;
  overflow: hidden;
}

.vue3-star-ratings button {
  margin: 0px 10px 0px 10px !important;
}

.vue3-star-ratings__wrapper {
  display: block;
  margin: 0 !important;
  text-align: center;
  padding: 0 !important;
}

/* ANIMACIONES */

@keyframes slideRight {
  0% {
    transform: translate(150px);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}
@keyframes slideLeft {
  0% {
    transform: translate(-150px);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}
</style>
