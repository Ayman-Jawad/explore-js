function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const twoMiles = 2;
const twoKilometer = milesToKilometer(twoMiles);
// console.log(twoKilometer);

// gram to kilogram

function gramToKilogram(gram){
    const kilogram = gram * 0.001;
    return kilogram;
}

const gram = 7000;
const kg = gramToKilogram(gram);
// console.log(kg)

// kg to g

function kgTogram(kg){
    const gram = kg * 1000;
    return gram;
}

const fiveKg = 5;
const Gram = kgTogram(fiveKg);
 console.log(Gram)