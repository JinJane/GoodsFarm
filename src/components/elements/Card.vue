<template>
  <div class="card">
      <!-- {{data.id}} -->
      <!-- <h1>{{localStorage.AllGoods}}</h1> -->
    <!-- <p>{{ product}}</p> -->
    <div class="card-image ">
      <figure class="image ">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{data.title}} </p>
        </div>
      </div>
      <div class="content is-clearfix">
        <p> {{data.description}} </p>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro;  {{data.price}} </strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        
      </div>
    </div>
    <router-link
      class="details"
      :to="{
        
        name: 'GoodsDetail',
        params: {
          id: data.id,
          
        }
      }"
    >
    </router-link>
    
  </div>
</template>
<script>
export default {
    props: ['data'],
    beforeMount(){
        // window.localStorage.AllGoods = 
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
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #0cb938;
    }
 }
 
</style>



