// JavaScript Document


class Historico{

    static add(arrayPontos){
        try{
        
                if(Historico.vetor == undefined){
                    Historico.vetor = [];
                }
                
                if(Historico.count == undefined){
                    Historico.count = 0;
                }    

                Historico.count++;
                return;
        
        //        if(Historico.count >= maximoCombinacoes){
        //            return NORDEMMAX;
        //        }
                
        
                var str = Pontos.toString(arrayPontos);
                if(Historico.vetor.indexOf(str) == -1){
                    Historico.vetor.push(str);
                    Historico.count++;            
                }else{
                    return ORDEMREPETIDA;
                }
                
                //if(Historico.count >= maximoCombinacoes){
                //    //alert('Limite de Combinações atingido = '+maximoCombinacoes);
                //    return NORDEMMAX;
                //}
                
                return 0;
                //vetorOrdem.forEach(function(item,index){alert(item);});
    
        }catch(err){
            alert('Erro Historico.add(): '+err);
        }
    
    }

    static getCount(){
        return Historico.count;
    }
    
    static salvarMelhorOrdem(arrayPontos){
        if(Historico.melhorOrdem == undefined){
            Historico.melhorOrdem = [];
        }
        
        Historico.melhorOrdem = arrayPontos.slice();
    }

}