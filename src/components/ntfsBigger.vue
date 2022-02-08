<template>
  <div>
    <div class="layout"></div>
    <div class="nft-cart">
      <div class="nft_image">
        <div class="image">
          <img
              src="https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48/8458.jpg"
              class="main_image">
          <div class="bottom_panel">
            <a href="#" class="panel_name"> <img
                src="https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48/0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48.jpg "
                class="avatar_name"> Galaxy-Eggs </a>
            <a href="#" class="panel_owner"> <span class="owner_txt">Owner </span> <img
                src="https://api-avatars.dappradar.com/0x887b19f7c21f3df74589a455bd983fb5f563cd91.svg"
                class="owner_avatar"> 0x88...cd91 </a>
          </div>
        </div>
      </div>
      <div class="settings_bar">
        <button class="connect_wallet">
          <span>CONNECT WALLET</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
            <g id="Group_7979" transform="translate(-1109 -193)">
              <g id="Group_5163" transform="rotate(90 460 653)">
                <circle id="Ellipse_121" cx="2" cy="2" r="2" class="cls-1" transform="rotate(90 8 8)"></circle>
                <circle id="Ellipse_122" cx="2" cy="2" r="2" class="cls-1" transform="rotate(90 5 5)"></circle>
                <circle id="Ellipse_123" cx="2" cy="2" r="2" class="cls-1" transform="rotate(90 2 2)"></circle>
              </g>
            </g>
          </svg>
        </button>
        <p class="if_sale">FOR SALE</p>
        <p class="name"> Galaxy Egg #3074</p>
        <div class="total_mini">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="13.661" viewBox="0 0 15.171 13.661">
            <path
                d="M5.313 13.02L1.119 6.8a2 2 0 0 1 .539-2.777l4.311-2.904a2 2 0 0 1 2.777.539l4.194 6.218a2 2 0 0 1-.539 2.776L8.089 13.56a2 2 0 0 1-2.776-.54zM9.776.987V.982a3.194 3.194 0 0 0-.4-.475 4.11 4.11 0 0 1 .576-.2 1.991 1.991 0 0 1 .514-.068 1.962 1.962 0 0 1 1.886 1.438l1.391 5.163zm5.217 5.766l-1.607-6 1.11.3a1.957 1.957 0 0 1 1.384 2.4l-.886 3.308z"
                transform="translate(-0.776 -0.241)"></path>
          </svg>
          <span>1 total</span></div>
        <div class="total">
          <div class="buy-nft-cta-prices">
            <div class="total-text">Total</div>
            <div class="prices">
              <div class="normal ">0.0001 WETH</div>
              <div class="sub ">$0.3</div>
            </div>
          </div>
          <button class="bay_button">BUY NFT</button>
        </div>
        <div class="quantity">
          <span @click="quality++" class="minus_quantity">-</span>
          <div class="count">{{ quality }}</div>
          <span @click="quality++" class="plus_quantity">+</span>
        </div>

        <div class="price_history">
          <div class="price_row">
            <p class="col_name">Last sale price
              <svg aria-hidden="true" data-prefix="fas" data-icon="question-circle" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512" width="12px" fill="rgb(104, 139, 211)"
                   class="Prices__StyledQuestionCircleIcon-sc-193hl6s-9 hhzqKB">
                <path
                    d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
              </svg>
            </p>
            <div class="price_list"><p class="bitcoin"> 1,89 ETH</p>
              <div class="default_price"> ($5 842,67)</div>
            </div>
          </div>

          <div class="price_row">
            <p class="col_name">Floor price
              <svg aria-hidden="true" data-prefix="fas" data-icon="question-circle" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512" width="12px" fill="rgb(104, 139, 211)"
                   class="Prices__StyledQuestionCircleIcon-sc-193hl6s-9 hhzqKB">
                <path
                    d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
              </svg>
            </p>
            <div class="price_list"><p class="bitcoin"> 1,89 ETH</p>
              <div class="default_price floor"> ($5 842,67)</div>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ntfsBigger",
  data() {
    return {
      quality: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.layout {
  background-color: #03122d;
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.nft-cart {
  *{
    font-family: 'Roboto', sans-serif;
  }
  max-width: 960px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;

  .nft_image {
    max-width: 630px;
    .image {
      border-radius: 5px;
      overflow: hidden;

      .main_image {
        width: 100%;
        object-fit: cover;
        height: 100%;

      }

      .bottom_panel {
        position: relative;
        top: -5px;
        background-color: rgb(1, 30, 90);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        .panel_name {
          display: flex;
          align-items: center;
          color: rgb(255, 255, 255);
          font-weight: 400;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s;
          &:hover {
            color: #3273dc;
            transition: all 0.2s;
          }
          .avatar_name {
            margin-right: 6px;
            object-fit: contain;
            border-radius: 50px;
            width: 16px;
            height: 16px;
          }
        }

        .panel_owner {
          display: flex;
          align-items: center;
          text-decoration: none;
          font-size: 12px;
          font-weight: bold;
          color: rgb(255, 255, 255);
          transition: all 0.2s;

          &:hover {
            color: #3273dc;
            transition: all 0.2s;
          }
          .owner_txt {
            font-size: 12px;
            color: rgb(138, 147, 165);
            margin-right: 12px;
            font-weight: 300;
          }

          .owner_avatar {
            width: 16px;
            height: 16px;
            min-width: 16px;
            border-radius: 3px;
            background-color: rgb(255, 255, 255);
            margin-right: 4px;
          }

        }
      }
    }

  }

  .settings_bar {
    max-width: 317px;
    margin-left: 10px;
    width: 100%;

    .connect_wallet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(255, 255, 255);
      background-color: rgb(0, 27, 79);
      border-radius: 5px;
      padding: 16px;
      margin-bottom: 16px;
      width: 100%;

      svg {
        fill: rgb(255, 255, 255);

      }

      span {
        font-size: 14px;
        font-weight: bold;


        cursor: pointer;
      }

    }

    .if_sale {
      border-radius: 25px;
      background-color: rgb(255, 64, 67);
      padding: 4px 10px;
      width: fit-content;
      font-size: 12px;
      line-height: 12px;
      font-weight: bold;

      color: rgb(255, 255, 255);
    }

    .name {
      font-size: 32px;
      font-weight: bold;
      color: rgb(255, 255, 255);
      margin-bottom: 24px;
      margin-top: 12px;

    }

    .total_mini {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-size: 12px;
      color: rgb(255, 255, 255);

      span {
        margin-left: 6px;

      }

      svg {
        fill: rgb(255, 255, 255);
      }
    }

    .total {
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      padding: 20px 12px;
      background-color: rgb(0, 27, 79);
      border-radius: 5px;

      .buy-nft-cta-prices {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;

        .total-text {
          color: rgb(255, 255, 255);
        }

        .prices {
          display: grid;
          gap: 6px;
          justify-items: end;


          .normal {
            font-weight: bold;
            font-size: 14px;
            color: rgb(255, 255, 255);

          }

          .sub {
            font-size: 12px;
            color: rgb(138, 147, 165);
          }


        }

      }

      .bay_button {
        font-size: 14px;
        font-weight: bold;
        border-radius: 5px;
        outline: none;
        transition: background-color 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s;
        padding: 16px;

        color: rgb(255, 255, 255);
        background-color: rgb(5, 108, 255);
      }

    }

    .quantity {
      display: flex;

      align-items: center;
      background-color: #001b4f;
      width: 100%;
      justify-content: space-between;

      .minus_quantity,
      .plus_quantity {
        color: rgb(255, 255, 255);
        background-color: rgb(5, 108, 255);
        width: 40px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .count {
        color: rgb(255, 255, 255);
        font-size: 20px;
        padding: 0 20px;
      }
    }

    .price_history {
      margin-top: 20px;

      .price_row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .col_name {
          font-size: 12px;
          color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          cursor: pointer;


          svg {
            margin-left: 5px;
          }
        }
        .price_list {
          display: flex;
          align-items: center;

          .bitcoin {
            font-size: 12px;
            font-weight: bold;
            text-align: right;
            color: rgb(255, 255, 255);
          }

          .default_price {
            font-size: 12px;
            text-align: right;
            color: rgb(255, 255, 255);
            border-radius: 11px;
            padding: 4px 10px;
            cursor: pointer;
            background-color: rgb(5, 54, 154);
            margin-left: 10px;
            &.floor{
              background: none;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .nft-cart{
    max-width: 350px;
    flex-direction: column;
    padding: 15px;
    .settings_bar{
      margin-left: 0;
      margin-top: 10px;
    }
  }
}


</style>