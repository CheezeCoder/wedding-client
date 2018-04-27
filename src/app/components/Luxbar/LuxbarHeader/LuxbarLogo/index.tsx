import * as React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

interface LuxbarLogoProps {}

export const LuxbarLogo: React.StatelessComponent<LuxbarLogoProps> = ({}) => (
  <Link to="/">
    <div className={`luxbar-brand ${style.logo}`}>
      C
      <span className={style.aside}>&</span>
      M
    </div>
  </Link>
);
