// Equilibrium Price Equations:
//   Qsupply = Msupply * price + Bsupply
//   consumption = Mdemand * price + Bdemand

// ***** Variables *****
const Mdemand = -1000;
const Bdemand = 15000; // Changed value so equilibrium price isn't at "2"
let Msupply = 0; // what if ABC can hire more people when price goes up?
const Bsupply = 8000;
let consumption;
let supply;
let message;
const demandAtPrice = document.querySelector(".demand");
const supplyAtPrice = document.querySelector(".supply");
const revenueAtPrice = document.querySelector(".revenue");
const answerStatement = document.querySelector(".message");
const answerHolder = document.querySelector(".messageHolder");
const expanderButton = document.querySelector(".expanderButton");

// ***** Function to expand/collapse additional info div *****
const expanderFunction = () => {
  document.querySelector(".moreInfo").classList.toggle("showDisplay");
  expanderButton.classList.toggle("rotate");
};

// ***** Assigning expand/collapse function to expander button *****
expanderButton.addEventListener("click", expanderFunction);

// ***** Function so calculate Equilibrium price, and display results *****
function calculateOutput() {
  const price = document.querySelector(".price").value;
  message = "";
  consumption = price * Mdemand + Bdemand;
  supply = price * Msupply + Bsupply;

  if (consumption > supply) {
    // consumption = supply;
    const deficit = consumption - supply;
    message = `ABC Company is making ${deficit} less XYZ widgets relative to demand at this price`;
    answerHolder.classList.remove("correctAnswer");
  } else if (consumption < supply) {
    const surplus = supply - consumption;
    message = `ABC Company is making ${surplus} more XYZ widgets relative to demand`;
    answerHolder.classList.remove("correctAnswer");
  } else if (consumption === supply) {
    message = "You found the Equilibrium Price";
    answerHolder.classList.add("correctAnswer");
  }

  const revenue = consumption * price;

  demandAtPrice.innerText = `${consumption} units`;
  supplyAtPrice.innerText = `${supply} units`;
  revenueAtPrice.innerText = `$${revenue}`;
  answerStatement.innerText = message;
  answerHolder.classList.add("expand");
}

// ***** Assigning calculate function to submit button *****
const priceForm = document
  .querySelector(".priceForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    calculateOutput();
  });
