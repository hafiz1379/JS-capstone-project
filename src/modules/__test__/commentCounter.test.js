import commentCounterJest from "../__Mocks__/commentCounterMock.js";

// Positive test case
test('commentCounterJest should update comment title with correct number of comments', () => {
  // Mocking the document object
  const mockDocument = {
    querySelector: jest.fn().mockReturnValue({ innerHTML: '' })
  };
  const data = ['comment1', 'comment2', 'comment3'];
  commentCounterJest(data);
  expect(mockDocument.querySelector).toHaveBeenCalledWith('.commentNumber');
  expect(mockDocument.querySelector().innerHTML).toBe(Comments (${data.length}));
});

// Negative test case
test('commentCounterJest should not update comment title if data is empty', () => {
  // Mocking the document object
  const mockDocument = {
    querySelector: jest.fn().mockReturnValue({ innerHTML: '' })
  };
  const data = [];
  commentCounterJest(data);
  expect(mockDocument.querySelector).not.toHaveBeenCalled();
  expect(mockDocument.querySelector().innerHTML).toBe('');
});

// Edge test case
test('commentCounterJest should handle large data sets', () => {
  // Mocking the document object
  const mockDocument = {
    querySelector: jest.fn().mockReturnValue({ innerHTML: '' })
  };
  const data = new Array(1000000).fill('comment');
  commentCounterJest(data);
  expect(mockDocument.querySelector).toHaveBeenCalledWith('.commentNumber');
  expect(mockDocument.querySelector().innerHTML).toBe(Comments (${data.length}));
});

// Error test case
test('commentCounterJest should throw an error if data is not an array', () => {
  expect(() => commentCounterJest('not an array')).toThrow();
});