import * as React from 'react';
import MapImg from 'assets/images/MapOfKefalonia.png';
import * as style from './style.css';
interface MapProps {}

export const Map: React.StatelessComponent<MapProps> = () => (
  <div className={style.root}>
    <img src={MapImg} alt="Artistic map of kefalonia" />
  </div>
);
