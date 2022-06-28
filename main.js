//Enemy's range of stats
const alienSpaceship = {
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8]
}

//Random stat generators for alien invaders
randomHull = alienSpaceship.hull[Math.floor(Math.random() * alienSpaceship.hull.length)];
randomFirepower = alienSpaceship.firepower[Math.floor(Math.random() * alienSpaceship.firepower.length)];
randomAccuracy = alienSpaceship.accuracy[Math.floor(Math.random() * alienSpaceship.accuracy.length)];

class alienInvaders {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        }

    }  
    let invaderShip = new alienInvaders(randomHull, randomFirepower, randomAccuracy);



    class player1 {
        constructor(hull, firepower, accuracy) {
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
            }

    }


    const player1Ship = new player1(20, 5, .7);
    // console.log(player1Ship);

//     // player1Ship.attackAlien();
//     // invaderShip.attackHuman();

    console.log(invaderShip);
    console.log(player1Ship);


// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)




function startGame() {
    alert('Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.');
    alert('Alien ship has been spotted!')
    let chooseAttack = prompt("Do you choose to attack?");
    // while (chooseAttack === "") {
    //     alert("Please type attack in the field!")
    //     let chooseAttack = prompt("Type in attack");
    // }

    alert("You chose " + chooseAttack);
    
    attackAlien();
    attackHuman();

    

}



    function attackAlien() {
        if(player1Ship.accuracy > invaderShip.accuracy){
            alert('You hit the ship!');
            return invaderShip.hull -=1;
        } else{
            alert('You missed!');
        }
    }

    function attackHuman() {
        if(invaderShip.accuracy > player1Ship.accuracy){
            alert('You\'ve been hit!!!');
            return player1Ship.hull -=1;


        } else{
            console.log('They missed!!')
        }
    }


startGame();