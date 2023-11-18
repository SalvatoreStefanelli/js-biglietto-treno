const chilometers = prompt('Quanti km vuoi percorrere?');
console.log(chilometers);

const age = prompt('Quanti anni hai?');

const priceKm = 0.21;

const price = priceKm * chilometers;
console.log(price);

const saleYoung = (price * 20) / 100;

const priceYoung = price - saleYoung;
 
 if (age < 18) {
   
   console.log(priceYoung);
}


// if (age > 65) { 
    
//     price - 40%

// } 

// console.log('price');
