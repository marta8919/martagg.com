document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'biberon',
            img: 'img/biberon.png'
        },
        {
            name: 'biberon',
            img: 'img/biberon.png'
        },
        {
            name: 'bota',
            img: 'img/bota.png'
        },
        {
            name: 'bota',
            img: 'img/bota.png'
        },
        {
            name: 'caca',
            img: 'img/caca.png'
        },
        {
            name: 'caca',
            img: 'img/caca.png'
        },
        {
            name: 'chica',
            img: 'img/chica.png'
        },
        {
            name: 'chica',
            img: 'img/chica.png'
        },
        {
            name: 'lana',
            img: 'img/lana.png'
        },
        {
            name: 'lana',
            img: 'img/lana.png'
        },
        {
            name: 'paraguas',
            img: 'img/paraguas.png'
        },
        {
            name: 'paraguas',
            img: 'img/paraguas.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard () {
        for (let i= 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute ('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch (){
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Enhorabuena! Has ganado!'
        }
    }

    function flipcard () {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})

