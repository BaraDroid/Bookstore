let i = 0;
let j = 0;

function init() {
  render();
  renderAllComments(i, j);
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

function renderAllComments(i, j) {
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
    document.getElementById(`commentsBook${index + 1}`).innerHTML = "";
    inputValue.value = "";
    renderCommentSection(index);
}
}

function renderCommentSection(index) {
  for (let y = 0; y < books[index].comments.length; y++) {
    let commentSection = document.getElementById(`commentsBook${index + 1}`);
    commentSection.innerHTML += `<p><b>${books[index].comments[y].name}:</b> ${books[index].comments[y].comment}</p><br>`
  }
}

function loadImage(index) {
  document.getElementById(`bgImageBook${index + 1}`).style.backgroundImage = `url(./img/book_${index + 1}.jpg)`;
}

function commentTemplates(i, j) {
    return `<p><b>${books[i].comments[j].name}:</b> ${books[i].comments[j].comment}</p><br>`;
}