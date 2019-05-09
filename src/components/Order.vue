<template>
  <div>
    <div class="columns is-mobile" v-for="n in orders" v-bind:key="n">
      <div class="column is-three-fifths is-offset-one-fifth">
        <b-card>
        
  <b-row class="text-center">
    <b-col>
       <b-form-checkbox
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="n.check"
      value= true
      unchecked-value= false
    ></b-form-checkbox>
    </b-col>
    <b-col cols="8 text-left">{{n.name}}</b-col>
    <b-col><h5>{{n.price}} ฿</h5></b-col>
  </b-row>

        </b-card>
      </div>
    </div>



    
  </div>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
      orders: [
        {
          name: "djgjiaoerjpgjb;fdnuinsdgldgwdgvfe",
          price: 25,
          check: false
        },
        {
          name: "fshrgjgghjfhd",
          price: 2516,
          check: false
        },
        {
          name:
            "dfdhstrjdyogiigjerojgsk;lrtruortophrtjijorptjhpsorktohjk;tkho;rtkjortkidhgpok;lsskouyi;phjrureyu65uwerhjyuy65rertghjuy5edfh",
          price: 245,
          check: false
        },
        {
          name: "ytetryutrh",
          price: 656,
          check: true
        }
      ]
    };
  }
};
</script>
<style>
.p {
  font-size: 1em;
  line-height: 1em;
  height: 1em;
  border: 3px solid #00acee;
}
h5 {
  color:brown
}
</style>

