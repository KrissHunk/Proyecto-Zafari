//definir los input html
//crear archivo js y vincular con html
//crear una variable constante que almacene la etiqueta
//mediante la variable constante capturar lo que se escribe

const boton = window.document.querySelector("#boton");

boton.addEventListener("click", mostrarDato);

function mostrarDato() {

    const input1 = window.document.querySelector("#email");
    const textoInput = input1.value;
    console.log(textoInput);
    input1.value = "";
    input1.focus();

    const input2 = window.document.querySelector("#password");
    const textoInput2 = input2.value;
    console.log(textoInput2);
    input2.value = "";
    input2.focus();

    if (textoInput === "cris.abarca@outlook.cl" && textoInput2 === "12345") {
        console.log("puedes ingresar al sistema campeon")
    } else {
        console.log("usuario o clave incorrecta")
    }
}