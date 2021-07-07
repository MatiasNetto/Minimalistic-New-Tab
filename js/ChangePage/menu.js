import { mode, updateLocalStorage } from './dataControl.js';
import { editModeOf, linkInput, nameInput } from './edit.js';
import { hideMenu, hideEditMessage } from './showAndHide.js';
import { showModalAlert } from '../modal.js';

const saveBtn = document.getElementById('save-btn');
const exitBtn = document.getElementById('exit-btn');

const verifyInputs = () => {
  let nameValue = nameInput.value.trim();
  let linkValue = linkInput.value.trim();

  if (nameValue == '') {
    showModalAlert('Debes completar el nombre para guardar el elemento', 'OK');
    return false;
  }
  if (linkValue == '') {
    showModalAlert('Debes completar el link para guardar el elemento', 'OK');
    return false;
  }
  if (linkValue.replace('www.', '').includes('.') == false) {
    showModalAlert('El link debe terminar con ".com" o otro codigo de pais para que funcione correctamente', 'OK');
    return false;
  }
  return true;
};

// Click on save BTN
saveBtn.addEventListener('click', () => {
  //return to mode select and actualizate localStorage data
  //in editing mode
  if (mode == 'editing' && verifyInputs()) {
    editModeOf();
    hideMenu();
    updateLocalStorage();
  }

  //out of editing mode
  if (mode != 'editing') {
    editModeOf();
    hideMenu();
    hideEditMessage();
    updateLocalStorage();
  }
});

//Click on exit BTN
exitBtn.addEventListener('click', () => {
  //return to mode select
  editModeOf();
  hideMenu();
  hideEditMessage();
});
