<template>
<!-- เป็นหน้าที่แสดง detail ข้อสินค้า และสั่งซื้อ -->
    <div id="detail">
        <div class="section">
            <div class="card " style="margin-top:10px;background: rgba(255, 255, 255, 0.5);" card-background-color="hsl(0, 0%, 29%)">
                <div class="columns">
                    <!-- แสดงรูปภาพของสินค้า -->
                    <figure class="card-image is-480x480 column is-one-thirds" >
                        <img
                        v-bind:src="'https://goodsfarm-backend-garking.c9users.io/getpicture/'+data.img"
                        style="height: 300px; width: 480px ; margin-top:20px;margin-left:20px;border: 2px solid transparent; border-color: #9BCA91;"
                        >
                    </figure>
                    <!-- แสดงข้อมูล detail ของสินค้า -->
                    <div class="card-content column is-two-thirds" >
                        <div class="card-content__title is-pulled-left" style=" margin-top:40px;" >
                            <h1 class="title is-24">{{ data.name }}</h1>
                        </div>
                        <div class="text-left" style="margin-top:100px;">
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
                <!-- เลือกจำนวนสินค้าที่จะสั่งซื้อ และ ปุ่มกดสั่งซื้อ -->
                <div class="card-footer" style="padding: 0px 3px 0px 3px;">

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
        <!-- ปุ่มกลับหน้า Home -->
        <div class="text-right set-bot">
            <router-link to="/">
                <b-button class="button-set" variant="warning">Go to Home</b-button>
            </router-link>
        </div>

    </div>
    <!-- modal ที่ใช้ยืนยันการสั่งซื้อ และแสดงข้อมูลสินค้า จำนวน และราคารวม ของสินค้าที่สั่งซื้อ -->
    <div v-bind:class="'modal '+modalShow">
        <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                        <p class="modal-card-title">Confirm Order</p>
                    <button @click="modalShow =''" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="container">
            
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
    //เป็น function ที่รับข้อมูลสินค้า 1 อย่างที่ผู้ซ้อสนใจ
    axios
      .post("https://goodsfarm-backend-garking.c9users.io/api/item/get", {
        id_item: this.$route.params.id
      })
      .then(response => {
        this.data = response.data;

        for (let i = 1; i <= this.data.quantity; i++) {
          this.quantityArray.push(i);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    GoToHome() {
      this.$router.push("/");
    },
    confirmBuy() { // เป็น function ที่ส่งข้อมูที่ถูกสั่งซื้อไป

      axios
        .post("https://goodsfarm-backend-garking.c9users.io/api/item/buy", {
          quantity: this.selected,
          id_item: this.data._id,
          buyer: window.localStorage.username
        })
        .then(response => {

          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    },
    Buy() { //ใช้ควบคุม modal
      this.modalShow = "is-active";
    },
    onSelectQuantity(id) { // ใข้กำหนดจำนวนสินค้าที่ผู้ซื้อเลือก
        this.quantity = this.selected;

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

<style scoped>
#detail{
    background: url('https://img.freepik.com/free-photo/wall-color-cream-texture-background_42547-1046.jpg?size=626&ext=jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;background: src('https://img.freepik.com/free-photo/wall-color-cream-texture-background_42547-1046.jpg?size=626&ext=jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0%
}
</style>