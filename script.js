
function init() {
    getNames();
    renderComments(i, j);
}

function getNames() {
    for (let index = 0; index < books.length; index++) {
    document.getElementById("allBooksTemplates").innerHTML += `<div class="dialog">
    <h1 id="nameBook${index + 1}">${books[index].name}</h1>
    <div class="divider"></div>
    <div class="price_and_status">
        <div class="books_price" id="priceBook${index + 1}">${books[index].price.toFixed(2)}€</div>
        
          <div class="likes">
            <div class="number_of_likes" id="likesAmountBook${index + 1}">${books[index].likes}</div>
            <img class="hearth_empty" id="emptyHearthBook${index + 1}" onclick="giveLike(${index})" src="./img/heart_empty.png" alt="herz leer">
            <img class="hearth_full d_none" id="fullHearthBook${index + 1}" src="./img/heart_full.png" alt="herz voll"></img>
          </div>
        
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
        <h4>Kommentare:</h4>
        <div class="comments_text">
            <span id="commentsBook${index + 1}"></span>
        </div>
        <div class="your_comment">
            <input class="input_field" id="commentContent" type="text" placeholder="the best book ever since!">
            <button id="sendComment">Abschicken</button>
        </div>
    </div>
</div>`
    }
}

function giveLike(index) {
    document.getElementById(`emptyHearthBook${index + 1}`).classList.add("d_none");
    document.getElementById(`fullHearthBook${index + 1}`).classList.remove("d_none");
}


let i = 0;
let j = 0; 

function renderComments(i, j) {
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books[i].comments.length; j++) {
            document.getElementById(`commentsBook${i + 1}`).innerHTML += `<p><b>${books[i].comments[j].name}:</b> ${books[i].comments[j].comment}</p><br>`;     
        }  
    }
}