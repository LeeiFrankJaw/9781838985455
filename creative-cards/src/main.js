import Vue from 'vue'
import App from './App.vue'

var component1 = {
  template: '<p>Component 1</p>'
}

var component2 = {
  template: '<p>Component 2</p>'
}

new Vue({
  el: '#app',
  components: {
    'component-1': component1,
    'component-2': component2
  }
})
