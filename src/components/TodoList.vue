<template>
  <div class="todo-list">
    <div class="todo-list__wrap">
      <transition-group
        name="list"
        tag="div">
        <div
          v-for="(todo, index) in todos"
          :key="`${index} - ${todo.title}`">
          <todo-item
            :data="todo"
            :index="index"/>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoInput',

  components: {
    TodoItem
  },

  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style scoped>
.todo-list__wrap {
  padding: 0;
  margin: 0;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
