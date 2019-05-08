<template>
    <div>
        <section class="main-content columns is-fullheight">
  
            <aside class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p class="menu-label is-hidden-touch">Navigation</p>
                <ul class="menu-list">
                    <li>
                        <a href="#" >
                            <span class="icon"><i class="fa fa-home"></i></span> Home
                        </a>
                    </li>
                    <li>
                        <a  class="is-active">
                            <span class="icon"><i class="fa fa-table"></i></span> Stock
                        </a>

                        <ul>
                            <li >
                                <a  @click="setVisibleProduct">
                                    <img src="../assets/steak.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>MEAT</strong></span>
                                    
                                    
                                    
                                </a>
                            </li>
                            
                            <li>
                                <a >
                                    <img src="../assets/lettuce.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>VEGETABLE</strong></span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <img src="../assets/fried-egg.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>EGG</strong></span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <img src="../assets/watermelon.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>FRUIT</strong></span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <img src="../assets/milk.png" alt="" style="vertical-align:middle;" height="24px;" width="24px"/>
                                    <span ><strong>MILK</strong></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="">
                            <span class="icon"><i class="fa fa-info"></i></span> Order
                        </a>
                    </li>
                    <li>
                        <a class="">
                            <span class="icon"><i class="fa fa-info"></i></span> เพิ่มสินค้า
                        </a>
                    </li>
                </ul>
            </aside>
            

        <div class="container container is-fluid">
            <CardSellList />
        </div>
        
  
        </section>

    </div>
</template>

<script>
import CardSellList from './elements/CardSellList'
    export default {
      components: {CardSellList },
      data(){
          return{
              visibleProduct : []
          }
      },
        
        computed : {
            updateProducts(){
                // this.$store.state.visibleProduct = this.$store.state.products.slice
                // ((this.$store.state.currentPage-1) * this.$store.state.perPage,((this.$store.state.currentPage-1 )
                // * this.$store.state.perPage)+this.$store.state.perPage)
                // this.$store.state.visibleProduct = this.$store.state.products.slice
                // ((this.$store.state.currentPage-1) * this.$store.state.perPage,((this.$store.state.currentPage )
                // *this.$store.state.perPage))
            },
            setVisibleProduct(){

            }
            
        },
        mounted:{

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
</style>

