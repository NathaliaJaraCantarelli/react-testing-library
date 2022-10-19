import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se contém os links de navegação', () => {
  test('O primeiro link deve conter o texto Home', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[0].textContent).toBe('Home');
  });
  test('O segundo link deve conter o texto About', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[1].textContent).toBe('About');
  });
  test('O terceiro link deve conter o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const links = screen.getAllByRole('link');
    expect(links[2].textContent).toBe('Favorite Pokémons');
  });
});
