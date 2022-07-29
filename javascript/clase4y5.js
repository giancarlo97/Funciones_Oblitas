function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 320;
    let euro = 400;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: U$D" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: EUR$" + resultado.toFixed(2));
    }
    else{
        alert("Por favor, complete los casilleros");
    }
}