import { render } from '@testing-library/react';

import UiCheckbox from './ui-checkbox';

describe('UiCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
