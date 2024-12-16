
function init() {
    getNames();
}

function getNames() {
    for (let index = 0; index < books.length; index++) {
    document.getElementById("allBooksTemplates").innerHTML += `<div class="dialog">
    <h1 id="nameBook${index + 1}">${books[index].name}</h1>
    <div class="divider"></div>
    <div class="price_and_status">
        <span id="priceBook${index + 1}">${books[index].price.toFixed(2)}€</span>
        <span id="statusBook${index + 1}">
            <img src="" alt="herz leer">
            <img src="" alt="herz voll">
        </span>
    </div>
        <table class="book_info">
            <tr>
                <td>Author:</td>
                <td id="authorBook${index + 1}">${books[index].author}</td>
            </tr>
            <tr>
                <td>Erscheinungsjahr:</td>
                <td id="publishYearBook${index + 1}">${books[index].publishedYear}</td>
            </tr>
            <tr>
                <td>Genre:</td>
                <td id="genreBook${index + 1}">${books[index].genre}</td>
            </tr>
        </table>
    <div class="divider"></div>
    <div class="comment_section">
        <span>Kommentare:</span>
        <div  id="commentsBook${index + 1}"></div>
        <div class="your_comment">
            <div id="commentsBook${index + 1}"></div>
            <input class="input_field" id="commentContent" type="text" placeholder="the best book ever since!">
            <button id="sendComment">Abschicken</button>
        </div>
    </div>
</div>`
    }
}