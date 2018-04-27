import * as React from 'react';
import * as style from './style.css';

interface FooterProps {
  alternate?: boolean;
}

export const Footer: React.StatelessComponent<FooterProps> = ({
  alternate = false
}) => (
  <div className={`${style.root} ${alternate ? style.alternate : null}`}>
    <div className={style.info}>
      <div>Kefalonia, Greece</div>
      <div>September 05th, 2018</div>
    </div>
    <div className={style.copyright}>
      ©
      <span id="copyrightYear"> </span>by Christopher Shields
    </div>
    <div className={`${style.border} ${alternate ? style.alternate : null}`} />
  </div>
);
