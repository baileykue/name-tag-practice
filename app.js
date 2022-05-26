// import functions

// grab DOM elements
const nameField = document.getElementById('name-field');
const middle = document.getElementById('middle');

nameField.addEventListener('input', (e) => {
  middle.textContent = e.target.value;
});
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
