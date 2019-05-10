<template>
  <div style="height: 20px;" >
    
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation" style="padding: 0px; ">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io" style="padding: 0px 16px 0px 16px">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" style="padding: 0px">
        <div class="navbar-start">
          <!-- <a class="navbar-item is-fluid" @click="checklogin">
            <span class="icon is-large has-text-danger" size="2rem x 2rem	">
              <i class="fas fa-box-open fa-2x" aria-hidden="true"></i>
            </span>
            <span>
              <strong>SELL</strong>
            </span>
          </a>-->
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
          <div class="navbar-item" style="padding: 0px 16px 0px 16px">
            <div class="buttons">
              <a class="button is-warning " v-on:click="modalShow='is-active'">
                <span class="icon has-text-link">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span>
                  <strong>Sign Up</strong>
                </span>
              </a>

              <div v-bind:class="'modal '+modalShow">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="modal-card">
                    <section class="modal-card-body">
                      <h3 class="title has-text-centered has-text-dark">Register</h3>
                      <div class="text-left">
                        <b-form-group label="Username">
                          <b-input v-model="username" type="text" placeholder="Username"></b-input>
                        </b-form-group>
                        <b-form-group label="Password">
                          <b-input v-model="password" type="password" placeholder="Password"></b-input>
                        </b-form-group>
                        <b-form-group label="Name">
                          <b-input v-model="regist.name" type="text" placeholder="Name"></b-input>
                        </b-form-group>
                        <b-form-group label="Surname">
                          <b-input v-model="regist.surname" type="text" placeholder="Surname"></b-input>
                        </b-form-group>
                        <b-form-group label="Mail">
                          <b-input
                            v-model="regist.email"
                            type="email"
                            placeholder="example@gmail.com"
                          ></b-input>
                        </b-form-group>
                        <b-form-group label="ID Card">
                          <b-input v-model="regist.id_card" type="text" placeholder="ID Card"></b-input>
                        </b-form-group>
                        <b-form-group label="Tel.">
                          <b-input v-model="regist.tel" type="text" placeholder="Phone Numbers"></b-input>
                        </b-form-group>
                        <b-form-group label="Address">
                          <b-form-textarea
                            v-model="regist.address"
                            type="textarea"
                            placeholder="Address..."
                            rows="2"
                            max-rows="8"
                          ></b-form-textarea>
                        </b-form-group>
                      </div>
                      <div class="text-right">
                        <b-button @click="Register" class="button is-warning">Register</b-button>
                      </div>
                    </section>
                  </div>
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="modalShow=' '">x</button>
              </div>

              <a class="button is-link" v-on:click="modalGo='is-active'">
                <span class="icon" style="color:#97cd76;">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  <strong>LogIn</strong>
                </span>
              </a>

              <div id="login" v-bind:class="'modal '+modalGo">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="modal-card">
                    <section class="modal-card-body">
                      <h3 class="title has-text-centered has-text-dark">Login</h3>
                      <div class="text-left">
                        <b-form-group label="Username">
                          <b-input v-model="username_login" type="text" placeholder="Username"></b-input>
                        </b-form-group>
                        <b-form-group label="Password">
                          <b-input v-model="password_login" type="password" placeholder="Password"></b-input>
                        </b-form-group>
                      </div>
                      <div class="text-right">
                        <b-button @click="Login" class="button is-info">Login</b-button>
                      </div>
                    </section>
                  </div>
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="modalGo=' '">x</button>
              </div>
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
  name: "BarBeforeLogin",
  data() {
    return {
      modalShow: "",
      modalGo: "",
      regist: {
        username: "",
        name: "",
        surname: "",
        email: "",
        id_card: "",
        tel: "",
        address: ""
      },
      username: "",
      password: "",
      username_login: "",
      password_login: ""
    };
    7;
  },
  methods: {
    Register() {
      if (this.username !== "") {
        if (!this.username.includes(" ")) {
          if (this.password !== "") {
            if (!this.password.includes(" ")) {
              this.regist.username = this.username;
              this.regist.password = this.password;
              console.log(this.regist);
              axios
                .post(
                  "https://goodsfarm-backend-garking.c9users.io/api/profile/regist",
                  this.regist
                )
                .then(response => {
                  console.log(response.data);
                  if (response.data.status == "OK") {
                    alert("Regist success, let go to login.");
                    window.location.reload();
                  } else {
                    console.log(response.data.status)
                    alert("Regist fail, please try again.");
                  }
                })
                .catch(error => {
                  console.log(error);
                });
            } else {
              alert("Password is not correct, please try again.");
            }
          } else {
            alert("Please enter your password.");
          }
        } else {
          alert("Don't use space bar in username.");
        }
      } else {
        alert("Please enter your username and password.");
      }
    },
    Login() {
      let log = {
        username: this.username_login,
        password: this.password_login,
        key: window.localStorage.keyy
      };
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/profile/login",
          log
        )
        .then(response => {
          console.log();
          if (response.data.status == "OK") {
            window.localStorage.username=this.username_login
            let user ={
             username: this.username_login
            }
            axios
              .post(
                "https://goodsfarm-backend-garking.c9users.io/api/profile/get_session",
                user
              )
              .then(response => {
                window.localStorage.keyy = response.data.key;
                console.log(window.localStorage.keyy);
                window.location.reload();
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            alert(response.data.status);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>