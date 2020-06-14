// FETCH EXAMPLE FROM WK07 NOTES:
// fetch(url)
// .then( response => response.json() ); // transforms the JSON data into a JavaScript object
// .then( data => console.log(Object.entries(data)) )
// .catch( error => console.log('There was an error: ', error))

function log(){
	console.log();
}

// Variables
const baseURL = "https://swapi.dev/api/";
const planetsURL = "planets/1/";
const peopleURL = "people/82/";
const headers = new Headers({ 'Content-Type': 'text/plain',
'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate'})
const request = (baseURL + planetsURL,{ headers: headers
})
// let cl = console.log();
let planet = document.getElementById("planets");
let people = document.getElementById("people");
// Functions
fetch(request)
  .then(response => response.json())
  .then(json => {
    //console.log(json);
    log(json);
    planet.innerHTML = `<h1>${json.name}</h1>`;
    // people.innerHTML = `<h3>${json.residents[0]}</h3>`;
  });

// fetch(baseURL + peopleURL)
//   .then(response => response.json())
//   .then(json => {
//     console.log(Object.entries(json));
//     people.innerHTML = `<h3>${json.name}:</h3>${json.gender}`;})
//   .catch(error => console.log('People:There was an error: ', error));
