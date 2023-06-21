// Task 1
let name = prompt("What's your name?").toLowerCase().trim() 
let account = +prompt("Enter your account number!")
let money = 10000

if(name === 'alex' && account === 7777) {

    let sum = +prompt("Hi Alex, how much do you want to cash out?")
    
    if(sum <= money ) {
        alert("You took " + sum + "$" + "." +" Your balance " + (money - sum) + "$") 
    } else {
    alert("You don'n have enough money(")
    }

} else {
    alert("User not found(")
}




// Task 2 
let nameTwo = prompt("What's your name?").trim()
let bookedPlaces = Math.floor(Math.random() * 8) 
console.log(bookedPlaces)

if(nameTwo[0].toUpperCase() === 'A') {

    let age = +prompt('How old are you ' + nameTwo + ' ?')

    if(age >= 20 && age <= 40) {

        let cash = +prompt('How much money do you have?')

        if(cash >= 100) {

            let quantity = +prompt('How many place do you want to book?')

            if(quantity + bookedPlaces <= 10) {
                alert('WELCOME)')
            } else {
                alert("There is no free place here(")
            }

        }else {
            alert("Go home " + nameTwo + "," + " because you don't have enough money")
        }

    }else {
        alert("Go home " + nameTwo)
    }
    
} else {
    alert("Entrance not allowed( " + nameTwo)
} 

