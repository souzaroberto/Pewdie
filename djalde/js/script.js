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


let info = [
    {
        "name":"hostname",
        "valor": "roberto"
    },
    {
        "name":"domain",
        "valor": "pikachu.dw.br"
    },
    {
        "name":"cpu",
        "valor": "50%",
        "description": "Intel Celeron"
    },
    {
        "name":"ram",
        "used": "37%",
        "free": "63%"
    },
    {
        "name":"disk",
        "used": "50%",
        "free": "50%"
    }
]

let exemplo = [
    {
        "name": "DNS",
        "status": "ON"

    },
    {
        "name": "DHCP",
        "status": "OFF"
      
    },
    {
        "name": "APACHE",
        "status": "ON"
      
    },
    {
        "name": "FTP",
        "status": "ON"
    
    },
    {
        "name": "NFS",
        "status": "OFF"
      
    },
    {
        "name": "EMAIL",
        "status": "ON"
      
    }
]



let r1=document.getElementById("row1")
let r2=document.getElementById("row2")

for(let s of exemplo) {
  if (s.status === "OFF") {

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