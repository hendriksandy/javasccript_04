const age = 25;
const isFemale = true;
const driverStatus = "sjaak";
const name = "karel"
const totalAmount = 90;

if (age >= 18) {
    console.log("je mag naar binnen")

} else {
    console.log("je mag niet naar binnen")
}

if (isFemale) {
    console.log("je bent een vrouw")
} else {
    console.log("je bent geen vrouw")
}


if (driverStatus == "bob") {
    console.log("je bent de bob en mag rijden")
} else {
    console.log("je bent een zuiplap en mag niet meer autorijden")
}

if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting")
} else {
    console.log("helaas je krijgt geen korting")
}

if (name === "sara" || name === "bram") {
    console.log("Omdat we vandaag 50 jaar bestaan krijg je een gratis biertje")
} else {
    console.log("omdat je geen bram of sara heet krijg je geen biertje van ons")
}

if (totalAmount === 100) {
    console.log("je krijgt een lapdance van iedereen die sara heet")
} else {
    console.log("als je iets meer besteed had dan zou je wat leuks krijgen ")
}