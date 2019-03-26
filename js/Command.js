class Command{
    
    static calcularDistancia(arrayPontos){
        try{
        
                var distancia = 0;
                for(var i = 0; i < arrayPontos.length; i++){
                    if(i>0){
                        distancia += arrayPontos[i].ponto.dist(arrayPontos[i-1].ponto); 
                    }
                }
                return distancia;


        }catch(err){
            alert('Erro Command.calcularDistancia'+err);
            
        }

    }

    static clickAutomatico(obj){
        if(Command.statusAutomatico == undefined || Command.statusAutomatico == false){
            Command.statusAutomatico = true;
            loop();
        }else{
            Command.statusAutomatico = false;
            noLoop();
        }
        
        obj.classList.toggle("btnPressed");
    }

    static getAutomaticoStatus(){
         if(Command.statusAutomatico == undefined || Command.statusAutomatico == false){
            return false;
        }else{
            return true;
        }
    }

    static getnumeroCidades(){
        var input = $('inputNumeroCidades');
        Command.numeroCidades = input.value;
        return Command.numeroCidades; 
    }
    

    static clickGerar(){
        try{
            Command.gerarPontos(Command.getnumeroCidades());
            Desenho.limparCanvas();            
            Desenho.desenharElipses(Pontos.array);
            Command.pontosGerados = true;
        
        }catch(err){
            alert('Erro Command.clickIniciar'+err);
            
        }
    
    }
    
    static gerarPontos(nPontos){
        try{
                Pontos.array = new Array();
                for(var i = 0; i < nPontos; i++){
                    Pontos.add(i);
                }
        }catch(err){
            alert('Erro gerarPontos(): '+err);
        }
    }                    

    static askPontosGerados(){
        if(Command.pontosGerados == undefined || Command.pontosGerados == false){
            return false;
        }else{
            return true;
        }
    }
    
    static setIniTime(){
        try{
            var t = new Date;
            Command.iniTime = t.getTime();        
        }catch(err){
            alert('Erro Command.setIniTime():'+err);
        }
    
    }
    
    
    static getIniTime(){
        try{
            if(Command.iniTime == undefined){
                return false;
            }
            return Command.iniTime;        
        }catch(err){
            alert('Erro Command getIniTime():'+err);
        }
    
    }
    
}


function $(elid){ 

    try{

        var obj=document.getElementById(elid);

        if(obj){return obj;}else{

            //alert('ELEMENTO NAO ENCONTRADO:'+elid);
        }

        return false;

    }catch(err){

        //alert('Error on $('+elid+'): '+err);

    }

}

//alert('commeand');