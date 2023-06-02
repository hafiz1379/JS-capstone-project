import updateMovieCardCount from '../modules/movieCount.js';

describe('updateMovieCardCount', () => {
  test('should update the movie card count when there are movies in the DOM', () => {
    const movieCardCount = document.createElement('span');
    movieCardCount.id = 'span';
    document.body.appendChild(movieCardCount);

    updateMovieCardCount(5);

    expect(movieCardCount.textContent).toEqual('5');

    document.body.removeChild(movieCardCount);
  });

  test('should handle the case where there are no movies in the DOM', () => {
    const movieCardCount = document.createElement('span');
    movieCardCount.id = 'span';
    document.body.appendChild(movieCardCount);

    const movieItems = document.querySelectorAll('.movie-item');
    movieItems.forEach((item) => item.remove());

    updateMovieCardCount(0);

    expect(movieCardCount.textContent).toEqual('0');

    document.body.removeChild(movieCardCount);
  });
});