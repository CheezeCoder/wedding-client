import * as React from 'react';
// import * as style from './style.css';

interface BannerCountdownProps {}

export const BannerCountdown: React.StatelessComponent<
  BannerCountdownProps
> = () => (
  <div className={`countdown-wrapper`}>
    <div className="simply-countdown simply-countdown-one"> </div>
  </div>
);
