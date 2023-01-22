import Address from "../modules/address.js";
import * as requestService from "../services/request-service.js"




function State(){

    this.address = new Address();
    
    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputNumber = null;
    this.inputStreet = null;
    this.inputCity= null;

    this.errorCep = null;
    this.errorNumber = null;
}
const state = new State();
export function init(){
     state.inputCep = document.forms.newAddress.cep;
     state.inputNumber = document.forms.newAddress.number;
     state.inputStreet = document.forms.newAddress.street;
     state.inputCity = document.forms.newAddress.city;

     state.btnSave = document.forms.newAddress.btnSave;
     state.btnClear = document.forms.newAddress.btnClear;

     state.errorCep = document.querySelector('[data-error="cep"]');
     state.errorNumber = document.querySelector('[data-error="number"]');

     state.inputNumber.addEventListener('change', handleInputNumberChange)
     state.btnClear.addEventListener('click', handleBtnClearClick)
     state.btnSave.addEventListener('click', handleBtnSaveClick)

     const json = 

    console.log()


}

function handleBtnClearClick(event){
    event.preventDefault();
    clearFrom();
}

function clearFrom(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    //state.inputCep.focus();

}
async function  handleBtnSaveClick(event){
    event.preventDefault()
    const result = await requestService.getJson(`https://viacep.com.br/ws/01001000/json/`);
    console.log(result);
}

function handleInputNumberChange(event){
    if(event.target.value == ""){
        setFormError("number", "Campo obrigatório")
    }       
}

function setFormError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

