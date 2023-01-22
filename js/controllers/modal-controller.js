
function State(){
    this.container = null;
    this.btnClose = null;
}

const state = new State();

export function init(){
    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");

    state.btnClose.addEventListener('click',handleBtnCloseClick );
    state.container.addEventListener('click',handleContainerClick );
}

export function ShowModal(){
    state.container.classList.add("active")
}

export function RemoveModal(){
    state.container.classList.remove("active")
}

function handleBtnCloseClick(event){
    event.preventDefault();
    RemoveModal()
}

function handleContainerClick(event){
    if (this == event.target) {
        RemoveModal()
    }
   
}