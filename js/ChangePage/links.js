import { handleLinkClick } from './changes.js';
import { links, mode, setLinks } from './dataControl.js';

const linksContainer = document.getElementById('links-container');

const getLinks = () => {
  //get the items from local storage
  setLinks(JSON.parse(window.localStorage.getItem('linkItems')));
};

const updateLinkItems = () => {
  //delete all items
  linksContainer.innerHTML = '';

  //map the items into the Dom
  links.map((e) => {
    //crete the html item
    let newElement = document.createElement('BUTTON');
    newElement.classList.add('link-item');
    newElement.style.order = e.order;

    //add the Link, the delete icon and handleClick event
    newElement.innerHTML = `<a>${e.name}</a> <img src="assets/Gui/Trash-BTN.png" class="link-delete-icon">  </img>`;
    newElement.addEventListener('click', () => {
      handleLinkClick(e.id, e.order);
    });

    //in add-remove mode it adds the delete-mode class for hover effect
    if (mode == 'add-remove') {
      newElement.classList.add('link-item-delete-mode');
    }

    //append the link to the links container
    linksContainer.appendChild(newElement);
  });
};

getLinks();
updateLinkItems();

export { links, getLinks, updateLinkItems };
