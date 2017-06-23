
//validación formulario

document.getElementById("submit").addEventListener("click",validate);

function validate(){
	function formularioDom(dato,n){
		document.getElementById("submit").setAttribute("data-toggle","collapse");
		document.getElementById("submit").setAttribute("data-target","#mycollapse");
		document.getElementById("submit").setAttribute("aria-expanded","true");
		document.getElementById("submit").setAttribute("aria-controls","mycollapse");

		var divElement = document.createElement("div");
		var divText = document.createTextNode("Campo inválido o vacío. Ingrese nuevamente su " + dato + ".");
		var divFather = document.getElementsByClassName("contenedor-collapse")[n];
		divElement.appendChild(divText);
		divFather.appendChild(divElement);
	}

	function data(){
		var idNombre = document.getElementById("nombre").value;
		var idCorreo = document.getElementById("correo").value;

		if (!(/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(idNombre) && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
			formularioDom("nombre",0);
			formularioDom("email",1);
		} else if (!(/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(idNombre)){
			formularioDom("nombre",0);
		} else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
			formularioDom("email",1);
		} else {
			alert("Sus datos fueron guardados satisfactoriamente.");
		}
	}
	data();
}