<template>
<!-- ทำหน้าที่แสดงผลสินค้า 1 อย่าง -->
  <div>
    <div class="card"  style="margin: 5px 2px 5px 2px">
      <!-- แสดงข้อมูลภาพของสินค้า -->
      <div class="card-image  " style="border: 2px solid transparent; border-color: #9BCA91;">
        <figure class="image is-480x480" >
          <img v-bind:src="'https://goodsfarm-backend-garking.c9users.io/getpicture/' +data.img" alt="Placeholder image" style="height: 200px; ">
        </figure>
      </div>
      <!-- แสดงข้อมูลทั่วไปของสินค้า -->
      <div class="card-content is-clearfix" >
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{data.name}} </p>
          </div>
        </div>
        <div class="content is-clearfix">
          <div v-if="statusUser==false"  style="height: 50px;"> 
              ผู้ขาย   : {{data.username}} <br>
              ประเภท  : {{data.type}}
          </div>
          <div v-if="statusUser==true"  style="height: 50px;">
              จำนวนคงเหลือ : {{data.quantity}}
          </div>
          <p class="is-pulled-right">
            <span class="title is-4"><strong>&dollar;  {{data.u_price}} </strong></span>
          </p>
        </div>
        <div  class="card-footer btn-actions" v-if="statusUser==true" style="height: 20px;">
          <a class="card-footer-item" @click="modalShow='is-active'"><span><strong>Delete</strong></span></a>
        </div>
      </div>
      <!-- เมื่อ click card นี้ จะเป็นการไปที่หน้า GoodsDetail เมื่อ user อยู่ในสถานะเป็นผู้ซื้อ -->
      <router-link v-if="statusUser!=true"
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
    <!-- modal ที่ใช้ยืนยันการลบข้อมมูล card นี้ ใช้ได้ต่อเมื่อ user มีสถานะเป็นผู้ขาย -->
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
        statusUser:false,
        modalShow:'',
      }
    },
    
    beforeMount(){ // เป็น function ที่กำหนดสถานะ user ว่าเป็นผู้ซื้อหรือผู้ขาย ณ ขณะนั้น ซึ่ง function ที่จะทำได้จะต่างกัน
      if(this.state =='sell') this.statusUser=true
      else this.statusUser = false
    },
    methods:{      
      deleteItem(){ // เป็น function ที่ใช้ลบข้อมูลสินค้าของ card นี้
        axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/delete', {id_item:this.data._id})
          .then((response) => {
            console.log(response)
            window.location.reload()
          })
          .catch((error) => {
            console.log(error)
          })  
      },     
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

 }
 
</style>



