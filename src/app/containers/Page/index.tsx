import * as React from 'react';
import { Luxbar } from 'app/components/Luxbar';

interface PageProps {}

export const Page: React.StatelessComponent<PageProps> = ({ children }) => (
  <>
    <Luxbar />
    {children}
  </>
);
