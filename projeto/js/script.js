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


// Áreas de inserção do JavaScript
let r1=document.getElementById("row1")
let r2=document.getElementById("row2")
let inf=document.getElementById("infor")
let operacoes=document.getElementById("operacoes")


// Gera DashBoard Principal
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


// GeraDashBoard secundario, informações do Pc
let x= new Operaracao("https://my-json-server.typicode.com/djalde/infopc/info")
x.listar().then(info => {
let carta=document.createElement("div");
carta.setAttribute("class","card")
carta.style.width = "22rem";
imag_pc=document.createElement("img");
imag_pc.setAttribute("src","https://thumbs.dreamstime.com/b/graphs-charts-computer-screen-technical-analysis-financial-data-analyzing-workspace-concept-freelance-135106208.jpg");
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
tab.setAttribute("id","tabela")
let trp=document.createElement("tr");
tab.appendChild(trp);
let tp1=document.createElement("td");
let tp2=document.createElement("td");
let tp3=document.createElement("td");
let tp4=document.createElement("td");
tp1.textContent="ITEM";
tp2.textContent="VALUE";
tp3.textContent="USED";
tp4.textContent="FREE";
trp.appendChild(tp1);
trp.appendChild(tp2);
trp.appendChild(tp3);
trp.appendChild(tp4);
for(i of info) {
  if (i.nome==="ram" || i.nome==="disk" || i.nome==="cpu") {
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


// Gera Painel de operacoes (liga/desliga/reinicia)

let se= new Operaracao("https://my-json-server.typicode.com/djalde/jsnserver/servicos");
se.listar().then(servicos => {
let tabel=document.createElement("table");
tabel.setAttribute("class","table");
tabel.setAttribute("class","table-dark");
tabel.setAttribute("id","operar1")
tabel.style.width="100%"
let thead1=document.createElement("thead");
tabel.appendChild(thead1);
let tr2=document.createElement("tr")
thead1.appendChild(tr2)
let th2=document.createElement("th");
th2.setAttribute("colspan","5");
th2.setAttribute("scope","col");
th2.style.textAlign="center";
let texto=document.createElement("h2")
texto.textContent="SERVICES";
th2.appendChild(texto);
tr2.appendChild(th2);
let corpot=document.createElement("tbody")
for(se of servicos) {
  let tr31=document.createElement("tr");
  let td21=document.createElement("td");
  let texto2=document.createElement("h2");
  texto2.textContent=se.name.toUpperCase();
  td21.appendChild(texto2);
  tr31.appendChild(td21)
  let tdbotao1=document.createElement("td");
  let botao1=document.createElement("button");
  tdbotao1.appendChild(botao1);
  botao1.setAttribute("type","button");
  botao1.setAttribute("class","btn");
  botao1.setAttribute("class","btn-outline-success");
  let texto21=document.createElement("h2");
  texto21.textContent="UP";
  botao1.appendChild(texto21);
  tr31.appendChild(tdbotao1);
  let tdbotao2=document.createElement("td");
  let botao2=document.createElement("button");
  tdbotao2.appendChild(botao2);
  botao2.setAttribute("type","button");
  botao2.setAttribute("class","btn");
  botao2.setAttribute("class","btn-outline-danger");
  let texto22=document.createElement("h2");
  texto22.textContent="Down";
  botao2.appendChild(texto22);
  tr31.appendChild(tdbotao2);
  let tdbotao3=document.createElement("td");
  let botao3=document.createElement("button")
  tdbotao3.appendChild(botao3);
  botao3.setAttribute("type","button");
  botao3.setAttribute("class","btn");
  botao3.setAttribute("class","btn-outline-primary");
  let texto23=document.createElement("h2");
  texto23.textContent="Reset";
  botao3.appendChild(texto23);
  tr31.appendChild(tdbotao3);
  corpot.appendChild(tr31)
}
tabel.appendChild(corpot)
operacoes.appendChild(tabel)
})