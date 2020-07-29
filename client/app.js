import { createTodoElement } from './components/todo.js'

fetch('http://localhost:3247/todos')
	.then(response => response.json())
	.then(todos => {
		const printTodosElement = document.getElementById('todos')
		printTodosElement.innerHTML = todos.map(createTodoElement).join('')
	})