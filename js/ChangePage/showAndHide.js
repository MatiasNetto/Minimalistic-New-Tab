//CONTAINERS
const modeContainer = document.getElementById('mode-container');
const editForm = document.getElementById('edit-form-container');
const orderContainer = document.getElementById('order-container');
const addLinkButton = document.getElementById('add-link-button');
const linksContainer = document.getElementById('links-container');
const menuContainer = document.getElementById('menu-container');
const modalContianer = document.getElementById('modal');
const alertContainer = document.getElementById('alert');


/*################*/
/*#### MODES ####*/
/*###############*/

const showModes = () => {
  modeContainer.classList.remove('mode-container-hide');
  modeContainer.classList.add('mode-container-show');
  modeContainer.style.display = 'flex';
};

const hideModes = () => {
  modeContainer.classList.remove('mode-container-show');
  modeContainer.classList.add('mode-container-hide');
  setTimeout(() => {
    modeContainer.style.display = 'none';
  }, 500);
};

/*##############*/
/*#### FORM ####*/
/*##############*/

const showForm = () => {
  editForm.style.display = 'flex';
  editForm.classList.add = 'form-container';
};

const hideForm = () => {
  editForm.style.display = 'none';
  editForm.classList.remove = 'form-container';
};

const showOrderContainer = () => {
  orderContainer.style.display = 'flex';
};

const hideOrderContainer = () => {
  orderContainer.style.display = 'none';
};

const showAddLinkBtn = () => {
  addLinkButton.style.display = 'flex';
};

const hideAddLinkBtn = () => {
  addLinkButton.style.display = 'none';
};


/*###############*/
/*#### LINKS ####*/
/*###############*/

const showLinks = () => {
  linksContainer.style.display = 'flex';
  linksContainer.classList.add('links-container');
};

const hideLinks = () => {
  linksContainer.style.display = 'none';
  linksContainer.classList.remove('links-container');
};


/*######################*/
/*#### EDIT MESSAGE ####*/
/*######################*/

const showEditMessage = () => {
  const editModal = document.getElementById('edit-modal');
  editModal.style.display = 'flex';
  editModal.classList.add('edit-modal-apear');
};

const hideEditMessage = () => {
  const editModal = document.getElementById('edit-modal');
  editModal.style.display = 'none';
};


/*##############*/
/*#### MENU ####*/
/*##############*/

const showMenu = () => {
  menuContainer.classList.remove('menu-container-hide');
  menuContainer.classList.add('menu-container-show');
};

const hideMenu = () => {
  menuContainer.classList.remove('menu-container-show');
  menuContainer.classList.add('menu-container-hide');
};


/*###############*/
/*#### MODAL ####*/
/*###############*/

const showModal = () => {
  modalContianer.classList.remove('modal-hide');
  modalContianer.style.display = 'flex';
  modalContianer.classList.add('modal-show');
};

const hideModal = () => {
  modalContianer.classList.remove('modal-show');
  modalContianer.classList.add('modal-hide');
  setTimeout(() => {
    modalContianer.style.display = 'none';
  }, 500);
};

const showAlert = () => {
  alertContainer.classList.remove('modal-hide');
  alertContainer.style.display = 'flex';
  alertContainer.classList.add('modal-show');
};

const hideAlert = () => {
  alertContainer.classList.remove('modal-show');
  alertContainer.classList.add('modal-hide');
  setTimeout(() => {
    alertContainer.style.display = 'none';
  }, 500);
};



export {
  showModes,
  hideModes,
  showForm,
  hideForm,
  showOrderContainer,
  hideOrderContainer,
  showAddLinkBtn,
  hideAddLinkBtn,
  showLinks,
  hideLinks,
  showEditMessage,
  hideEditMessage,
  showMenu,
  hideMenu,
  showModal,
  hideModal,
  showAlert,
  hideAlert,
};
