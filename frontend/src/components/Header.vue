<template>
  <div class="wrapper">
    <div class="top">
      <p>FREE Ground Shipping on All Orders & Extended Returns.</p>
      <p class="test">Help</p>
      <p>Find Store</p>
    </div>

    <div class="navbar">
      <ul class="nav-left">
        <li>skateboard</li>
        <li>
          the gonz
          <img
            src="@/assets/cutelike.svg"
            alt="cutelike"
            style="width: 27.43px;height: 23.72px;"
          />
        </li>
        <li>wheels</li>
        <div class="logo">
          <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <li class="right">news</li>
        <li class="right1">shop</li>
      </ul>
      <div class="nav-right">
        <input type="text" class="search" />
        <img src="@/assets/search.svg" class="search" alt="search" />
        <img src="@/assets/like.svg" class="like" alt="favorites" />
        <img src="@/assets/user.svg" class="user" alt="user" />
        <img src="@/assets/cart.svg" class="cart" alt="cart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  margin-left: 980px;
}
.wrapper {
  margin: auto;
  max-width: 1440px;
}
.top {
  display: flex;
  align-items: center;
  max-height: 34px;
  margin-top: 10px;
  background-color: #2b2b2b;
}

p {
  font-family: Ropa Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.03em;
  color: #f1f1f1;

  margin-left: 50px;
}

.navbar {
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
  height: 89px;
}
ul.nav-left {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  gap: 50px;
  align-items: center;
  padding-left: 190px;
}
.nav-left > li {
  font-family: Ropa Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 24px;
  color: #2b2b2b;
}
.logo > img {
  margin-top: -70px;
  width: 81px;
  height: 98.31px;
  left: 50%;
  right: 50%;
  position: relative;
}
.nav-right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-right: 40px;
  gap: 10px;
}
li.right {
  margin-left: 100px;
}
input {
  width: 148px;
  height: 21px;
  border: none;
}
</style>
