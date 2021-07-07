import { links } from './links.js';

const serchInput = document.getElementById('serchInput');

/*################################*/
/*#### FOCUS AND VERIFICATION ####*/
/*################################*/

const setFocusOnSearch = (key) => {
  serchInput.focus();

  /*There is a bug on firefox that dont add the first letter when you push the first letter, this lines is to solvent this bug, after one milisecond test, if the searchInput is empty then add the first letter */
  setTimeout(() => {
    if (serchInput.value == '') {
      serchInput.value = key;
    }
  }, 1);
};

const isTheKeyANumber = (key) => {
  if (JSON.stringify(Number(key)) == 'null') {
    return false;
  } else {
    return true;
  }
};

/*################*/
/*#### SEARCH ####*/
/*################*/

const searchALink = (key) => {
  try {
    window.open(links[Number(key) - 1].link, '_self');
  } catch (e) {}
};

const search = (e) => {
  //if press Enter search
  if (e.key == 'Enter') {
    window.open(`https://duckduckgo.com/?q=${serchInput.value}`, '_self');
  }
};

/*###################*/
/*#### LISTENERS ####*/
/*###################*/

document.addEventListener('keypress', (e) => {
  //
  if (document.activeElement != serchInput && isTheKeyANumber(e.key)) {
    searchALink(e.key);
  } else {
    setFocusOnSearch(e.key);
  }
});

document.addEventListener('keypress', (e) => search(e));
