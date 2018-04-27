import * as React from 'react';
import Title from 'assets/images/banner-title.png';
import * as style from './style.css';

interface BannerTitleProps {}

export const BannerTitle: React.StatelessComponent<BannerTitleProps> = () => (
  <div className={style.root}>
    <img src={Title} alt="Chris and My 2018" />
  </div>
);
