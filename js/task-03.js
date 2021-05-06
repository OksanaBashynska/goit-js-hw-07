const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

for (const image of images) {
  document.querySelector('ul').insertAdjacentHTML('afterbegin', `<li><img src="${image.url}" alt="${image.alt}" width="300px" height="200px"></li>`)
}

/* const galleryListEl = document.querySelector('ul');
  galleryListEl.style.display = 'flex';
  const elements = images.map(({ url, alt }) => {
  galleryListEl.insertAdjacentHTML('afterbegin', `<li><img src="${url}" alt="${alt}" width="100%" height="100%"></li>`)
});
 */
