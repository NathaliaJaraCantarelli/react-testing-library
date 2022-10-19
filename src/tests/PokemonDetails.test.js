import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa os componentes do Pokemon', () => {
  const moreDetailsString = 'More details';
  test('Se a página More Details contém os headings necessários e o texto summary', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const name = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(name).toBeInTheDocument();
    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeInTheDocument();
    const summaryText = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(summaryText).toBeInTheDocument();
    const locations = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(locations).toBeInTheDocument();
  });
  test('Se a página More Details contém os src corretos', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const images = screen.getAllByRole('img');
    const imageAlt = 'Pikachu location';
    const srcImage1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const srcImage2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(images[1].src).toBe(srcImage1);
    expect(images[1].alt).toBe(imageAlt);
    expect(images[2].src).toBe(srcImage2);
    expect(images[2].alt).toBe(imageAlt);
  });
  test('Se a página More Details contém label com o texto Pokemon favoritado?', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsString });
    userEvent.click(moreDetails);
    const favorite = screen.getByLabelText('Pokémon favoritado?');
    expect(favorite).toBeInTheDocument();
  });
});
