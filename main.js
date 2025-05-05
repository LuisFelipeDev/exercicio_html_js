const form = document.getElementById('numeros');

form.addEventListener('submit', function(e) {

    const n1 = document.getElementById('numero1');
    const n2 = document.getElementById('numero2');

    let validaNumeros = n1.value < n2.value;

    if(validaNumeros) {
        alert('Formulário Válido!');
    }else {
        alert('O segundo número precisa ser maior que o primeiro');
    }
})

console.log(form)