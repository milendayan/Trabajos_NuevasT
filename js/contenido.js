function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}

function nuevaImagen() {
    document.getElementById('imagen').click();
}

document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

function nuevoEnlace() {
    var url = prompt("Ingresa la URL del enlace:");
    var texto = prompt("Ingresa el texto del enlace:");

    if (url && texto) {
        var enlace = document.createElement("a");
        enlace.href = url;
        enlace.textContent = texto;
        enlace.target = "_blank";
        var contenido = document.getElementById('contenido');
        contenido.appendChild(enlace);
        contenido.appendChild(document.createElement("br"));
    } else {
        alert("Debes ingresar una URL y un texto para el enlace.");
    }
}

function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;

    if (texto.trim() !== "") {
        var titulo = document.createElement("h2");
        titulo.textContent = texto;
        contenido.appendChild(titulo);
    } else {
        alert("Escribe un texto antes de agregar un título.");
    }
}