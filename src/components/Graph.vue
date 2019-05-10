<template>
<div class="container"> 
 <chart  ref='chart' :type="'bar'" :data="data" :options="options"></chart>
</div>
 
</template>
 
<script>
import Chart from 'vue-bulma-chartjs'
 import axios from "axios";
export default {
  components: {
    Chart
  },
 
  data () {
    
    return {
      
      data: {
         
        labels: ['Meat','Milk','Egg','Fruit','Vegetable'],
          datasets: [{
          data: [0,0,0,0,0],
          backgroundColor: [
            '#1fc8db',
            '#fce473',
            '#42afe3',
            '#ed6c63',
            '#97cd76'
          ]
        }]
      },
      options: {
        segmentShowStroke: true
      }
    }
  },
  methods:{
    
  },
  mounted(){
     axios.post(
          "http://localhost:3000/api/order/graph",{username:""}
        )
        .then((response) => {
          this.data.datasets[0].data[0] = response.data.Meat.n
          this.data.datasets[0].data[1] = response.data.Milk.n
          this.data.datasets[0].data[2] = response.data.Egg.n
          this.data.datasets[0].data[3] = response.data.Fruit.n
          this.data.datasets[0].data[4] = response.data.Vegetable.n
           this.$refs.chart.chart.update();
        console.log( this.data.datasets[0].data)
        })
        .catch(function(error) {
          console.log(error);
        });
  }
}
</script>