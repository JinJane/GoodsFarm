<template>
  <div class="container">
    <br>
    <br>
    <div class="columns is-mobile" v-for=" (n,index) in orders" v-bind:key="n.id">
      <div class="column is-12">
        <b-card>
          <b-row>
            <b-col>
              <a
                class="button is-light text-right"
                v-show="!n.send"
                v-on:click="GoToTran(n._id,n.send,index)"
              >
                <span class="icon has-text-link">
                  <i class="fas fa-shuttle-van"></i>
                </span>
                <span>
                  <strong>Transport</strong>
                </span>
              </a>
            </b-col>

            <b-col>
              <h1>Name of product : {{n.name}}</h1>
            </b-col>
            <b-col>
              <h1>Quantity: {{n.quantity}} pieces</h1>
            </b-col>
            <b-col>
              <h1>Total: {{n.u_price*n.quantity}} $</h1>
            </b-col>
            <b-col>
              <a class="button is-medium" v-on:click="showlocationn(n.buyer)">
                <span class="icon has-text-danger" style="color:#97cd76;">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>Location</span>
              </a>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div class="text-right set-bot">
      <router-link to="/">
        <b-button class="button-set" variant="warning">Go to Home</b-button>
      </router-link>
    </div>
    <div id="login" v-bind:class="'modal '+modalGo">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modal-card">
          <section class="modal-card-body">
            <h4>To. : {{buyer}}</h4>
            <h6>{{location}}</h6>
            <div class="text-right">
              <b-button class="button is-info" v-on:click="modalGo=' '">OK</b-button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Order",
  beforeMount() {
    let username = {
      username: window.localStorage.username
    };
    axios
      .post(
        "https://goodsfarm-backend-garking.c9users.io/api/order/getall",
        username
      )
      .then(response => {
        this.orders = response.data;
        var i = 0;
        response.data.forEach(e => {
          this.cc[i] = e.send;
          i++;
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      orders: [],
      Notsent: [],
      modalGo: "",
      location: "",
      buyer: "",
      check: true,
      cc: []
    };
  },
  methods: {
    //ยืนยันการส่งสินค้า
    GoToTran(id, send, num) {
      let idorder = {
        _id: id
      };
      this.orders[num].send = !this.orders[num].send;
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/order/send",
          idorder
        )
        .then(response => {
          send = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //แสดงโลเคชั่น
    showlocationn(buy) {
      this.modalGo = "is-active";
      this.buyer = buy;
      let user = {
        username: buy
      };
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/profile/getinfo",
          user
        )
        .then(response => {
          this.location = response.data.address;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.p {
  font-size: 1em;
  line-height: 1em;
  height: 1em;
  border: 3px solid #00acee;
}
h5 {
  color: brown;
}
.set-bot {
  margin-bottom: 100px;
}
</style>

