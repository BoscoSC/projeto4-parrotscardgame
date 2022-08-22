//perguntar numero de cartas 4 a 14
let qntCarta = prompt("Qual o numero de cartas? (mínimo de 4 e máximo de 14, só numeros pares)");

//confirmar se é entre 4 e 14
//confirmar se o numero é par
let par = qntCarta % 2;

while(qntCarta < 4 || qntCarta > 14 || par != 0){
  qntCarta = prompt("Numero inválido de cartas, tente de novo (mínimo de 4 e máximo de 14, só numeros pares)");
}

const cartas = [];

// cartas.length = qntCarta/2;
for(let i = 1; i != (qntCarta/2) +1; i++){
  cartas.push(i);
  cartas.push(i);
}

//aleatorizar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}
cartas.sort(comparador);
console.log(cartas);

//inserir as cartas aleatorias viradas pra baixo
const content = document.querySelector(".content");
content.innerHTML = ``;

for (let indice = 0; indice < cartas.length; indice++) {
  content.innerHTML += `
  <div onclick="turn(this)" class="card">
    <div class="front">
      <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/parrot/front.png" alt="">
    </div>

    <div class="back">
      <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${cartas[indice]}.gif" alt="">
    </div>
  </div>
  `;
}

//clique na carta vira ela (se estiver para baixo)
let x = 0;
if(x < 2){
  function turn(cartaClicada){
    cartaClicada.classList.toggle("turned");
    x = document.getElementsByClassName("turned").length;
    console.log(x); 
  }
}

//se tiver só uma carta virada pra cima ela fica virada ate outra carta ser virada

//Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo

//Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve aguardar 1 segundo e então virar as duas cartas para baixo novamente
