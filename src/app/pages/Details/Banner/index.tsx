import * as React from 'react';
import * as style from './styles.css';

export interface BannerProps {
  title: string;
}

export const Banner: React.StatelessComponent<BannerProps> = (props) => {
  return (
    <div className={style.root}>
      <div className={style.title}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};
