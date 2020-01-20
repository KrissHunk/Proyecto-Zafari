const boton = window.document.querySelector("#boton");
const msjError =window.document.querySelector("#msj-error")

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

    const credenciales = {
        usuario: "ejemplo@gmail.com",
        password: "123456"
    }

    if (textoInput !== credenciales.usuario || textoInput2 !== credenciales.password) {
        msjError.classList.remove("hide");
    } else {
        msjError.classList.add("hide");
        document.location.assign("../layout/indexLayout.html");
    }
}