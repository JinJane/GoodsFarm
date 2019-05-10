

<template>
    <!-- เป็นหน้า Home ซึ่งเป็นหน้าหลักของ web -->
    <div id="home" class=" container is-fluid" > 
        <!-- เรียก elements carousel มา show ในหน้า Home -->
        <Carousel/>
        <!-- เรียก elements CardList เพื่อแสดง ข้อมูลสินค้าทั้งหมด -->
        <div class="columns is-mobile is-centered ">
            <div class="column is-10 ">
                <CardList :Goods="AllGoods" :state="'home'"></CardList>
            </div>            
        </div>       
    </div>
</template>
<script>
import axios from 'axios'
import Carousel from './elements/Carousel'
import CardList from './elements/CardList'
export default {
    name: "Home",
    components:{Carousel,CardList},
    data(){
        return{
            AllGoods:[],
        }
    },
    beforeMount(){ // เป็น function ที่ get ข้อมูลสินค้าทั้งหมดที่ถูกวางขาย
       
        axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/getuserall', {"id_item":""})
            .then((response) => {
                this.AllGoods=response.data
            })
            .catch((error) => {
                console.log(error)
            })            
    }
}
</script>

<style scoped>
#home{
    background: url('https://image.freepik.com/free-photo/high-angle-view-human-hand-planting-fresh-young-plant-into-soil_23-2147948276.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;background: src('https://image.freepik.com/free-photo/high-angle-view-human-hand-planting-fresh-young-plant-into-soil_23-2147948276.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0%
}
</style>
