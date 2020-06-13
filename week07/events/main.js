const textButton = document.getElementById('number'); 
const apiButton = document.getElementById('chuck'); 
const outputDiv = document.getElementById('output');

//Assign APIs
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

//Event Handlers
textButton.addEventListener('click', () => { 
	fetch(textURL)
		.then( response => {
			outputDiv.innerHTML = 'Waiting for response...'; 
			if(response.ok) {
				return response;
			}
			throw Error(response.statusText);
		})
		.then( response => response.text() )
		.then( text => outputDiv.innerText = text )
		.catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => { 
	fetch(apiURL)
	.then( response => {
		outputDiv.innerHTML = 'Waiting for response...'; 
		if(response.ok) {
			return response;
		}
		throw Error(response.statusText);
	})
	.then( response => response.json() )
	.then( data => outputDiv.innerText = data.value )
	.catch( error => console.log('There was an error:', error)
	) 
},false);

// TODO JUNK...
const form = document.forms['todo']; 
form.addEventListener('submit', addTask, false);
function addTask(event) { 
	event.preventDefault();
	const number = form.task.value; 
	const task = {
		userId: 1,
		title: form.task.value, 
		completed: false
	}
	const data = JSON.stringify(task);
	const url = 'https://jsonplaceholder.typicode.com/todos';
	const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json'});
	const request = new Request(url, {
		method: 'POST',
		header: headers,
		body: data})
	fetch(request)
	.then( response => response.json() )
	.then( task => console.log(`Task saved with an id of  ${task.id}`) )
	.catch( error => console.log('There was an error:', error)) 
}