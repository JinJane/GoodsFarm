<template>
<div class="container" style="flex-direction:row;">
    <div class="select ">
  <select >
    <option v-for="i in type_goods" :key="i">{{i}}</option>
   
  </select>
</div>
 <chart :type="'line'" :data="data" :options="options"></chart>
</div>
 
</template>
 
<script>
import Chart from 'vue-bulma-chartjs'
 
export default {
  components: {
    Chart
  },
 
  data () {
    return {
      type_goods:['meat','egg','milk','veget','fruit'],
      data: {
         
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling','Sleeping', 'Designing', 'Coding', 'Cycling'],
          datasets: [{
          data: [20, 40, 5, 35,20, 40, 5, 35],
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
        segmentShowStroke: false
      }
    }
  }
}
</script>