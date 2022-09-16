// https://www.omnicalculator.com/conversion/cc-to-oz-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ozRadio = document.getElementById('ozRadio');
const ccRadio = document.getElementById('ccRadio');

let oz;
let cc = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ozRadio.addEventListener('click', function() {
  variable.textContent = 'cc';
  cc = v;
  result.textContent = '';
});

ccRadio.addEventListener('click', function() {
  variable.textContent = 'oz';
  oz = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ozRadio.checked)
    result.textContent = `oz = ${computeoz().toFixed(5)}`;

  else if(ccRadio.checked)
    result.textContent = `cc = ${computecc().toFixed(5)}`;
})

// calculation

function computeoz() {
  return Number(cc.value) / 29.574;
}

function computecc() {
  return Number(oz.value) * 29.574;
}