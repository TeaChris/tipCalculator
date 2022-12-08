const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const noOfPeople = document.getElementById('numberOfPeople')
const grandTotalBill = document.getElementById('grandTotal')
const billTotalAmount = document.getElementById('billAmount')
const tipPerson = document.getElementById('tipPerson')
const totalTip = document.getElementById('tipTotal')



// number of people
let peopleNumber = Number(noOfPeople.innerText)

// total bill per person
const calculateBill = () => {
    // bill from user converted to number
    const bill = Number(billInput.value)


    // tip from user converted to percentage
    const tipPercentage = Number(tipInput.value) / 100

    // total tip amount
    const tipAmount = bill * tipPercentage

    // total per person / no of people
    const total = tipAmount + bill

    // total amount of tip
    const tipGrandTotal = bill / 10

    // amount of tip per person
    const amountTipPerPerson = tipGrandTotal / peopleNumber


    // total / no of people
    const grandTotal = total / peopleNumber

    // displaying result
    grandTotalBill.innerText = `$${grandTotal.toFixed(1)}`
    billTotalAmount.innerText = `$${total}`
    totalTip.innerText = `$${tipGrandTotal.toFixed(1)}`
    tipPerson.innerText = `$${amountTipPerPerson.toFixed(1)}`
}

// splits the bill between more people
const increasePeople = () => {
    // increment the amount of people
    peopleNumber += 1

    // displaying no of people
    noOfPeople.innerText = peopleNumber

    // calculate bill based on number of people
    calculateBill()
}

// split the bill between fewer people
const decreasePeople = () => {
    // if amount is less than 1 or negative
    if (peopleNumber <= 1) {
        throw 'Hey! You can`t have less than 1 person'
        return
    }

    // decrement the number of people
    peopleNumber -= 1

    // displaying no of people
    noOfPeople.innerText = peopleNumber

    // calculate bill based on new number of people
    calculateBill()
}