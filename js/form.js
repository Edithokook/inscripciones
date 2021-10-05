document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "51973180997";
  let servicio = document.querySelector("#servicio").value;
  let cliente = document.querySelector("#cliente").value;
  let dni = document.querySelector("#dni").value;
  let correo = document.querySelector("#correo").value;
  let celular = document.querySelector("#celular").value;
  let dirección = document.querySelector("#dirección").value;
  let comprobante = document.querySelector("#comprobante").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
 *_LP DERECHO_*%0A
	*Ficha de inscripción*%0A%0A
	*Nombre del curso o diplomado:*%0A
	${servicio}%0A
	*Nombres completos:*%0A
	${cliente}%0A
	*DNI:*%0A
	${dni}%0A
	*Correo electrónico:*%0A
	${correo}%0A
	*Celular:*%0A
	${celular}%0A
	*Dirección detallada:*%0A
	${dirección}%0A
	*Comprobante de pago:*%0A
	${comprobante}%0A

  if (servicio === "" || cliente === "" || correo === ""|| celular === ""|| dirección === ""|| comprobante === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos.`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu ficha de inscripción.`;

  window.open(url);
});
