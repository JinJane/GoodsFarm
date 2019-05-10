<template>
  <div class="container-fluid">
    <div class="card">
      <!-- <h1>mmm</h1> -->

      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <strong>ข้อมูลทั่วไป</strong>
              </div>
              <div class="card-body">
                <form class="form-horizontal" action>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="text-input">*ชื่อสินค้า</label>
                    <div class="col-md-9">
                      <!-- <input class="form-control" id="text-input" type="text" name="text-input" placeholder="Textmook"> -->
                      <!-- <span class="help-block">This is a help text</span> -->
                      <div class="control has-icons-left has-icons-right">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                          v-model="data.name"
                        >
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label" type="text">*รายละเอียดสินค้า</label>
                    <div class="col-md-9">
                      <!-- <textarea class="form-control" id="textarea-input" name="textarea-input"  placeholder="Content.."></textarea> -->
                      <textarea class="textarea" placeholder="Textarea" rows="7" type="text"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label">*หมวดหมู่</label>
                    <div class="col-md-9">
                      <div class="field">
                        <p class="control has-icons-left">
                          <span class="select">
                            <select class="form-control" @change="onSelect()" v-model="selected">
                              <option value="0">Please select</option>
                              <option value="1">ผัก</option>
                              <option value="2">เนื้อ</option>
                              <option value="3">นม</option>
                              <option value="4">ไข่</option>
                              <option value="5">ผลไม้</option>
                            </select>
                          </span>
                          <span class="icon is-small is-left">
                            <i class="fas fa-globe"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <strong>ข้อมูลการขาย</strong>
              </div>
              <div class="card-body">
                <div class="form-group row">
                  <label class="col-md-3 col-form-label" for="text-input">*ราคา</label>
                  <div class="col-md-9">
                    <!-- <input class="form-control" id="text-input" type="text" name="text-input" placeholder="฿"> -->
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        v-model="data.u_price"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-3 col-form-label" for="text-input">*คลัง</label>
                  <div class="col-md-9">
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        v-model="data.quantity"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <strong>การจัดการสื่อ</strong>
              </div>
              <div class="card-body">
                <div class="form-group row">
                  <label class="col-md-3 col-form-label" for="text-input">ภาพสินค้า</label>
                  <div class="col-md-9">
                    <div class="field">
                      <div class="file is-danger has-name is-boxed">
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
                  <input type="submit" v-on:click=" send_info">
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
      selected: 0,
      data: {
        username: "",
        type: "",
        name: "",
        u_price: "",
        quantity: "",
        img:""
      },
      file: "",
      filename: "Choose file"
    };
  },
  mounted() {
    this.data.username = "abc";
  },

  methods: {
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
      console.log(this.selected);
    },
    send_info() {
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
          this.$router.push('/')
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


