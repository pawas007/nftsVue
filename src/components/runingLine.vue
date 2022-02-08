<template>
  <div>
    <!--    <marquee direction="right">-->
    <!--      <div class="line_box">-->
    <!--        <span v-for="img in images">     <img :src="img"> </span>-->
    <!--      </div>-->
    <!--    </marquee>-->

    <VueSlickCarousel v-bind="settings">
      <div class="image_wrp" v-for="img in images"><img :src="img"></div>
    </VueSlickCarousel>


  </div>
</template>

<script>


import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "runingLine",
  data() {
    return {
      settings: {
        infinite: true,
        autoplay: true,
        slidesToScroll: -1,
        autoplaySpeed: 0,
        arrows: false,
        easing: 'linear',
        cssEase: 'linear',
        waitForAnimate: true,
        speed: 1800,
        centerMode: true,
        edgeFriction: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoSlidesToShow: true,
        variableWidth: true,
      },
      images: [

        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',
        'https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg',

      ]
    }
  },
  components: {VueSlickCarousel},
}
</script>

<style scoped lang="scss">

.image_wrp {

  img {
    width: 100px;
    margin-left: 7px;
    border-radius: 8px;
  }
}

</style>