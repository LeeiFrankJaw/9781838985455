<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
      </div>
      <br>
      <img id="image">
      <button type="button" id="setImageButton">Set Image</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      file: ''
    }
  },
  methods: {
    uploadFile(e) {
      this.file = e.target.files[0]
      var storageRef = firebase.storage().ref('user_uploads/' + this.file.name)
      storageRef.put(this.file)
    }
  }
}
</script>
