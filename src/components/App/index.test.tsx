import * as React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('App Component', () => {
  it('should have correct message in DOM', () => {
    const { getByText } = render(<App />);
    const message = 'React Template with webpack';
    expect(getByText(message)).toBeInTheDocument();
  });
});
