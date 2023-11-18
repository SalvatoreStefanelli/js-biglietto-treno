// chilometri percorsi dall'utente
const chilometers = prompt('Quanti km vuoi percorrere?');
console.log(chilometers);

// età utente
const age = prompt('Quanti anni hai?');

// costo del biglietto
const priceKm = 0.21;
const price = priceKm * chilometers;
console.log(price);

// sconto per i minorenni
const saleYoung = (price * 20) / 100;
const priceYoung = price - saleYoung;
const priceYoung = Math.round(2.5);

// sconto per gli over 65
const saleSenior = (price * 40) / 100;
const priceSenior = price - saleSenior;

// Calcolo del prezzo del biglietto scontato per i minorenni
if (age < 18) {
   
   console.log(priceYoung);

// Calcolo del prezzo del biglietto scontato per gli over 65
} else if (age > 65) {

    console.log(priceSenior);
}
