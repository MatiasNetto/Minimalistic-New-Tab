import { updateLinkItems } from './links.js';

import { editModeOn, linkInput, nameInput, orderNumber, sortOrderNumebrs, updateEditingLink } from './edit.js';

import { links, mode, editingId, deleteLinksById } from './dataControl.js';
import { showModalMessage } from '../modal.js';

/*#############################*/
/*#### FORM VALUES CHANGES ####*/
/*#############################*/

const fillFormValues = () => {
  //fill the form value with the item data
  links.forEach((e) => {
    if (e.id == editingId) {
      nameInput.value = e.name;
      linkInput.value = e.link;
      orderNumber.textContent = e.order;
    }
  });
};

const clearFormValues = () => {
  nameInput.value = '';
  linkInput.value = '';
};

const handleLinkClick = (itemId) => {
  //manege clicks on links
  if (mode == 'select' || mode == 'editing') {
    //if is in editMode click fill the form
    editModeOn(itemId);
  } else if (mode == 'add-remove') {
    showModalMessage('Deseas eliminar este elemento de la lista de links?', 'Si', 'No', () => {
      deleteLinksById(itemId);
      sortOrderNumebrs();
      updateLinkItems();
    });
  }
};

/*#################################*/
/*#### INPUT CHANGES LISTENERS ####*/
/*#################################*/

// Change on Name Input
nameInput.addEventListener('input', () => {
  updateEditingLink();
  updateLinkItems();
});

//Change on Link Input
linkInput.addEventListener('input', () => {
  updateEditingLink();
});

export { fillFormValues, clearFormValues, handleLinkClick };
