<?php


/*<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/addons/p5.dom.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/addons/p5.sound.min.js"></script>
*/            

function criarHTMLCabecario(){
$str = '';
$n = "\n";
$t = "\t";
$t2 = "\t\t"; 
$t4 = "\t\t\t\t";

//    <meta charset="UTF-8">

$str =                //<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
'<!DOCTYPE html>
    <html>
        <head>
            ';
            
            
            $str.= '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
            $str.= '
            <title>SalesPerson</title>
            <link href="style.css" rel="stylesheet">
            
            <script src="js/utils.js"></script>
            <script src="js/Historico.js"></script>
            <script src="js/Desenho.js"></script>
            <script src="js/Print.js"></script>
            <script src="js/Command.js"></script>
            <script src="js/Ponto.js"></script>

            <script src="js/p5.min.js"></script>
            
            <script src="js/canvas.js"></script>
            <script src="js/cores.js"></script>
            <script src="js/javaScript.js"></script>
            <script src="js/movimento.js"></script>
            <script src="js/pizza.js"></script>
            <script src="js/propriedades.js"></script>
            

        </head>
        <body ><script src="js/sketch.js"></script>
';

    return $str;
}

function criarHTMLForm(){
global $_listaHiddens;
    $n = "\n";
    $t = "\t";
    $t2 = "\t\t"; 
    $t4 = "\t\t\t\t";

    $str = $t.'<form id="form" style="display:none;" >'.$n;
    foreach($_listaHiddens as $hidden){
        $str.=$t2.'<input type="hidden" id=hidden'.$hidden.' name=nm'.$hidden.'>'."\n"; 
    }
    $str.=$t.'</form>'.$n;

    return $str;
}

function criarHTMLArranjos(){
    echo '<table id="tableTarefas" class="classTableArranjos">';
    $i = 1;
    while($arranjo = Colecao::getArranjoOrdenado($i)){

        echo '<tr>';
            echo '<td tipo="arranjo" id='.$arranjo->id.' onclick="clique(this);">'.$arranjo->nome.'</td>';
        echo '</tr>';
        $i++;
    }
    echo '</table>';

}

function criarHTMLPropriedades(){
    $str =  '<table class="classTableArranjos">';

        $str.= '<tr>';
            $str.= '<td id=prop'.POPULACAO.' zid='.POPULACAO.' onclick="cliquePropriedade(this);">POPULACAO</td>';
            $str.= '<td id=prop'.URBANO.' zid='.URBANO.' onclick="cliquePropriedade(this);">URBANO</td>';
            $str.= '<td id=prop'.RURAL.' zid='.RURAL.' onclick="cliquePropriedade(this);">RURAL</td>';
            $str.= '<td id=prop'.DESLOCAMENTO.' zid='.DESLOCAMENTO.' onclick="cliquePropriedade(this);">DESLOCAMENTO</td>';
            $str.= '<td id=prop'.PIB.' zid='.PIB.' onclick="cliquePropriedade(this);">PIB</td>';
            $str.= '<td id=prop'.AGROPECUARIA.' zid='.AGROPECUARIA.' onclick="cliquePropriedade(this);">AGROPECUARIA</td>';
            $str.= '</tr><tr><td id=prop'.INDUSTRIA.' zid='.INDUSTRIA.' onclick="cliquePropriedade(this);">INDUSTRIA</td>';
            $str.= '<td id=prop'.SERVICOSPRIVADOS.' zid='.SERVICOSPRIVADOS.' onclick="cliquePropriedade(this);">SERVICOSPRIVADOS</td>';
            $str.= '<td id=prop'.SERVICOSPUBLICOS.' zid='.SERVICOSPUBLICOS.' onclick="cliquePropriedade(this);">SERVICOSPUBLICOS</td>';
            $str.= '<td id=prop'.IMPOSTOS.' zid='.IMPOSTOS.' onclick="cliquePropriedade(this);">IMPOSTOS</td>';
            $str.= '<td id=prop'.EMPRESAS.' zid='.EMPRESAS.' onclick="cliquePropriedade(this);">EMPRESAS</td>';
            $str.= '<td id=prop'.UNIDADES.' zid='.UNIDADES.' onclick="cliquePropriedade(this);">UNIDADES</td>';
            
        $str.= '</tr>';

    $str.= '</table>';
    return $str;

}



function criarHTMLCanvas(){

    $str = '
    <div class=tableAgenda">
        <table id="iddiv"  >
        <tr><td onclick="ColecaoCanvas.add();"><button>ADICIONAR GRAFICO</button></td></tr>    
        </table>
    </div>';
    return $str;
}


?>