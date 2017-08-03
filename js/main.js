var strJson='';var objJson='';var data=new Date();var mes=data.getMonth();var dia=data.getDate();var id=0;var temp='';var buffTemp='';var array_mes=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"];function check_version(){try{if(localStorage.key_version==version){load_dados();}else{document.getElementsByTagName('script')[1].setAttribute('src','https://evertoneberhardt.github.io/js/dados.js');document.getElementsByTagName('script')[1].setAttribute('onload','grava_dados()');document.getElementsByTagName('script')[1].setAttribute('onerror','error()');}}
catch(err){erro_inesperado();}}
function grava_dados(){try{strJson=JSON.stringify(dados)
localStorage.setItem('dadosJson',strJson);localStorage.setItem('key_version',version);check_version();}
catch(err){erro_inesperado();}}
function load_dados(){try{objJson=JSON.parse(localStorage.dadosJson);var str=array_mes[mes];var res='rd_'+str.toLowerCase();document.getElementById('sections').innerHTML=''; document.getElementById('nomemes').innerHTML=array_mes[mes]; document.getElementById(res).checked=true;buffTemp='';for(var i=0;i<array_mes.length;i++){id=array_mes[i];temp='';for(var d=0;d<objJson[id].length;d++){temp+='<div class="wrap"><div class="dia"><span class="txt-dia">'+objJson[id][d]["dia"]+'</span></div>\
			<div class="evento"><span class="txt-evento">'+objJson[id][d]["evento"]+'</span></div>\
			<div class="dia-semana"><span>'+objJson[id][d]["dia_semana"]+'</span></div></div>';}
buffTemp+='<section class="bloco" >\n'+temp+'\n</section>\n';}
document.getElementById('sections').innerHTML=buffTemp;}
catch(err){erro_inesperado();}}
function error(){document.getElementById("sections").innerHTML='<section class="bloco" id="no-internet">\
													 <span>Sem Conexão com a internet</span>\
									<a href=""><div class="tentar" >Tentar novamente </div></a>\
			    					</section>';}
function erro_inesperado(){document.getElementById("sections").innerHTML='<section class="bloco" id="no-internet">\
													 <span>Erro: ocorreu um erro inesperado<br>\
														contate o desenvolvedor</span></section>';}
function fechaMenu(e){ document.getElementById('nomemes').innerHTML=array_mes[e]; document.getElementById('btnmenu').checked=false;}