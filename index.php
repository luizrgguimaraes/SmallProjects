<?php
//include 'php/extracao.php';
//include 'php/classes.php';
include 'php/utils.php';
include 'php/html.php';
//include 'php/sql.php';
//include 'php/cores.php';
//include 'php/graficos.php';
//include 'php/hiddens.php';

//define('DB_HOST'        , "localhost\SQLEXPRESS");
//define('DB_USER'        , null);
//define('DB_PASSWORD'    , null);
//define('DB_NAME'        , "opinix");
//define('DB_DRIVER'      , "sqlsrv");
//define('W'      , 500);
//define('H'      , 500);


date_default_timezone_set('America/Sao_Paulo');
session_start();
//$Conexao = Conexao::getConnection();

//lerHiddens();

echo criarHTMLCabecario();
//echo criarHTMLForm();

echo '<div style="display:block;">
        <div id=debug class=classDivCaminhos></div>
    </div>
    <div class=classDivMelhorCaminho><p>Melhor Caminho</p>
    <div id=debugBest>
    </div>
    
    <p>Tempo de Processamento</p>
    <div id=debugTime></div>
</div>';

echo '<div name="Commands" class="divCommand">';

echo 'Número de Cidades(até 10): <input type="text" id="inputNumeroCidades" size=2 value=3 />';
echo '<button onclick="Command.clickGerar();" >GERAR PONTOS</button></br>';


echo '<button onclick="draw();" >GERAR CAMINHO</button>';
echo '<button id=btnAutomatico onclick="Command.clickAutomatico(this);" >AUTOMÁTICO</button></br>';


echo '</div>';


/* //TESTE PEARSON
$i = 1;
while($i<12){
    //debug($i);
    $j = $i+1;
    while($j<=12){
        //debug($i.' - '.$j);
        debug('pearson('.$stringTipos[$i].','.$stringTipos[$j].') = '.CalcularPearson(array($i, $j)));
        if(!isset($pearson[$i]))$pearson[$i] = 0;
        if(!isset($pearson[$j]))$pearson[$j] = 0;
        $pea = CalcularPearson(array($i, $j));
        $pearson[$i] += $pea;
        $pearson[$j] += $pea;
        $j++;
    }
    $i++;
}   
asort($pearson);
foreach($pearson as $key => $value){
    //debug('pearson['.$stringTipos[$key].'] = '.$value);
}   

*/

//


echo '</body></html>';fclose($filedebug);fclose($fileErro);
?>