import sokOgErstatt from './sok-og-erstatt';

test('Skal finne riktig antall treff i js-filer', () => {
  expect(sokOgErstatt('{VERSJON}', 'v0.16.0', 'testfiler/**/*.js', true)).toBe(3);
});

test('Skal finne riktig antall treff i html-filer', () => {
  expect(sokOgErstatt('{VERSJON}', 'v0.16.0', 'testfiler/**/*.html', true)).toBe(2);
});

test('Skal finne riktig antall treff i html- og js-filer en glob', () => {
  expect(sokOgErstatt('{VERSJON}', 'v0.16.0', 'testfiler/**/*.{html,js}', true)).toBe(5);
});

test('Skal finne riktig antall treff i html- og js-filer flere globs', () => {
  expect(sokOgErstatt('{VERSJON}', 'v0.16.0', ['testfiler/**/*.html', 'testfiler/**/*.js'], true)).toBe(5);
});
