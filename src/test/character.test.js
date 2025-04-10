import Character from '../characters';

test('checking the length of the name', () => {
  expect(() => new Character('a', 'Bowman')).toThrow(new Error("Ошибка"));
});

test('check Character no name', () => {
  expect(() => new Character('Player', 'Hero')).toThrow(new Error("Ошибка"));
});