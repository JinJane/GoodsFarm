<template>
  <div style="height: 20px;">
    <nav
      class="navbar is-warning"
      role="navigation"
      aria-label="main navigation"
      style="padding: 0px; "
    >
      <div class="navbar-brand">
        <router-link to="/profile">
          <a class="navbar-item" href="https://bulma.io" style="padding: 0px 16px 0px 16px">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
        </router-link>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" style="padding: 0px">
        <div class="navbar-start">
          <router-link to="/sell">
            <div class="navbar-item">
              <a class="button is-success">
                <span class="icon has-text-danger">
                  <i class="fas fa-box-open"></i>
                </span>
                <span>
                  <strong>SELL</strong>
                </span>
              </a>
            </div>
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item" style="padding: 0px 16px 0px 16px">
            <div class="buttons" style="margin-bottom: 0px">
              <router-link to="/graph">
                <a class="button is-danger" style="margin-bottom: 0px; margin-right:2px">
                  <span class="icon has-text-warning">
                    <i class="fas fa-chart-line"></i>
                  </span>
                  <span>
                    <strong>Graph</strong>
                  </span>
                </a>
              </router-link>
            </div>
            <a class="button is-link" style="padding: 0px 16px 0px 16px" @click="logout">
              <span class="icon has-text-danger">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span>
                <strong>SignOut</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    //log out จะไปเคลียร์ค่า localStorage ในเครื่องออก เพื่อส่งไปบอกระบบว่าไม่มีคนใช้ usernameนี้ในเวลานี้แล้ว
    logout() {
      let log = {
        username: window.localStorage.username,
        key: parseInt(window.localStorage.keyy)
      };
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/profile/logout",
          log
        )
        .then(response => {
          window.localStorage.username = "";
          window.localStorage.keyy = "";
          window.localStorage.clear();
          this.$router.push("/");
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>