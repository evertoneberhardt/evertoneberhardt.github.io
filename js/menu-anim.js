var onOff = 0;
var index = 0;

var btnPontosVoltar = document.getElementById('voltar');
var btnPontosAvancar = document.getElementById('avancar');
var btnHeader = document.getElementById('ico');
var radioPontos = document.getElementsByClassName('radio-pontos');
var btnFechaMenu = document.getElementsByClassName('btn-menu');

btnPontosVoltar.addEventListener('click', voltar);
btnPontosAvancar.addEventListener('click', avancar);
btnHeader.addEventListener('click', efeitoMenu);

for (var i = 0; i < btnFechaMenu.length; i++) {
	btnFechaMenu[i].addEventListener('click', fechaMenu);
}

function voltar() {
	if (index == 1) {
		document.getElementById('voltar').style.visibility = 'hidden';
		index -= 1;
		document.getElementById('titulo').innerHTML = array_nome_ponto[index];
		radioPontos[index].checked = true;
	} else {
		index -= 1;
		radioPontos[index].checked = true;
		document.getElementById('avancar').style.visibility = 'visible';
		document.getElementById('titulo').innerHTML = array_nome_ponto[index];
	}

}

function avancar() {
	if (index == 14) {
		document.getElementById('avancar').style.visibility = 'hidden';
		index += 1;
		document.getElementById('titulo').innerHTML = array_nome_ponto[index];
		radioPontos[index].checked = true;
	} else {
		document.getElementById('voltar').style.visibility = 'visible';
		index += 1;
		document.getElementById('titulo').innerHTML = array_nome_ponto[index];
		radioPontos[index].checked = true;

	}
}

function efeitoMenu() {
	var btnMenu = document.getElementsByClassName('btn-menu');
	var marginTopLeft = 3.75;
	var marginTopRight = 5.25;
	var marginLeft = 3.75;
	var i = 0;

	if (onOff == 0) {
		for (i = 0; i < btnMenu.length; i++) {
			if (i % 2 == 0) {
				btnMenu[i].style.visibility = 'visible';
				btnMenu[i].style.marginTop = marginTopLeft.toString() + 'rem';
				marginTopLeft += 3.25;
			} 
			else {
				btnMenu[i].style.visibility = 'visible';
				btnMenu[i].style.marginTop = marginTopRight.toString() + 'rem';
				marginTopRight += 3.25;
				btnMenu[i].style.marginLeft = marginLeft.toString() + 'rem';

			}
		}
		onOff = 1;
	} else {
		for (i = 0; i < btnMenu.length; i++) {
			btnMenu[i].style.marginTop = '0.75rem';
			btnMenu[i].style.marginLeft = '0.75rem';
			btnMenu[i].style.visibility = 'hidden';
		} 
		onOff = 0;
	}
}

function fechaMenu() {
	efeitoMenu();
	document.getElementById('menu-header-check').checked = false;
}