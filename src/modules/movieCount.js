const updateMovieCardCount = (count) => {
  const movieCardCount = document.getElementById('span');
  movieCardCount.textContent = count;
};
export default updateMovieCardCount;