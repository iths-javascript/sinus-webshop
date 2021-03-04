<template>
<div class="wrapper" >
    <div class="address">
        <h1>CHECKOUT</h1>
        <p>DELEVERY DETAILS</p>
        <div class="addressdetails">
            <div class="left">
                <label for="name">name</label>
                <input type="text" name="firstname">
                <label for="address">address</label>
                <input type="text" name="address">
                <label for="mail">email</label>
                <input type="text"  name="mail">
            </div>
            <div class="right">
                <label for="lastname">lastname</label>
                <input type="text" name="lastname">
                <label for="postcode">postcode</label>
                <input type="text" name="postcode">
                <label for="phonenumber">telephone number</label>
                <input type="number"  name="phone">
             </div>
        </div>
        
        <p class="delevery">CHOOSE DELEVERY OPTIONS</p>
        <div class="checkbox">
            <div class="post">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="delevery">
                <label for="vehicle1"> delevery by post</label>  
            </div>
            <div class="pickup">
                <input type="checkbox" id="vehicle2" name="vehicle2" value="pickup">
                <label for="vehicle2"> store pickup </label>
            </div>
            
        </div>
        <div class="button">
            <button class="goback">go back</button>
            <button class="continue">continue</button>
        </div>
    </div>
    <div class="details">
        <div class="product">
            <div class="box">
                <img src="@/assets/hoodie-ash.png" alt="product">
            </div>
            <div class="productdetail">
                <h2>CAPUCHALOVE</h2>
                <div class="color">
                    <label for="color">color</label>
                    <input type="checkbox" id="color" />
                </div>
                <div class="quantity">
                    <label for="quantity">quantity</label>
                    <p>1</p>
                </div>
                <div class="size">
                    <label for="size">size</label>
                    <p>S</p>
                </div>
                <div class="price">
                    <label for="price">price</label>
                    <p>300 SEK</p>
                </div>
                <img src="@/assets/trash.svg" alt="trash">
            </div>
        </div>
        <div class="price">
            <h1>TOTAL CART</h1>
            <h1>480 SEK</h1>
        </div>
        <p>including VAT</p>
    </div>

    
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');
.wrapper,.addressdetails,.checkbox,.button,.product{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.address{
    background-image: url('~@/assets/background-checkout.svg');
    
}
.details{
    background-color: #F1F1F1;
    max-width:493px;
    max-height :633px;
}
.left,.right{
     display: flex;
    flex-direction: column
}
label{
    text-align: start;
    font-family: 'Ropa Sans';
    font-size: 24px;
    line-height: 26px;
}
input {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom:  2px solid #C4C4C4;
    margin-bottom: 15px;
    width: 215px;
    margin-top: 10px;
  
}
h1{
    font-family: 'Ropa Sans',sans-serif;
    font-size: 24px;
    line-height: 26px;
    text-align: start;
    margin-top: 80px;
    
}
p{
    font-family: 'Schoolbell', cursive;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.1em;
    text-align: start;
    margin-top: 15px;
    margin-bottom: 15px;
    
}
p.delevery{
    margin-top: 50px;
}
input#vehicle1,input#vehicle2{
    width: 13px;
    height: 13px;
}
.button{
    margin-top: 10px;
}
.goback{
    width: 111px;   
    height:38px ;
    background: #F1F1F1;
    box-shadow: -6px 6px 0px #CBE9EF;
    border: none;
    font-family: 'Ropa Sans';
    font-size: 18px;
    line-height: 19px;
}
.continue{
    width:130px;
    height: 38px;
    background: #2B2B2B;
    box-shadow: -6px 6px 0px #CBE9EF;
    font-family: 'Ropa Sans';
    font-size: 18px;
    line-height: 19px;
    color: #F1F1F1;
}
.details{
    width: 493px;
    height: 633px;
    background: #F1F1F1;
    margin-top:80px;
}
.box{
    width: 164px;
    height: 202px;
    background: #CBE9EF;
}
.box>img{
    width: 123px;
    height: 135px;
}
.product{
    margin-top:40px;
}
h2{
    font-family: 'Ropa Sans';
    font-size: 18px;
    line-height: 19px;
}
.quantity,.size,.price{
    display: flex;
    flex-direction: row;
}
.color>label,.quantity>label,.size>label,.price>label,.color>p,.quantity>p,.size>p,.price>p{
    font-family: 'Ropa Sans';
    font-size: 12px;
    line-height: 13px;
}
.color>p,.quantity>p,.size>p,.price>p{
    margin-top: 0;
    margin-left: 15px;
}
input#color{
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

</style>