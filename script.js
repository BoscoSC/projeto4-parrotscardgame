//perguntar numero de cartas 4 a 14
let qntCarta = prompt("Qual o numero de cartas? (mínimo de 4 e máximo de 14, só numeros pares)");

//confirmar se é entre 4 e 14
//confirmar se o numero é par
let par = qntCarta % 2;

while((qntCarta < 4) || (qntCarta > 14) || (par != 0)){
  qntCarta = prompt("Numero inválido de cartas, tente de novo (mínimo de 4 e máximo de 14, só numeros pares)");
  par = qntCarta % 2;
}

//aleatorizar as cartas
const cartas = [];

for(let i = 1; i != (qntCarta/2) +1; i++){
  cartas.push(i);
  cartas.push(i);
}

function comparador() { 
	return Math.random() - 0.5; 
}
cartas.sort(comparador);

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

//clique na carta = vira ela (se estiver para cima)
let carta1, carta2;
let naoClicavel = false;
let paresCertos = 0;
let qntClique = 0;

function turn(cartaClicada){
  if(carta1 !== cartaClicada && !naoClicavel) {
    cartaClicada.classList.add("turned");

    if(!carta1) {
      return carta1 = cartaClicada;
    }

    else{
      carta2 = cartaClicada;
    }

    naoClicavel = true;

    let carta1img = carta1.querySelector(".back img").src;
    let carta2img = carta2.querySelector(".back img").src;
    parCerto(carta1img, carta2img);
  }
  qntClique++; //para quantidade de jogadas é só exlcuir a linha de baixo
  qntClique++; //quantidade de vezes que o usuário virou uma carta no jogo é o dobro, então fiz ++ duas vezes
}

//confere se o par é certo, se n for vira as duas cartas, se for tira a opção de clicar
function parCerto(img1, img2) {
  if(img1 == img2) {
    carta1.removeAttribute("onclick");
    carta2.removeAttribute("onclick");

    carta1 = "";
    carta2 = "";

    naoClicavel = false;

    paresCertos++;
  }

  else{
    setTimeout(() => {
      carta1.classList.remove("turned");
      carta2.classList.remove("turned");

      carta1 = "";
      carta2 = "";

      naoClicavel = false;
    }, 1000);
  }

  setTimeout(vitoria, 500);
}

//alert da vitoria se todas as pares estiverem certos
function vitoria() {
  if(document.querySelectorAll(".turned").length == cartas.length) {
    alert(`Você ganhou em ${qntClique} jogadas!`);
  }
}