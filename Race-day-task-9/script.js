// raceNumber is assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// variable that indicates whether a runner registered early or not
let registeredEarly = true;

// variable for the runner’s age
let runnerAge = 25;

// control flow statement that checks whether the runner is an adult AND registered early
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

// control flow statement that checks age and registration time to determine race time
if (runnerAge > 18 && registeredEarly) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    console.log("Please see the registration desk.");
}
