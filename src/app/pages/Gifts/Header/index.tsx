import * as React from 'react';
import * as Styles from './styles.css';
import ThankYouSrc from 'assets/images/thankyou.jpg';

interface HeaderProps {}

export const Header: React.StatelessComponent<HeaderProps> = () => (
  <div className={Styles.root}>
    <img src={ThankYouSrc} alt={`Thank you so much!`} />{' '}
  </div>
);
