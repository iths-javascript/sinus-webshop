<template>
<div class="wrapper">
    <div class="top">
        <p>FREE Ground Shipping on All Orders & Extended Returns.</p>
        <ul class="help">
            <li >Help</li>
            <li >Find store</li>
        </ul>
            
    </div>
    
    <div class="navbar">
        <ul class="nav-left">
            <li>skateboard</li>
            <li>the gonz <img src="@/assets/cutelike.svg" 
            alt="cutelike" style="width: 27.43px;height: 23.72px;">
            </li>
            <li>wheels</li>
            <div class="logo">
                <img src="@/assets/logo.svg" alt="logo">
            </div>
            <li class="right">news</li>
            <li class="right1">shop</li> 
        </ul>
        <div class="nav-right">
            <input type="text" class="search">
            <img src="@/assets/search.svg" class="search" alt="search">
            <img src="@/assets/like.svg" class="like" alt="like">
            <img src="@/assets/user.svg" class="user" alt="user">
            <img src="@/assets/cart.svg" class="cart" alt="cart">
        </div>
        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
    margin: auto;
    max-width: 1440px;
}
.top{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    background-color: #2B2B2B;
    align-items: center;
    }
ul.help{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-around;
    margin: 5px 50px 5px auto;
    gap: 20px;

}
p{
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #F1F1F1;
    
    margin-left: 50px;
}
ul.help>li{
    width: 5rem;
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #F1F1F1;
}
.navbar{
    display: flex;
    flex-direction: row;
    background-color: #F1F1F1;
    height:89px ;
}
 ul.nav-left{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-around;
    gap: 50px;
    align-items: center;
    padding-left: 190px;
}
 .nav-left>li{
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    color: #2B2B2B;
}
.logo>img{
    margin-top: -70px;
    Width: 81px;
    Height: 98.31px;
    left: 50%;
    
    position: absolute;
}
.nav-right{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: 40px;
    gap: 10px;
}
li.right{
    margin-left: 100px;
}
input{
    Width:148px;
    Height: 21px;
    border: none;
}

</style>