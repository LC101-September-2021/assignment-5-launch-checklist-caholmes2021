const { pickPlanet, validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (response) {response.json().then (function (listedPlanets) {
       let index = Math.floor(Math.random() * (listedPlanets.length));
       listedPlanets = result;

         console.log(listedPlanets);
         console.log(myFetch());
         console.log(typeof jsonObject);
     })
   });

   preventDefault();
    return listedPlanets;
});
    pickPlanet();
    validateInput();
