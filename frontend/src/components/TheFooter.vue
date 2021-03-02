<template>
  <footer>
      <div class="footer-content">
        <div class="shop">
            <h4>Shop</h4>
            <a href="">Skateboards</a>
            <a href="">Clothing</a>
            <a href="">Protective gear</a>
            <a href="">Parts</a>
            <a href=""><strong>Sale</strong></a>
        </div>

        <div class="info">
            <h4>About us</h4>
            <a href="">About us</a>
            <a href="">Delivery FAQs</a>
            <a href="">Returns policy</a>
            <a href="">Refunds</a>
            <a href="">Sustainability</a>
        </div>
        <div class="contact">
            <h4>Contact</h4>
            <p>Tel: 01234 567 890</p>
            <p>Mon - Fri: 08:00 - 18:00</p>
            <a class="underline" href="">Contact us ></a>
            <br>
            <p>Address: 12 Madeup Street <br>London <br>WE12 4CD</p>
            <br>
            <a class="underline" href="">Fins us on google maps ></a>
        </div>
        <div class="payment">
            <h4>Payment</h4>
            <div class="card-logo-wrapper">
                <img src="@/assets/icons/visa.png" alt="">
                <img src="@/assets/icons/mastercard.png" alt="">
                <img src="@/assets/icons/klarna.png" alt="">
                <img src="@/assets/icons/swish.png" alt="">
                <img src="@/assets/icons/paypal.png" alt="">
            </div>

        </div>
      </div>
    <div class="footer-banner">
        <div class="banner-text">
            <p>2020 SINUS Skateboards |</p>
            <a href="">Terms and Conditions |</a>
            <a href="">Privacy Policy</a>
        </div>
        <div class="banner-icons">
            <img src="@/assets/icons/instagram.svg" alt="">
            <img src="@/assets/icons/facebook.svg" alt="">
            <img src="@/assets/icons/youtube.svg" alt="">
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
    footer{
        .footer-content{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            background-color: $primary-clr;
            height: fit-content;
            padding: 3rem 4rem;

        }
        color: white;
            font-size: 1.4rem;
        a{
            color: white;
            text-decoration: none;
            display: block;
        }
        h4{
            width: 100%;
            border-bottom: 4px solid $secondary-clr-lt;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }
        .underline{
            text-decoration: underline;
        }
        .shop, .info, .contact{
            margin-right: 2rem;
        }
        .payment{
            .card-logo-wrapper{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;

                img {
                    width: 6rem;
                }
            }
        }
        .footer-banner{
            background-color: black;
            height: fit-content;
            padding: 1rem 4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 2rem;
                margin-left: 3rem;
            }

            .banner-text{
                display: flex;
            }
        }
    }
</style>