import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// https://github.com/panacloud/bootcamp-2020
// https://github.com/MuhammadMohsin/PanacloudBootcamp2020
//https://github.com/aamirpinger/bootcamp-2020
// http://hr280clas2bootcamp.surge.sh/ 