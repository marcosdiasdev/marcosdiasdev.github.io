import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import AppTemplate, { Props } from './AppTemplate';

describe('<App />', () => {
  const renderComponent = (args: Props) => {
    return render(<AppTemplate {...args} />);
  };

  describe('Rendering', () => {
    it('Should render without throwing', () => {
      renderComponent({ children: <div>content</div> });
      expect(screen.getByText('content')).toBeInTheDocument();
    });
  });
});
