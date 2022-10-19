import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Testa a página About', () => {
  test('Se a página About contém um h2 com o texto About Pokédex', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 2, name: /About Pokédex/ });
    expect(heading).toBeInTheDocument();
  });
  test('Se a página About contém uma imagem e é o src especifico', () => {
    render(<About />);
    const image = screen.getByRole('img');
    const srcImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(image.src).toBe(srcImage);
  });
});
