// factoriel de 1 et 0 = 1 

let nb = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1;

for (i = 0; i < nb; i++){
    result = result * (nb - i);
}

console.log(nb + '! =' + result);
