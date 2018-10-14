import * as React from 'react';
import { Luxbar } from 'app/components/Luxbar';

interface PageProps {
  opaqueHeader?: boolean;
}

export const Page: React.StatelessComponent<PageProps> = ({
  children,
  opaqueHeader
}) => (
  <>
    <Luxbar opactiy={opaqueHeader ? 0.7 : 1} />
    {children}
  </>
);
