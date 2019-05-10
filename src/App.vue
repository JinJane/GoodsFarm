<template>
  <div id="app">
    <div v-show="!logined">
      <BarBeforeLogin/>
    </div>
    <div v-show="logined">
      <BarAfterLogin/>
    </div>
    <div style="margin-top:0px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BarBeforeLogin from "@/components/elements/BarBeforeLogin";
import BarAfterLogin from "@/components/elements/BarAfterLogin";
export default {
  name: "App",
  beforeMount() {
    //เช็คว่ามีคนล็อกอินอยู่ไหม ถ้ามีคนล็อคอินอยู่จะไปที่ BarAfterLogin แต่ถ้าไม่จะไปที่ BarBeforeLogin เพื่อทำการล็อคอิน
    if (window.localStorage.username) {
      if (window.localStorage.key) {
        this.logined = true;
      } else {
        this.logined = false;
      }
    } else {
      this.logined = false;
    }
  },
  data() {
    return {
      logined: "",
      username: "",
      key: ""
    };
  },
  components: { BarBeforeLogin, BarAfterLogin }
};
</script>

<style lang="scss" src="./global-style.scss" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url("https://us.123rf.com/450wm/juliarstudio/juliarstudio1601/juliarstudio160102156/51729892-stock-vector-farm-flat-landscape-organic-food-concept-for-any-design.jpg?ver=6")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: src("https://www.color-blindness.com/color-name-hue-tool/js/images/map-green-max.png")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
