//estilizar botoes, fazer a tela parar um tempo a cada resposta dada, colocar todas as divs no mesmo lugar, dar uma cartegoria para o usuario

const telaInicial = document.getElementById('telaInicial');
let fim = document.getElementById('fim');
const botaoIniciar = document.getElementById('botaoIniciar');

//div com a pergunta e as alternativas 
let questaoAtual = document.getElementById('questaoAtual');

//h3 com o enunciado da questao
let enunciado = document.getElementById('enunciado');

//alternativas
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');

//variaveis para saber o numero da questao, as respostas erradas e corretas 
let questaoN = 0;
let respostasCertas = 0;

//vetores contendo cada questao
let perguntas = ["Quando Foi Lançado o Primeiro Street Fighter?", 
                 "Onde fica localizada a zona de quarentena onde Ellie passa a maior parte de sua infância?",
                 "Quando um esqueleto mata um Creeper, ele dropa um:",
                 "Assinale a afirmativa correta sobre Arthur:",
                 "Qual foi a Primeira Apariçao de Yoshi em Mario?",
                 "O que o Sonic gosta de comer?",
                "Em que Reino citado abaixo é capaz de fazer com que Kratos reveja seu pai (Zeus)?(GOW 2018)",
                "Qual o nome do personagem/narrador de de Call of Duty: Black Ops 2",
                "Qual é o nome da organização criminosa que serve como principal antagonista em Resident Evil 4?",
                "Em Mortal Kombat, qual personagem não pertence ao Reino da Terra (Earthrealm)?"]; 

//variavel contendo o numero de perguntas 
let totalDePerguntas = perguntas.length;

//matriz contendo as possiveis respostas
let respostas = [
  ['A. 1988', 'B. 1985', 'C. 1990', 'D. 1987', 'E. 1984'],
  ['A. Pittsburgh', 'B. Seattle', 'C. Boston', 'D. Jackson', 'E. São Paulo'],
  ['A. TNT', 'B. Disco', 'C. Polvora', 'D. Osso', 'E. Sílex'],
  ['A. Um membro da temida Gangue van Der Linde', 'B. Uma pessoa que quer vingar a morte de sua esposa e filho', 'C. Um Caçador de Recompensas', 'D. Um Policial que foi demitido de sua Organizaçao', 'E. Bandido'],
  ['A. Super Mario Bros', 'B. Mario Bros', 'C. Super Mario Land', 'D. New Super Marios Bros 2', 'E. Super Mario World'],
  ['A. Batata Frita', 'B. Pão', 'C. Hot Dog', 'D. Carne', 'E. Frango'],
  ["A. Niflheim", "B. Jotunheim", "C. Helheim", "D. Alfheim", "E. Vanaheim"],
  ["A. Alex Mason", "B. Frank Woods", "C. David Mason", "D. Raul Menendez", "E. Hudson"],
  ["A. Umbrella Corporation", "B. Tricell Corporation", "C. Los Iluminados", "D. Blue Umbrella", "E. Neo-Umbrella"],
  ["A. Liu Kang", "B. Sub-Zero", "C. Raiden", "D. Scorpion", "E. Quan Chi"]
];

//respostas corretas
const gabarito = ['d', 'c', 'b', 'a', 'e', 'c', 'c', 'b', 'c', 'e',];

//funcao que inicia o quiz 
function iniciar(){
  telaInicial.classList.remove('aparecer');
  telaInicial.classList.add('naoAparecer');
  questaoAtual.classList.toggle('aparecer');
  questaoAtual.classList.remove('naoAparecer');
  botaoIniciar.classList.add('naoAparecer'); 
}

//primeira questao
enunciado.textContent = (questaoN + 1 + ".  ") + perguntas[0];
a.textContent = respostas[0][0];
b.textContent = respostas[0][1];
c.textContent = respostas[0][2];
d.textContent = respostas[0][3];
e.textContent = respostas[0][4];


//funcao q verifica se a resposta esta certa ou errada 
function verificar(respostaU){
    if(respostaU != gabarito[questaoN]){
    enunciado.textContent = "Errou! Resposta Certa: " + gabarito[questaoN];
  }
  
  else{
    enunciado.textContent = "Parabéns! Resposta Correta";
    respostasCertas++;
  }
  questaoAtual.classList.add('bloquearAlternativas');
setTimeout(() => {
  //incremento para mudar de questão
  questaoN++;

  //caso a proxima questao for maior ou igual ao numero de perguntas o programa acaba
  if(questaoN >= totalDePerguntas){                   
    resultados();
  }
  //se nao o programa continua 
  else{
    proximaQuestao(questaoN);
  }
  questaoAtual.classList.remove('bloquearAlternativas');
}, 2000);

}
//funcao para a proxima questao

function proximaQuestao(proxima){
  
  parseInt(proxima)
  enunciado.textContent = (proxima + 1 + ".  ") + perguntas[proxima];
  a.textContent = respostas[proxima][0];
  b.textContent = respostas[proxima][1];
  c.textContent = respostas[proxima][2];
  d.textContent = respostas[proxima][3];
  e.textContent = respostas[proxima][4];
  
}

function resultados(){
  questaoAtual.classList.remove('aparecer');
  questaoAtual.classList.toggle('naoAparecer');
  fim.classList.toggle('aparecer');
  fim.classList.remove('naoAparecer');
  const numeros = document.getElementById('numeros');
  const classe = document.getElementById('classe');
  const classeTexto = document.getElementById('classeTexto');

  numeros.textContent = "Resultado: " + respostasCertas + "/10";
  if(respostasCertas <= 3){
    classe.textContent = "Noob";
    classeTexto.textContent = "Você provavelmente não é um gamer";
  }
  else if(respostasCertas > 3 && respostasCertas <= 6){
    classe.textContent = "Novato";
    classeTexto.textContent = "Você provavelmente joga casualmente ou joga poucos jogos";
  }
  else if(respostasCertas > 6 && respostasCertas <= 8){
    classe.textContent = "Viciado";
    classeTexto.textContent ="Você provavelmente joga bastante jogos e tem uma vida social um pouco debilitada, mas nada que te atrapalhe";
  }
    
  else{
    classe.textContent = "Sem vida social";
    classeTexto.textContent ="Já pensou em sair um pouco da frente do pc ou do video-game? Talvez ler, sair um pouco... Essas coisas fazem bem sabia ??";
  }
}

function recomecar(){
  location.reload();
}