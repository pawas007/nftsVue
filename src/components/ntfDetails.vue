<template>
  <div>

    <div class="nft-wrap">
      <div class="ntf-top">
        <div class="image_side">
          <img
              src="https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xc9154424b823b10579895ccbe442d41b9abd96ed:67997354231124297366977409722238471266272181672900185330365330046961093443674/9075bc6e">
          <span class="rating"> Rarity 100%</span>
        </div>

        <div class="info_side">
          <p class="title"> Pink + White</p>
          <div class="buy_box">
            <div class="price_col">
              <p class="sub_price">Current Bid</p>
              <p class="price">0.843 ETH</p>
            </div>
            <button class="bay">Buy Now</button>
          </div>

          <div class="tabs">
            <div class="top">
              <a class="active" href="#">Details</a>
              <a href="#">Bids</a>
            </div>

            <div class="switcher">

              <div class="tab">
                <div class="row_tab">
                  <div class="row_name"><span class="indicator"> </span>Date</div>
                  <span class="dots"></span>
                  <div class="data">Oct 11, 2021, 12:53 PM</div>
                </div>
                <div class="row_tab">
                  <div class="row_name"><span class="indicator pink"> </span>Genotype</div>
                  <span class="dots"></span>
                  <div class="data">Genotype</div>
                </div>
                <div class="row_tab">
                  <div class="row_name"><span class="indicator orange"> </span>Status</div>
                  <span class="dots"></span>
                  <div class="data">On sale</div>
                </div>

              </div>


            </div>
          </div>

          <div class="about">

            <div class="colq">
              <div class="image"><img
                  src="https://static.ngs.ru/news/54/preview/0a7863ec1acf6a7c0a7bcfbec8519a7d0fb5e3dd_454_630_c.jpg">
              </div>
              <div class="info"><p class="author">Creator</p>
                <p class="name">Mark Grace</p></div>
            </div>

            <div class="colq">
              <div class="image"><img
                  src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80">
              </div>
              <div class="info"><p class="author">Instant Price</p>
                <p class="name">2.3 ETH</p></div>
            </div>

          </div>
        </div>


      </div>

      <div class="history">

        <p class="history_title">Trading History</p>
        <table width="960">
          <thead>
          <tr>
            <th>Event</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
          </thead>
          <transition-group name="slide-fade" tag="tbody" >
            <tr  v-for="(row, index) in rows" :key=index+1 >
              <td v-html="row.event"></td>
              <td> {{ row.price }}</td>
              <td :class="row.type"> {{ row.from }}</td>
              <td> {{ row.to }}</td>
              <td> {{ row.date }}</td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ntfDetails",
  data() {
    return {
      rows: [
        {
          event: '<i class="fas fa-tag"></i> Sale',
          price: '0,1',
          from: 'griffon',
          to: 'xczannek',
          date: '15 days ago',
          type: 'sale'
        },
        {
          event: '<i class="fas fa-book"></i> Transfer',
          price: '0,1',
          from: 'griffon',
          to: 'eewannek',
          date: '13 days ago',
          type: 'transfer'
        },
        {
          event: '<i class="fas fa-list"></i> List',
          price: '0,1',
          from: 'sxriffon',
          to: 'anneksa',
          date: 'a month ago',
          type: 'list'
        },
        {
          event: '<i class="fas fa-book"></i> Transfer',
          price: '0,1',
          from: 'griffon',
          to: 'eewannek',
          date: '13 days ago',
          type: 'transfer'
        },
        {
          event: '<i class="fas fa-tag"></i> Sale',
          price: '0,1',
          from: 'griffon',
          to: 'xczannek',
          date: '15 days ago',
          type: 'sale'
        }, {
          event: '<i class="fas fa-list"></i> List',
          price: '0,1',
          from: 'sxriffon',
          to: 'anneksa',
          date: 'a month ago',
          type: 'list'
        }


      ]


    }
  },

  mounted() {
    setInterval(() => {
      this.rows.shift()
      setTimeout(() => {
        this.rows.push(this.rows[Math.floor(Math.random()*this.rows.length)])
      }, 800)
    }, 3000)
  },

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.fas {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900;
}

body {
  background-color: #03122d;

  * {
    font-family: 'Roboto', sans-serif;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.nft-wrap {
  max-width: 960px;
  margin: 50px auto;

  .ntf-top {
    display: flex;
    gap: 40px;
    align-items: center;
    @media screen and (max-width: 960px){
      flex-direction: column;
      padding: 20px ;
    }

    .image_side {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      max-width: 470px;

      .rating {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 6;
        color: white;
        background: rebeccapurple;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
      }

      img {
        width: 100%;
        height: 100%;
        max-height: 470px;
      }
    }

    .info_side {
      width: 100%;
      max-width: 450px;

      .title {
        font-size: 36px;
        font-weight: 800;
        padding-bottom: 25px;
      }

      .buy_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        background: #00000012;
        border-radius: 15px;

        .price_col {
          .sub_price {
            font-size: 15px;
            color: #000000d1;
            padding-bottom: 5px;
          }

          .price {
            font-weight: 500;
          }
        }

        .bay {
          padding: 20px;
          background: black;
          color: white;
          border-radius: 15px;
        }
      }

      .tabs {
        margin-top: 35px;

        .top {
          a {
            margin-right: 10px;
            padding: 8px 12px;
            font-weight: 600;
            color: #00000052;
            border-radius: 20px;
            text-decoration: none;

            &.active {
              background: black;
              color: white;
            }
          }
        }

        .switcher {
          width: 100%;
          margin-top: 40px;

          .tab {
            .row_tab {
              margin-bottom: 10px;
              display: flex;
              justify-content: space-between;

              .row_name {
                font-weight: 600;
                color: #00000052;
                display: flex;
                align-items: center;

                .indicator {
                  margin-right: 10px;
                  width: 5px;
                  height: 5px;

                  border-radius: 50%;
                  background: greenyellow;


                  &.pink {
                    background: pink;

                  }

                  &.orange {
                    background: orange;

                  }

                }

              }

              .dots {
                border-bottom: dotted 1px #00000052;
                flex-grow: 1;
              }

              .data {
                font-weight: 600;
                width: content-box;
              }
            }
          }
        }
      }

      .about {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .colq {
          padding: 0;
          display: flex;
          align-items: center;

          .image {
            border-radius: 50%;
            overflow: hidden;
            width: 50px;
            height: 50px;
            margin-right: 10px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .info {
            .author {
              color: #00000052;
              font-weight: 500;
              padding-bottom: 8px;
            }

            .name {
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .history {
    width: 100%;
    @media screen and (max-width: 960px){
      overflow-x: scroll;
      padding: 20px ;
    }
    .history_title {
      padding: 50px 15px 30px 0;
      font-weight: 700;
      font-size: 20px;
    }

    table {
      padding: 25px;
      width: 960px;
      border-radius: 20px;
      border: 1px solid #00000052;

      thead {
        tr {
          th {
            color: #00000052;
            font-weight: 700;
            text-align: left;
            padding-bottom: 20px;
            width: 20%;
          }
        }
      }

      tr {
        transition: ease-in-out .9s;


        td {
          i {
            margin-right: 10px;
          }

          color: black;
          font-weight: 700;
          text-align: left;
          padding-bottom: 15px;
          width: 20%;

          &.sale {
            color: slateblue;
          }


          &.transfer {
            color: orange;
          }


          &.list {
            color: greenyellow;
          }
        }
      }
    }
  }
}
</style>