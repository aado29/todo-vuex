<template>
	<div class="todo-item">
		item
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	data() {
		return {
			todo: '',
		}
	},

	methods: {
		handleSubmit(e) {
			e.preventDefault();
		},
	},
}
</script>
