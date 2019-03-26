class Ponto{
    constructor(id){
        this.ponto = createVector(random(width), random(height));
        this.letra = letrasModelo[id];
        this.cor = corModelo[id];
    }
}


class Pontos{
    static add(id){
        try{
            if(Pontos.array == undefined){
                Pontos.array = new Array();
            }
            Pontos.array.push(new Ponto(id));    
        }catch(err){
            alert('Erro Pontos.add(): '+err);
        }
    }
    
    static permutacao(arrayPontos){
        try{

            var ultimoMenor = -1;
            for(var k = 0; k< (arrayPontos.length - 1);k++){
                if(arrayPontos[k].letra < arrayPontos[k+1].letra){
                    ultimoMenor = k;
                }
            }
        
            if(ultimoMenor < 0)return null;
            
            var ultimoMaior = -1;
            for(var m = 0; m < (arrayPontos.length); m++){
                if(arrayPontos[ultimoMenor].letra < arrayPontos[m].letra){
                    ultimoMaior = m;
                }
            }

            swap(arrayPontos, ultimoMenor, ultimoMaior);
            
            
            var arrayPontosEnd = arrayPontos.splice(ultimoMenor + 1); 
            
            
            arrayPontosEnd.reverse();
                
            arrayPontos = arrayPontos.concat(arrayPontosEnd);
            
            return arrayPontos; 
            
        }catch(err){
            alert('Erro Pontos.permutacao(): '+err);
        }

    }

    
    static toString(array){
        try{
            var str = '';
            for(var i = 0; i < array.length;i++){
                str += array[i].letra; 
            }
            return str;    
        }catch(err){
            alert('Erro Pontos.add(): '+err);
        }
    }
    
    
    
}


//alert('Class Ponto OK');