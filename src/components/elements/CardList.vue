<template>
<!-- เป็น elements ที่ทำหน้าที่เอาข้อมูลสินค้าทั้งหมดส่งไป Card เพื่อทำการแสดงผลสินค้าทีละสินค้า -->
    <div>
        <div>
            <div id=" my-card" style="margin-top: 80px;">               
                <div class="columns is-centered is-multiline" >
                    <!-- ใช้ loop ส่งสินค้าไป Card เพื่อแสดงผลสินค้า -->
                    <div v-for="data in visibleProduct" :key="data.id" class="  column is-one-quarter " style="padding: 0px; " >
                        <Card :data="data" :state="state"></Card>
                    </div>  
                </div>
            </div>
            <div class="columns is-mobile">

                <div class="column is-half  is-offset-one-quarter " style="margin-top: 30px;">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="Goods.length"
                        :per-page="perPage"
                        aria-controls="my-card" 
                        v-if="Goods.length != 0"
                    > {{updateProducts}}</b-pagination>
                    <h1 class="column is-half  is-offset-one-quarter " v-if="Goods.length ==0" style="margin-top: 150px"> 
                        Have not Goods!!
                       </h1>                        
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
 
              currentPage:1,            //เก็บว่าปัจจุบันเป็นหน้าที่เท่าไหร่
              perPage:12,               //ในหนึ่งหน้าจะมีข้อมูลสินค้า 12 ชิ้น
              visibleProduct : []
          }
      },
      computed:{
          //เป็น function ที่ใช้แบ่งหน้า เก็บไว้ที่ตัวแปร visibleProduct ซึ่งเป็น array ของสินค้าที่จะแสดงผลในหน้านั้น
          updateProducts(){               
                this.visibleProduct = this.Goods.slice((this.currentPage-1) * this.perPage,((this.currentPage )*this.perPage))
            }
      },
        
    }
</script>
<style >
  .card {
    margin: 10px;
  }
</style>


