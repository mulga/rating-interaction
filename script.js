let rateInput1 = document.getElementById("rate1");
let rateInput2 = document.getElementById("rate2");
let rateInput3 = document.getElementById("rate3");
let rateInput4 = document.getElementById("rate4");
let rateInput5 = document.getElementById("rate5");
let submitButton = document.getElementById("submit");
let rateResult = document.getElementById("rateGiven");
let ratingContainer = document.getElementById("rating");
let ratingThankYou = document.getElementById("thankYou");

// rating

function rating1() {
  result = "1";

  rateInput1.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput1.style.color = "#fff";
  rateResult.innerHTML = result;
  //

  rateInput2.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput2.style.color = "hsl(217, 12%, 63%)";
  rateInput3.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput3.style.color = "hsl(217, 12%, 63%)";
  rateInput4.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput4.style.color = "hsl(217, 12%, 63%)";
  rateInput5.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput5.style.color = "hsl(217, 12%, 63%)";

  //
}

function rating2() {
  result = "2";

  rateInput2.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput2.style.color = "#fff";
  rateResult.innerHTML = result;
  //
  rateInput1.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput1.style.color = "hsl(217, 12%, 63%)";
  rateInput3.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput3.style.color = "hsl(217, 12%, 63%)";
  rateInput4.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput4.style.color = "hsl(217, 12%, 63%)";
  rateInput5.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput5.style.color = "hsl(217, 12%, 63%)";
}
function rating3() {
  result = "3";

  rateInput3.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput3.style.color = "#fff";
  rateResult.innerHTML = result;
  //
  rateInput1.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput1.style.color = "hsl(217, 12%, 63%)";
  rateInput2.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput2.style.color = "hsl(217, 12%, 63%)";
  rateInput4.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput4.style.color = "hsl(217, 12%, 63%)";
  rateInput5.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput5.style.color = "hsl(217, 12%, 63%)";
}

function rating4() {
  result = "4";

  rateInput4.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput4.style.color = "#fff";
  rateResult.innerHTML = result;
  //

  rateInput1.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput1.style.color = "hsl(217, 12%, 63%)";
  rateInput2.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput2.style.color = "hsl(217, 12%, 63%)";
  rateInput3.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput3.style.color = "hsl(217, 12%, 63%)";

  rateInput5.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput5.style.color = "hsl(217, 12%, 63%)";
}

function rating5() {
  result = "5";

  rateInput5.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput5.style.color = "#fff";
  rateResult.innerHTML = result;
  //
  rateInput1.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput1.style.color = "hsl(217, 12%, 63%)";
  rateInput2.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput2.style.color = "hsl(217, 12%, 63%)";
  rateInput3.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput3.style.color = "hsl(217, 12%, 63%)";
  rateInput4.style.backgroundColor = "hsl(213, 19%, 18%)";
  rateInput4.style.color = "hsl(217, 12%, 63%)";
}

// submit rating

submitButton.addEventListener("click", function () {
  document.querySelector(".rating").style.display = "none";
  document.querySelector("#thankYou").style.display = "block";
});

// -----
