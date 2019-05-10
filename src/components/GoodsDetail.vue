<template>
  <div>
    <div class="section">
      <div class="card" style="margin-top:10px">
        <!-- {{data.img}}
        https://goodsfarm-backend-garking.c9users.io/getpicture/{{data.img}}-->
        <div class="columns">
          <figure class="card-image is-480x480 column is-one-thirds" >
            <img
              v-bind:src="'https://goodsfarm-backend-garking.c9users.io/getpicture/'+data.img"
              style="height: 300px; width: 480px ; margin-top:20px;margin-left:20px;border: 2px solid transparent; border-color: #9BCA91;"
            >
          </figure>
          <div class="card-content column is-two-thirds" >
            <div class="card-content__title is-pulled-left" style=" margin-top:40px;" >
              <h1 class="title is-24">{{ data.name }}</h1>
            </div>

            <div class="text-left">
                
            </div>

            <div
              class="text-left"
              style="margin-top:100px;"
            >
              <p>
               <strong>Product details :</strong> {{data.descrip}}
              </p>
            </div>

            <div class="card-content__price is-pulled-right" style="margin-top:150px;margin-right:50px;">
              <span class="title is-3">
                <strong>{{ data.u_price }}</strong>
              </span>
              <span class="icon is-large has-text-link">
                <i class="fas fa-dollar-sign fa-lg"></i>
              </span>
            </div>

          </div>
        </div>
        <div class="card-footer" style="padding: 0px 3px 0px 3px;">
          <!-- <h1>mook</h1> -->
          <div class="container is-pulled-right" style="margin: 0px 0px 0px 250px">
            <div class="row is-pulled-right" style=" float: right;">
              <div class="card-content" style="padding: 10px 2px 10px 2px">
                <div class="select is-rounded is-medium is-pulled-right">
                  <select @change="onSelectQuantity(data._id)" v-model="selected">
                    <option
                      v-for="quantity in quantityArray"
                      :value="quantity"
                      :key="quantity"
                    >{{ quantity }}</option>
                  </select>
                </div>
              </div>
              <div class="card-content is-pulled-right" style="padding:  10px 2px 10px 2px">
                <button
                  class="button is-primary is-medium is-rounded"
                  @click="Buy()"
                  style="margin-right: 6px; float: down"
                >
                  <span class="icon has-text-link">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span class="is-3">
                    <strong>Buy Now!</strong>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

<div class="text-right set-bot">
 <router-link to="/">
                <b-button class="button-set" variant="warning">Go to Home</b-button>
              </router-link>
              </div>

    </div>

    <div v-bind:class="'modal '+modalShow">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm Order</p>
          <button @click="modalShow =''" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <!-- Product Name : {{data.name}} <br>
                        Quantity     : {{selected}}  <br>
            total        : {{data.u_price * selected}}-->
            <span>Product Name : {{data.name}}</span>
            <br>
            <span>Quantity : {{selected}}</span>
            <br>
            <span>total : {{data.u_price * selected}}</span>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped is-grouped-right">
            <button class="button is-success" @click="confirmBuy()">Confirm</button>
            <button class="button" @click="modalShow =''">Exit</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GoodsDetail",
  data() {
    return {
      modalShow: "",
      data: {},
      quantityArray: [],
      selected: 1,
      quantity: 0
    };
  },

  mounted() {
    // let obj = JSON.parse(localStorage.getItem("AllGoods"))
    // // this.data=obj[this.$route.params.id-1]
    // this.data=obj[this.$route.params.id-1]

    axios
      .post("https://goodsfarm-backend-garking.c9users.io/api/item/get", {
        id_item: this.$route.params.id
      })
      .then(response => {
        console.log("nnnn" + response.data);
        this.data = response.data;
        console.log(this.data.quantity);

        for (let i = 1; i <= this.data.quantity; i++) {
          this.quantityArray.push(i);
        }
      })
      .catch(error => {
        console.log(error);
      });
    console.log("mmmmmm" + this.data.quantity);
  },
  methods: {
    GoToHome() {
      this.$router.push("/");
    },
    confirmBuy() {
      console.log("id:" + this.data._id);
      console.log("qq:" + this.selected);
      console.log("buyer:" + this.data.username);

      axios
        .post("https://goodsfarm-backend-garking.c9users.io/api/item/buy", {
          quantity: this.selected,
          id_item: this.data._id,
          buyer: window.localStorage.username
        })
        .then(response => {
          console.log(response);

          this.$router.push("/");
          //window.location.reload()
        })
        .catch(error => {
          console.log(error);
        });
    },
    Buy() {
      this.modalShow = "is-active";
    },
    onSelectQuantity(id) {
      this.quantity = this.selected;

      console.log(this.selected);
    }
  }
};
</script>

<style>
.aaa{
  justify-content:center;
  align-items:center
}
.set-bot{
  margin-top: 100px
}
</style>

