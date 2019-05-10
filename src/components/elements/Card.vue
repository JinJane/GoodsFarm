<template>
<div>
  <div class="card">
      
    <div class="card-image ">
      <figure class="image ">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content" >
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{data.name}} </p>
        </div>
      </div>
      <div class="content is-clearfix">
        <div>
          <p style="height: 100px;"> {{data.describe}} </p>
        </div>
        
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro;  {{data.u_price}} </strong></span>
        </p>
      </div>
      <div  class="card-footer btn-actions" v-if="m==true">

        
          <a href="#" class="card-footer-item" @click="GoToEdit()"> <span><strong>Edit</strong></span></a>
          <a class="card-footer-item" @click="modalShow='is-active'"><span><strong>Delete</strong></span></a>
          
        
        
        
        
      </div>
    </div>
    <router-link v-if="m!=true"
      class="details"
      :to="{
        
        name: 'GoodsDetail',
        params: {
          id: data._id,
          
        }
      }"
    >
    </router-link>
    
  </div>
  <div v-bind:class="'modal '+modalShow">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button @click="modalShow =''" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="container">
                        <h1>Are you sure</h1>
                        
                    </div>
                </section>
                <footer class="modal-card-foot ">
                    <div class="field is-grouped is-grouped-right">
                        <button class="button is-success" @click="deleteItem()">Delete</button>
                        <button class="button" @click="modalShow =''">Exit</button>
                    </div>
                </footer>
            </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['data','state'],
    data(){
      return{
        m:false,
        modalShow:''
      }
    },
    beforeMount(){
      if(this.state =='sell') this.m=true
      else this.m = false
    },
    methods:{
      GoToEdit(){
        
        this.$router.push( {name: 'EditDataGoods',params:{dataEdit : this.data} });
      },
      deleteItem(){
        axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/delete', 
            {id_item:this.data._id})
            .then((response) => {
                console.log(response)
                
                
                // this.$router.push( '/' );
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })  
      },
      mmm(){
        // alert("mook")
        this.modalShow='is-active'
      }
    }
    
}

 
</script>
<style lang="scss" scoped >
  .details {
    cursor: pointer;
    position: absolute;
    top: 0;     
    left: 0;
    width: 100%;
    height: 80%;
    z-index: 1;}
  .aaa {
    cursor: pointer;
    position: absolute;
    top: 0;     
    left: 0;
    
    z-index: 1;

    // &:hover {
    //   border: 1px solid #0cb938;
    // }
 }
 
</style>



