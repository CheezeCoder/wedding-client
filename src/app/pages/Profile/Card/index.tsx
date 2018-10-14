import * as React from 'react';
import * as Styles from './styles.css';
import { Header } from 'app/pages/Profile/Card/Header';
import { Adlib } from 'app/pages/Profile/Card/Adlib';
import { Options } from 'app/pages/Profile/Card/Options';
import { Considerations } from 'app/pages/Profile/Card/Considerations';
import { Controls } from 'app/pages/Profile/Card/Controls';
import { Accommodation } from 'app/pages/Profile/Card/Accommodation';

interface CardProps {}

export const Card: React.StatelessComponent<CardProps> = () => (
  <div className={Styles.root}>
    <Header />
    <Adlib />
    <Accommodation />
    <Options />
    <Considerations />
    <Controls />
  </div>
);
