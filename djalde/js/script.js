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
let inf=document.getElementById("infor")

let p= new Operaracao("https://my-json-server.typicode.com/djalde/jsnserver/servicos")
p.listar().then(servicos => {
for(let s of servicos) {
if (s.status === "off") {

let div1 = document.createElement('div');
div1.setAttribute("class","col-4")
div1.setAttribute("class","m-4")
let card = document.createElement("div");
card.setAttribute("class","card");
card.style.width = "20rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name.toUpperCase();
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-danger");
botao.textContent=s.status.toUpperCase();
botao.style.padding="5px";
botao.style.borderRadius="7px";
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
card.style.width = "20rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name.toUpperCase();
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-success");
botao.textContent=s.status.toUpperCase();
 botao.style.padding="5px";
botao.style.borderRadius="7px";
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


let x= new Operaracao("https://my-json-server.typicode.com/djalde/infopc/info")
x.listar().then(info => {
let carta=document.createElement("div");
carta.setAttribute("class","card")
carta.style.width = "22rem";
imag_pc=document.createElement("img");
imag_pc.setAttribute("src","https://www.extra-imagens.com.br/Informatica/Computadores/1000069286/1054470521/computador-positivo-dual-core-4gb-500gb-tela-19-5-windows-10-stilo-c4500b-19-14005822.jpg");
imag_pc.setAttribute("class","card-img-top");
imag_pc.setAttribute("alt","...");


carta.appendChild(imag_pc);
let corpo=document.createElement("div");
corpo.setAttribute("class","card-body");
carta.appendChild(corpo);
let p1=document.createElement("p");
p1.setAttribute("class","card-text");
p1.style.marginBottom = "2rem";
carta.appendChild(p1);
let tab=document.createElement("table");
p1.appendChild(tab)
tab.setAttribute("class","table-dark");
let trp=document.createElement("tr");
tab.appendChild(trp);
let tp1=document.createElement("td");
let tp2=document.createElement("td");
let tp3=document.createElement("td");
let tp4=document.createElement("td");
tp1.textContent="ITEM";
tp2.textContent="VALOR";
tp3.textContent="USED";
tp4.textContent="FREE";
trp.appendChild(tp1);
trp.appendChild(tp2);
trp.appendChild(tp3);
trp.appendChild(tp4);
for(i of info) {
  if (i.nome==="ram" || i.nome==="disk") {
let tr1=document.createElement("tr");
tab.appendChild(tr1);
let th11=document.createElement("td");
th11.textContent=i.nome;
let th12=document.createElement("td");
let th13=document.createElement("td");
let th14=document.createElement("td");
th13.textContent=i.used;
th14.textContent=i.free;
tr1.appendChild(th11);
tr1.appendChild(th12);
tr1.appendChild(th13);
tr1.appendChild(th14);
  } else {
  
let tr1=document.createElement("tr");
tab.appendChild(tr1);
let th11=document.createElement("td");
th11.textContent=i.nome;
let th12=document.createElement("td");
th12.textContent=i.valor;
let th13=document.createElement("td");
let th14=document.createElement("td");
tr1.appendChild(th11);
tr1.appendChild(th12);
tr1.appendChild(th13);
tr1.appendChild(th14);
}
inf.appendChild(carta)
}
})















