const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments?item_id=${movieData.id}`;
  const commentSection = document.querySelector('.commentSection');
  commentSection.innerHTML = '';

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    data.forEach((element) => {
      const toAdd = document.createElement('p');
      toAdd.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentSection.appendChild(toAdd);
    });
  } catch (error) {
    commentSection.innerHTML = 'No comments yet';
  }
};

const saveData = async (movieData) => {
  const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments';
  const username = document.querySelector('.commentName');
  const comment = document.querySelector('.commentMessage');

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