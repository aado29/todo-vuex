<template>
  <div class="todo">
    <h1 class="todo__title">Todo List - Vuex</h1>
    <div class="todo__wrap">
      <todo-input />
      <todo-list />
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export default {
  name: 'HelloWorld',

  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
.todo__wrap {
  width: 320px;
}
</style>
