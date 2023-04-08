<template>
  <section>
    <header>
      <h1 class="logo">{{ comic?.title }}</h1>
          <div class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5"/>
            <label for="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4">
            <label for="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3">
            <label for="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2">
            <label for="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1">
            <label for="radio5">★</label> 
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
import { ref, onMounted } from "vue";
const comic = ref(null);

onMounted(async () => {
  const response = await fetch("http://localhost:3000/");
  comic.value = await response.json();
})
</script>

<style scoped>
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
  text-transform: uppercase; /*modifica el texto de mayuscula o miniscula*/
  letter-spacing: 3px; /*espacio entre las letras*/
  font-weight: 700;
  animation: slideLeft 0.5s ease-in-out forwards;
  cursor: pointer;
}
#form label {
  font-size: 200px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
  cursor: pointer;
}

input[type="radio"]:checked ~ label {
  color: orange;
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
