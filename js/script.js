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


    const form = document.querySelectorAll(".modal__form");

    const modalBtn = form[0].querySelector(".modal__form_btn");

  function getDataForm(e){
    e.preventDefault();
    
    var formData = new FormData(form[0]);

    console.log("User: " + 
    formData.get("name"),
 );
 console.log("Mail: " + 
    formData.get("email"),
 );
 console.log("Commit: " + 
    formData.get("commit"),
 );
  }
  
  document.addEventListener("DOMContentLoaded", function(){
    modalBtn.addEventListener("click", getDataForm, false);
    modalBtn.addEventListener("click", closeModal, false);
    }, false) 



