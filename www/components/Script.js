// This is a JavaScript file

window.onload = function(){
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const id = document.querySelector("#id");

  const buscar = document.querySelector("#buscar");
  const cadastrar = document.querySelector("#cadastrar");
  const alterar = document.querySelector("#alterar");  
  const deletar = document.querySelector("#deletar");  

  //Ação de Cadastro
  cadastrar.addEventListener("click", function(){
    let formdata = new FormData();
    formdata.append('Nome',`${nome.value}`);
    formdata.append('Curso',`${curso.value}`);
  
    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
      {
        body: formdata,
        method: "post",
        mode: "cors",
        cache: "default"
      }).then(()=>
          {
            alert("Registro efetuado com sucesso!");
            Limpar();
          }
      );
  });    

  //Ação de Busca
  buscar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, 
      {
        method: "get",
        mode: "cors",
        cache: "default"
      }).then(response=>{
        response.json().then(data => 
        {
          nome.value = data['nome'];
          curso.value = data['curso'];
        });
      });
  });

  //Ação de Alteração
  alterar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, 
      {
        method: "put",
        mode: "cors",
        cache: "default",
        headers: {'content-type':'application/json; chatset=UTF-8'},
        body:  JSON.stringify({
          'Nome': `${nome.value}`, 
          'Curso': `${curso.value}`
        })
      }).then(()=>
          {
            alert("Registro alterado com sucesso!");
            Limpar();
          });
  });    

  //Ação de Exclusão
  deletar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, 
      {
        method: "delete",
        mode: "cors",
        cache: "default"
      }).then(()=>
          {            
            alert("Registro excluído com sucesso!");            
            Limpar();          
          });
  });

  //Método Clear
  function Limpar(){
    nome.value = "";
    curso.value = "";
  };  
}
