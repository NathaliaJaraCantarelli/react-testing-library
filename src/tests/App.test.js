import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa se contém os links de navegação', () => {
  test('o primeiro link deve conter o texto Home', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[0].textContent).toBe('Home');
  });
  test('o segundo link deve conter o texto About', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[1].textContent).toBe('About');
  });
  test('o terceiro link deve conter o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[2].textContent).toBe('Favorite Pokémons');
  });
});
