class Desenho{

    static limparCanvas(){
        fill(50);
        rect(0, 0, canvas.width, canvas.height);
    }

    static desenharLinhas(arrayPontos){
        try{
                stroke(255);
                strokeWeight(3);
                noFill();
                beginShape();
                for(var i = 0; i < arrayPontos.length; i++){
                    vertex(arrayPontos[i].ponto.x, arrayPontos[i].ponto.y);
                }
                endShape();
        }catch(err){
                alert('Desenho.desenharLinhas(): '+err);
        }
    }
    
    static desenharElipses(arrayPontos){
        try{        
            for(var i = 0; i < arrayPontos.length; i++){
                fill(arrayPontos[i].cor)
                ellipse(arrayPontos[i].ponto.x, arrayPontos[i].ponto.y,50,50);
        	}
        }catch(err){
            alert('Desenho.desenharElipses(): '+err);
        }
    }
}




