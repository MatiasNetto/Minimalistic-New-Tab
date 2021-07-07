import { hideAlert, hideModal, showAlert, showModal } from './ChangePage/showAndHide.js';

const modalTittle = document.getElementById('modal-tittle');
const modalFirstOption = document.getElementById('modal-first-option');
const modalSecondOption = document.getElementById('modal-second-option');

const alertTittle = document.getElementById('alert-tittle');
const alertOption = document.getElementById('alert-option');

const fillModalData = (msg, firstOption, secondOption) => {
  //fill the message modal data
  modalTittle.textContent = msg;
  modalFirstOption.textContent = firstOption;
  modalSecondOption.textContent = secondOption;
};

const fillAlertData = (msg, option) => {
  //fill the alert modal data
  alertTittle.textContent = msg;
  alertOption.textContent = option;
};

const showModalMessage = (msg, firstOption, secondOption, firstCallback, secondCallback) => {
  //Show a modal message and aply the functions to the buttons
  showModal();
  fillModalData(msg, firstOption, secondOption);

  //set the functions to the first modal option
  modalFirstOption.onclick = firstCallback;
  modalFirstOption.addEventListener('click', hideModal);

  //set function to second modal option, if it is undefined set the default function
  if (secondCallback == undefined) {
    modalSecondOption.addEventListener('click', hideModal);
  } else {
    modalSecondOption.onclick = secondCallback;
  }
};

const showModalAlert = (msg) => {
  //show alert modal
  showAlert();
  fillAlertData(msg, 'OK');
  alertOption.addEventListener('click', hideAlert);
};

export { showModalMessage, showModalAlert };
