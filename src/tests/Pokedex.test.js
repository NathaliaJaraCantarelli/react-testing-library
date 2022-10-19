import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se o Home contém os botões', () => {
  test('Se os botões contém o nome correto', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].textContent).toBe('All');
    expect(buttons[1].textContent).toBe('Electric');
    expect(buttons[2].textContent).toBe('Fire');
    expect(buttons[3].textContent).toBe('Bug');
    expect(buttons[4].textContent).toBe('Poison');
    expect(buttons[5].textContent).toBe('Psychic');
    expect(buttons[6].textContent).toBe('Normal');
    expect(buttons[7].textContent).toBe('Dragon');
  });

  test('Se os botões de filtragem contém o data testid exceto o All', () => {
    renderWithRouter(<App />);
    const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
    expect(buttonsFilter.length).toBe(7);
    const buttons = screen.getAllByRole('button');
    const textAll = [buttons[0].textContent];
    expect(buttonsFilter).toEqual(expect.not.arrayContaining(textAll));
  });

  test('Se é possível clicar no botão All', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
  });
});
