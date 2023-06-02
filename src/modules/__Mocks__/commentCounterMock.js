const commentCounterJest = (data) => {
  const commentTitle = document.querySelector('.commentNumber');
  commentTitle.innerHTML = `Comments (${data.length})`;
};

export default commentCounterJest;