/*function codifica(palavra){
    var codificada = null;

    codificada = palavra.replaceAll('a','ai'). replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('o','ober').replaceAll('u', 'ufat');
    return codificada;
}

function decodifica(palavra){
    var decoficada = null;

    decoficada =  palavra.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    return decodificada;
}*/

document.getElementById("botaoCodificar").addEventListener("click", function () {

    var frase = document.getElementById("mensagem").value;
    
    function decodifica(frase) {
        
        if(frase == frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {

            frase = frase.replaceAll('a', 'ai')
                            .replaceAll('e', 'enter')
                                .replaceAll('i', 'imes')
                                    .replaceAll('o', 'ober')
                                        .replaceAll('u', 'ufat');
            
            return frase.toLowerCase();
        } else {

            alert("Só pode letras sem acentos!!!");
        }
    }
    
        document.getElementById("text-resultado").value = decodifica(frase);
        document.getElementById("busca").style.display = "none";
})
    
    
document.getElementById("botaoDescodificar").addEventListener("click", function () {

    var frase = document.getElementById("mensagem").value;
    
    function decodifica(frase) {
        
        if(frase == frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {

            frase = frase.replaceAll('ai', 'a')
                            .replaceAll('enter', 'e')
                                .replaceAll('imes', 'i')
                                    .replaceAll('ober', 'o')
                                        .replaceAll('ufat', 'u');
            
            return frase.toLowerCase();
        } else {

            alert("Só pode letras sem acentos!!!");
        }
    }
    
    document.getElementById("text-resultado").value = decodifica(frase);
})

  
    document.getElementById("limpar").addEventListener("click", function () {
    

        var limparText = document.getElementById("text-resultado").value = " ";
        document.getElementById("mensagem").value = " ";
    
    })
    
    
    document.getElementById("copy").addEventListener("click", function () {
    
        var copyText = document.getElementById("text-resultado");
    
        copyText.select();
        copyText.setSelectionRange(0, 99999);
    
        navigator.clipboard.writeText(copyText.value);
    })