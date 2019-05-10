<template>
    <!-- เป็นหน้าที่แสดงข้อมูลสินค้าทั้งหมดของผู้ขาย -->
    <div id="sell" style="margin-top: 80px">
        <section class="main-content columns is-fullheight">  
            <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p class="menu-label is-hidden-touch">Navigation</p>
                <!-- เป็นเมนูที่เลือกได้ว่าจะแสดงข้อมูลสินค้าประเภทไหน -->
                <ul class="menu-list"> 
                    <li>
                        <a @click="clickStock()"  >
                            <span class="icon has-text-primary"><i class="fas fa-store"></i></span>
                            <span><strong>STOCK</strong></span>
                        </a>
                        
                        <ul>
                            <li aria-controls="bb">
                                <a  @click=" clickMeat()"  >
                                    <img src="../assets/steak.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>MEAT</strong></span>    
                                </a>
                            </li>
                            
                            <li>
                                <a @click="clickVegetable()" >
                                    <img src="../assets/lettuce.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>VEGETABLE</strong></span>
                                </a>
                            </li>
                            <li>
                                <a @click="clickEgg()">
                                    <img src="../assets/fried-egg.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>EGG</strong></span>
                                </a>
                            </li>
                            <li>
                                <a @click=" clickFruit()">
                                    <img src="../assets/watermelon.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>FRUIT</strong></span>
                                </a>
                            </li>
                            <li>
                                <a @click="clickMilk()">
                                    <img src="../assets/milk.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>MILK</strong></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a @click="GoToOrder()" >
                            <span class="icon has-text-link"><i class="fas fa-shipping-fast"></i></span>
                            <span><strong>ORDER</strong></span>
                        </a>
                    </li>
                    <li>
                        <a @click="GoToAddGoods()">
                            <span class="icon has-text-danger"><i class="fas fa-plus"></i></span>
                            <span><strong>ADD GOODS</strong></span>
                        </a>
                    </li>
                </ul>
            </aside>
            

            <div  class="container container "  style=" padding: 0px; margin: 0px">
                <div class="is-active" style="margin-right: 40px; margin-left: 0px;">
                    <CardList :Goods="getGoodsShow" :state="'sell'" ></CardList>
                </div>
                
            </div>
        
  
        </section>
        <div class="text-right set-bot">
            <router-link to="/">
                <b-button class="button-set" variant="warning">Go to Home</b-button>
            </router-link>
         </div>
    </div>
</template>



<script>
import axios from 'axios'
import CardList from './elements/CardList'
    export default {
        name: "Sell",
      components: {CardList},
      data(){
          return{
              AllGoodsOfUser:[],
              GoodsShow:[],
              dataMeat:[],
              username:''
          }
      },
        
        computed : {
            getGoodsShow(){
                return this.GoodsShow
            }
            
        },
        methods:{
            
            GoToAddGoods(){
                this.$router.push( '/addgoods' );
            },
            GoToOrder(){
                this.$router.push( '/order' );
            },
            clickStock(){

                this.GoodsShow=this.AllGoodsOfUser
            },
            clickMeat(){ //เป็น function ที่ get ข้อมูลสินค้าประเภท Meat ของผู้ขาย
    
                axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/gettype', {username:this.username,type:"Meat"})
                .then((response) => {                  
                    this.GoodsShow = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })                   
            },
            clickVegetable(){ //เป็น function ที่ get ข้อมูลสินค้าประเภท Vegetable ของผู้ขาย
                axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/gettype', {username:this.username,type:"Vegetable"})
                    .then((response) => {
                        this.GoodsShow = response.data.data

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            clickEgg(){ //เป็น function ที่ get ข้อมูลสินค้าประเภท Egg ของผู้ขาย
                axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/gettype', {username:this.username,type:"Egg"})
                .then((response) => {
                    this.GoodsShow = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            clickFruit(){ //เป็น function ที่ get ข้อมูลสินค้าประเภท Fruit ของผู้ขาย
                axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/gettype', {username:this.username,type:"Fruit"})
                .then((response) => {
                    this.GoodsShow = response.data.data

                })
                .catch((error) => {
                    console.log(error)
                })
            },
            clickMilk(){ //เป็น function ที่ get ข้อมูลสินค้าประเภท Milk ของผู้ขาย
                axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/gettype', {username:this.username,type:"Milk"})
                .then((response) => {
                    this.GoodsShow = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
        beforeMount(){ //เป็น function ที่ get ข้อมูลสินค้าทุกประเภทของผู้ขาย
            this.username=window.localStorage.username
            axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/getall', {username:this.username})
            .then((response) => {
                this.AllGoodsOfUser=response.data
                this.GoodsShow=this.AllGoodsOfUser
            })
            .catch((error) => {
                console.log(error)
            })                   
        }        
    }
</script>

<style scoped>
  .card {
    margin: 10px;
  }
  .img-valign {
  vertical-align: middle;
  margin-bottom: 0.75em;
}

.text1 {
  font-size: 44px;
}

.text2 {
  font-size: 24px;
}
.set-bot{
    margin-right: 20px;
    margin-bottom: 50px
}
</style>
