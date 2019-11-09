class Operaracao {
  constructor(url){
      this.url = url;
  }

  listar(){
      return fetch(this.url, {
          method: "GET"
      }).then(resposta => resposta.json());
  }
}

let r1=document.getElementById("row1")
let r2=document.getElementById("row2")


let p= new Operaracao("https://my-json-server.typicode.com/djalde/jsnserver/servicos")
p.listar().then(servicos => {
for(let s of servicos) {
if (s.status === "off") {

let div1 = document.createElement('div');
div1.setAttribute("class","col-4")
div1.setAttribute("class","m-4")
let card = document.createElement("div");
card.setAttribute("class","card");
card.style.width = "18rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name;
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-danger");
botao.textContent=s.status;
stat.appendChild(botao)
bod.appendChild(serv);
bod.appendChild(stat);
card.appendChild(bod)
div1.appendChild(card);
if (s.id <= 3) {
  r1.appendChild(div1);
  } else {
    r2.appendChild(div1);
  }
} else {
  let div1 = document.createElement('div');
div1.setAttribute("class","col-4")
div1.setAttribute("class","m-4")
let card = document.createElement("div");
card.setAttribute("class","card");
card.style.width = "18rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name;
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-success");
botao.textContent=s.status;
stat.appendChild(botao)
bod.appendChild(serv);
bod.appendChild(stat);
card.appendChild(bod);
div1.appendChild(card);
if (s.id <= 3) {
  r1.appendChild(div1);
  } else {
    r2.appendChild(div1);
  }
}

}
})






















/*
let a = new Operaracao("https://github.com/djalde/Pewdie");
a.listar().then(usuarios => {
  for(let s of exemplo){
    let ab=document.createElement("p");
    ab.textContent=usuario.nome;
    document.body.appendChild(ab)
  }
});
*/