<template>
  <div>
    <div class="recommendations">
      <div class="recommendations-left">
        <div class="skateboard">
          <img class="skateboard-img" src="../assets/skeatboard.png" />
          <p class="skateboard-text">#Skateboard</p>
          <button class="skateboard-button" @click="fetchImages">
            Shop now
          </button>
        </div>
      </div>
      <div class="recommendations-right">
        <div class="t-shirts">
          <img class="t-shirts-img" src="../assets/t-shirt.jpg" />
          <p class="t-shirt-text">#T-Shirt</p>
          <button class="t-shirts-button" @click="fetchImages">
            Shop now
          </button>
        </div>
        <div class="sneakers">
          <img class="sneakers-img" src="../assets/sneakers.jpg" />
          <p class="sneaker-text">#Sneakers</p>
          <button class="sneakers-button" @click="fetchImages">
            Shop now
          </button>
        </div>
      </div>
    </div>
    <div class="mid-section">
      <div class="mid-section-left">
        <div class="wheels">
          <img class="wheels-img" src="../assets/wheels.jpg" />
          <p class="wheels-text">#Wheels</p>
          <button class="wheels-button" @click="fetchImages">Shop now</button>
        </div>
      </div>
      <div class="mid-section-right"></div>
    </div>
    <div class="mid-section2"></div>
    <div class="mid-section3"></div>
  </div>
</template>

<script>
import * as API from "../api/api";

export default {
  name:'Home',
  methods: {
    async fetchImages() {
      const data = await API.getProducts();
      console.log(data);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Schoolbell&display=swap");

/* ----------------------------------------------------- */
/* -------------- Recommendations Section -------------- */
/* ----------------------------------------------------- */

.recommendations {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cbe9ef;
  padding: 5rem 0;
}


.recommendations-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #cbe9ef;
}

.recommendations-right {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 36px;
  width: 50%;
  background-color: #cbe9ef;
  justify-content: space-evenly;
  align-items: center;
}

/* -------------- Skateboard Shop Now button -------------- */

.skateboard-text {
  font-size: 36px;
  color: white;
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.3rem;
  position: absolute;
  top: 83%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-transform: uppercase;
}

.skateboard-button {
  cursor: pointer;
  position: absolute;
  top: 90%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px 0px #2b2b2b;
}

.skateboard-button:before {
  content: "";
  position: absolute;
  background: #383736;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.14s ease-in;
}

.skateboard-button:hover {
  color: whitesmoke;
}

.skateboard-button:hover:before {
  top: 0;
}

/* -------------- t-shirts Shop Now button -------------- */

.t-shirt-text {
  font-size: 36px;
  color: white;
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.3rem;
  position: absolute;
  top: 65%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-transform: uppercase;
}

.t-shirts-button {
  cursor: pointer;
  position: absolute;
  top: 80%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px 0px #2b2b2b;
}

.t-shirts-button:before {
  content: "";
  position: absolute;
  background: #383736;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.14s ease-in;
}

.t-shirts-button:hover {
  color: whitesmoke;
}

.t-shirts-button:hover:before {
  top: 0;
}

/*-------------- Sneakers Shop Now button -------------- */

.sneaker-text {
  font-size: 36px;
  color: white;
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.3rem;
  position: absolute;
  top: 65%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-transform: uppercase;
}

.sneakers-button {
  cursor: pointer;
  position: absolute;
  top: 80%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px 0px #2b2b2b;
}

.sneakers-button:before {
  content: "";
  position: absolute;
  background: #383736;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.14s ease-in;
}

.sneakers-button:hover {
  color: whitesmoke;
}

.sneakers-button:hover:before {
  top: 0;
}

/* -------------- T-Shirts card -------------- */

.t-shirts-img {
  box-shadow: -40px 0 0 -20px #f5adb8;
  width: 499px;
  height: 319px;
}

.t-shirts {
  position: relative;
}

/* -------------- Sneakers card -------------- */

.sneakers-img {
  box-shadow: -40px 0 0 -20px #aecea6;
  width: 499px;
  height: 319px;
}

.sneakers {
  position: relative;
}

/* -------------- Skateboard card -------------- */

.skateboard-img {
  box-shadow: -40px 0 0 -20px #5e60b3;
}

.skateboard {
  position: relative;
}

/* ----------------------------------------- */
/* -------------- Mid Section -------------- */
/* ----------------------------------------- */

.mid-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 36px;
  justify-content: center;
  background-color: #ffebd3;
  width: 100%;
  height: 533px;
}

.mid-section-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #ffebd3;
}

.mid-section-right {
  display: flex;
  width: 50%;
  background-color: #ffebd3;
  justify-content: space-evenly;
  align-items: center;
}

/*-------------- Wheels Shop Now button -------------- */

.wheels-text {
  font-size: 36px;
  color: white;
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.3rem;
  position: absolute;
  top: 83%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-transform: uppercase;
}

.wheels-button {
  cursor: pointer;
  position: absolute;
  top: 90%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px 0px #2b2b2b;
}

.wheels-button:before {
  content: "";
  position: absolute;
  background: #383736;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.14s ease-in;
}

.wheels-button:hover {
  color: whitesmoke;
}

.wheels-button:hover:before {
  top: 0;
}

/* -------------- Wheels Image -------------- */

.wheels-img {
  display: flex;
  box-shadow: -40px 0 0 -20px #f5adb8;
  width: 524px;
}

.wheels {
  position: relative;
}

/* ------------------------------------------- */
/* -------------- Mid Section 2 -------------- */
/* ------------------------------------------- */

.mid-section2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: white;
  width: 100%;
  height: 533px;
}

/* ------------------------------------------- */
/* -------------- Mid Section 3 -------------- */
/* ------------------------------------------- */

.mid-section3 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #ffd2d2;
  width: 100%;
  height: 533px;
}
</style>
