import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testa a página NotFound', () => {
  test('Se a página NotFound contém um h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const heading = screen.getByRole('heading', { level: 2, name: /Page requested not found/ });
    expect(heading).toBeInTheDocument();
  });
  test('Se a página About contém uma imagem e é o src especifico', () => {
    render(<NotFound />);
    const image = screen.getByRole('img');
    const srcImage = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(image.src).toBe(srcImage);
  });
});
