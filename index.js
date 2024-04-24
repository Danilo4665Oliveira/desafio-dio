var nomeHeroi = "Danilo"
var rankDeLiga ="10001"

var nivel

if(rankDeLiga < 1000){
  nivel="Ferro";
}else if(rankDeLiga >=1001 && rankDeLiga <=2000){
  nivel="Bronze";
}else if(rankDeLiga >=2001 && rankDeLiga <=5000){
  nivel="Prata";
}else if(rankDeLiga >=5001 && rankDeLiga <=7000){
  nivel="Ouro";
}else if(rankDeLiga >=7001 && rankDeLiga <=8000){
  nivel="Platina"
}else if(rankDeLiga >=8001 && rankDeLiga <=9000){
  nivel="Ascendente";
}else if(rankDeLiga >=9001 && rankDeLiga <=10000){
  nivel="Imortal"
}else{
  nivel="Radiante";
}

console.log("O jogador " + nomeHeroi +" está no rank: "+nivel)