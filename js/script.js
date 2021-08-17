const body = document.querySelector (".conteiner__body");
const modal = document.querySelector (".modal");
const openBtn = document.querySelector (".btn");
const messeng = document.querySelector (".modal__form_btn");

function openModal () {
  modal.style.display = "block";
  
}

function closeModal () {
  modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);
close.onclick = closeModal;

window.onclick = function(event) {
  if(event.target == body){
    console.log("close body");
    closeModal();
  } else if(event.target == modal) {
    console.log("close modal");
    closeModal();
  }
}