<template>
   
    
    <div>
        <!-- {{datas.length}} -->
        <!-- {{Goods}} -->
        <!-- {{state}} -->
        <div>
            <div class="columns is-mobile">
                <div class="column is-half  is-offset-one-quarter " style="margin-top: 30px;">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="Goods.length"
                        :per-page="12"
                        aria-controls="my-card" 
                        v-if="Goods.length != 0"
                    > {{updateProducts}}</b-pagination>
                    <h1 class="column is-half  is-offset-one-quarter " v-if="Goods.length ==0" style="margin-top: 150px"> 
                        Have not Goods!!
                       </h1>
                        
                </div>
                
            </div>
            

            <!-- <p  class="mt-3">Current Page: {{ currentPage }}</p> -->
            

            <!-- <h1>{{visibleProduct}}</h1> -->
            <div id=" my-card" >
                
                <div class="columns is-centered is-multiline" >
                    <div v-for="data in visibleProduct" :key="data.id" class="  column is-one-quarter " >
                        <!-- <h1>{{visibleProduct.id}}</h1> -->
                        <!-- <h1>1</h1> -->
                        <Card :data="data" :state="state"></Card>
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
      props: ['Goods','state'], 
      data(){
          return{
              mm:0,
              datas:[],
              currentPage:1,
                perPage:12,
              visibleProduct : []
          }
      },
      computed:{
          updateProducts(){
                
                
                this.visibleProduct = this.Goods.slice((this.currentPage-1) * 12,((this.currentPage )*12))
            }
      },
      
        
        beforeMount(){
            
            this.datas=this.Goods
            
            console.log("Goods = "+this.Goods)

//       let mm = JSON.stringify(tt)
     
//     //   localStorage.AllGoods = tt
//     //    console.log(localStorage.AllGoods.length)
//       localStorage.setItem('AllGoods',mm)
//       let objects = JSON.parse(localStorage.getItem("AllGoods"))
//       this.datas=objects
// console.log(objects.length)
//       this.updateProducts
// this.datas=localStorage.AllGoods
        },
        
        
         
    }
</script>
<style >
  .card {
    margin: 10px;
  }
</style>


