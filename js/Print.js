class Print{

    static tempo(str){
        try{
            var debug = document.getElementById("debugTime");
            if(debug == undefined)return; 
            debug.innerHTML = str + ' ms';
        }catch(err){
            alert('Erro Print.time():'+err);
        }
    }

    static sequenciaAtual(arrayPontos, distancia){
        var debug = document.getElementById("debug");
        if(debug == undefined)return; 

        debug.innerHTML += Historico.getCount() + ' - ';
        Print.sequencia(arrayPontos, distancia, debug);
        debug.innerHTML +="</br>";        
    
    }

    static melhorCaminho(arrayPontos, distancia){
        try{                   
                  var debug = document.getElementById("debugBest");
                  if(debug == undefined)return; 
                  
                  debug.innerHTML = Historico.getCount() + ' - ';
          
                  Print.sequencia(arrayPontos, distancia, debug);        

        }catch(err){
            alert('Erro Print.MelhorCaminho:'+ err);
        }


    }
    
    static sequencia(arrayPontos, distancia, debug){
        try{
                for(var i = 0; i < arrayPontos.length; i++){
                    debug.appendChild(Print.getLetraColorida(arrayPontos[i]));
                }
                debug.innerHTML += ' ('+floor(distancia)+')';
        }catch(err){
            alert('Erro Print.sequencia:'+ err);
        }
    }
    
    static getLetraColorida(ponto){
        try{
            var h = document.createElement("h3");
            h.innerHTML = ponto.letra;
            h.className = "hCidade";
            h.style.color = "rgb(255,255,255)";
            h.style.backgroundColor = "rgb("+ponto.cor+")";
            return h;
        }catch(err){
            alert('getLetraColorida:'+ err);
        }
    } 

}
//alert('Print.js already');