import Vue from 'vue'
import App from './App.vue'

Vue.component('text-input', {
  template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
  data: () => ({textValue: 'Type here'}),
  methods: {
    changeText: function() {
      this.textValue = 'Text changed'
    }
  }
})

new Vue({
  el: '#app',
})
