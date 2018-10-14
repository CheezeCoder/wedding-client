import * as React from 'react';
import * as style from './styles.css';

export interface RowProps {
  icon: any;
  text: string;
  altText: string;
}

export const Row: React.SFC<RowProps> = (props) => {
  const url = require(`assets/images/${props.icon}`);
  return (
    <div className={style.root}>
      <div className={style.icon}>
        <img src={url.default} alt={props.altText} />
      </div>
      <h3>{props.text}</h3>
    </div>
  );
};
