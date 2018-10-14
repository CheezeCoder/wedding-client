import * as React from 'react';
import * as Styles from './styles.css';

interface ButtonProps {
  text: string;
  action(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button: React.StatelessComponent<ButtonProps> = ({
  text,
  action
}) => (
  <button className={Styles.root} type="button" onClick={action}>
    {text}
  </button>
);
