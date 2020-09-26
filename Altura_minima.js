function lowestTriangle(base, area) {
  let altura = (area / base) * 2;

  return Math.ceil(altura);
}

let base = 17;
let area = 100;

console.log(
  `\nPara um triângulo de base ${base} e área ${area} a altura mínima 
precisa ser ${lowestTriangle(base, area)}\n`
);
