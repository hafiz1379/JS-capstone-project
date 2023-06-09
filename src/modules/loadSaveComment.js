import commentCounter from './commentCounter.js';

const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments?item_id=${movieData.id}`;
  const commentSection = document.querySelector('.commentSection');
  commentSection.innerHTML = '';

  try {
    const response = await fetch(API);
    const data = await response.json();

    if (data.length > 0) {
      data.forEach((element) => {
        const toAdd = document.createElement('p');
        toAdd.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentSection.appendChild(toAdd);
        commentCounter(data);
      });
    } else {
      commentSection.innerHTML = 'No comments yet';
      commentCounter([]);
    }
    // Process the retrieved data
  } catch (error) {
    commentSection.innerHTML = 'An error has occured while loading the comments';
  }
};

const saveData = async (movieData) => {
  const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments';
  const username = document.querySelector('.commentName');
  const comment = document.querySelector('.commentMessage');

  const usernameValue = username.value.trim();
  const commentValue = comment.value.trim();

  if (usernameValue === '' || commentValue === '') {
    username.setAttribute('placeholder', 'Please enter your name');
    comment.setAttribute('placeholder', 'Please enter your comment');
    return;
  }

  const commentObject = {
    item_id: movieData.id,
    username: username.value,
    comment: comment.value,
  };
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObject),
  });

  username.value = '';
  comment.value = '';
};

export { fetchData, saveData };