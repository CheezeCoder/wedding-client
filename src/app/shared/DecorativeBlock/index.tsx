import * as React from 'react';
import * as styles from './styles.css';

interface DecorativeBlockProps {
  height?: number;
}

export const DecorativeBlock: React.SFC<DecorativeBlockProps> = ({
  height
}) => {
  return (
    <div className={styles.divider} style={height ? { height: height } : {}} />
  );
};
