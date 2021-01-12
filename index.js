// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = 'clear';



// Write code to generate the LC04 report here:
let lC04 = 
`> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: ${date}
Time: ${time}

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: ${astronautCount}
* status: ${astronautStatus}

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelLevel}%

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: ${crewMassKg} kg
* Fuel mass: ${fuelMassKg} kg
* Shuttle mass: ${shuttleMassKg} kg
* Total mass: ${totalMassKg} kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: ${weatherStatus}

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES
`;



// When done, have your TA check your code.
console.log(lC04);

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.