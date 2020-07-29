export const createTodoElement = (todo) => {
	return `
		<div class="card-panel teal lighten-2 todo_elem z-depth-2 col s12 m6 l3">
			<h3>${todo.title}</h3>
			<p>${todo.description}</p>
			<div>☆${todo.stars.length}</div>
		</div>
	`
}