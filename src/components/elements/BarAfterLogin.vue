<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/profile">
          <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
        </router-link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/sell">
            <a class="navbar-item is-fluid">
              <span class="icon is-large has-text-danger" size="2rem x 2rem	">
                <i class="fas fa-box-open fa-2x" aria-hidden="true"></i>
              </span>
              <span>
                <strong>SELL</strong>
              </span>
            </a>
          </router-link>

          <!-- <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
          </div>-->
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="navbar-item is-fluid">
                <span class="icon is-large has-text-warning" size="2rem x 2rem	">
                  <i class="fas fa-chart-line fa-2x" aria-hidden="true"></i>
                </span>
                <span>
                  <strong>Graph</strong>
                </span>
              </a>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item is-fluid"  @click="logout">
                <span class="icon is-large has-text-danger" size="2rem x 2rem	">
                  <i class="fas fa-sign-out-alt fa-2x" aria-hidden="true"></i>
                </span>
                <span>
                  <strong>SignOut</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods:{
      logout(){
        let  log ={
              username: window.localStorage.username,
              key: parseInt(window.localStorage.keyy)

          }
          console.log(log)
          axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/profile/logout",
          log
        )
        .then(response => {
         window.localStorage.username =''
         window.localStorage.keyy =''
         window.localStorage.clear()
         this.$router.push("/")
         window.location.reload()
         
        })
        .catch(error => {
          console.log(error);
        });
      }
  }
}
</script>