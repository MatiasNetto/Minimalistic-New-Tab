import { getLinks, updateLinkItems } from './links.js';

import {
  showMenu,
  showModes,
  hideModes,
  showEditMessage,
  hideEditMessage,
  showForm,
  hideForm,
  hideAddLinkBtn,
  showOrderContainer,
  showLinks,
  hideLinks,
} from './showAndHide.js';

import { links, editingId, setEditingId, setLinksById, setMode, setLinks } from './dataControl.js';
import { fillFormValues } from './changes.js';

//BTNS
const editBtn = document.getElementById('edit-btn');
const orderAdd = document.getElementById('edit-order-add-btn');
const orderRemove = document.getElementById('edit-order-remove-btn');

//INPUTS
const nameInput = document.getElementById('edit-name-input');
const linkInput = document.getElementById('edit-link-input');
const orderNumber = document.getElementById('edit-order-number');

/*######################*/
/*#### MODE CHANGES #### */
/*######################*/

const editModeOn = (itemId) => {
  //activate the editMode and hide the editMode selection menu
  setMode('editing');
  setEditingId(itemId);
  fillFormValues();
  hideForm();
  setTimeout(showForm, 1);
  hideAddLinkBtn();
  showOrderContainer();
  hideEditMessage();
};

const editModeOf = () => {
  //desactivate the editMode
  setMode('select');
  hideForm();
  showModes();
  hideLinks();
};

const editModeSelectionMenu = () => {
  //activates the editMode selection menu
  getLinks();
  updateLinkItems();
  showLinks();
  hideModes();
  showEditMessage();
  showMenu();
};

/*###########################*/
/*#### ORDER RECALCULATE ####*/
/*###########################*/

const sortOrderNumebrs = () => {
  let sortedLinks = links;
  sortedLinks.sort((a, b) => {
    return a.order - b.order;
  });

  for (let order in sortedLinks) {
    sortedLinks[order].order = Number(order) + 1;
  }
  setLinks(sortedLinks);
};

const recalculateOrderNumbersIncrement = (orderNumber) => {
  //Recalculate order numbers when one item order increments
  links.forEach((e) => {
    if (e.id != editingId && e.order == orderNumber) {
      let link = e;
      link.order = Number(e.order) - 1;
      setLinksById(link.id, link);
      sortOrderNumebrs();
    }
  });
};

const recalculateOrderNumbersDecrement = (orderNumber) => {
  //Recalculate order numbers when one item order increments
  links.forEach((e) => {
    if (e.id != editingId && e.order == orderNumber) {
      let link = e;
      link.order = Number(e.order) + 1;
      setLinksById(link.id, link);
      sortOrderNumebrs();
    }
  });
};

/*#############################*/
/*#### EDITING LINK UPDATE ####*/
/*#############################*/

const updateEditingLink = () => {
  setLinksById(editingId, {
    name: nameInput.value.trim(),
    link: linkInput.value.trim(),
    order: orderNumber.textContent,
  });
};

/*######################*/
/*#### ORDER CHANGE #### */
/*######################*/

/*Se puede repensar el order como un input de tipo numero que solo puede cambiar con el click en los botones, pudiendo asi identificar sus cambios tal y como funcionan los otros inputs, pudiendo compactar el codigo un poco al desplazar el updateEditingLink y el nuevo event listener de input hacia changes, siendo asi mas entendible tambien */

const orderIncrement = () => {
  //increment the order number of actual editing item and recalculate all the order numbers
  let newNumber = Number(orderNumber.textContent) + 1;
  if (newNumber <= links.length) {
    orderNumber.textContent = newNumber;
    updateEditingLink();
    recalculateOrderNumbersIncrement(newNumber);
    updateLinkItems();
  }
};

const orderDecrement = () => {
  //decrement the order number of actual editing item and recalculate all the order numbers
  let newNumber = Number(orderNumber.textContent) - 1;
  if (newNumber >= 1) {
    orderNumber.textContent = newNumber;
    updateEditingLink();
    recalculateOrderNumbersDecrement(newNumber);
    updateLinkItems();
  }
};

/*########################*/
/*#### MODE SELECTION #### */
/*########################*/
editBtn.addEventListener('click', editModeSelectionMenu);

/*######################################*/
/*#### ORDER INCREMENT OR DECREMENT #### */
/*######################################*/

//Click on Increment order BTN
orderAdd.addEventListener('click', orderIncrement);

//CLick on Decrement order BTN

orderRemove.addEventListener('click', orderDecrement);

export { nameInput, linkInput, orderNumber, sortOrderNumebrs, updateEditingLink, editModeOf, editModeOn };
