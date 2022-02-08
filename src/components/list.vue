<template>
  <div>

    <div class="list_layout"></div>
    <div class="list">
      <table width="1160">
        <thead>
        <tr>
          <th>Item name</th>
          <th>Status</th>
          <th>Creators</th>
          <th>Date</th>
        </tr>
        </thead>


        <transition-group name="slide-fade" tag="tbody">
          <tr v-for="(row, index) in rows" :key=index+1>
            <th class="item">
              <div class="image">
                <img :src=" row.item.image">
              </div>
              <div class="details">
                <p class="name"> {{ row.item.name }}</p>
                <p class="name_sub"> {{ row.item.subInfo }}</p>
                <p class="price"> {{ row.item.price }}</p>
              </div>
            </th>
            <th class="status"><span>{{ row.status }}</span></th>
            <th class="creator">
              <div class="avatar"><img :src="row.creator.avatar"></div>
              <div class="info_creator">
                <p class="name">{{ row.creator.name }}</p>
                <p class="position">{{ row.creator.position }}</p>
              </div>
            </th>
            <th class="date"> {{ row.date }}</th>
          </tr>
        </transition-group>


      </table>


    </div>

  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      rows: [
        {
          item: {
            name: 'Pixel Zombie',
            subInfo: 'individual asset',
            price: '123BTM',
            image: 'https://pbs.twimg.com/profile_images/1429831407451451398/WwIAJ_BU_400x400.jpg'
          },
          status: 'just created',
          creator: {
            name: 'Oleh34',
            position: 'Creator',
            avatar: 'https://static.ngs.ru/news/54/preview/0a7863ec1acf6a7c0a7bcfbec8519a7d0fb5e3dd_454_630_c.jpg'
          },
          date: 'November 22 , 2012'

        },
        {
          item: {
            name: 'Pixel Zombie',
            subInfo: 'individual asset',
            price: '123BTM',
            image: 'https://pbs.twimg.com/profile_images/1429831407451451398/WwIAJ_BU_400x400.jpg'
          },
          status: 'just created',
          creator: {
            name: 'Oleh34',
            position: 'Creator',
            avatar: 'https://static.ngs.ru/news/54/preview/0a7863ec1acf6a7c0a7bcfbec8519a7d0fb5e3dd_454_630_c.jpg'
          },
          date: 'November 22 , 2012'

        }, {
          item: {
            name: 'Pixel Zombie',
            subInfo: 'individual asset',
            price: '123BTM',
            image: 'https://pbs.twimg.com/profile_images/1429831407451451398/WwIAJ_BU_400x400.jpg'
          },
          status: 'just created',
          creator: {
            name: 'Oleh34',
            position: 'Creator',
            avatar: 'https://static.ngs.ru/news/54/preview/0a7863ec1acf6a7c0a7bcfbec8519a7d0fb5e3dd_454_630_c.jpg'
          },
          date: 'November 22 , 2012'

        }, {
          item: {
            name: 'Pixel Zombie',
            subInfo: 'individual asset',
            price: '123BTM',
            image: 'https://pbs.twimg.com/profile_images/1429831407451451398/WwIAJ_BU_400x400.jpg'
          },
          status: 'just created',
          creator: {
            name: 'Oleh34',
            position: 'Creator',
            avatar: 'https://static.ngs.ru/news/54/preview/0a7863ec1acf6a7c0a7bcfbec8519a7d0fb5e3dd_454_630_c.jpg'
          },
          date: 'November 22 , 2012'

        }


      ]
    }
  }
}
</script>

<style scoped lang="scss">
body {
  background-color: #03122d;

  * {
    font-family: 'Roboto', sans-serif;
  }
}

.list_layout {
  height: 100%;
  width: 100%;
  background: #80808014;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.list {
  max-width: 1160px;
  overflow-x: scroll;
  margin: 50px auto;

  table {
    border-collapse: collapse;
    overflow-x: scroll;
    thead {
      width: 1160px;
      tr {
        border-radius: 5px;
        background: white;
        th {
          &:last-child {
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
          }
          &:first-child {
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
          }
          padding: 20px 15px;
          width: 25%;
          text-align: left;
          color: gray;
          font-weight: bold;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #80808024;

        th {
          padding: 5px 15px;
          text-align: left;
          margin: 30px 0;
          width: 20%;


          &.creator {
            display: flex;
            align-items: center;
            position: relative;
            top: -20px;
            .avatar {
              width: 60px;
              height: 60px;
              min-width: 60px;
              min-height: 60px;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .info_creator {
              margin-left: 15px;

              .name {
                font-size: 18px;
              }

              .position {
                padding-top: 5px;
                color: darkgrey;
                font-weight: normal;
              }

            }
          }

          &.date {
            font-size: 18px;
          }

          &.status {
            span {
              border-radius: 25px;
              background: #adff2f73;
              color: #0080008a;
              padding: 12px 18px;
            }
          }

          &.item {
            width: 100%;
            display: flex;
            align-items: center;

            .image {
              border-radius: 5px;
              width: 100px;
              height: 100px;
              min-width: 100px;
              min-height: 100px;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .details {
              margin-left: 15px;

              .name {
                font-size: 18px;
              }

              .name_sub {

                color: grey;
                padding-top: 5px;
                padding-bottom: 30px;
                width: fit-content;
              }

              .price {
                border-radius: 5px;
                border: 2px solid rgba(128, 0, 128, 0.94);
                color: rgba(128, 0, 128, 0.94);
                padding: 5px 8px;
                font-weight: bold;
                font-size: 14px;
                width: fit-content;
              }
            }
          }
        }
      }
    }

  }
}

</style>