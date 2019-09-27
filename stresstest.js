var data = [];
fetch("https://api.myjson.com/bins/1h3vb3", {
    method: "GET",

}).then(function (response) {
    return response.json()
}).then(function (json) {
    data = json.books;
}).then(function () {
    printTable1(data)
})

function printTable1(data) {
    let books = document.getElementById("books")
    books.innerHTML = "";
    for (var i = 0; i < data.length; i++) {

        let flipCard = document.createElement("div");
        let cardInner = document.createElement("div");
        let cardFront = document.createElement("div");
        let cardBack = document.createElement("div");
        let cover = document.createElement("img");
        let backTitle = document.createElement("div");
        let backDescription = document.createElement("div");
        let btn = document.createElement("BUTTON");
        let detail = document.createElement("a");

        flipCard.classList.add("flip-card")
        cardInner.classList.add("flip-card-inner")
        cardFront.classList.add("flip-card-front")
        cardBack.classList.add("flip-card-back")
        cover.classList.add("covers")
        backTitle.classList.add("backTitle")
        backDescription.classList.add("backDescription")
        detail.setAttribute("data-fancybox", "gallery") //asignar fancybox y el tipo de fancybox
        detail.setAttribute("href", data[i].detalle)

        cover.src = data[i].portada;
        backTitle.innerHTML = data[i].titulo;
        backDescription.innerHTML = data[i].descripcion;
        btn.innerHTML = "MORE INFO"; //mostrar More Info en el boton.

        cardFront.append(cover);
        cardBack.append(backTitle, backDescription, detail);
        cardInner.append(cardFront, cardBack);
        flipCard.append(cardInner);
        detail.append(btn);
        books.append(flipCard);

    }
}
//1 create new array
//2 usar array para function printTable1
//3 printTable1

document.getElementById("searchInput").addEventListener("keyup", searchResults)

function searchResults() {
    console.log("work");
    var searchValue = document.getElementById("searchInput").value
    var filteredBook = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].titulo.toUpperCase().includes(searchValue.toUpperCase())) {

            filteredBook.push(data[i])
        }
    }
    console.log(filteredBook);

    printTable1(filteredBook)
}