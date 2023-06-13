class Timer {
    #date
    #monthNames = [
        "Jan",	
        "Feb",	
        "Mar",	
        "Apr",	
        "May", 
        "June", 
        "July", 
        "Aug", 
        "Sept", 
        "Oct", 
        "Nov", 
        "Dec"
    ];
    
    constructor(date) {
        this.#date = date
    }

    dateFormat() {
        return this.#date.getDate() + " " + this.#monthNames[this.#date.getMonth()]
    }

    time() {
        let hours = this.#date.getHours() > 9 ? this.#date.getHours() : "0"+this.#date.getHours()
        let minutes = this.#date.getMinutes() > 9 ? this.#date.getMinutes() : "0"+this.#date.getMinutes()
        return hours + ":" + minutes
    }
}

class Ball {
    #x
    #y
    #power


    constructor(x, y, power) {
        this.#x = x
        this.#y = y
        this.#power = power
    }

    updateX(x) {
        this.#x = x
    }

    updateInclination(y) {
        this.#y = y
    }

    updatePower(power) {
        this.#power = power
    }
}

class Player {
    #x
    #y 

    constructor(
        x,
        y
    ) {
        this.#x = x
        this.#y = y
    }

    x() {
        return this.#x
    }

    y() {
        return this.#y
    }

    updateY(y) {
        if (y >= 10 && y < 90) {
            this.#y = y
        }
    }
}

function timerRealTime() {
    const timerSelector = document.getElementById('date')
    const timer = new Timer(new Date())

    timerSelector.firstElementChild.innerHTML = timer.dateFormat()
    timerSelector.children[1].innerHTML = timer.time()
    setTimeout(timerRealTime, 1000);
}

function movePlayers(playerOne, playerTwo) {
    const playerOneSelector = document.getElementById('player1')
    const playerTwoSelector = document.getElementById('player2')

    addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            let value = playerOne.y() - 4
            playerOne.updateY(value)
        }
        
        if (event.key === "ArrowDown") {
            let value = playerOne.y() + 4
            playerOne.updateY(value)
        }

        if (event.key === "s") {
            let value = playerTwo.y() + 1
            playerTwo.updateY(value)
        }

        if (event.key === "w") {
            let value = playerTwo.y() - 1
            playerTwo.updateY(value)
        }

        playerOneSelector.style.top = playerOne.y()+"%"
        playerTwoSelector.style.top = playerTwo.y()+"%"
    });
    
    playerOneSelector.style.left = playerOne.x()+"%"
    playerTwoSelector.style.left = playerTwo.x()+"%"
}

function game() {
    let x = Math.round(Math.random() * 100)
    let y = Math.round(Math.random() * 100)
    let power = Math.round(Math.random() * 100)
    
    const playerOne = new Player(10, 50)
    const playerTwo = new Player(90, 50)
    const ball = new Ball(x, y, power)

    disableScroll
    movePlayers(playerOne, playerTwo)

    timerRealTime()
}

function render() {

}

function disableScroll() {

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


game()
