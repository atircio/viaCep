import * as modalController from "../controllers/modal-controller.js"


export function init(){
    const contactLink = document.querySelector(".contact-link");

    contactLink.addEventListener('click', handleContactLinkClick)
}

function handleContactLinkClick(event){
    event.preventDefault();

    modalController.ShowModal();

}