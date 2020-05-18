//const form = document.forms.search;
//The above is the same as writing:
// This: const form = document.forms[0];
// Or this: const form = document.getElementsByTagname('form')[0];
// const form = document.forms['search'];
// form.addEventListener ('submit', search, false);
// function search() { alert(' Form Submitted'); }
// const [input,button] = form.elements;
//
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

// const results = document.getElementById('results');
// results.innerHTML = 'This is the results div.';


// HERO SCRIPTS
const form = document.forms['hero']; form.addEventListener('submit', makeHero, false);

function makeHero(event) {
event.preventDefault(); // prevent the form from being submitted
const hero = {}; // create an empty object
hero.name = form.heroName.value; // create a name property based on the input field's value
hero.realName = form.realName.value;
hero.powers = [];
for (let i=0; i < form.powers.length; i++) { if (form.powers[i].checked) {
hero.powers.push(form.powers[i].value); }
}
// // This uses the spread operator to turn the node list into an array. This then allows us to use the filter() method that returns an array containing only the check boxes that were checked (this is because their checked property will be truthy). We then chain the map() method to the end, which replaces each checkbox in the array with its value property. This array is then returned and stored in the hero.powers variable.
//
// hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
return hero;
}
