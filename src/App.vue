<template>
  <div id="app">
    <todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',

  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Arial';
  height: 100vh;
}
</style>
