import * as React from 'react';
import { BannerTitle } from './BannerTitle';
import { BannerCountdown } from './BannerCountdown';
import { BannerVideo } from './BannerVideo';
import * as style from './style.css';
import { BannerOverlay } from 'app/pages/Home/HeroBanner/BannerOverlay';

interface HeroBannerProps {}

export const HeroBanner: React.StatelessComponent<HeroBannerProps> = () => (
  <div className={style.root}>
    <BannerTitle />
    <BannerCountdown />
    <BannerOverlay />
    <BannerVideo />
  </div>
);
