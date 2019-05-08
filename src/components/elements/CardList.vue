<template>
   
    
    <div>
        <!-- {{datas.length}} -->
        <div>
            <div class="columns is-mobile">
                <div class="column is-half is-offset-one-quarter ">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="datas.length"
                        :per-page="4"
                        aria-controls="my-card" 
                        
                    > {{updateProducts}}</b-pagination>
                </div>
                
            </div>
            

            <!-- <p  class="mt-3">Current Page: {{ currentPage }}</p> -->
            

            <!-- <h1>{{visibleProduct}}</h1> -->
            <div id=" my-card" :per-page="perPage" :current-page='currentPage'>
                
                <div class="columns is-centered is-multiline" >
                    <div v-for="data in visibleProduct" :key="data.id" class="  column is-one-quarter " >
                        <!-- <h1>{{visibleProduct.id}}</h1> -->
                        <!-- <h1>1</h1> -->
                        <Card :data="data"></Card>
                    </div>  
                </div>
            </div>
            
          
        </div>
        
    </div> 
   
   

</template>
<script>
import Card from './Card.vue'

    export default {
      components: {Card},
      data(){
          return{
              datas:[],
              currentPage:1,
                perPage:4,
              visibleProduct : []
          }
      },
      computed:{
          updateProducts(){
                
                // localStorage.visibleProduct = this.datas.slice
                // ((localStorage.currentPage-1) * 4,((localStorage.currentPage )
                // *4))

                // localStorage.visibleProduct =JSON.parse(localStorage.getItem("AllGoods"))
                this.visibleProduct = this.datas.slice((this.currentPage-1) * 4,((this.currentPage )*4))
            }
      },
      methods : {
            // updateProducts(){
                
            //     // localStorage.visibleProduct = this.datas.slice
            //     // ((localStorage.currentPage-1) * 4,((localStorage.currentPage )
            //     // *4))

            //     // localStorage.visibleProduct =JSON.parse(localStorage.getItem("AllGoods"))
            //     this.visibleProduct = this.datas.slice((this.currentPage-1) * 4,((this.currentPage )*4))
            // }
        },
        beforeMount(){
            // localStorage.currentPage=1
            //localStorage.visibleProduct=[]
            let tt = [
        {
          id: 1,
          title: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 3,
          reviews: 5,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'เนื้อ'
        },
        {
          id: 2,
          title: 'Product 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 5,
          reviews: 10,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'ผลไม้'
        },
        {
          id: 3,
          title: 'Product 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 2,
          reviews: 3,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'ผัก'
        },
        {
          id: 4,
          title: 'Product 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 1,
          reviews: 0,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'ไข่'
        },
        {
          id: 5,
          title: 'Product 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 4,
          reviews: 2,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'นม'
        },
        {
          id: 6,
          title: 'Product 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 5,
          reviews: 1,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'ไข่'
        },
        {
          id: 7,
          title: 'Product 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 5,
          reviews: 7,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'เนื้อ'
        },
        {
          id: 8,
          title: 'Product 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 3,
          reviews: 0,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'ผัก'
        },
        {
          id: 9,
          title: 'Product 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 4,
          reviews: 2,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
          type:'เนื้อ'
        }
      ]
      let mm = JSON.stringify(tt)
     
    //   localStorage.AllGoods = tt
    //    console.log(localStorage.AllGoods.length)
      localStorage.setItem('AllGoods',mm)
      let objects = JSON.parse(localStorage.getItem("AllGoods"))
      this.datas=objects
console.log(objects.length)
      this.updateProducts
// this.datas=localStorage.AllGoods
        },
        
        
         
    }
</script>
<style >
  .card {
    margin: 10px;
  }
</style>


