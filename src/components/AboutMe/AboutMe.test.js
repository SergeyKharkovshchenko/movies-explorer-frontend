import { render } from '@testing-library/react';
import { AboutMe } from './AboutMe';
import '@testing-library/jest-dom';

describe('AboutMe', () => {
  const { getByTestId } = render(<AboutMe />);
  const aboutMe__title = getByTestId('aboutMe__title');

  test('aboutMe__title test to exist', () => {
    expect(aboutMe__title).toBeInTheDocument();
  });

  test('aboutMe__title test to have correct name', () => {
    expect(aboutMe__title.textContent).toEqual('Sergey');
  });
});
