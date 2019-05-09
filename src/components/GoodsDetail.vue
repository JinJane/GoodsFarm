<template>
    <div>      
        <div class="section ">
            <div class = "card">
                <!-- {{data.quantity}} -->
                <div class="columns">
                    <figure class="card-image is-480x480  column is-one-thirds">
                        <img src="https://bulma.io/images/placeholders/480x480.png">
                    </figure>
                    <div class="card-content column is-two-thirds">
                        <div class="card-content__title" style="margin-top: 20px;">
                            <h1 class="title is-20">{{ data.name }}</h1>
                        </div>

                        <div class="card-content__text">
                            <p>{{data.describe}}</p>
                        </div>

                        <div class="card-content__reviews">
                            <div class="select is-rounded is-small is-pulled-right">
                                <select @change="onSelectQuantity(data._id)" v-model="selected">
                                    <option v-for="quantity in quantityArray" :value="quantity" :key="quantity">{{ quantity }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="card-content__price is-pulled-left">
                            <span  class="title is-3"><strong>{{ data.u_price }}</strong></span>  
                            <span class="icon is-large has-text-link" >
                                <i class="fas fa-euro-sign fa-lg"></i>
                            </span>                               
                            <!-- <span class="title is-3"><strong>{{ data.price }}&euro;</strong></span> -->
                        </div>

                        <div class="card-content__btn is-pulled-right" >
                            <button class="button is-primary" @click="Buy()" >
                                
                                <span class="icon has-text-link">
                                        <i class="fas fa-plus"></i>
                                        </span>
                                <span><strong>AddToBucket</strong></span>                                      
                            </button>                        
                        </div>
                    </div>
                </div>
            </div>       
        </div>
        <div v-bind:class="'modal '+modalShow">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="modal-card">
        <section class="modal-card-body">
            <h3 class="title has-text-centered has-text-dark">Change Password</h3>
            <div class="text-left">
                    <b-form-group label="Old password">
                        <b-input  type="password" placeholder="Old Password">
                        </b-input>
                    </b-form-group>
                    <b-form-group label="New password">
                        <b-input type="password" placeholder="New Password">
                        </b-input>
                    </b-form-group>
                    <b-form-group label="Confirm Password">
                       <b-input  type="password" placeholder="Confirm Password"> <!-- minlength="6" -->
                        </b-input>
                    </b-form-group>
                    
                    <button @click="GoToHome()" class="button is-dark is-large is-fullwidth" >
                        Confirm
                    </button>
                </div>
                
        </section>
    </div>
     
  </div>
  <button class="modal-close is-large " aria-label="close"   v-on:click="modalShow=' '" >x</button>
</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            modalShow:'',
            data:{},
            quantityArray: [],
            selected: 1,
            quantity:0
        }
    },
    
    mounted () {

        // let obj = JSON.parse(localStorage.getItem("AllGoods"))
        // // this.data=obj[this.$route.params.id-1]
        // this.data=obj[this.$route.params.id-1]
        
        console.log()
        axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/get', 
            {id_item:this.$route.params.id})
            .then((response) => {
                console.log("nnnn"+response.data)
                this.data=response.data
                console.log(this.data.quantity)
                
                for (let i = 1; i <= this.data.quantity; i++) {
                    this.quantityArray.push(i);
                } 
            })
            .catch((error) => {
                console.log(error)
            })    
            console.log("mmmmmm"+this.data.quantity)
            
    },
    methods:{
        GoToHome(){
            this.$router.push( '/' );
        },
        Buy(){
            // console.log("id:"+this.data._id)
            // axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/buy', 
            // {quantity:this.selected,id_item:this.data._id,buyer:this.data.username})
            // .then((response) => {
            //     console.log(response)
                
                
            //     //this.$router.push( '/mainpage' );
            //     //window.location.reload()
            // })
            // .catch((error) => {
            //     console.log(error)
            // })    
            this.modalShow ='is-active'
        },
        onSelectQuantity (id) {
            // let data = {
            //     id: id,
            //     quantity: this.selected
            // }
            //this.$store.commit('quantity', data);
            this.quantity=this.selected
            console.log(this.data.quantity)
            console.log(this.selected)
        },
    }
}
</script>
