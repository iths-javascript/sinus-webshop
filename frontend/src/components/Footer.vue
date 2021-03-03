<template>
  <div class="footer">
    <div class="container-footer">
      <div class="link">
        <p>HELP</p>
        <div class="line help"></div>
        <ul>
          <li>Customer service</li>
          <li>My account</li>
          <li>Find store</li>
          <li>Privacy & Security</li>
        </ul>
      </div>

      <div class="link">
        <p>TERM AND CONDITIONS</p>
        <div class="line term"></div>
        <ul>
          <li>Delivery & returns</li>
          <li>Payment & Delivery</li>
          <li>Return & refund</li>
        </ul>
      </div>

      <div class="link">
        <p>ABOUT US</p>
        <div class="line about"></div>
        <ul>
          <li>About SINUS</li>
          <li>Sustainability</li>
          <li>Press</li>
        </ul>
      </div>

      <div class="link">
        <p>CONTACT</p>
        <div class="line contact"></div>
        <ul>
          <li>Contact us</li>
          <li>Find store</li>
          <li>Work at Sinus</li>
        </ul>
      </div>
    </div>
    <div class="icons">
      <img src="../assets/social-links.svg" alt="" />
    </div>
    <img @click="goToHome" src="../assets/logo-footer.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
li {
  list-style: none;
  text-align: justify;
  margin-top: 1rem;
}
.footer {
  position: relative;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  color: whitesmoke;
  font-size: 18px;
  height: 500px;
  background-color: #5e60eb;
  /* background-image: url(../assets/footer.svg); */
  /* background-repeat: no-repeat; */
}

.container-footer {
  width: 100%;
  padding: 8rem 6rem 2rem 12rem;
  text-align: justify;
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(4, auto);
}

.line {
  border-top: 2px solid whitesmoke;
  padding: 0;
  margin: 0.5rem 0;
}

.help {
  max-width: 2.3rem;
}

.term {
  max-width: 10.2rem;
}

.about {
  max-width: 4.5rem;
}

.contact {
  max-width: 4rem;
}

.icons {
  margin-bottom: 3rem;
}
</style>
