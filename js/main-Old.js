var data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth();
var dia = data.getDate();
var id = 0;
var temp = '';
var buffTemp = '';
var onOff = 0;

var array_mes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
				 "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

document.getElementById('ano').innerHTML = ano;
document.getElementById('nome-mes').innerHTML = array_mes[mes];

var list = document.getElementsByClassName("btn-menu")[mes];
list.getElementsByClassName("indicador")[0].style.backgroundColor = '#E91E63';


function offLine() {
	var strJsonVerifi = localStorage.getItem('dadosJson');
	if (strJsonVerifi != null) {
		load_dados();
	}else{
		//setTimeout(errorInternet, 500);
		// console.log(strJsonVerifi);
		errorInternet();
	}
}

function errorInternet(){
	document.getElementById("section").innerHTML = '<section class="bloco" id="no-internet">\
													 <span>Sem Conexão com a internet</span>\
									<a href="" onclick="grava_dados()"><div class="tentar" >Tentar novamente </div></a>\
			    					</section>';
}


function escreveNomeMes(e){
	//escreve o nome do mes
		document.getElementById('nome-mes').innerHTML = array_mes[e];
}




var btnHeader = document.getElementById('ico');
btnHeader.addEventListener('click', abreMenu);

function abreMenu() {
	var btnMenu = document.getElementsByClassName('btn-menu');
	//btnMenu[mes].style.backgroundColor = '#E91E63';
	var i;
	var marginTop = 3.125;

	for (i = 0; i < btnMenu.length; i++) {
		btnMenu[i].style.transition = 'all .2s linear';
		// btnMenu[i].addEventListener('click', abreMenu);
	}

	if (onOff == 0) {
		document.getElementsByClassName('fundo-ico-box')[0].style.transform = 'scale(1)';

		for (i = 0; i < btnMenu.length; i++) {
			btnMenu[i].style.marginTop = marginTop.toString() + 'rem';
			btnMenu[i].style.visibility = 'visible';
			marginTop += 2.5;
		}

		onOff = 1;
	}else{

		document.getElementsByClassName('fundo-ico-box')[0].style.transform = 'scale(0)';
		// document.getElementById('menu-header-check').checked = false;

		for (i = 0; i < btnMenu.length; i++) {
			btnMenu[i].style.marginTop = '0.375rem';
			btnMenu[i].style.visibility = 'hidden';
		}

		onOff = 0;
	}
}

function grava_dados() {
	try{	

	var strJson = JSON.stringify(dados);
	window.localStorage.setItem('dadosJson', strJson);
	load_dados();

	}
	catch(err) {
		offLine();
	}
}

function load_dados(){
	try{

		strDados = window.localStorage.getItem('dadosJson');
		var objJson = JSON.parse(strDados);
		var str = array_mes[mes];
		str = str.slice(0,3);
		var res = 'rd-' + str.toLowerCase();

		//limpa a tela
		document.getElementById('section').innerHTML =  '';

		//escreve o nome do mes
		document.getElementById('nome-mes').innerHTML = array_mes[mes];
		
		//carrega o mes corrente
		document.getElementById(res).checked = true;

		buffTemp = '';

		for (var i = 0; i < array_mes.length; i++) {

			id = array_mes[i];

			temp = '';

			for (var d = 0; d < objJson[id].length; d++) {
				temp += '<div class="row"><div class="dia">'+ objJson[id][d]["dia"] +'</div><div class="evento">\
						<div class="descricao">'+ objJson[id][d]["evento"] +'</div>\
						<div class="dia-semana">'+ objJson[id][d]["dia_semana"] +'</div></div></div>';
			
			}

			//console.log(temp);
			buffTemp += '<section class="bloco" >\n' + temp + '\n</section>\n';
		
		}

		document.getElementById('section').innerHTML =  buffTemp;

	}
	catch(err) {
		offLine();
	}
    
}

// window.onload = function(){
// 	setTimeout(grava_dados, 500);
// }

