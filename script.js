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

  var startTimer = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            setInterval(setTime, 1000)
        }
    };
})();


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

// mouse over

let test = document.getElementById("example");

test.addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
}, false);

test.addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
}, false);