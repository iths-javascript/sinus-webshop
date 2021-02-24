<template>
  <main class="grid-container">
    <section class="img">
      <h1>
        <strong>A Great big Thank you!</strong>
        <h3>For shopping with Sinus Webshop</h3>
      </h1>
    </section>
    <section class="text-first">
      <h1 class="text-">
        Your order is beeing processed, go out and skate while you wait
      </h1>
      <p class="column">
        Skateboarding is an action sport that involves riding and performing
        tricks using a skateboard, as well as a recreational activity, an art
        form, an entertainment industry job, and a method of
        transportation. Skateboarding has been shaped and influenced by
        many skateboarders throughout the years. A 2009 report found that the
        skateboarding market is worth an estimated $4.8 billion in annual
        revenue, with 11.08 million active skateboarders in the world. In
        2016, it was announced that skateboarding will be represented at the
        2020 Summer Olympics in Tokyo, for both male and female teams. Since
        the 1970s, skateparks have been constructed specifically for use by
        skateboarders, freestyle BMXers, aggressive skaters, and very recently,
        scooters.[5] However, skateboarding has become controversial in areas in
        which the activity, although illegal, has damaged curbs, stoneworks,
        steps, benches, plazas, and parks.
        
      </p>
      <h3>Sources-Wikipedia</h3>

    </section>
  </main>
</template>
<script>
// import Nav from '../components/Nav.vue'
export default {
  //   components: { Nav },
  name: "OrderDone",
};
</script>
<style lang="scss" scoped>
.grid-container {
  .img {
    background: url("../assets/skate-hero-1.jpg");
    background-size: cover;
    background-position: center;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    width: auto;
    h1 {
      font-size: 3rem;
      color: white;
      text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
    }
  }
  .text-first {
    margin-top: 1rem;
    text-align: left;
  }
  .column {
    font-weight: bold;
    color: rgb(122, 122, 122);
    float: left;
    font-size: 22px;
    text-align: left;
    margin-top: 1rem;
  }
  .btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    height: 40px;
    width: 150px;
    font-size: 18px;
  }
}
</style>
