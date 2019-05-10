<template>
  <div class="profile-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 order-lg-2">
          <div class="card-profile-image">
            <figure class="image is-1by1">
              <img
                class="is-rounded"
                src="../../src/assets/home.png"
              >
            </figure>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <h1 class="title is-1">{{this.username}}</h1>
      </div>
      <br>
      <b-card class="card-info" shadow no-body bg-variant="light">
        <div class="mt-5 text-center">
          <!-- <b-card bg-variant="light"> -->
          <b-form-group
            label-cols-lg="3"
            label="My Profile"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              label-cols-sm="3"
              label="Username:"
              label-align-sm="right"
              label-for="nested-street"
            >
              <b-form-input id="input-set" v-model="profile.username"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Name:"
              label-align-sm="right"
              label-for="nested-street"
            >
              <b-form-input id="input-set" v-model="profile.name"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Surname:"
              label-align-sm="right"
              label-for="nested-city"
            >
              <b-form-input id="input-set" v-model="profile.surname"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Mail:"
              label-align-sm="right"
              label-for="nested-state"
            >
              <b-form-input id="input-set" v-model="profile.email"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="ID Card:"
              label-align-sm="right"
              label-for="nested-country"
            >
              <b-form-input id="input-set" v-model="profile.id_card"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Tel. :"
              label-align-sm="right"
              label-for="nested-country"
            >
              <b-form-input id="input-set" v-model="profile.tel"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Address:"
              label-align-sm="right"
              label-for="nested-country"
            >
              <b-form-textarea id="input-set" v-model="profile.address"></b-form-textarea>
            </b-form-group>
            <div class="text-right">
              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                  <!-- Any other Bulma elements you want -->
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
              </div>
              <b-button
                class="button-set"
                variant="secondary"
                v-on:click="modalShow='is-active'"
              >Reset Password</b-button>
              <router-link to="/">
                <b-button class="button-set" variant="danger">cancel</b-button>
              </router-link>

              <b-button class="button-set" variant="primary" @click="setprofile">Submit</b-button>
            </div>
          </b-form-group>
          <!-- </b-card> -->
          <!-- Make sure to change password -->
          <div v-bind:class="'modal '+modalShow">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="modal-card">
                <section class="modal-card-body">
                  <h3 class="title has-text-centered has-text-dark">Change Password</h3>
                  <div class="text-left">
                    <b-form-group label="Old password">
                      <b-input v-model="Old" type="password" placeholder="Old Password"></b-input>
                    </b-form-group>
                    <b-form-group label="New password">
                      <b-input v-model="New" type="password" placeholder="New Password"></b-input>
                    </b-form-group>
                    <b-form-group label="Confirm Password">
                      <b-input v-model="ConfirmPass" type="password" placeholder="Confirm Password">
                        <!-- minlength="6" -->
                      </b-input>
                    </b-form-group>
                  </div>
                  <div class="text-right">
                    <b-button @click="checkpass" variant="danger" class="has-text-centered">Confirm</b-button>
                  </div>
                </section>
              </div>
            </div>
            <button class="modal-close is-large" aria-label="close" v-on:click="modalShow=' '">x</button>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Profile",
  beforeMount() {
    // if (typeof Storage !== "undefined") {
    //   if (localStorage.check == 1) {
    // this.$router.push("/contacts");
    //window.localStorage.username = "jane";
    let username = {
      username: window.localStorage.username
    };
    console.log(username);
    axios
      .post(
        "https://goodsfarm-backend-garking.c9users.io/api/profile/getinfo",
        username
      )
      .then(response => {
        this.profile = response.data;
        this.username = response.data.username;
        this.name = response.data.name;
        this.surname = response.data.surname;
        this.email = response.data.email;
        this.id_card = response.data.id_card;
        this.tel = response.data.tel;
        this.address = response.data.address;
        this.forcheck = response.data.username;
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    //this.CheckPro = this.profile;
    //   } else {
    //     this.$router.push("/");
    //   }
    //   //console.log(window.localStorage.logincheck);
    // } else {
    //   console.log("Sorry, your browser does not support web storage...");
    // }
    //this.searchfilter();
  },
  data() {
    return {
      profile: [],
      username: "",
      modalShow: "",
      Old: "",
      New: "",
      ConfirmPass: "",
      forcheck:""
    };
  },
  methods: {
    setprofile() {
      // console.log(NewProfile);
if(this.forcheck!==this.profile.username){
let user = {
        username: this.profile.username
      };
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/profile/checkuser",
          user
        )
        .then(response => {
          console.log(response.data);
          if (response.data == "Can use this Username") {
            window.localStorage.username = this.profile.username;
            console.log(window.localStorage.username);

            let NewProfile = {
              key: this.username,
              username: this.profile.username,
              name: this.profile.name,
              surname: this.profile.surname,
              email: this.profile.email,
              id_card: this.profile.id_card,
              tel: this.profile.tel,
              address: this.profile.address
            };
            axios
              .post(
                "https://goodsfarm-backend-garking.c9users.io/api/profile/update",
                NewProfile
              )
              .then(response => {
                window.location.reload();
                alert("Change profile is success.")
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            alert(
              "Your username is same other user, please change your username."
            );
          }
        })
        .catch(error => {
          console.log(error);
        });


}else{
let NewProfile = {
              key: this.username,
              username: this.profile.username,
              name: this.profile.name,
              surname: this.profile.surname,
              email: this.profile.email,
              id_card: this.profile.id_card,
              tel: this.profile.tel,
              address: this.profile.address
            };
            axios
              .post(
                "https://goodsfarm-backend-garking.c9users.io/api/profile/update",
                NewProfile
              )
              .then(response => {
                window.location.reload();
                alert("Change profile is success.")
              })
              .catch(error => {
                console.log(error);
              });
}




      
    },
    checkpass() {
      console.log("sssss");
      console.log(this.New);
      console.log(this.ConfirmPass);
      if (this.New !== this.ConfirmPass) {
        alert("Old password and Confirm password are not match.");
      } else {
        if ((this.New || this.Old || this.ConfirmPass) == "") {
          alert("Please create your new password.");
        } else {
          if (this.Old == "" || this.ConfirmPass == "") {
            alert("Please create your new password and confirm password.");
          } else {
            let repass = {
              username: this.username,
              password: this.Old,
              new_password: this.New
            };
            console.log(repass);

            axios
              .post(
                "https://goodsfarm-backend-garking.c9users.io/api/profile/repass",
                repass
              )
              .then(response => {
                console.log(response.data.data);
                if (response.data.data == "Wrong password") {
                  alert("Can not change password, please try again.");
                }
                if (response.data.data == "OK") {
                  alert("Change password is success.");
                  this.modalShow = " ";
                  (this.Old = ""), (this.New = ""), (this.ConfirmPass = "");
                }
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
      }
    }
  }
};
</script>
<style>
.is-rounded {
  margin-top: 40px;
}
.container {
  margin-bottom: 200px;
}
h4,
h5 {
  color: rgb(117, 115, 112);
}
.text-right {
  margin-right: 50px;
  margin-left: 50px;
}
.card-info {
  margin-bottom: 200px;
  padding: 20px;
}
.button-set {
  margin-bottom: 10px;
}
.input-set {
  margin-right: 100px;
}
</style>
