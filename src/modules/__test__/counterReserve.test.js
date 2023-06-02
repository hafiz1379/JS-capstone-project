/* @jest-environment jsdom */

import {
  film1, film2, film3, film4, film5,
} from '../__Mocks__/reservationsMock.js';
import counterReserveJest from '../__Mocks__/counterReserveMock.js';

describe('Testing reservations counter ', () => {
  test('The first test movie has four reservations, the function is expected to return the numerical value 4.', () => {
    expect(counterReserveJest(film1)).toBe(4);
  });

  test('The second test movie has five reservations, the function is expected to return the numerical value 5.', () => {
    expect(counterReserveJest(film2)).toBe(5);
  });

  test('The third test movie has one reservations, the function is expected to return the numerical value 1.', () => {
    expect(counterReserveJest(film3)).toBe(1);
  });

  test('The fourth test movie has three reservations, the function is expected to return the numerical value 3.', () => {
    expect(counterReserveJest(film4)).toBe(3);
  });

  test('The fifth test movie has zero reservations, the function is exptected to return the numerical value 0.', () => {
    expect(counterReserveJest(film5)).toBe(0);
  })
});