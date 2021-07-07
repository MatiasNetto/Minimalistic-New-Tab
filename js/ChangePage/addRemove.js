import { showModalAlert, showModalMessage } from '../modal.js';
import { nameInput, linkInput, editModeOn } from './edit.js';
import { links, setEditingId, addNewLink, setMode, generateUID } from './dataControl.js';
import { getLinks, updateLinkItems } from './links.js';
import {
  hideModes,
  showMenu,
  showForm,
  hideOrderContainer,
  showAddLinkBtn,
  showOrderContainer,
  hideAddLinkBtn,
  showLinks,
} from './showAndHide.js';
import { clearFormValues } from './changes.js';

const addRemoveBtn = document.getElementById('add-remove-btn');
const addLinkButton = document.getElementById('add-link-button');

/*#############*/
/*#### ADD ####*/
/*#############*/

const createNewItem = () => {
  //create a new linkItem and add it to links
  let newItem = {
    id: generateUID(),
    order: links.length + 1,
    name: nameInput.value,
    link: linkInput.value,
  };
  addNewLink(newItem);
};

const addRemoveModeOn = () => {
  //Activates the addRemoveMode
  setMode('add-remove');
  getLinks();
  updateLinkItems();
  showLinks();
  hideModes();
  showMenu();
  hideOrderContainer();
  showAddLinkBtn();
  setEditingId(-1);
  clearFormValues();
  // fillFormValues();
  setTimeout(showForm, 1);
};

const addLink = () => {
  //crete new element and add to links and DOM
  createNewItem();
  showOrderContainer();
  hideAddLinkBtn();

  //set edit mode to the new element
  editModeOn(links[links.length - 1].id);
  updateLinkItems();
};

/*################*/
/*#### REMOVE ####*/
/*################*/

addRemoveBtn.addEventListener('click', addRemoveModeOn);
addLinkButton.addEventListener('click', () => {
  if (nameInput.value != '' && linkInput.value != '') {
    showModalMessage('Estas seguro que deseas agregar este elemento?', 'si', 'no', addLink);
  } else {
    showModalAlert('You must complete all text areas');
  }
});
