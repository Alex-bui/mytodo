const express = require('express')

const todo1 = require('../mocks/todos/1.json')
const todo2 = require('../mocks/todos/2.json')

const todos = [
	todo1,
	todo2,
	todo1,
	todo2,
	todo2
]

const app = express()

/* 
Express allows you to add functions that will be executed at each request : middleware
For each request on the API, this header will be added
Our server give authorization to the client use the address
*/
app.use((request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*")
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next() //middleware is done so he can move on to the next one
})

app.get('/', (request, response) => {
	response.send('OK')
})

app.get('/todos', (request, response) => {
	response.json(todos)
})

app.listen(3247, () => console.log("J'écoute sur le port 3247"))