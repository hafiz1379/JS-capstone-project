const showComments = (movieData) => {
  const $ = document;
  const movieCardsContainer = $.getElementById('movie-cards');
  const popUp = $.createElement('div');
  const popCard = $.createElement('div');
  const newImage = $.createElement('img');
  const title = $.createElement('h2');
  const status = $.createElement('p');
  const premiered = $.createElement('p');
  const commentTitle = $.createElement('h3');
  const commentSection = $.createElement('div');


  popUp.classList.add('popUp');
  popCard.classList.add('popCard');
  newImage.classList.add('commentImage');
  title.classList.add('commentTitle');
  commentSection.classList.add('commentSection');

  newImage.src = movieData.image;
  title.innerText = movieData.name;
  status.innerHTML = `status: `+movieData.showStatus;
  premiered.innerHTML= `premiered: `+movieData.premiered;
  commentTitle.innerHTML = 'Comments';

  popCard.appendChild(newImage);
  popCard.appendChild(title);
  popCard.appendChild(status);
  popCard.appendChild(premiered);
  popCard.appendChild(commentTitle);

  popUp.appendChild(popCard);
  movieCardsContainer.appendChild(popUp);
  
  
};

export default showComments;
