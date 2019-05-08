<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>mook</h1>
    <BarBeforeLogin/>
    <BarAfterLogin/>
    <router-view/>
  </div>
</template>

<script>
import BarBeforeLogin from '@/components/elements/BarBeforeLogin'
import BarAfterLogin from '@/components/elements/BarAfterLogin'
export default {
  name: 'App',
  components:{BarBeforeLogin,BarAfterLogin}
}
</script>


<style >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background: url('https://www.color-blindness.com/color-name-hue-tool/js/images/map-green-max.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;background: src('https://www.color-blindness.com/color-name-hue-tool/js/images/map-green-max.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */

}
</style>
