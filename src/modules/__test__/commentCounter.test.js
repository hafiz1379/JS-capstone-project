import commentCounter from '../commentCounter.js';

const commentNumber = document.createElement('div');
commentNumber.classList.add('commentNumber');
document.body.appendChild(commentNumber);

// Positive test case
test('commentCounter should update comment title with correct number of comments', () => {
  const data = ['comment1', 'comment2', 'comment3'];
  commentCounter(data);
  expect(document.querySelector('.commentNumber').innerHTML).toBe(`Comments (${data.length})`);
});

// Negative test case
test('commentCounter should update comment title if data is empty', () => {
  const data = [];
  commentCounter(data);
  expect(document.querySelector('.commentNumber').innerHTML).toBe(`Comments (${data.length})`);
});

// Edge test case
test('commentCounter should handle large data sets', () => {
  const data = new Array(1000000).fill('comment');
  commentCounter(data);
  expect(document.querySelector('.commentNumber').innerHTML).toBe(`Comments (${data.length})`);
});