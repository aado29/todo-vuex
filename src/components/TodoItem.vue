<template>
  <div
    class="todo-item"
    @click.prevent="handleChangeState"
    :class="blockClasses">
    {{data.title}}
  </div>
</template>

<script>
export default {
  name: 'TodoItem',

  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    blockClasses () {
      return {
        'todo-item--marked': this.data.completed,
        'todo-item--no-marked': !this.data.completed
      }
    }
  },

  methods: {
    handleChangeState () {
      this.$store.dispatch('changeTodoState', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  position: relative;
  border-radius: 4px;
  margin: 5px 0;
  padding: 6px 14px;
  color: #FFF;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:active,
  &:focus {
    outline: none;
  }
  &--marked {
    background-color: #FF5E5E;
    &:hover {
      background-color: #9DC306;
    }
    &:after {
      content: 'done';
    }
  }
  &--no-marked {
    background-color: #9DC306;
    &:hover {
      background-color: #FF5E5E;
    }
    &:after {
      content: 'todo';
    }
  }
  &--marked {
    text-decoration: line-through;
  }
  &:after {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
  }
}
</style>
