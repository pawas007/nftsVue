<template>
  <div class="bay_form">
    <p class="form_name"> Limited</p>

    <div class="preview">
      <div class="image">
        <img src="https://artinvestment.ru/content/download/news_2021/20211028_NFT_Lynch_Lee.jpg">
      </div>
      <div class="info">
        <p class="image_title">IMAGE</p>
        <p class="image_name">Each</p>
      </div>
    </div>

    <div class="quantity_wrap">

      <div class="quantity">
        <span @click="quality--" class="minus_quantity">-</span>
        <div class="count">{{ quality }}</div>
        <span @click="quality++" class="plus_quantity">+</span>
      </div>

      <div class="max">6 Max</div>

    </div>

    <div class="total">

      <div class="total_txt">Total</div>

      <div class="price"><span>2.0</span> USD</div>

    </div>

    <button class="buy">Buy</button>

    <div class="personal_promo">
      743
    </div>

    <div class="timer">
      <div class="col">
        <span class="i">{{ hours }} </span>
        <span class="txt"> Hours</span>
      </div>
      <div class="col">
        <span class="i">{{ minutes }}</span>
        <span class="txt"> Minutes</span>
      </div>
      <div class="col">
        <span class="i">{{ seconds }}</span>
        <span class="txt">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formRed",
  data() {
    return {
      quality: 0,
      timer: '',
      interval: '',


    }
  },
  created() {
    let timer_now = localStorage.getItem('timer_now')
    if (timer_now > 0) {
      this.timer = timer_now
    } else {
      this.timer = 86400
    }

    window.addEventListener('beforeunload', this.save_timer)
  },

  mounted() {
    this.interval = setInterval(() => {
      this.timer--;
      this.check_timer_completed()
    }, 1000);
  },

  methods: {
    check_timer_completed() {
      if (this.timer <= 0) {
        clearInterval(this.interval)
        this.timer = 0
        this.save_timer()
      }
    },
    save_timer() {
      localStorage.setItem('timer_now', this.timer)
    },
  },

  computed: {
    seconds() {
      return Math.trunc(this.timer) % 60;
    },
    minutes() {
      return Math.trunc((this.timer) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.timer) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.timer) / 60 / 60 / 24);
    }
  },

  filters: {
    two_digits: function (value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  }

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  background-color: #03122d;

  * {
    font-family: 'Roboto', sans-serif;
  }
}

.bay_form {
  max-width: 500px;
  background: #ef5050;
  border-radius: 10px;
  width: 100%;
  margin: 50px auto;
  padding: 0 30px;
  padding-bottom: 20px;

  .form_name {
    text-align: center;
    padding: 15px;
    font-weight: 800;
    font-size: 36px;
    color: white;
  }

  .preview {
    padding: 15px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .image {
      max-width: 100px;


      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .info {
      text-align: right;
      color: white;

      .image_name {
        font-weight: 700;
        padding-top: 10px;
        font-size: 18px;
      }
    }

  }

  .quantity_wrap {
    margin-top: 20px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .quantity {
      display: flex;
      color: white;
      font-size: 18px;

      span {
        cursor: pointer;
      }

      .count {
        padding: 0 15px;
      }
    }

    .max {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
  }

  .total {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    .total_txt {

      font-weight: normal;
    }

    .price {
      font-size: 18px;

      span {
        font-weight: bold;
      }
    }
  }

  .buy {
    background: white;
    text-align: center;
    font-weight: bold;
    padding: 15px;
    width: 100%;
    font-size: 18px;
    color: #ef5050;
    border-radius: 10px;
    margin: 15px 0;
    margin-bottom: 0;
  }


  .timer {

    display: flex;
    justify-content: center;
    gap: 20px;

    .col {
      background: rgba(255, 255, 255, 0.3);
      padding: 10px;
      border-radius: 10px;

      span {
        color: white;
        display: block;
        text-align: center;

      }
    }
  }

  .personal_promo {
    padding: 10px;

    color: white;
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }

}


</style>