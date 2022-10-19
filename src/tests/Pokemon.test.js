import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
// import Pokemon from '../components/Pokemon';
// import PokemonDetails from '../pages/PokemonDetails';
import App from '../App';

describe('Testa os componentes do Pokemon', () => {
  const moreDetailsString = 'More details';
  test('Se a página More Details contém a imagem do Pokemon', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const images = screen.getAllByRole('img');
    const srcPikachu = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(images[0].src).toBe(srcPikachu);
    expect(images[0].alt).toBe('Pikachu sprite');
  });
  test('Se a página More Details contém a imagem de favorito quando favoritado', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const favorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favorite);
    const images = screen.getAllByRole('img');
    expect(images[1].src).toBe('http://localhost/star-icon.svg');
    expect(images[1].alt).toBe('Pikachu is marked as favorite');
  });
  test('Se a página More Details contém o tipo do Pokemon', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.textContent).toBe('Electric');
  });
});
