import { getLinks, updateLinkItems } from './links.js';

let links;
let mode = 'select';
let editingId;

/*#######################*/
/*#### LOCAL STORAGE #### */
/*#######################*/

const updateLocalStorage = () => {
  //update the data of localStorage
  localStorage.setItem('linkItems', JSON.stringify(links));
  getLinks();
  updateLinkItems();
};

/*#######################*/
/*#### LINKS CONTROL #### */
/*#######################*/

const setLinks = (newLinks) => {
  links = newLinks;
};

const setLinksById = (id, linkData) => {
  links.forEach((e) => {
    if (e.id == id) {
      e.name = linkData.name;
      e.link = linkData.link;
      e.order = linkData.order;
    }
  });
};

const deleteLinksById = (id) => {
  for (let index in links) {
    if (links[index].id == id) {
      links.splice(index, 1);
    }
  }
};

const addNewLink = (linkData) => {
  links.push(linkData);
};

/*##############*/
/*#### UIDs ####*/
/*##############*/

const generateUID = () => {
  const S4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  //Return a UID of format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4();
};

/*######################*/
/*#### MODE CONTROL ####*/
/*######################*/

const setMode = (newMode) => {
  const formTittle = document.getElementById('form-tittle');
  mode = newMode;
  if (newMode == 'editing') {
    formTittle.textContent = 'Edit';
  } else if (newMode == 'add-remove') {
    formTittle.textContent = 'Add/Remove';
  }
};

/*####################*/
/*#### EDITING ID ####*/
/*####################*/

const setEditingId = (id) => {
  editingId = id;
};

export {
  links,
  mode,
  editingId,
  updateLocalStorage,
  setLinks,
  addNewLink,
  deleteLinksById,
  setLinksById,
  generateUID,
  setMode,
  setEditingId,
};
