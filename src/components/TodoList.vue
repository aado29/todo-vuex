<template>
	<div class="todo-input">
		<ul class="todo-list__wrap">
			<li class="todo-list__item">
				<todo-item
					v-for=""/>
			</li>
		</ul>
	</div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

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
