import Address from "../modules/address.js";
import * as addressService from "../services/address-service.js"
import * as listController from '../controllers/list-controller.js'




function State() {

    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputNumber = null;
    this.inputStreet = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
}
const state = new State();
export function init() {
    state.inputCep = document.forms.newAddress.cep;
    state.inputNumber = document.forms.newAddress.number;
    state.inputStreet = document.forms.newAddress.street;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.inputNumber.addEventListener('change', handleInputNumberChange)
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyup)
    state.inputCep.addEventListener('change', handleInputCepChange)
    state.btnClear.addEventListener('click', handleBtnClearClick)
    state.btnSave.addEventListener('click', handleBtnSaveClick)




}

function handleInputNumberKeyup(event) {
    state.address.number = event.target.value;
}




function clearFrom() {
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus();

}

async function handleInputCepChange(event) {
    const cep = event.target.value;
    try {

        const address = await addressService.findByCep(cep)

        state.inputStreet.value = address.street;
        state.inputCity.value = address.city;
        state.address = address;

        setFormError("cep", "");
        state.inputNumber.focus();


    } catch (e) {
        setFormError("cep", "Informe um CEP válido!")
        state.inputCity.value = "";
        state.inputStreet.value = "";
    }
}

function handleBtnClearClick(event) {
    event.preventDefault();
    clearFrom();
}

async function handleBtnSaveClick(event) {
    event.preventDefault()
    listController.addCard(state.address)
}

function handleInputNumberChange(event) {
    if (event.target.value == "") {
        setFormError("number", "Campo obrigatório")
    }
}

function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

