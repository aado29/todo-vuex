<template>
  <div class="hello">
    <todo-input />
    <todo-list />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export default {
  name: 'HelloWorld',
  
  components: {
    TodoInput,
    TodoList,
  },
}
</script>
