var cidades = [];
var letras = [];
var cor = [];

var menorDistancia = 0;
const ORDEMREPETIDA = 1;
const NORDEMMAX = -1;  
const FRAMERATE = 200;
const CANVASW = 400;
const CANVASH = 400;

letrasModelo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];
corModelo = [[139,69,19] //marrom
    ,[0,0,0]    //preto
    ,[47,79,79]   //verde cinzento
    ,[124,252,0] //verde claro
    ,[0,0,128]   //azul
    ,[205,51,51] //vermelho
    ,[139,10,80]//rosa
    ,[255,25,0] //amarelo
    ,[139,0,0] //vermelho escuro
    ,[255,69,0] //laranja
    ,[30,30,30]//rosa
    ,[60,60,60] //amarelo
    ,[100,100,100] //vermelho escuro
    ,[150,150,150] //laranja
    ,[200,200,200] //laranja
    ];

function setup() {
    
    createCanvas(CANVASW, CANVASH);
	frameRate(FRAMERATE);
    noLoop();

}

function draw(teste) {

    try{
        
            background(50);
        
            if(Command.askPontosGerados() == false){
                Command.clickGerar();
                return;
            }
            
            if(Command.getAutomaticoStatus() && !Command.getIniTime()){
                Command.setIniTime();
            }
            
            Desenho.desenharElipses(Pontos.array);
            Desenho.desenharLinhas(Pontos.array);
            var distancia = Command.calcularDistancia(Pontos.array);
        
            Historico.add(Pontos.array);
        
            Print.sequenciaAtual(Pontos.array,distancia);
            
            if(distancia < menorDistancia || menorDistancia == 0){
                menorDistancia = distancia;
                Print.melhorCaminho(Pontos.array, distancia);
                Historico.salvarMelhorOrdem(Pontos.array);
            }
            
            if(Historico.count == fatorial(Pontos.array.length)){
                Desenho.limparCanvas();
                Desenho.desenharElipses(Pontos.array);
                Desenho.desenharLinhas(Historico.melhorOrdem);
                var tfinal = new Date();
                Print.tempo(tfinal - Command.getIniTime());
                noLoop();
            }
            
            Pontos.array = Pontos.permutacao(Pontos.array);
            
    }catch(err){
        alert('Erro draw: '+err);
    }            
            
    
}




function trocarPosicao(){
    var ordem = [];
    var i = floor(random(cidades.length));
    var j = floor(random(cidades.length));
    swap(cidades,i,j);
    swap(letras,i,j);
    swap(cor,i,j);
    
    var nCidades = Command.getnumeroCidades();
    for(var i = 0; i < nCidades; i++){
        ordem[i] = letras[i];
    }
    
    return ordem;
}

function getOrdem(){
    try{
        var ordem = [];
        var nCidades = Command.getnumeroCidades();
        for(var i = 0; i < nCidades; i++){
            ordem[i] = letras[i];
        }
        return ordem;
    }catch(err){
        alert('Erro getOrdem '+err);
    }
}

function fatorial(t){
    
    if(t==0)return 1;
    return t*fatorial(t-1);
}

function swap(v,i,j){
    var temp = v[i];
    v[i] = v[j];
    v[j] = temp;
}


//alert('sketch.js already!');