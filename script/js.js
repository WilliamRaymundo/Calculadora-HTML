function insert(num){
    document.form.visor.value = document.form.visor.value + num;
}


var count = 0;//recebendo o valor 5 que você disse
var uso = 0;
var historico = document.getElementById("history");

$('#apagar').click(function(){
	document.form.visor.value = document.form.visor.value.substring(0,document.form.visor.value.length -1);
});

$('#resetar').click(function(){
	historico.innerHTML = "";
	document.form.visor.value = "";
	count = 0;
	uso = 0;

});




$('#soma').click(function(){
	/*Caso já tenha usado o igual*/
   if(uso == 1){
  	historico.innerHTML = "";
  	uso = 0;

  	/*Clicou na soma mas só tinha numero no visor*/
  		if(document.form.visor.value>0){
  			historico.innerHTML = count;
  			document.form.visor.value = " ";
  			document.form.visor.value = "+";
  		}
  	}else{
  		/*Verifica se o visor não está vazio*/
  		if(document.form.visor.value != ""){
  			/*Verifica se o visor tem sinal positivo ou negativo e se tem numero*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+") && document.form.visor.value.length > 1){
  				historico.innerHTML += document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "+";		
  			}else{
  				/*verifica se não tem sinal e se tem algum numero*/
  				if((document.form.visor.value.substring(1,-2) != "-" || document.form.visor.value.substring(1,-2) != "+") &&document.form.visor.value>0){
  					historico.innerHTML += "+"+document.form.visor.value;
  					count+=parseFloat(document.form.visor.value);
  					document.form.visor.value = " ";
  					document.form.visor.value = "+";
  				}
  			}
  		}
/*
  		if((document.form.visor.value.substring(1,-2) != "-" || document.form.visor.value.substring(1,-2) != "+" || document.form.visor.value.substring(1,-2) != "*") && document.form.visor.value.length > 0 ){
  			alert("4-");
  			count+=parseFloat(document.form.visor.value);
  			document.form.visor.value = " ";
  			document.form.visor.value = "+";
  			alert(count);
//
  			var mult = count * document.form.visor.value;
  			alert(mult);
  		}*/
  
  	}
  	/*if(document.form.visor.value.substring(1,-2) == "-"){*/

  /*verifica se não tem absolutamente nada no visor e coloca um sinal*/
  if(document.form.visor.value == ""){
  	document.form.visor.value = "+";
  	}
/*Caso queira trocar o sinal no visor*/
  if(document.form.visor.value == "-"){
  	document.form.visor.value = "+";
  	}		



});


$('#subt').click(function(){
/*Caso já tenha usado o igual*/
   if(uso == 1){
  	historico.innerHTML = "";
  	uso = 0;

  	/*Clicou na soma mas só tinha numero no visor*/
  		if(document.form.visor.value>0){
  			historico.innerHTML = count;
  			document.form.visor.value = " ";
  			document.form.visor.value = "-";
  		}
  	}else{
  		/*Verifica se o visor não está vazio*/
  		if(document.form.visor.value != ""){
  			/*Verifica se o visor tem sinal positivo ou negativo e se tem numero*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+") && document.form.visor.value.length > 1){
  				historico.innerHTML += document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "-";		
  			}else{
  				/*verifica se não tem sinal e se tem algum numero*/
  				if((document.form.visor.value.substring(1,-2) != "-" || document.form.visor.value.substring(1,-2) != "+") &&document.form.visor.value>0){
  					historico.innerHTML += "-"+document.form.visor.value;
  					count+=parseFloat(document.form.visor.value);
  					document.form.visor.value = " ";
  					document.form.visor.value = "-";
  				}
  			}
  		}
/*
  		if((document.form.visor.value.substring(1,-2) != "-" || document.form.visor.value.substring(1,-2) != "+" || document.form.visor.value.substring(1,-2) != "*") && document.form.visor.value.length > 0 ){
  			alert("4-");
  			count+=parseFloat(document.form.visor.value);
  			document.form.visor.value = " ";
  			document.form.visor.value = "+";
  			alert(count);
//
  			var mult = count * document.form.visor.value;
  			alert(mult);
  		}*/
  
  	}
  	/*if(document.form.visor.value.substring(1,-2) == "-"){*/

  /*verifica se não tem absolutamente nada no visor e coloca um sinal*/
  if(document.form.visor.value == ""){
  	document.form.visor.value = "-";
  	}
	/*Caso queira trocar o sinal no visor*/
  if(document.form.visor.value == "+"){
  	document.form.visor.value = "-";
  	}	
  	/*caso esteje multiplicando e quer colcoar um valor negativo*/
  	if((document.form.visor.value.substring(1,-2) == "*" || document.form.visor.value.substring(1,-2) == "/") && document.form.visor.value.substring(1) == ""){
  		document.form.visor.value += "-";
  	}




});

$('#multi').click(function(){

	/*Caso já tenha usado o igual*/
   if(uso == 1){
  	historico.innerHTML = "";
  	uso = 0;

  	/*Clicou na soma mas só tinha numero no visor*/
  		if(document.form.visor.value>0){
  			historico.innerHTML = count;
  			document.form.visor.value = " ";
  			document.form.visor.value = "*";
  		}
  	}else{
  		/*verificar se o visor está vazio*/
  		if(document.form.visor.value != ""){
  			/*verifica se tem algum digito mais algum valor no visor*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+" ) && document.form.visor.value.length > 1){
  				historico.innerHTML += document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "*";
  			}else{
  				/*verifica se tem algum valor sem sinal no visor*/
  				if(document.form.visor.value>0){
  				historico.innerHTML += "+"+document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "*";
  				}
  			}
  			/*verificar se há valor no count e se tem algum sinal no visor*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+") && count > 0 ){
  				document.form.visor.value = " ";
  				document.form.visor.value = "*";
  			}
  			/*verifica se tem o valor de multiplicação e se tem valor junto*/
  			if(document.form.visor.value.substring(1,-2) == "*" && document.form.visor.value.length > 1){
  				historico.innerHTML += ""+document.form.visor.value;
  				count = count * parseFloat(document.form.visor.value.substring(1));
  				document.form.visor.value = " ";
  				document.form.visor.value = "*";
  		}
      /*caso ele tenha começado uma divisão*/
        if(document.form.visor.value.substring(1,-2) == "/" && document.form.visor.value.substring(1) >0){
          count = count / parseFloat(document.form.visor.value.substring(1));
          historico.innerHTML += ""+document.form.visor.value;
          document.form.visor.value = " ";
          document.form.visor.value = "*";
        }
  
  	}
  	/*if(document.form.visor.value.substring(1,-2) == "-"){*/
/*
  if(document.form.visor.value == ""){
  	document.form.visor.value = "*"; 
  	}*/
}
});

$('#divi').click(function(){

	/*Caso já tenha usado o igual*/
   if(uso == 1){
  	historico.innerHTML = "";
  	uso = 0;

  	/*Clicou na soma mas só tinha numero no visor*/
  		if(document.form.visor.value>0){
  			historico.innerHTML = count;
  			document.form.visor.value = " ";
  			document.form.visor.value = "/";
  		}
  	}else{
  		/*verificar se o visor está vazio*/
  		if(document.form.visor.value != ""){
  			/*verifica se tem algum digito mais algum valor no visor*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+" ) && document.form.visor.value.length > 1){
  				historico.innerHTML += document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "/";
  			}else{
  				/*verifica se tem algum valor sem sinal no visor*/
  				if(document.form.visor.value>0){
  				historico.innerHTML += "+"+document.form.visor.value;
  				count+=parseFloat(document.form.visor.value);
  				document.form.visor.value = " ";
  				document.form.visor.value = "/";
  				}
  			}
  			/*verificar se há valor no count e se tem algum sinal no visor*/
  			if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+") && count > 0 ){
  				document.form.visor.value = " ";
  				document.form.visor.value = "/";
  			}
  			/*verifica se tem o valor de multiplicação e se tem valor junto*/
  			if(document.form.visor.value.substring(1,-2) == "/" && document.form.visor.value.length > 1){
  				historico.innerHTML += ""+document.form.visor.value;
  				count = count / parseFloat(document.form.visor.value.substring(1));
  				document.form.visor.value = " ";
  				document.form.visor.value = "/";
  		}
      /*caso ele tenha começado uma multiplicação*/
        if(document.form.visor.value.substring(1,-2) == "*" && document.form.visor.value.substring(1) >0){
          count = count * parseFloat(document.form.visor.value.substring(1));
          historico.innerHTML += ""+document.form.visor.value;
          document.form.visor.value = " ";
          document.form.visor.value = "/";
        }
  
  	}
  	/*if(document.form.visor.value.substring(1,-2) == "-"){*/
/*
  if(document.form.visor.value == ""){
  	document.form.visor.value = "*"; 
  	}*/
}
});

$('#raiz').click(function(){
  /*caso a pessoa já esteja fazendo um calculo*/
  if((document.form.visor.value.substring(1,-2) == "+" || document.form.visor.value.substring(1,-2) == "*" || document.form.visor.value.substring(1,-2) == "/") && document.form.visor.value.substring(1) >0 ){
  var raiz = Math.sqrt(document.form.visor.value.substring(1));
  aredond = raiz.toFixed(4);
  document.form.visor.value = document.form.visor.value.substring(1,-2) + aredond;


  }

  /*caso tente a raiz de um numero negativo*/
   if(document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(2,-3) == "*-" || document.form.visor.value.substring(2,-3) == "/-") {
  document.form.visor.value = "Erro de entrada";
  }

  if((document.form.visor.value.substring(1,-2) != "-" || document.form.visor.value.substring(1,-2) != "+" || document.form.visor.value.substring(1,-2) != "/" || document.form.visor.value.substring(1,-2) != "*") && document.form.visor.value.substring(0) > 0 ){
  var raiz = Math.sqrt(document.form.visor.value.substring(0));
  aredond = raiz.toFixed(4);
  document.form.visor.value = aredond;

  }
  

});

$('#verificar').click(function(){
  if(document.form.visor.value == "Erro de entrada"){
    document.form.visor.value = "";
    historico.innerHTML = "";
    var count = 0;//recebendo o valor 5 que você disse
    var uso = 0;
  }
  

});



$('#result').click(function(){
	uso = 1;
	var historico = document.getElementById("history")
 	if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+") && document.form.visor.value.length > 1){
 	
 		count+=parseFloat(document.form.visor.value);
 			historico.innerHTML = historico.innerHTML+""+ document.form.visor.value +"="+ count;
 			document.form.visor.value = count;
 		}else{
  			if(document.form.visor.value>0){
  			historico.innerHTML += ""+ document.form.visor.value;
  			count+=parseFloat(document.form.visor.value);
  			document.form.visor.value = " ";
  			document.form.visor.value = count;
  			}
  		}
  	if((document.form.visor.value.substring(1,-2) == "-" || document.form.visor.value.substring(1,-2) == "+" || document.form.visor.value.substring(1,-2) == "/" || document.form.visor.value.substring(1,-2) == "*" ) && document.form.visor.value.length == 1){
  			historico.innerHTML = historico.innerHTML+""+ document.form.visor.value +"="+ count;
 			document.form.visor.value = count;
		}
		/*verifica te tem algum valor e faz a multiplicação*/
		if(document.form.visor.value.substring(1,-2) == "*"  && document.form.visor.value.length > 1 ){
		 	uso = 1;
  			var mult = count * document.form.visor.value.substring(1);
  			count = mult;
  			historico.innerHTML = historico.innerHTML+""+ document.form.visor.value +"="+ count;
 			document.form.visor.value = count;
  		
  		}
  		/*verifica te tem algum valor e faz a divisao*/
  		if(document.form.visor.value.substring(1,-2) == "/"  && document.form.visor.value.length > 1 ){
		 	uso = 1;
  			var mult = count / document.form.visor.value.substring(1);
  			count = mult;
  			historico.innerHTML = historico.innerHTML+""+ document.form.visor.value +"="+ count;
 			document.form.visor.value = count;
  		
  		}

});