// Equilibrium Price Equations:
//   Qsupply = Msupply * price + Bsupply
//   consumption = Mdemand * price + Bdemand

// ***** Variables *****
const Mdemand = -1000;
const Bdemand = 15000; // Changed value so equlibrium price isnt at "2"
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
expanderButton.addEventListener("click", () => {
  document.querySelector(".moreInfo").classList.toggle("showDisplay");
});

// ***** Assigning calculate function to submit button *****
const priceForm = document
  .querySelector(".priceForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    calculateOutput();
  });

// ***** Function so calculate Equilibrium price, and display results *****
function calculateOutput() {
  const price = document.querySelector(".price").value;
  // let price;
  // let price = priceOptions.value;
  message = "";

  // for (let i = 1; i < priceOptions.length; i++) {
  //   if (priceOptions[i].checked) {
  //     price = priceOptions[i].value;
  //     break;
  //   }
  // }

  consumption = price * Mdemand + Bdemand;
  supply = price * Msupply + Bsupply;

  if (consumption > supply) {
    // consumption = supply;
    const deficit = consumption - supply;
    message = `ABC Company is making ${deficit} less XYZ widgets relative to demand at this price`;
  } else if (consumption < supply) {
    const surplus = supply - consumption;
    message = `ABC Company is making ${surplus} more XYZ widgets relative to demand`;
  } else if (consumption === supply) {
    // consumption = 0;
    message = "You found the Equilibrium Price";
  }

  /*
			if (maxRevenue) {
				message = "This is the equilibrium price"
			}
			*/

  const revenue = consumption * price;

  // document.getElementById("result").innerText =
  //   // "XYZ Widgets sold:" +
  //   // consumption +
  //   // "/month<br>Revenue:" +
  //   // revenue +
  //   // "/month<br><br>" +
  //   // message;
  //   `Units sold at this price: ${consumption}
  //   Supply of units at this price: ${supply}
  //   Revenue: $${revenue}
  //   ${message}
  //   `;
  demandAtPrice.innerText = `${consumption} units`;
  supplyAtPrice.innerText = `${supply} units`;
  revenueAtPrice.innerText = `$${revenue}`;
  answerStatement.innerText = message;
  answerHolder.classList.add("expand");

  console.log(message, consumption, supply);
}
