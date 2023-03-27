function insert(parametro){
   document.querySelector("[name='tela']").value+=parametro
}

function conta(){
   conta = document.querySelector("[name='tela']").value
   document.querySelector("[name='tela']").value = eval(conta)
}