<template>
  <div class="all_wrap">
    <div class="temp_wrap">
    </div>
    <section class="concept">
      <div class="concept__image">
        <img
            src="https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/8736.png">
      </div>
      <div class="concept__details">
        <p class="details__title">
          Pixelated Robot <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png">
        </p>
        <div class="details__panel">
          <p>
            Owned by <a href="#">Ricardo Diaz</a>
          </p>
          <p>
            <i class="fas fa-eye"></i> 880 views
          </p>

          <p>
            <i class="fas fa-heart"></i> 3234 favourites
          </p>


        </div>
        <div class="details__price">
          <div class="price_info">
            <p class="info_txt">Current price</p>
            <div class="btc_price">62ETH <span>(80.2342.2334)</span></div>
          </div>
          <div class="price_actions">

            <div class="quantity">
              <span @click="quality++" class="minus_quantity">-</span>
              <div class="count">{{ quality }}</div>
              <span @click="quality++" class="plus_quantity">+</span>
            </div>
            <button>Buy Now</button>
          </div>
        </div>
        <div class="details__history">
          <div class="history_head" ref="history_head" @click="openBox">
            <span>Price history</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="list" ref="history_list">
            <div class="list_row">
              <div class="list_col">
                <span class="sub_name"> 7 Days Volume</span>
                <span class="col_value"> 123.08ETH</span>
              </div>
              <div class="list_col">
                <span class="sub_name"> Total Volume</span>
                <span class="col_value"> 143.08ETH</span>
              </div>
              <div class="list_col">
                <span class="sub_name"> 7 Days ago price</span>
                <span class="col_value"> 243.08ETH</span>
              </div>
              <div class="list_col">
                <span class="sub_name"> Owners</span>
                <span class="col_value"> 212 Owners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "nftConcept",
  data() {
    return {
      quality: 0
    }
  },
  methods: {

    openBox() {
      this.$refs.history_head.classList.toggle('active')
      this.$refs.history_list.classList.toggle('active')

    }

  }

}
</script>

<style lang="scss" scoped>
body {
  background-color: #03122d;

  * {
    font-family: 'Roboto', sans-serif;
  }
}

.fas {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900;
}

.temp_wrap {
  background-image: url("https://img3.goodfon.com/wallpaper/nbig/4/c0/abstract-background-rainbow-7757.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;

}

.concept {
  max-width: 1200px;
  margin: 150px auto;
  display: flex;

  background: white;
  padding: 15px;
  border-radius: 15px;
  gap: 40px;

  &__image {
    max-width: 460px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }


  &__details {
    width: 100%;

    .details__title {
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      font-size: 36px;
      font-weight: 800;

      img {
        margin-left: 15px;
        width: 25px;
      }
    }

    .details__panel {
      display: flex;
      align-items: center;

      p {
        display: flex;
        font-size: 14px;
        align-items: center;
        color: gray;
        margin-right: 15px;

        i {
          padding-right: 5px;
        }

        a {
          padding-left: 5px;
          text-decoration: none;
        }
      }

    }

    .details__price {
      margin: 25px 0;
      padding: 30px 0;
      display: flex;

      border-top: 1px solid rgba(128, 128, 128, 0.3);
      justify-content: space-between;

      .price_info {
        .info_txt {
          font-size: 14px;
          color: gray;
          padding-bottom: 10px;
        }

        .btc_price {
          font-size: 24px;
          font-weight: bold;

          span {
            font-size: 14px;
            color: gray;
            padding-left: 5px;
            font-weight: normal;
          }
        }
      }

      .price_actions {


        display: flex;
        align-items: center;

        .quantity {
          display: flex;
          align-items: center;
          margin-right: 20px;
          border: 1px solid black;
          border-radius: 40px;
          padding: 12px;

          * {
            cursor: pointer;
            font-size: 20px;
          }

          .count {
            padding: 0 20px;
          }
        }

        button {
          margin-left: 10px;
          padding: 15px;
          border: 1px solid black;
          border-radius: 40px;
          transition: .3s;
          font-weight: 500;

          &:hover {
            color: white;
            border: 1px solid;
            transition: .3s;
            background: linear-gradient(70deg, blue, pink);
          }
        }
      }
    }

    .details__history {
      margin-top: 10px;
      border-radius: 10px;
      border: 1px solid rgba(128, 128, 128, 0.3);

      .history_head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        cursor: pointer;

        i {
          transition: .4s;
        }

        &.active {
          i {
            transition: .4s;
            transform: rotate(180deg);
          }
        }
      }

      .list {
        border-top: 1px solid rgba(128, 128, 128, 0.3);
        padding: 15px;
        background: #8080801a;
        transition: .5s;
        display: block;

        &.active {
          display: none;
        }

        .list_row {
          display: flex;
          justify-content: space-between;

          .list_col {
            display: flex;
            flex-direction: column;

            .sub_name {
              color: gray;
              font-size: 14px;
            }

            .col_value {
              font-size: 18px;
              font-weight: 800;
            }
          }
        }
      }


    }

  }


}

@media screen and (max-width: 768px) {
  .all_wrap {
    padding: 20px;
  }
  .concept {
    flex-direction: column;
  }
  .concept__details {
    .details__history .list .list_row {

      flex-direction: column;
      gap: 10px;
    }


    .details__panel {
      flex-direction: column;
      gap: 10px;
    }
    .details__price {
      flex-direction: column;
      align-items: baseline;

      .price_actions {
        flex-direction: column;
        width: 100%;

        .quantity {
          margin-top: 15px;
          margin-right: 0;
          margin-right: 6px;
          width: 100%;
          justify-content: space-between;
          padding: 15px 20px;
        }

        button {
          margin-right: 6px;
          width: 100%;
          margin-top: 5px;
          margin-left: 0;

        }
      }
    }
  }








}


</style>