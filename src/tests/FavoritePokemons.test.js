import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testa a página FavoritePokemons', () => {
  test('Se a página contém a mensagem No favorite pokemon found', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn(() => Promise.resolve());
    render(<FavoritePokemons />);
    const messege = await screen.findByText(/No favorite pokemon found/);
    expect(messege).toBeInTheDocument();
  });
});
