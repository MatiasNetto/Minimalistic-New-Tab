const linksContainer = document.querySelector('.links-container');

//default links
const bbdd = [
  {
    id: 'ad8832a0-d4e2-5ea3-f9ef-1724d8a6',
    order: '1',
    name: 'Youtube',
    link: 'https://www.youtube.com/',
  },
  {
    id: '74cafa7a-1f71-ad4d-1cd4-85114f2e',
    order: '2',
    name: 'Reddit',
    link: 'https://www.reddit.com/',
  },
  {
    id: 'ee09d542-5426-087c-e6b2-52a14018',
    order: '3',
    name: 'Lo-fi',
    link: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
  },
  {
    id: '1da267f6-6e99-cbc8-fd3b-44b4d6fe',
    order: '4',
    name: 'Gmail',
    link: 'https://mail.google.com/mail/u/0/#inbox',
  },
  {
    id: '563745cd-b0c4-089b-deea-26e6a3c6',
    order: '5',
    name: 'Github',
    link: 'https://github.com/',
  },
];

let links;

//set the default links if the links localStorage is empty
if (localStorage.getItem('linkItems') == null) {
  let bbddString = JSON.stringify(bbdd);
  localStorage.setItem('linkItems', bbddString);
}

const getLinks = () => {
  //get the links from localStorage and add it to the DOM
  let linksFragment = document.createDocumentFragment();
  links = JSON.parse(window.localStorage.getItem('linkItems'));

  //create all the links and add it to the linksFragment
  links.map((e) => {
    let newElement = document.createElement('LI');
    newElement.classList.add('link-item');
    newElement.style.order = e.order;

    newElement.innerHTML = `<a href="${e.link}">${e.name}</a>`;
    linksFragment.appendChild(newElement);
  });

  //add the document fragments to the DOM
  linksContainer.appendChild(linksFragment);
};

getLinks();

export { links };
