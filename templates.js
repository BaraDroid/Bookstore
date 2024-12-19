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