import * as React from 'react';
import * as style from './style.css';

interface SpacerProps {
  color?: string;
}

export const Spacer: React.StatelessComponent<SpacerProps> = (props) => (
  <div className={style.root} style={{ backgroundColor: props.color }} />
);
