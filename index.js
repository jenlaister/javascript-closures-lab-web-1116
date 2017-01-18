const app = "I don't do much."

function bumpCounter(){
  var counter = 0
    function addBump() {
      counter++
    }
    function getBumps() {
      return counter
    }
    return { addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  var animalType = 'Shark'
  return function(deadlyDevice) {
    return { animalType, deadlyDevice }
  }
}


var sharkCreator = createAnimal()
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
