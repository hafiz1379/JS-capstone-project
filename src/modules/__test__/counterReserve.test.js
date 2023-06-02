/* @jest-environment jsdom */

import {
  film1, film2, film3, film4,
} from '../__Mocks__/reservationsMock.js';
import counterReserveJest from '../__Mocks__/counterReserveMock.js';

describe('', () => {
  test('', () => {
    expect(counterReserveJest(film1)).toBe(4);
  });

  test('', () => {
    expect(counterReserveJest(film2)).toBe(5);
  });

  test('', () => {
    expect(counterReserveJest(film3)).toBe(1);
  });

  test('', () => {
    expect(counterReserveJest(film4)).toBe(3);
  });
});