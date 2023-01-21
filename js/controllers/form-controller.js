

function State(){
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

     console.log(state)

}