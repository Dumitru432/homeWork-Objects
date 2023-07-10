// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
const car = {
  manufacturer: "Renault",
  model: "Clio",
  yearOfRelease: 2013,
  average: 80,
  speed: 220,
};

// A method that displays the car info
function infoCar() {
  console.log(
    car.manufacturer +
      " " +
      car.model +
      " " +
      car.yearOfRelease +
      " " +
      car.average +
      " " +
      car.speed
  );
}

infoCar();

// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

function calculateTime(distance) {
  const timeWithoutBreaks = distance / car.average;
  const breaks = Math.floor(timeWithoutBreaks / 4);
  const totalTime = timeWithoutBreaks + breaks;

  console.log(totalTime);
}

calculateTime(120);

// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

const fractions = {
  fraction1: function () {
    const numarator = 8;
    const numitor = 5;
    return { numarator, numitor };
  },
  fraction2: function () {
    const numarator = 7;
    const numitor = 6;
    return { numarator, numitor };
  },
};

// A function for adding two fraction objects.

function add() {
  const totalResult = {
    totalNumarator:
      fractions.fraction1().numarator * fractions.fraction2().numitor +
      fractions.fraction2().numarator * fractions.fraction1().numitor,

    totalNumitor: fractions.fraction1().numitor * fractions.fraction2().numitor,
  };
  console.log(totalResult);
  return totalResult;
}
add();

// functie pentru a aduna doua fractii cu parametrii in paranteza
function AddTwoFractions(fraction1, fraction2) {
  const totalResult = {
    totalNumarator:
      fraction1.numarator * fraction2.numitor +
      fraction2.numarator * fraction1.numitor,

    totalNumitor: fraction1.numitor * fraction2.numitor,
  };
  console.log(totalResult);
  return totalResult;
}
//AddTwoFractions({ numitor: 23, numarator: 14 }, { numitor: 43, numarator: 24 });

// A function for subtracting two fraction objects.

function substract() {
  const totalResult = {
    totalNumarator:
      fractions.fraction1().numarator * fractions.fraction2().numitor -
      fractions.fraction2().numarator * fractions.fraction1().numitor,

    totalNumitor: fractions.fraction1().numitor * fractions.fraction2().numitor,
  };
  console.log(totalResult);
  return totalResult;
}
substract();

// A function for multiplying two fraction objects.

function multiply() {
  const totalResult = {
    totalNumarator:
      fractions.fraction1().numarator * fractions.fraction2().numarator,
    totalNumitor: fractions.fraction1().numitor * fractions.fraction2().numitor,
  };
  console.log(totalResult);
  return totalResult;
}
multiply();

// A function for dividing two fraction objects.

function dividing() {
  const totalResult = {
    totalNumarator:
      fractions.fraction1().numarator * fractions.fraction2().numitor,
    totalNumitor:
      fractions.fraction1().numitor * fractions.fraction2().numarator,
  };
  console.log(totalResult);
  return totalResult;
}
dividing();

// A function for simplifying a fraction object.
// nu am inteles nimic din aceasta functie, am scris o dupa Chat gpt

function simplifyingFractions() {
  function celMaiMareDivizorComun(a, b) {
    if (b === 0) {
      return a;
    }
    return celMaiMareDivizorComun(b, a % b);
  }

  const divizorComun =
    celMaiMareDivizorComun(
      fractions.fraction1().numarator,
      fractions.fraction2().numarator
    ) *
    celMaiMareDivizorComun(
      fractions.fraction1().numitor,
      fractions.fraction2().numitor
    );
  console.log("acesta" + divizorComun);

  const simplifiedFraction1 = {
    numarator: fractions.fraction1().numarator / divizorComun,
    numitor: fractions.fraction1().numitor / divizorComun,
  };
  const simplifiedFraction2 = {
    numarator: fractions.fraction2().numarator / divizorComun,
    numitor: fractions.fraction2().numitor / divizorComun,
  };

  return { fraction1: simplifiedFraction1, fraction2: simplifiedFraction2 };
}

console.log(simplifyingFractions());

// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

const time = {
  hours: 12,
  minutes: 34,
  seconds: 56,
};

//A method for displaying the time.
function displayTime() {
  let displayHours = time.hours;
  let displayMinutes = time.minutes;
  let displaySeconds = time.seconds;
  console.log(`${displayHours}: ${displayMinutes}: ${displaySeconds}`);
}
displayTime();

// A method for changing the time by a given amount of seconds.

function amountOfSeconds(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hourString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
  const minuteString =
    minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "";
  const secondString =
    remainingSeconds > 0
      ? `${remainingSeconds} second${remainingSeconds > 1 ? "s" : ""}`
      : "";

  if (hours > 0) {
    return `${hourString} : ${minuteString || "0 minute"}: ${
      secondString && ` : ${secondString}`
    }`;
  } else if (!hours && minutes > 0) {
    return `${minuteString} ${secondString && `: ${secondString}`}`;
  }
  return secondString;
}
const result = amountOfSeconds(12341);
console.log(result);

// A method for changing the time by a given amount of minutes. 

function amountOfMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minute = totalMinutes % 60
  const seconds = Math.floor(minute / 60); 
  
  return `${hours} hour: ${minute} minute:${seconds} seconds`

}
console.log(amountOfMinutes(45))

// A method for changing the time by a given amount of hours. 

 function amountOfHours(hours){
 const minute = Math.floor(hours / 60)
 //calculate the number of remaining hours
 const remainingHours = hours % 60
 // calculate the number of remaining minutes
 const remainingMinutes = minute % 60
 return `${hours}: ${remainingMinutes}: ${remainingHours}`

}

console.log(amountOfHours(238))

