import * as React from 'react';
import * as Styles from './styles.css';

interface InnerWrapperProps {}

export const InnerWrapper: React.StatelessComponent<InnerWrapperProps> = ({
  children
}) => <div className={Styles.root}>{children}</div>;

export const InnerWrapperAlt: React.StatelessComponent<InnerWrapperProps> = ({
  children
}) => <div className={Styles.aroot}>{children}</div>;
