<template>
  <div>
    <div class="recommendations">
      <div class="recommendations-left">
        <div class="skateboard">
          <img class="skateboard-img" src="../assets/skeatboard.png" />
          <p class="skateboard-text">#Skateboard</p>
          <button class="skateboard-button" @click="goToProduct">
            Shop now
          </button>
        </div>
      </div>
      <div class="recommendations-right">
        <div class="t-shirts">
          <img class="t-shirts-img" src="../assets/t-shirt.jpg" />
          <p class="t-shirt-text">#T-Shirt</p>
          <button class="t-shirts-button" @click="goToProduct">
            Shop now
          </button>
        </div>
        <div class="sneakers">
          <img class="sneakers-img" src="../assets/sneakers.jpg" />
          <p class="sneaker-text">#Sneakers</p>
          <button class="sneakers-button" @click="goToProduct">
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
          <button class="wheels-button" @click="goToProduct">Shop now</button>
        </div>
      </div>
      <div class="mid-section-right">
        <div class="mid-section-right-top">
          <h1 class="title">reparation?</h1>
          <button class="button-home" @click="goToProduct">go it</button>
        </div>
        <img src="../assets/illustration-reparation.svg" alt="reparation" />
        <img src="../assets/illustration-sale.svg" alt="reparation" />
        <div class="mid-section-right-bottom">
          <h1 class="title">Sale?</h1>
          <button class="button-home" @click="goToProduct">go it</button>
        </div>
      </div>
    </div>

    <div class="mid-section2">
      <img class="img-special-section" src="../assets/background-special-section.svg" alt=""/>

      <img src="../assets/section-the-gonz-skate.png" alt="" />
      <div class="special-edition">
        <img src="../assets/special-section.svg" alt="" />
        <h1 class="title">limited edition</h1>
        <img src="../assets/stars.svg" alt="" />
        <h1 class="title">#the-gonz</h1>
        <button class="button-home" @click="goToProduct">shop now</button>
      </div>
    </div>
    <div class="mid-section3">
      <h1 class="title">
        #SinusFreeStyle
        <img class="heart-insta" src="../assets/big-heart.svg" alt="" />
      </h1>
      <p class="insta-user">@sinuskate</p>
      <div class="mid-section-insta">
        <img class="img-insta first-img" src="../assets/insta-1.jpg" alt="" />
        <img class="img-insta sec-img" src="../assets/insta-2.jpg" alt="" />
        <img class="img-insta third-img" src="../assets/insta-3.jpg" alt="" />
        <img class="img-insta four-img" src="../assets/insta-4.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import * as API from "../api/api";

export default {
  name: "Home",
  methods: {
    goToProduct() {
      this.$router.push("/product");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Schoolbell&display=swap");

/* ----------------------------------------------------- */
/* -------------- Recommendations Section -------------- */
/* ----------------------------------------------------- */
.button-home {
  cursor: pointer;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  background-color: whitesmoke;
  color: #2b2b2b;
  border-style: none;
  box-shadow: -6px 6px #2b2b2b;
  margin: 0rem;
}

.button-home:hover {
  background-color: #5e60b3;
  color: whitesmoke;
}

.title {
  margin: 0rem;
  font-family: "Schoolbell", cursive;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  color: #2b2b2b;
  letter-spacing: 0.4rem;
}

.recommendations {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cbe9ef;
  padding: 5% 2%;
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

.skateboard-button,
.t-shirts-button,
.sneakers-button {
  cursor: pointer;
  position: absolute;
  top: 90%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px #2b2b2b;
  border-style: none;
  background-color: whitesmoke;
  color: #2b2b2b;
}

.skateboard-button:hover {
  background-color: #5e60b3;
  color: whitesmoke;
}
.t-shirts-button:hover {
  background-color: #5e60b3;
  color: whitesmoke;
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
  background: #5e60b3;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
}

.t-shirts-button:hover {
  background-color: #5e60b3;
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
  background: #5e60b3;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  /* -webkit-transition: top 0.14s ease-in; */
}

.sneakers-button:hover {
  background-color: #5e60b3;
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
  justify-content: center;
  background-color: #ffebd3;
  width: 100%;
  height: auto;
  padding: 2%;
}

.mid-section-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mid-section-right {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  /* background-color: #ffebd3; */
  /* justify-content: space-evenly; */
  justify-content: center;
  align-items: center;
}

.mid-section-right-top,
.mid-section-right-bottom {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
}

/*-------------- Wheels Shop Now button -------------- */

.wheels-text {
  font-size: 36px;
  color: white;
  font-family: "Schoolbell", cursive;
  letter-spacing: 0.3rem;
  position: absolute;
  top: 70%;
  transform: translate(-50%, -50%);
  left: 50%;
  text-transform: uppercase;
}

.wheels-button {
  cursor: pointer;
  position: absolute;
  top: 85%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-family: Ropa Sans;
  font-size: 18px;
  width: 144px;
  height: 40px;
  box-shadow: -6px 6px 0px #2b2b2b;
  border-style: none;
  background-color: whitesmoke;
  color: #2b2b2b;
}

.wheels-button:before {
  content: "";
  position: absolute;
  background: #5e60b3;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  /* -webkit-transition: top 0.14s ease-in; */
}

.wheels-button:hover {
  background-color: #5e60b3;
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
  grid-template-columns: repeat(3, 1fr);
  /* background-image: url("../assets/background-special-section.svg");
  background-repeat: no-repeat; */
  padding: 4% 2%;
  grid-template-rows: 1fr;
  /* grid-column-gap: 0px;
  grid-row-gap: 0px; */
  background-color: white;
  width: 100%;
  height: auto;
}

.special-edition {
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  /* background-image: url("../assets/special-section.svg");
  background-repeat: no-repeat; */
}
.img-special-section {
  width: 100%;
  margin-top: 10%;
}
/* ------------------------------------------- */
/* -------------- Mid Section 3 -------------- */
/* ------------------------------------------- */

.mid-section3 {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: #ffd2d2;
  padding: 3% 4% 5%;
  width: 100%;
  height: auto;
}

.heart-insta {
  width: 10%;
  transform: rotate(25deg);
}

.insta-user {
  font-size: 1.5rem;
}

.mid-section-insta {
  width: 85%;
  padding-top: 3rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
}

.img-insta {
  width: 80%;
}

.first-img {
  box-shadow: -10px 10px #5e60b3;
}

.sec-img {
  box-shadow: -10px -10px #f46d69;
}

.third-img {
  box-shadow: 10px 10px #cbe9ef;
}

.four-img {
  box-shadow: 10px -10px #b2d1a8;
}
</style>
