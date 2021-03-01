<template>
    <section>
        <h1>THANK YOU FOR YOUR ORDER!</h1>
        <img src="@/assets/icons/skateboard.png" alt="">
        <p>A confirmation email with order details and <br>
        receipt has been sent to your email address.</p>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

section{
    padding: 8rem 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin: 6rem 0;
        width: 400px;
    }
    p{
        font-size: 2rem;
    }
}

</style>