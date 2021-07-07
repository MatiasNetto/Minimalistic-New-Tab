const htmlBackground = document.querySelector('.background');

const uploadImages = [
  {
    id: 1,
    url: 'assets/Backgrounds/Nature_1.jpg',
  },
  {
    id: 2,
    url: 'assets/Backgrounds/Nature_2.jpg',
  },
  {
    id: 3,
    url: 'assets/Backgrounds/Nature_3.jpg',
  },
  {
    id: 4,
    url: 'assets/Backgrounds/Nature_4.jpg',
  },
  {
    id: 5,
    url: 'assets/Backgrounds/Nature_5.jpg',
  },
  {
    id: 6,
    url: 'assets/Backgrounds/Nature_6.jpg',
  },
  {
    id: 7,
    url: 'assets/Backgrounds/Nature_7.jpg',
  },
  {
    id: 8,
    url: 'assets/Backgrounds/Nature_8.jpg',
  },
  {
    id: 9,
    url: 'assets/Backgrounds/Nature_9.jpg',
  },
  {
    id: 10,
    url: 'assets/Backgrounds/Nature_10.jpg',
  },
  {
    id: 11,
    url: 'assets/Backgrounds/Mountains_1.jpg',
  },
  {
    id: 12,
    url: 'assets/Backgrounds/Mountains_2.jpg',
  },
  {
    id: 13,
    url: 'assets/Backgrounds/Mountains_3.jpg',
  },
  {
    id: 14,
    url: 'assets/Backgrounds/Mountains_4.jpg',
  },
  {
    id: 15,
    url: 'assets/Backgrounds/Mountains_5.jpg',
  },
  {
    id: 16,
    url: 'assets/Backgrounds/Island_1.jpg',
  },
  {
    id: 17,
    url: 'assets/Backgrounds/Island_2.jpg',
  },
  {
    id: 18,
    url: 'assets/Backgrounds/Island_3.jpg',
  },
  {
    id: 19,
    url: 'assets/Backgrounds/Other_1.jpg',
  },
  {
    id: 20,
    url: 'assets/Backgrounds/Other_2.jpg',
  },
];

//Local images
localStorage.setItem('backgroundImages', JSON.stringify(uploadImages));

const getImages = () => {
  //get images from localStorage and set the background
  let imagesLinks = JSON.parse(localStorage.getItem('backgroundImages'));

  //set a random number and aply the random image to the bakcground
  let randomNumber = Math.round(Math.random() * (imagesLinks.length - 1));
  htmlBackground.src = imagesLinks[randomNumber].url;
};

getImages();
