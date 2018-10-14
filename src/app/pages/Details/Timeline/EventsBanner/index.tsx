import * as React from 'react';
import CakeIcon from 'assets/images/cake-icon.png';
import { Banner } from 'app/pages/Details/Banner';
import * as style from './styles.css';

export interface EventBannerProps {}

export const EventsBanner: React.StatelessComponent<EventBannerProps> = () => {
  return (
    <div className={style.root}>
      <div className={style.icon}>
        <img src={CakeIcon} alt="Cake banner icon" />
      </div>
      <Banner title="Wedding Events" />
    </div>
  );
};
