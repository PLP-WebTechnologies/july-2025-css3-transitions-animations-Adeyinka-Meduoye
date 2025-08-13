// PART 2: Functions with parameters, return, and scope

// Function to add two numbers (demonstrates parameters and return)
function addNumbers(a, b) {
  return a + b; // return value to caller
}

// Function to update the DOM
function showSum(a, b) {
  const sum = addNumbers(a, b); // reuse function
  document.getElementById('sumResult').textContent = `Sum of ${a} + ${b} is ${sum}`;
}

// Event listener for button
document.getElementById('calculateBtn').addEventListener('click', () => {
  showSum(5, 10);
});

// PART 3: JS triggering CSS animation

const box = document.getElementById('animatedBox');
document.getElementById('startAnimation').addEventListener('click', () => {
  box.classList.toggle('animate'); // toggle animation
});
