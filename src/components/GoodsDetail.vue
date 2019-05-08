<template>
    <div>
        <!-- <h1>mook</h1>
        {{data}}
        <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div> -->
 <!-- <section class="container">
      <div class="columns features">
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Click on image above</h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
 </section> -->
        <div class="section ">
        <div class = "card">
            <div class="columns">
            <figure class="card-image is-480x480  column is-one-thirds">
                <img src="https://bulma.io/images/placeholders/480x480.png">
            </figure>
            <div class="card-content column is-two-thirds">

                <div class="card-content__title">
                    <h2 class="title is-4">{{ data.title }}</h2>
                </div>

                <div class="card-content__text">
                    <p>{{data.description}}</p>
                </div>

                <div class="card-content__reviews">
                    <div class="select is-rounded is-small is-pulled-right">
                        <select @change="onSelectQuantity(data.id)" v-model="selected">
                            <option v-for="quantity in quantityArray" :value="quantity" :key="quantity">{{ quantity }}</option>
                        </select>
                    </div>
                </div>

                <div class="card-content__price is-pulled-left">
                    <span  class="title is-3"><strong>{{ data.price }}</strong></span>  
                    <span class="icon is-large has-text-link" >
                                <i class="fas fa-euro-sign fa-lg"></i>
                                </span>
                          
                    <!-- <span class="title is-3"><strong>{{ data.price }}&euro;</strong></span> -->
                </div>

                <div class="card-content__btn is-pulled-right">
                    <button class="button is-primary" >
                        
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
    </div>
</template>
<script>

export default {
    data(){
        return{
            data:{},
            quantityArray: [],
            selected: 1,
        }
    },
    
    mounted () {
        let obj = JSON.parse(localStorage.getItem("AllGoods"))
        // this.data=obj[this.$route.params.id-1]
        this.data=obj[this.$route.params.id-1]
        for (let i = 1; i <= 20; i++) {
        this.quantityArray.push(i);
        }
    },
    methods:{
        onSelectQuantity (id) {
            let data = {
                id: id,
                quantity: this.selected
            }
            this.$store.commit('quantity', data);
        },
    }
}
</script>
