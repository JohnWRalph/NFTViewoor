
// const { Network } = require('@alch/alchemy-sdk');
const getCounterPartyWalletBalances = require("./getCounterPartyWalletBalances");
const getSolanaWalletBalances = require("./getSolanaWalletBalances");

const submitButton = document.getElementById("submitButton");
const solanaSubmitButton = document.getElementById("solanaSubmitButton");
var modal = document.getElementById("myModal");


modal.style.display = "block";
modal.classList.toggle('close');
console.log("modal:", modal.outerHTML);
let solanaAddressInput;

submitButton.addEventListener("click", function () {
    const addressinput = document.getElementById("address-input");
    // document.getElementById("address").innerHTML = addressinput[0];
    getCounterPartyWalletBalances(addressinput);
});

solanaSubmitButton.addEventListener("click", function () {
    solanaAddressInput = document.getElementById("solana-address-input");
 
    // document.getElementById("address").innerHTML = addressinput[0];
    getSolanaWalletBalances(solanaAddressInput);
});
// Get the modal

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


// modal.style.display = "none"
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    // modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal element
var modal = document.querySelector('.modal');

// Get the open button element
var openButton = document.getElementById('myBtn');

// Get the close button element
var closeButton = modal.querySelector('.close');

// Add a click event listener to the open button
openButton.addEventListener('click', function () {
    // Show the modal by setting the display property to 'block'
    modal.style.display = 'block';
    modal.style.transform = 'translateX(0)';
    modal.style.opacity = '1';
});

console.log("before:", closeButton);
// Add a click event listener to the close button
closeButton.addEventListener('click', function () {
    // Toggle the 'close' class on and off
    modal.classList.toggle('close');
    console.log("After:", closeButton);
    // modal.style.display = "block";
});
