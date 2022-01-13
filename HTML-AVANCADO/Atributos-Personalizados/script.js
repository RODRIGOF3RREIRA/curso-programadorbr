// let image = document.getElementById("like");

// image.addEventListener("click", function () {
//   image.setAttribute("src", "./images/dislike.jfif");
// });

let list = document.getElementById("lista");
let num = parseInt(lista.dataset.n);

let conteudo = "";
for (let i = 0; i < num; i++) {
  conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;
