import * as React from 'react';
import * as Styles from './styles.css';

interface TextBlockProps {
  text: string;
}

export const TextBlock: React.StatelessComponent<TextBlockProps> = ({
  text
}) => <span className={Styles.root}>{text}</span>;
