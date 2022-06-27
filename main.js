//Enemy's range of stats
const alienSpaceship = {
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8]
}

//Random stat generators for alien invaders
randomHull = alienSpaceship.hull[Math.floor(Math.random()*alienSpaceship.hull.length)];
randomFirepower = alienSpaceship.firepower[Math.floor(Math.random()*alienSpaceship.firepower.length)];
randomAccuracy = alienSpaceship.accuracy[Math.floor(Math.random()*alienSpaceship.accuracy.length)];

class alienInvaders {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        }

        attackHuman() {
            if(invaderShip.accuracy > player1Ship.accuracy){
                console.log('Youve been hit!!');
                return player1Ship.hull -=1;
            } else{
                console.log('They missed!!')
            }
        }
        //how do i make this attack come after player1;s???????
        
    }  

    const invaderShip = new alienInvaders(randomHull, randomFirepower, randomAccuracy);
    console.log(invaderShip);

    class player1 {
        constructor(hull, firepower, accuracy) {
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
            }

            attackAlien() {
                if(player1Ship.accuracy > invaderShip.accuracy){
                    console.log('You hit the ship!');
                    return invaderShip.hull -=1;
                } else{
                    console.log('You missed!');
                }
            }
    }

    const player1Ship = new player1(20, 5, .7);
    console.log(player1Ship);

    player1Ship.attackAlien();
    invaderShip.attackHuman();

    console.log(invaderShip);
    console.log(player1Ship);

    



    





/////  Notes //////////////////

//  6 Alien Ships, they attack one at a time;
//  wait to see the outcome brfore deploying
//  another ship. 
//  We can only attack the aliens in order.
//  Create hasty retreat option after an alien
//  ship is destroyed.




//BIND METHOD TO USE IN EVENT LISTENER
// class Example {
// 	constructor(name){
// 		this.name = name
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.name
// 	}
// }

// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)




//EXAMPLE USE OF ACCURACY TO DETERMINE HIT:
// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');
// }
