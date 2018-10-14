import * as React from 'react';
import * as Styles from './styles.css';

interface ErrorProps {}

export const Error: React.StatelessComponent<ErrorProps> = () => (
  <div className={Styles.root}>
    {'Woops, looks like you got the wrong email or password'}
  </div>
);
