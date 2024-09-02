 index.js

const root = document.getElementById("root");

/* componentes */
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Conteudo() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}

function Imagem(origem, texto) {
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

function Titulo(texto) {
    const h1 = document.createElement("h1");
    h1.innerText = texto;
    return h1;
}

function Input(id, tipo, rotulo) {
   const label = document.createElement("label");
   const input = document.createElement("input");
   const grupo = document.createElement("div");
   grupo.append(label, input);
   return grupo;
}

/* paginas */
function PageLogin() {
    const logo = Imagem("arquivo.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

function PageHome() {
    const cabecalho = Cabecalho();
    const conteudo = Conteudo();
    root.append(cabecalho, conteudo);
}

PageLogin();
/* paginas */
function PageLogin() {
    const logo = Imagem("arquivo.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

function PageHome() {
    const cabecalho = Cabecalho();
    const conteudo = Conteudo();
    root.append(cabecalho, conteudo);
}

navega("/sair");
