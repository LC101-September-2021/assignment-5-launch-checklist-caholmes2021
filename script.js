// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let missionTarget = document.getElementById("missionTarget")
        missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
        <ol>
                <li>Name: ${planet.name}</li>
                <li>Diameter: ${planet.diameter}</li>
                <li>Star: ${planet.star}</li>
                <li>Distance from Earth: ${planet.distance}</li>
                <li>Number of Moons: ${planet.moons}</li?
        </ol>
        <img src = ${planet.image}">`
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       event.preventDefault();

        let list = document.getElementById("faultyItems")
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = (pilotInput.value);
        let copilotInput = document.querySelector("input[name=copilotName");
        let copilot = (copilotInput.value);
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = (fuelLevelInput.value);
        let cargoLevelInput = document.querySelector("input[name=cargoMass");
        let cargoLevel = (cargoLevelInput.value);
 

            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
   
});
