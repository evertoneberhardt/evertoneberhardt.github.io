var data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth();
var dia = data.getDate();
var id = 0;
var temp = '';
var buffTemp = '';
var strJson;
var versionCompare = 0;
var compare = 0;

var array_mes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
				 "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

var array_ponto = ["defumacao", "hinoAbertura", "camadaPaiOgum", "descarregoNaPorta", "chamadaCaboclo", "ogum", "inhansa", "xango", "matas", "oxum", "iemanja",
					 "oxala", "pontosCaboclosEmbora", "paiOgumEmbora", "hinoEncerramento", "baterCabeca"];

array_nome_ponto = [];				 

// var list = document.getElementsByClassName("btn-menu")[mes];
// list.getElementsByClassName("indicador")[0].style.backgroundColor = '#E91E63';


function loadJSON(url, local) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = respostaServidor;
  	xhttp.open("GET", url, true);
  	xhttp.send();
  function respostaServidor(){
  	if (xhttp.readyState == 4) {
  		if (xhttp.status == 200) {

  			if (local == 0) {
  				versionCompare = xhttp.responseText;
  				compare = xhttp.responseText;
  				grava_dados(xhttp.responseText, local);
  			} else {
  				grava_dados(xhttp.responseText, local);
  			}
  			
  		}else{
  			offLine();
  		}
  	}
  };
}

function grava_dados(jsonServidor, local) {
	try{

		if (local == 0) {

			var keyVersion = window.localStorage.getItem('version');

			if (!keyVersion) {
				window.localStorage.setItem('version', 0.1);
				keyVersion = window.localStorage.getItem('version');
			} 

			if (versionCompare > keyVersion) {
				window.localStorage.setItem('version', jsonServidor);
				loadJSON("https://evertoneberhardt.github.io/js/dados.json" , 1);
			}else{
				load_dados();
			}

			//
		}

		if (local == 1) {
			window.localStorage.setItem('dadosJson', jsonServidor);
			loadJSON("https://evertoneberhardt.github.io/js/pontos.json" , 2);
		} 
		if (local == 2) {
			window.localStorage.setItem('pontosJson', jsonServidor);
			load_dados();
		}

	}
	catch(err) {
		//offLine();
		console.log('grava dados  ' + err);
	}
}

function offLine() {

		var strJsonVerifiDados = localStorage.getItem('dadosJson');
		var strJsonVerifiPontos = localStorage.getItem('pontosJson');
		if (strJsonVerifiDados != null && strJsonVerifiPontos != null) {
			load_dados();
		}else{
			errorInternet();
		}
	
}

function errorInternet() {
	var net = document.getElementById("sem-internet");
	net.style.display = 'flex';
	net.innerHTML = '<span>Sem Conexão com a internet</span><a href=""><div class="tentar" >Tentar novamente </div></a>';
}

function load_dados() {
	try{

		strDados = window.localStorage.getItem('dadosJson');
		var objJson = JSON.parse(strDados);
		var str = array_mes[mes];
		str = str.slice(0,3);
		var res = 'rd-' + str.toLowerCase();
		var nomeMeses = '';

		buffTemp = '';

		for (var i = 0; i < array_mes.length; i++) {

			id = array_mes[i];
			nomeMeses = id;
			nomeMeses = nomeMeses.slice(0,3).toLowerCase();
			temp = '';


			for (var d = 0; d < objJson[id].length; d++) {

				temp += '<div class="row"><div class="dia">'+ objJson[id][d]["dia"] +'</div><div class="descricao"><div class="evento">'+ objJson[id][d]["evento"] +'</div>\
						 <div class="dia-semana">'+ objJson[id][d]["dia_semana"] +'</div></div></div>';
			
			}

			document.getElementById(nomeMeses).innerHTML = '<div class="header-mes"> <div id="mes">' + id + '</div> <div id="ano">' + ano + '</div> </div>' + temp;
		}

		document.getElementById(res).checked = true;
		load_pontos();
	}
	catch(err) {
		//offLine();
		console.log('load dados   '+ err);
	}
    
}

function load_pontos() {
	try{
		var strPontos = window.localStorage.getItem('pontosJson');
		var objPontos = JSON.parse(strPontos);
		var idp;
		var tempPonto = '';
		var buffPonto = '';
		for (var i = 0; i < array_ponto.length; i++) {
			idp = array_ponto[i];
			tempPonto = '';

			array_nome_ponto[i] = objPontos[idp][0]["nomePonto"];

			for (var p = 0; p < objPontos[idp].length; p++) {
				tempPonto += '<div class="txt-ponto">'+ objPontos[idp][p]["ponto"] +'</div><div class="spcPontos"><span class="separador"></span></div>'
				
			}

			buffPonto += '<section class="bloco-pontos" id="scroll-ponto">' + tempPonto + '</section>';
		}
		document.getElementById('bloco-pontos-pincipal').innerHTML = buffPonto;
		document.getElementById('titulo').innerHTML = array_nome_ponto[0];

		document.getElementById('container').style.display = 'block';
		document.getElementById('load-box') .style.display = 'none';
	}catch(err){
		console.log('load pontos   '+ err);
	}
}


window.onload = function() {
	loadJSON("https://evertoneberhardt.github.io/js/version.js", 0);
}