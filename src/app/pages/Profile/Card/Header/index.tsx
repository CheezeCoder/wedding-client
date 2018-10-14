import * as React from 'react';
import * as Styles from './styles.css';

interface HeaderProps {}

export const Header: React.StatelessComponent<HeaderProps> = () => (
  <div className={Styles.root}>
    <h1>See You Soon!</h1>
  </div>
);
