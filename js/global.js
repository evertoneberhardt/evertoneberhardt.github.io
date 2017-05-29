
var data = new Date();
var mes = data.getMonth();
var arMes = [];
var cont = 0;



var arrmes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

//----Funcao para carregar o mes corrente ao carregar apagina pela primeira vez----
function CarregaMesInicial() {
	document.getElementById('mes').innerText = arrmes[mes];
}

//----funcao para atualizar o menu com o nome dos meses----
function carregaMenu(meses) {
	var ar = 0;
	
	for (var i = 0; i < arrmes.length ; i++) {

			if (i != meses) {
				arMes[ar] = i;
				ar++;

			} else{
				continue;
			}

					
		}
    
	
		document.getElementById('btn1' ).innerHTML = arrmes[arMes[0]];
		document.getElementById('btn2' ).innerHTML = arrmes[arMes[1]];
		document.getElementById('btn3' ).innerHTML = arrmes[arMes[2]];
		document.getElementById('btn4' ).innerHTML = arrmes[arMes[3]];
		document.getElementById('btn5' ).innerHTML = arrmes[arMes[4]];
		document.getElementById('btn6' ).innerHTML = arrmes[arMes[5]];
		document.getElementById('btn7' ).innerHTML = arrmes[arMes[6]];
		document.getElementById('btn8' ).innerHTML = arrmes[arMes[7]];
		document.getElementById('btn9' ).innerHTML = arrmes[arMes[8]];
		document.getElementById('btn10').innerHTML = arrmes[arMes[9]];
		document.getElementById('btn11').innerHTML = arrmes[arMes[10]];

		
}

//----Funcao para carregar os dados apartir do mes corrente do dispositivo----
function carregaMes(mes1) {
	document.getElementById('mes').innerText = arrmes[arMes[mes1]];
	mudaIcone();
	carregaDados(arrmes[arMes[mes1]]);
	carregaMenu(arMes[mes1]);
	
}

//----Funcao para carregar os dados do arquivo dados.js----
function carregaDados(dado) {
	var temp ='';
	document.getElementById('content').innerHTML = '';

	for (i = 0; i < dados[dado].length; i++ ) {

		temp += '<div class="wrap"><div class="dia"><span class="txt-dia">'+ dados[dado][i]["dia"] +'</span></div>\
		<div class="evento"><span class="txt-evento">'+ dados[dado][i]["evento"] +'</span></div>\
		<div class="dia-semana"><span>'+ dados[dado][i]["dia_semana"] +'</span></div></div>'

	}

	document.getElementById('content').innerHTML = '<div class="mrg"></div>\n' + temp;
}

//----Funcao Sair-----
function sair() {
	fechaApp.fechar();
}


//----Funcao para mudar icone do botao de menu----
function mudaIcone() {
	var str = document.getElementById('image').src;
	var res = str.slice(-8);
	
	if (res == 'menu.png') {
		document.getElementById('image').src = "imagens/back.png";
		document.getElementById('menu').style.zIndex = 2;
		document.getElementById('content').style.zIndex = 1;
	}
	if (res == 'back.png') {
		document.getElementById('image').src = "imagens/menu.png";
		document.getElementById('menu').style.zIndex = 1;
		document.getElementById('content').style.zIndex = 2;
	}
}


//----Chama as funcoes ao carregar apagina----
window.onload = function () {
    

	carregaMenu(mes);
	CarregaMesInicial();
	carregaDados(arrmes[mes]);
	

};