// bootstrap chat

$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var mensaje = $("#mensaje").val();;
				var elMensaje = $("<div></div>").text(mensaje).css("color", "#000").addClass("alert alert-success");
					$(".ventana").append(elMensaje);
			});
});

$(document).ready(function() {
	$(".msg-ok").click(function(e) {
		e.preventDefault();
		var color = $(".msg-ok").val();
		var valor = $("<p></p>").text(color).css("color", "#000");
		$("#dropdownMenu2").text("ok");
	});
	$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var mensaje = $("#mensaje").val();;
				var elMensaje = $("<div></div>").text(mensaje).css("color", "#000").addClass("alert alert-success");
					$(".ventana").append(elMensaje);
			});
});
});

$(document).ready(function() {
		$(".msg-info").click(function(e) {
		e.preventDefault();
		var color = $(".msg-ok").val();
		var valor = $("<p></p>").text(color).css("color", "#000");
		$("#dropdownMenu2").text("info");
	});
		$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var mensaje = $("#mensaje").val();;
				var elMensaje = $("<div></div>").text(mensaje).css("color", "#000").addClass("alert alert-info");
					$(".ventana").append(elMensaje);
			});
});
});

$(document).ready(function() {
	$(".msg-warning").click(function(e) {
		e.preventDefault();
		var color = $(".msg-ok").val();
		var valor = $("<p></p>").text(color).css("color", "#000");
		$("#dropdownMenu2").text("warning");
	});
	$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var mensaje = $("#mensaje").val();;
				var elMensaje = $("<div></div>").text(mensaje).css("color", "#000").addClass("alert alert-warning");
					$(".ventana").append(elMensaje);
			});
});
});

$(document).ready(function() {
	$(".msg-danger").click(function(e) {
		e.preventDefault();
		var color = $(".msg-ok").val();
		var valor = $("<p></p>").text(color).css("color", "#000");
		$("#dropdownMenu2").text("danger");
	});
	$(document).ready(function() {
		$("#enviar").click(function(e) {
				e.preventDefault();
				var mensaje = $("#mensaje").val();;
				var elMensaje = $("<div></div>").text(mensaje).css("color", "#000").addClass("alert alert-danger");
					$(".ventana").append(elMensaje);
			});
});
});

