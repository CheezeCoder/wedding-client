import * as React from 'react';
import WeddingVideo from 'assets/videos/wedding.webm';
import * as style from './style.css';
interface BannerVideoProps {}

export const BannerVideo: React.StatelessComponent<BannerVideoProps> = () => (
  <video preload="preload" id="video" autoPlay loop className={style.root}>
    <source src={WeddingVideo} type="video/webm" />
  </video>
);
