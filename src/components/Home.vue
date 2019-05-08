<template>
    <div class="container container is-fluid">
        <!-- <BarBeforeLogin/>
        <BarAfterLogin/> -->
        <Carousel/>
        <div>
            <CardList/>
        </div>
        
        
    </div>
</template>
<script>
import BarBeforeLogin from './elements/BarBeforeLogin'
import BarAfterLogin from './elements/BarAfterLogin'
import Carousel from './elements/Carousel'
import CardList from './elements/CardList'
export default {
    components:{BarBeforeLogin,BarAfterLogin,Carousel,CardList}
}
</script>
