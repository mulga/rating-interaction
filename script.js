let rateInput1 = document.getElementById("rate1");
let rateInput2 = document.getElementById("rate2");
let rateInput3 = document.getElementById("rate3");
let rateInput4 = document.getElementById("rate4");
let rateInput5 = document.getElementById("rate5");
let submitButton = document.getElementById("submit");
let rateResult = document.getElementById("rateGiven");
let ratingContainer = document.getElementById("rating");
let ratingThankYou = document.getElementById("thankYou");

// function rating() {
//   if (rateInput1) {
//     result = "1";
//     // rateInput1.style.backgroundColor = "red";
//     rateResult.innerHTML = result;
//     console.log("1");
//   } else if (rateInput2) {
//     result = "2";
//     rateResult.innerHTML = result;
//     console.log("2");
//   }
// }

function rating1() {
  result = "1";
  // rateInput1.style.backgroundColor = "red";
  rateInput1.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput1.style.color = "#fff";
  rateResult.innerHTML = result;
  //   console.log("1");
}

function rating2() {
  result = "2";
  // rateInput1.style.backgroundColor = "red";
  rateInput2.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput2.style.color = "#fff";
  rateResult.innerHTML = result;
  //   console.log("1");
}
function rating3() {
  result = "3";
  // rateInput1.style.backgroundColor = "red";
  rateInput3.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput3.style.color = "#fff";
  rateResult.innerHTML = result;
  //   console.log("1");
}

function rating4() {
  result = "4";
  // rateInput1.style.backgroundColor = "red";
  rateInput4.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput4.style.color = "#fff";
  rateResult.innerHTML = result;
  //   console.log("1");
}

function rating5() {
  result = "5";
  // rateInput1.style.backgroundColor = "red";
  rateInput5.style.backgroundColor = "hsl(217, 12%, 63%)";
  rateInput5.style.color = "#fff";
  rateResult.innerHTML = result;
  //   console.log("1");
}

// submit result

submitButton.addEventListener("click", function () {
  document.querySelector(".rating").style.display = "none";
  document.querySelector("#thankYou").style.display = "block";
});

// -----
