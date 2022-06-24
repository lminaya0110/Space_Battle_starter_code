//Player's stats
const ourSpaceship = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

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


//Begin Classes

class alienInvaders {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attack = this.attack.bind(this)
        }
        
        //method
            attack = function() {
            if(invaderShip.randomAccuracy > ourSpaceship.accuracy){
                ourSpaceship.hull -= 1;
                console.log('You\'ve been hit!!!');
            }
        }
    }  

    const invaderShip = new alienInvaders(randomHull, randomFirepower, randomAccuracy);
    console.log(invaderShip);

    console.log(ourSpaceship.hull);



    





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