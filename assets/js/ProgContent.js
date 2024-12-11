// Get references to the elements
const flexMuscal = document.getElementById('p1');
const cardioEx = document.getElementById('p2');
const basicYoga = document.getElementById('p3');
const weightLif = document.getElementById('p4');
const flexButton = document.getElementById('flex');
const cardioButton = document.getElementById('cardio');
const basicButton = document.getElementById('basic');
const weightButton = document.getElementById('weight')

// Add a click event listener to the button
flexButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action of the link
  // Toggle visibility of the 'p1' div
  if (flexMuscal.style.display === 'none') {
    cardioEx.style.display = 'none'; // Hide the div
    basicYoga.style.display = 'none'; // Hide the div
    weightLif.style.display = 'none'; // Hide the div
    flexMuscal.style.display = 'block'; // Show the div
  } else {
    flexMuscal.style.display = 'none'; // Hide the div
  }
});

cardioButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action of the link
  // Toggle visibility of the 'p1' div
  if (cardioEx.style.display === 'none') {
    flexMuscal.style.display = 'none';// Hide the div
    basicYoga.style.display = 'none'; // Hide the div
    weightLif.style.display = 'none'; // Hide the div
    cardioEx.style.display = 'block'; // Show the div
  } else {
    cardioEx.style.display = 'none'; // Hide the div
  }
});

basicButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action of the link
  // Toggle visibility of the 'p1' div
  if (basicYoga.style.display === 'none') {
    flexMuscal.style.display = 'none';// Hide the div
    cardioEx.style.display = 'none'; // Hide the div
    weightLif.style.display = 'none'; // Hide the div
    basicYoga.style.display = 'block'; // Show the div
  } else {
    basicYoga.style.display = 'none'; // Hide the div
  }
});

weightButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action of the link
  // Toggle visibility of the 'p1' div
  if (weightLif.style.display === 'none') {
    flexMuscal.style.display = 'none';// Hide the div
    cardioEx.style.display = 'none'; // Hide the div
    basicYoga.style.display = 'none'; // Hide the div
    weightLif.style.display = 'block'; // Show the div
  } else {
    weightLif.style.display = 'none'; // Hide the div
  }
});
