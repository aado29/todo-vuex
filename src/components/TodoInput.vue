<template>
	<div class="todo-input">
		<form @submit="handleSubmit">
			<input type="text" v-model="todo" placeholder="Nuevo Item">
			<button type="button">Agregar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'TodoInput',
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
