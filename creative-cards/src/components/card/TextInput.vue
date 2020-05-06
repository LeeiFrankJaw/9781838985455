<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <h4>Edit Text:</h4>
        <textarea cols="50" rows="4"
                  class="form-control"
                  placeholder="Add text here!"
                  v-model="textBoxInput"
                  @keyup="textChanged">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textBoxInput: ""
    }
  },
  methods: {
    textChanged() {
      this.$emit('displayTextChanged', this.textBoxInput)
    }
  }
}
</script>
