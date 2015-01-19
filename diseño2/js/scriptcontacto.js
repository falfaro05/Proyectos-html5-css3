function verificador(){

	var completo = true;

	var validaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	var campoNombre = document.getElementById('nombre');
	var campoApellido = document.getElementById('apellido');
	var campoEmail = document.getElementById('email');


	if(campoNombre.value == "" || campoNombre.value.length < 4 || !isNaN(campoNombre.value)){

		completo = false;
	}

	if(campoApellido.value == "" || campoApellido.value.length < 4 || !isNaN(campoApellido.value)){

		completo = false;
	}

	if(!validaEmail.test(campoEmail.value)){
		completo = false;
	}


	if (completo == true) {
		alert('Datos enviados exitosamente');
	}else{
		alert('Error: Verifique si sus datos son correctos');
	}

	return completo;
}