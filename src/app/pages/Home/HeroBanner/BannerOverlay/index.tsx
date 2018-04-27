import * as React from 'react';
import * as style from './style.css';

interface BannerOverlayProps {}

export const BannerOverlay: React.StatelessComponent<
  BannerOverlayProps
> = () => <div className={style.root} />;
