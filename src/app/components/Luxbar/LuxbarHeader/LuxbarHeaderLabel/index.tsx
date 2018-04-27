import * as React from 'react';
import * as style from './style.css';

interface LuxbarHeaderLableProps {}

export const LuxbarHeaderLable: React.StatelessComponent<
  LuxbarHeaderLableProps
> = () => (
  <label
    className="luxbar-hamburger luxbar-hamburger-doublespin"
    id="luxbar-hamburger"
    htmlFor="luxbar-checkbox"
  >
    <span className={style.backgroundTeal} />
  </label>
);
