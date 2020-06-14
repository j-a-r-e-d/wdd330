
// Variables
const baseURL = "https://swapi.dev/api/";
const planetsURL = "planets/1/";
const peopleURL = "people/82/";
// let cl = console.log();
let planet = document.getElementById("planets");
let people = document.getElementById("people");
// Functions
fetch(baseURL + planetsURL)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    planet.innerHTML = `<h1>${json.name}</h1>`;
    // people.innerHTML = `<h3>${json.residents[0]}</h3>`;
  });

fetch(baseURL + peopleURL)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    people.innerHTML = `<h3>${json.name}:</h3>${json.gender}`;
  });
