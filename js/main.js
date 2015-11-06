// bootstrap chat

$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var color = $("#color").val()
				var mensaje = $("#mensaje").val();

				var elMensaje = $("<div></div>").text(mensaje).addClass("alert alert-"+color);
					$(".ventana").append(elMensaje);
			});
});
