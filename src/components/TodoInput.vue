<template>
  <div class="todo-input">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="todo" placeholder="Nuevo Item">
      <button type="submit">✓</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      todo: ''
    }
  },

  methods: {
    handleSubmit () {
      this.$store.dispatch('addNewTodo', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-input {
    width: 100%;
    margin-bottom: 20px;
    form {
      position: relative;
      display: flex;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid rgba(121,137,159,0.40);
      border-radius: 4px;
    }
    button,
    input {
      background-color: transparent;
      border: none;
      font-size: 14px;
    }
    input {
      width: 100%;
      padding: 6px 10px;
    }
    button {
      position: absolute;
      right: 5px;
      padding: 0;
      font-size: 18px;
      color: #9DC306;
    }
  }
</style>
