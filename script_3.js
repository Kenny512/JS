count = 1
select = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let x = "#";
  for (a = 0; a <= select; a += 1){
    console.log(x.repeat(count));
    count += 1;
  }
