<template>
  <div id="add" class="container-fluid">
    <div class="card" style="margin-top: 40px">
      <!-- <h1>mmm</h1> -->

      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card" >
              <div class="card-header">
                <strong>General Information</strong>
              </div>
              <div class="card-body" style="height: 384px;">
                <form class="form-horizontal" action>
                  <div class="form-group row">
                    <!-- <label class="col-md-3 col-form-label" for="text-input">*ชื่อสินค้า</label> -->
                    <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Name</strong></span> 
                      <span class="icon has-text-danger ">
                          <i class="fas fa-asterisk"></i>
                      </span>
                      
                    </div>
                    
                    <div class="col-md-9">
                      <!-- <input class="form-control" id="text-input" type="text" name="text-input" placeholder="Textmook"> -->
                      <!-- <span class="help-block">This is a help text</span> -->
                      <div class="control has-icons-left has-icons-right">
                        <input
                          v-if="checkData.name== true"
                          class="input is-rounded "
                          type="text"
                          placeholder="Name your goods"
                          v-model="data.name"
                        >
                        <input
                          v-if="checkData.name== false"
                          class="input is-rounded is-danger"
                          type="text"
                          placeholder="Name your goods"
                          v-model="data.name"
                        >
                        <span class="icon is-small is-left">
                          <i class="fas fa-angle-double-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Details</strong></span> 
                      
                      
                    </div>
                    <div class="col-md-9">
                      <!-- <textarea class="form-control" id="textarea-input" name="textarea-input"  placeholder="Content.."></textarea> -->
                      <textarea class="textarea is-rounded" placeholder="Detail your goods" rows="8" type="text" v-model="data.descrip"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Category</strong></span> 
                      <span class="icon has-text-danger ">
                          <i class="fas fa-asterisk"></i>
                      </span>
                      
                    </div>
                    <div class="col-md-9">
                      <div class="field">
                        <p class="control has-icons-left" v-if="checkData.type== true">
                          <span class="select is-rounded">
                            <select class="form-control" @change="onSelect()" v-model="selected">
                              <option value="Have't Type">Please select</option>
                              <option value="Vegetable">Vegetable</option>
                              <option value="Meat">Meat</option>
                              <option value="Milk">Milk</option>
                              <option value="Egg">Egg</option>
                              <option value="Fruit">Fruit</option>
                            </select>
                          </span>
                          <span class="icon is-small is-left">
                            <i class="fas fa-angle-double-right"></i>
                          </span>
                        </p>
                        <p class="control has-icons-left" v-if="checkData.type== false">
                          <span class="select is-rounded is-danger">
                            <select class="form-control" @change="onSelect()" v-model="selected">
                              <option value="Have't Type">Please select</option>
                              <option value="Vegetable">Vegetable</option>
                              <option value="Meat">Meat</option>
                              <option value="Milk">Milk</option>
                              <option value="Egg">Egg</option>
                              <option value="Fruit">Fruit</option>
                            </select>
                          </span>
                          <span class="icon is-small is-left">
                            <i class="fas fa-angle-double-right"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <strong>Sales Information</strong>
              </div>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Price/Unit</strong></span> 
                      <span class="icon has-text-danger ">
                          <i class="fas fa-asterisk"></i>
                      </span>
                      
                    </div>
                  <div class="col-md-9">
                    <!-- <input class="form-control" id="text-input" type="text" name="text-input" placeholder="฿"> -->
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-if="checkData.u_price== true"
                        class="input  is-rounded"
                        type="number"
                        placeholder="Price your goods"
                        v-model="data.u_price"
                        min="0"
                      >
                      <input
                        v-if="checkData.u_price== false"
                        class="input  is-rounded is-danger"
                        type="number"
                        placeholder="Price your goods"
                        v-model="data.u_price"
                        min="0"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-angle-double-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  
                  <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Quantity</strong></span> 
                      <span class="icon has-text-danger ">
                          <i class="fas fa-asterisk"></i>
                      </span>
                      
                    </div>
                  <div class="col-md-9">
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-if="checkData.quantity== true"
                        class="input  is-rounded"
                        type="number"
                        placeholder="Quantity of your goods"
                        v-model="data.quantity"
                        min="1"
                      >
                      <input
                        v-if="checkData.quantity== false"
                        class="input  is-rounded is-danger"
                        type="number"
                        placeholder="Quantity of your goods"
                        v-model="data.quantity"
                        min="1"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-angle-double-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <strong>Media Management</strong>
              </div>
              <div class="card-body">
                <div class="form-group row">
                  
                  <div class="col-md-3 col-form-label">
                      <span class=" is-3"><strong>Product Image</strong></span> 
                      <span class="icon has-text-danger ">
                          <i class="fas fa-asterisk"></i>
                      </span>
                      
                    </div>
                  <div class="col-md-9">
                    <div class="field">
                      <div v-if="checkData.img== true"  class="file is-primary has-name is-boxed">
                      
                        <label class="file-label">
                          <input
                            class="file-input"
                            @change="updateList()"
                            id="file"
                            type="file"
                            ref="file"
                            name="avatar"
                          >
                          <span class="file-cta">
                            <span class="file-icon">
                              <i class="fas fa-cloud-upload-alt"></i>
                            </span>
                            <span class="file-label">Danger file…</span>
                          </span>
                          <span class="file-name">{{filename}}</span>
                        </label>
                      </div>
                      <div v-if="checkData.img== false"  class="file is-danger  has-name is-boxed">
                      
                        <label class="file-label">
                          <input
                            class="file-input"
                            @change="updateList()"
                            id="file"
                            type="file"
                            ref="file"
                            name="avatar"
                          >
                          <span class="file-cta">
                            <span class="file-icon">
                              <i class="fas fa-cloud-upload-alt"></i>
                            </span>
                            <span class="file-label">Danger file…</span>
                          </span>
                          <span class="file-name">{{filename}}</span>
                        </label>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="field is-grouped is-grouped-right" style="margin-top: 10px">
                <p class="control">
                  <input type="submit"  v-on:click=" checkDataInfo()">
                </p>
                <p class="control">
                  <a @click="GoToSell()" class="button is-light">Cancel</a>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "Have't Type",
      checkData:{
        
        type:true,
        name: true,
        u_price:true,
        quantity: true,
        img:true
      },
      data: {
        username: "",
        type: "",
        name: "",
        u_price: "",
        quantity: "",
        img:"",
        descrip:""
      },
      file: "",
      filename: "Choose file"
    };
  },
  mounted() {
    this.data.username = window.localStorage.username;
  },

  methods: {
    checkDataInfo(){
      this.data.type = this.selected
      console.log(this.data)
      console.log(this.data.img)
      this.data.img=this.filename
      if(this.data.name!='' && this.data.type !=''&& this.data.u_price!='' && this.data.quantity!='' && this.data.img!='Choose file'){
                //this.send_info()
                // this.$router.push( '/mainpage' );
               
                // window.location.reload()
                if(this.data.u_price > 0 && this.data.quantity >0) {
                  console.log('OK')
                  //this.send_info()
                }
                else{
                  if(this.data.u_price<0) this.checkData.u_price=false
                  if(this.data.u_price>0) this.checkData.u_price=true

                  if(this.data.quantity<0) this.checkData.quantity=false
                  if(this.data.quantity>0) this.checkData.quantity=true
                }
                
            }               
            else{
                if(this.data.name=='') this.checkData.name=false
                if(this.data.name!='') this.checkData.name=true

                if(this.data.type=="Have't Type") this.checkData.type=false
                if(this.data.type!="Have't Type") this.checkData.type=true

                if(this.data.u_price=='') this.checkData.u_price=false
                if(this.data.u_price!='') this.checkData.u_price=true

                if(this.data.quantity=='') this.checkData.quantity=false
                if(this.data.quantity!='') this.checkData.quantity=true

                if(this.data.img=='Choose file') this.checkData.img=false
                if(this.data.img!='Choose file') this.checkData.img=true

                if(this.data.u_price<0) this.checkData.u_price=false
                  if(this.data.u_price>0) this.checkData.u_price=true

                  if(this.data.quantity<0) this.checkData.quantity=false
                  if(this.data.quantity>0) this.checkData.quantity=true
            }         
      // if()
    },
    updateList() {
      var input = document.getElementById("file");
      console.log(input.files.item(0).name);
      this.filename = input.files.item(0).name;
      this.file = this.$refs.file.files[0];
    },
    GoToSell() {
      this.$router.push("/sell");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onSelect() {
      console.log(this.data.type);
    },
    send_info() {
     // this.data.type = this.selected
      //console.log(this.data.img)
      axios
        .post(
          "https://goodsfarm-backend-garking.c9users.io/api/item/sell",
          this.data
        )
        .then(response => {
          console.log(response);
      
          this.submitFile();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitFile() {
      let formData = new FormData();
      formData.append("avatar", this.file);
      var url = "https://goodsfarm-backend-garking.c9users.io/profile/"+this.data.username+'/'+this.data.name
      console.log(url)
      axios
        .post(
          url,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then((res) => {
          console.log("SUCCESS!!");
          this.$router.push('/sell')
          console.log(res);
        })
        .catch(function(err) {
          console.log("FAILURE!!");
          console.log(err)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="submit"]:hover {
  background-color: #45a049;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}





</style>