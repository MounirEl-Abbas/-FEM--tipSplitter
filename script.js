const billTotalEl = document.getElementById('input-bill-total')
const numPeopleEl = document.getElementById('number-of-people')
const peopleErrorEl = document.querySelector('.people-amount >p >span')

const percent5El = document.getElementById('5-percent')
const percent10El = document.getElementById('10-percent')
const percent15El = document.getElementById('15-percent')
const percent25El = document.getElementById('25-percent')
const percent50El = document.getElementById('50-percent')
const percentCustomEl = document.getElementById('custom-percent')

const tipEachEl = document.getElementById('result-tipPerPerson')
const totalEachEl = document.getElementById('result-totalPerPerson')
const resetBtnEl = document.getElementById('reset')

/************************************
 * Event Listeners
************************************/
billTotalEl.addEventListener('change', getBillTotal)

percent5El.addEventListener('click', getTipPercent)
percent10El.addEventListener('click', getTipPercent)
percent15El.addEventListener('click', getTipPercent)
percent25El.addEventListener('click', getTipPercent)
percent50El.addEventListener('click', getTipPercent)
percentCustomEl.addEventListener('change', getTipPercent)

numPeopleEl.addEventListener('change', getNumPeople)


/************************************
 * Functions
************************************/
let reservation = {}

function getBillTotal(){
  const billTotal = Number(billTotalEl.value)
  reservation.billTotal = billTotal
  calculateTip()
}

function getTipPercent(e){
  e.target.classList.toggle('selected')
  let tipPercent = Number(e.target.value)
  reservation.tipPercent = tipPercent
  calculateTip()
}

function getNumPeople(){
  const numPeople = Number(numPeopleEl.value)
  reservation.numPeople = numPeople
  calculateTip()
}

function calculateTip(){
  // If missing an input from the user
  if(!reservation.billTotal || !reservation.tipPercent || !reservation.numPeople){
    // Do nothing
    
  }else{
    calculateTipPerPerson()
  }
}


function calculateTipPerPerson(){
  let tipPerPerson = reservation.billTotal * (reservation.tipPercent / 100) / reservation.numPeople
  //  Limit answer to 2 decimal places with (.toFixed())
  tipEachEl.textContent = `$${tipPerPerson.toFixed(2)}`
  // Pass tip amount to calculate total per person
  calculateTotalPerPerson(tipPerPerson)

}
function calculateTotalPerPerson(tipPerPerson){
  let totalPerPerson = (reservation.billTotal / reservation.numPeople) + tipPerPerson 
  // Limit answer to 2 decimal places with (.toFixed())
  totalEachEl.textContent = `$${totalPerPerson.toFixed(2)}`
  console.log(reservation)
}


// Rest Button Logic
resetBtnEl.addEventListener('click', reset)

function reset(){
  reservation = {}
  billTotalEl.value = ''
  numPeopleEl.value = ''
  percentCustomEl.value = ''
  tipEachEl.textContent = '$0.00'
  totalEachEl.textContent = '$0.00'
  

}