
let cards = [] 

let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Sudan",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard +secondCard
    isAlive = true
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random()*13)
    if (randomNumber > 10)  {
        return 11
    } else if (randomNumber === 1){
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21) {
        message = "You've won the Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "Oops! You've lost the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function drawNewCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}