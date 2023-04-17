import { render, screen, within } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should render the component', () => {
      const meta = <div>Meta</div>;
      const children = <div>Children</div>;

      render(<Main meta={meta}>{children}</Main>);

      const main = screen.getByRole('main');
      const mainContent = within(main).getByText('Children');

      expect(mainContent).toBeInTheDocument();
    });
  });
});
