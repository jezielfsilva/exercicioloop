// 1 - Criar um contador de 0 a 10 usando for //

for (let number = 0; number <= 10; number++) {
    console.log(number);
}

// 2 - Criar um contador de 10 a 0 usando while //

let num = 10;
while (num >= 0) {
    console.log(num);
    num--;
}

// 3 - Contar todos os numeros pares de 0 a 100 usando for //

for (let par = 0; par <= 50; par++) {
    console.log(par*2);
}

// 4 - Conrar todos os numeros ímpares de 0 a 100 usando while //

let odd = 0;
while (odd <= 100) {
    console.log(odd);
    odd++;
}

// 5 - Logar uma lista usando Map e forEach //

const carsTips = ["pick-up","sedan","hatch","station vagon"];

carsTips.map(car => console.log(car));

const race = ["Nascar","F1","Indycar","Rally","Stadiun Trucks"];

race.forEach(tips => console.log(tips));