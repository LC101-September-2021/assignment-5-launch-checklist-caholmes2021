// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
 
   // Here is the HTML formatting for our mission target div.
   
      /*         <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageURL}">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty'
    }else if (isNaN(testInput)) {
        return 'Not a number'
    } else if (isNaN(testInput)) { 
        return 'Is a number'
    }
  }
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");

   if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
       alert("Remember - all fields are required! Please fill out the necessary information!");

   }else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number' || validateInput(fuelLevel) === 'Not a number' || validateInput(cargoLevel) === 'Not a number') {
       alert("Please remember to fill out the correct information that pertains to the field. Thanks!");

   } else {

       console.log(list)
       list.style.visibility = 'hidden';
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
       copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`

       let launchStatus = document.getElementById("launchStatus")
        if (fuelLevel <= 10000 && cargoLevel >= 10000) {
            fuel.innerHTML = "The fuel level is too low for launch!"
            cargo.innerHTML = "There is too much cargo on the shuttle for take off!"
            launchStatus.innerHTML = "The shuttle is not ready for launch"
            launchStatus.style.color = "red";
        }else if (fuelLevel > 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "The fuel level is high enough!"
            cargo.innerHTML = "The cargo mass is too high for this journey"
            launchStatus.innerHTML = "The shuttle is not ready for launch!"
            launchStatus.style.color = "red";
        }else if (fuelLevel < 10000 && cargoLevel < 10000) {
            fuel.innerHTML = "The fuel level is too low for launch!"
            cargo.innerHTML = "The cargo mass is low enough for launch!"
            launchStatus.innerHTML = "The shuttle is not ready for launch"
            launchStatus.stye.color = "red";

        } else (fuelLevel > 10000 && cargoLevel < 10000) 
            fuel.innerHTML = "The fuel level is high enough for launch!"
            cargo.innerHTML = "The cargo mass is low enough for launch!"
            launchStatus.innerHTML = "The shuttle is ready to launch!!"
            launchStatus.style.color = 'green';
        


    
   }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

