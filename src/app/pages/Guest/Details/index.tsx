import * as React from 'react';
import * as Styles from './styles.css';

interface DetailsProps {}

export const Details: React.StatelessComponent<DetailsProps> = () => (
  <div className={Styles.root}>
    Don't have a password or forgot yours? Email us at{' '}
    <a
      href="mailto:chrisShieldsEdmonton@gmail.com?Subject=Need%20Login"
      target="_top"
    >
      ChrisShieldsEdmonton@gmail.com
    </a>
  </div>
);
