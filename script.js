let i = 0;
let j = 0;

function init() {
  render();
  renderComments(i, j);
}

function render() {
  for (let index = 0; index < books.length; index++) {
    document.getElementById("allBooksTemplates").innerHTML += getBookcardTemplate(index);
    renderStatus(index);
    loadImage(index);
  }
}

function renderStatus(index) {
  if (books[index].liked == true) {
    document.getElementById(`fullHearthBook${index + 1}`).classList.remove("d_none");
  }
}

function giveLike(index) {
  document.getElementById(`emptyHearthBook${index + 1}`).classList.add("d_none");
  document.getElementById(`fullHearthBook${index + 1}`).classList.remove("d_none");
  let likesAmount = document.getElementById(`likesAmountBook${index + 1}`).innerHTML;
  likesAmount++;
  document.getElementById(`likesAmountBook${index + 1}`).innerHTML = likesAmount;
}

function removeLike(index) {
  document.getElementById(`emptyHearthBook${index + 1}`).classList.remove("d_none");
  document.getElementById(`fullHearthBook${index + 1}`).classList.add("d_none");
  let likesAmount = document.getElementById(`likesAmountBook${index + 1}`).innerHTML;
  likesAmount--;
  document.getElementById(`likesAmountBook${index + 1}`).innerHTML = likesAmount;
}

function renderComments(i, j) {
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].comments.length; j++) {
      document.getElementById(`commentsBook${i + 1}`).innerHTML += commentTemplates(i, j);
    }
  }
}

function addComment(index) {
  let inputValue = document.getElementById(`commentContent${index + 1}`);
  if (inputValue.value == "") {
    return alert("Fülle das Kommentarfeld aus!");
  } else {
    let newComment = { name: "new user", comment: inputValue.value };
    let commentArray = books[index].comments;
    commentArray.push(newComment);
    inputValue.value = "";
    document.getElementById(`commentsBook${index + 1}`).innerHTML = "";
    renderComments(i, j);
  }
}

function loadImage(index) {
  document.getElementById(`bgImageBook${index + 1}`).style.backgroundImage = `url(./img/book_${index + 1}.jpg)`;
}

function getBookcardTemplate(index) {
  return `<div class="dialog">
    <div class="book_header" id="bgImageBook${index + 1}" onload="loadImage(${index})">
       <h1 id="nameBook${index + 1}">${books[index].name}</h1>
    </div>
    <div class="divider"></div>
    <div class="price_and_status">
        <div class="books_price" id="priceBook${index + 1}">${books[index].price.toFixed(2)}€</div>
          <div class="likes">
            <div class="number_of_likes" id="likesAmountBook${index + 1}">${books[index].likes}</div>
            <img class="hearth_empty" id="emptyHearthBook${index + 1}" onclick="giveLike(${index})" src="./img/heart_empty.png" alt="herz leer">
            <img class="hearth_full d_none" id="fullHearthBook${index + 1}" onclick="removeLike(${index})" src="./img/heart_full.png" alt="herz voll"></img>
          </div>
        
    </div>
    <div class="informations">
            <p class="book_info">
                <span>Author:</span>
                <span id="authorBook${index + 1}">${books[index].author}</span>
            </p>
            <p class="book_info">
                <span>Erscheinungsjahr:</span>
                <span id="publishYearBook${index + 1}">${books[index].publishedYear}</span>
            </p>
            <p class="book_info">
                <span>Genre:</span>
                <span id="genreBook${index + 1}">${books[index].genre}</span>
            </p>
    </div>
    <div class="divider"></div>
    <div class="comment_section">
        <h4>Kommentare:</h4>
        <div class="comments_text">
            <span id="commentsBook${index + 1}"></span>
        </div>
        <div class="your_comment">
            <input class="input_field" id="commentContent${index + 1}" type="text" placeholder="dein Kommentar">
            <button id="sendComment" onclick="addComment(${index})">Abschicken</button>
        </div>
    </div>
</div>`;
}

function commentTemplates(i, j) {
    return `<p><b>${books[i].comments[j].name}:</b> ${books[i].comments[j].comment}</p><br>`;
}