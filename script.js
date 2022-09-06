// Increment

let inc = 0;
increment = document.getElementById("increment")
function clickInc() {
    value = ++inc
    increment.textContent = value
}

// Color Randomizer

colorText = document.getElementById("color")
function setColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorText.style.color = "#" + randomColor;
}

// Timer

let time = 1
timer = document.getElementById("timer")

function setTime() {
    timer.innerText = time
    ++time
}

function startTimer() {
    setInterval(setTime, 1000)
  }

// Modal

var modal = document.getElementById("modaltarget");

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}