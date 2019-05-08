<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider">
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <div class="columns is-mobile" v-for="n in orders" v-bind:key="n">
      <div class="column is-three-fifths is-offset-one-fifth">
        <b-card>
          <div class="columns">
  <div class="column is-narrow">
     <b-form-checkbox
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="n.check"
      :indeterminate.sync="n.indeterminate"
    ></b-form-checkbox>
  </div>
  <div class="column">
    <div class="columns is-mobile">
      <div>jgj;doffgja;ihgjidfmgjfikgmlfknbkfdmkmeflmnlgfmkbfmbl,mfl;kbnksdlf,</div>
  <div class="column is-4 is-offset-8">dfhtrh</div>
</div>
  </div>
</div>
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
          check: true,
          indeterminate: true
        },
        {
          name: "fshrgjgghjfhd",
          price: 2516,
          check: false,
          indeterminate: false
        },
        {
          name:
            "dfdhstrjdyogiigjerojgsk;lrtruortophrtjijorptjhpsorktohjk;tkho;rtkjortkidhgpok;lsskouyi;phjrureyu65uwerhjyuy65rertghjuy5edfh",
          price: 245,
          check: false,
          indeterminate: false
        },
        {
          name: "ytetryutrh",
          price: 656,
          check: false,
          indeterminate: false
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
</style>

