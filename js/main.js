
var data = new Date();
var mes = data.getMonth();
var dia = data.getDate();
var id = 0;
var temp = '';
var buffTemp = ''; 

var array_mes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
				 "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

function fechaMenu(e){
	//escreve o nome do mes
	document.getElementById('nomemes').innerHTML = array_mes[e];

	//fecha o menu lateral esquerdo
	document.getElementById('btnmenu').checked = false;
}

function CARREGA_DADOS(){
	var str = array_mes[mes];
	var res = 'rd_' + str.toLowerCase();

	//escreve o nome do mes
	document.getElementById('nomemes').innerHTML = array_mes[mes];
	//carrega o mes corrente
	document.getElementById(res).checked = true;

	buffTemp = '';

	for (var i = 0; i < array_mes.length; i++) {

		id = array_mes[i];

		temp = '';

		for (var d = 0; d < dados[id].length; d++) {
			temp += '<div class="wrap"><div class="dia"><span class="txt-dia">'+ dados[id][d]["dia"] +'</span></div>\
		<div class="evento"><span class="txt-evento">'+ dados[id][d]["evento"] +'</span></div>\
		<div class="dia-semana"><span>'+ dados[id][d]["dia_semana"] +'</span></div></div>';
			
		}

		//console.log(temp);
		buffTemp += '<section class="bloco" >\n' + temp + '\n</section>\n';
		
	}

	document.getElementById('sections').innerHTML =  buffTemp;
}

window.onload = function(){
	CARREGA_DADOS();
}

