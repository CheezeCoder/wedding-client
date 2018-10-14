import * as React from 'react';
import * as Styles from './styles.css';

interface LoaderProps {}

export const Loader: React.StatelessComponent<LoaderProps> = () => (
  <div className={Styles.root}>{''}</div>
);
