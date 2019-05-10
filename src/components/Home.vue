<template>
    <div class=" container is-fluid">
        <!-- <BarBeforeLogin/>
        <BarAfterLogin/> -->
        <Carousel/>
        <div class="columns is-mobile is-centered ">
            <div class="column is-10 ">
                <CardList :Goods="AllGoods" :state="'home'"></CardList>
            </div>
            
        </div>
        
        
    </div>
</template>
<script>
import axios from 'axios'
import BarBeforeLogin from './elements/BarBeforeLogin'
import BarAfterLogin from './elements/BarAfterLogin'
import Carousel from './elements/Carousel'
import CardList from './elements/CardList'
export default {
    name: "Home",
    components:{BarBeforeLogin,BarAfterLogin,Carousel,CardList},
    data(){
        return{
            AllGoods:[],
        }
    },
    beforeMount(){
       
        axios.post('https://goodsfarm-backend-garking.c9users.io/api/item/getuserall', {"id_item":""})
            .then((response) => {
                //console.log(response.data)
                this.AllGoods=response.data
                //this.$router.push( '/mainpage' );
                //window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })    
        
    }
}
</script>
