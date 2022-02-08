<template>
  <div>

    <div class="transfer_wrap">


      <div class="history">

        <p class="history_title">Item Activity</p>
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
          <transition-group name="slide-fade" tag="tbody">
            <tr v-for="(row, index) in rows" :key=index>
              <td class="eventsa"><p v-html="row.event.icon"></p>   <span>{{ row.event.name }}</span></td>
              <td> {{ row.price }}</td>
              <td :class="row.type"><a href="#">{{ row.from }} </a></td>
              <td><a href="#">{{ row.to }}</a></td>
              <td><a href="#">{{ row.date }} <i class="fas fa-external-link-alt"></i></a></td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transfers",
  data() {
    return {
      rows: [
        {
          event: {
            name: 'Sale',
            icon: '<i class="fas qq fa-exchange-alt"></i>'
          },
          price: '0,1',
          from: 'NullAddress',
          to: 'guestuser105',
          date: '15 days ago',

        },
        {
          event: {
            name: 'Transfer',
            icon: '<i class="fas qq fa-exchange-alt"></i>'

          },
          price: '0,1',
          from: 'griffon',
          to: 'eewannek',
          date: '13 days ago',

        },
        {
          event: {
            name: 'Transfer',
            icon: '<i class="fas qq fa-exchange-alt"></i>'

          },
          price: '0,1',
          from: 'Toaster_Bath69',
          to: 'anneksa',
          date: 'a 2 month ago',

        },
        {
          event: {
            name: 'Sale',
            icon: '<i class="fas fa-cart-arrow-down"></i>'
          },
          price: '0,1',
          from: 'guestuser105',
          to: 'eewannek',
          date: '13 days ago',

        },
        {
          event: {
            name: 'Transfer',
            icon: '<i class="fas qq fa-exchange-alt"></i>'

          },
          price: '0,1',
          from: 'Roy_eth',
          to: 'xczannek',
          date: '15 days ago',

        }, {
          event: {
            name: 'Sale',
            icon: '<i class="fas fa-cart-arrow-down"></i>'
          },
          price: '0,1',
          from: 'Hawks',
          to: 'anneksa',
          date: 'a month ago ',

        }


      ]


    }
  },

  // mounted() {
  //   setInterval(() => {
  //     this.rows.shift()
  //     setTimeout(() => {
  //       this.rows.push(this.rows[Math.floor(Math.random() * this.rows.length)])
  //     }, 800)
  //   }, 3000)
  // },
}
</script>

<style scoped lang="scss">

.fas {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900;

}

.qq {
  color: red !important;
}

.transfer_wrap {
  * {
    font-family: 'Roboto', sans-serif;
  }

  max-width: 960px;
  margin: 50px auto;

  .history {
    width: 100%;
    @media screen and (max-width: 960px) {
      overflow-x: scroll;
      padding: 20px;
    }

    .history_title {
      padding: 50px 15px 30px 0;
      font-weight: 700;
      font-size: 20px;
    }

    table {

      width: 960px;
      border-radius: 10px;
      border: 1px solid #00000052;
      border-collapse: collapse;

      thead {
        tr {
          th {
            color: black;
            font-weight: 400;
            text-align: left;
            padding: 10px 20px;
            width: 20%;
            border-bottom: 1px solid #00000052;
          }
        }
      }

      tbody {

        i {
          margin-right: 15px;
        }

        tr {
          transition: ease-in-out .9s;

          td {
            color: black;
            font-weight: 400;
            text-align: left;
            padding: 20px 20px;
            width: 20%;
            border-bottom: 1px solid #00000052;

            &.eventsa {

              align-items: center;
              p{
                display: inline;
              }
              span{
                margin-left: 10px;
                background: none;
                height: 10px;
              }

            }

            a {
              i {
                margin-left: 10px;
              }

              color: rgb(32, 129, 226);
              text-decoration: none;
            }


          }
        }
      }


    }
  }
}


</style>