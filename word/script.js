window.addEventListener("DOMContentLoaded", function () {
	let textarea = document.querySelector("textarea");
	const textoSalvo = localStorage.getItem("textoSalvo");

	if (textoSalvo) {
		textarea.value = textoSalvo;
	}

	textarea.addEventListener("input", function () {
		localStorage.setItem("textoSalvo", textarea.value);
	});
});

window.addEventListener("DOMContentLoaded", function () {
	let textarea = document.querySelector("textarea");
	textarea.onkeydown = function (e) {
		if (e.keyCode === 9) {
			this.setRangeText("	", this.selectionStart, this.selectionStart, "end");
			return false;
		}
	};
});

function Copiar() {
	let textarea = document.querySelector("textarea");

	if (textarea.value != "") {
		textarea.select();
		textarea.setSelectionRange(0, 99999);

		navigator.clipboard.writeText(textarea.value);

		alert("Texto copiado com sucesso!");
	} else {
		alert("Nada para ser feito!");
	}
}

function Apagar() {
	let textarea = document.querySelector("textarea");

	if (textarea.value != "") {
		if (confirm("Tem certeza?") == true) {
			textarea.value = "";
			localStorage.setItem("textoSalvo", "");
		}
	} else {
		alert("Nada para ser feito!");
	}
}

function AumentarTexto() {
	let textarea = document.querySelector("textarea");
	textarea.style.fontSize = "larger";
}

function DiminuirTexto() {
	let textarea = document.querySelector("textarea");
	textarea.style.fontSize = "smaller";
}
