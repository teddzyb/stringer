import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import { Meta } from './Meta';

jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return <>{props.children}</>;
    }
);

describe('Meta component', () => {
  describe('Render method', () => {
    it('should have a page title', async () => {
      const title = 'Some title';

      render(<Meta title={title} description="Some description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
