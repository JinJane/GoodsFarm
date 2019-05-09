<template>
  <div class="card">
      
    <div class="card-image ">
      <figure class="image ">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content" >
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{data.name}} </p>
        </div>
      </div>
      <div class="content is-clearfix">
        <div>
          <p style="height: 100px;"> {{data.describe}} </p>
        </div>
        
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro;  {{data.u_price}} </strong></span>
        </p>
      </div>
      <div  class="card-footer btn-actions" v-if="m==true">

        
          <a href="#" class="card-footer-item"> <span><strong>Edit</strong></span></a>
          <a href="#" class="card-footer-item"><span><strong>Delete</strong></span></a>
          
        
        
        
        
      </div>
    </div>
    <router-link v-if="m!=true"
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
</template>
<script>
export default {
    props: ['data','state'],
    data(){
      return{
        m:false
      }
    },
    beforeMount(){
      if(this.state =='sell') this.m=true
      else this.m = false
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

    // &:hover {
    //   border: 1px solid #0cb938;
    // }
 }
 
</style>



