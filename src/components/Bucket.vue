<template>

    <div>
         <form action="https://goodsfarm-backend-garking.c9users.io/profile/./garking" method="post" enctype="multipart/form-data">
      <input type="file" name="avatar" >
        <input type="submit" >
    </form>
    <br>
    <img src="https://goodsfarm-backend-garking.c9users.io/getpicture" alt="">
    </div>
    
</template>
<script>

export default {
   methods:{
       mmm(){
           console.log("mm")
           console.log(document.getElementById('filename').ev)
    //        document.getElementById('filename').value = uploadOnChange;
    //        var filename = this.value;
    // var lastIndex = filename.lastIndexOf("\\");
    // if (lastIndex >= 0) {
    //     filename = filename.substring(lastIndex + 1);
    // }
    // document.getElementById('filename').value = filename;
       }
   }
}
</script>
