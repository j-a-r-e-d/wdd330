const form = document.forms.search;
//The above is the same as writing:
// This: const form = document.forms[0];
// Or this: const form = document.getElementsByTagname('form')[0];
const [input,button] = form.elements;

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

// const results = document.getElementById('results');
// results.innerHTML = 'This is the results div.';
