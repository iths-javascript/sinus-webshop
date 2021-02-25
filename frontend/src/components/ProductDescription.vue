<template>
<div id="productDescription">
    <div class="productPhoto"></div>
    <div class="description">Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Ullam vel commodi 
        fugiat tempora eum laborum quisquam explicabo
     officia nobis? Ipsum molestias ipsa nemo natus tenetur! Eligendi distinctio ex beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laudantium accusantium. Sunt neque natus qui incidunt minima atque earum? Facilis vel excepturi quae nihil magni fugiat, pariatur ad tempore consectetur.</div>
   <div class="price">Price</div>
    <div class="size">
        <p> Size </p>
        <button id="small">S</button>
        <button id="medium">M</button>
        <button id="large">L</button>
        <div class="Review"></div>
    </div>
    <div class="review">
        <p> Review</p>
        <p>1 2 3 4 5 </p>
    </div>

    <button class="add">Add to cart</button>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
#productDescription{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 550px;
    width: 550px;
    background-color: wheat;

}
.description{
    font-style: italic;
   
}
.productPhoto{
    height: 200px;
    width: 200px;
    background-color: teal;


}
.add{
    background-color: green;
    height: 40px;
    width: 100px;
}

</style>