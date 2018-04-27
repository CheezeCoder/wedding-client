import * as React from 'react';
import { Link } from 'react-router-dom';

interface LuxbarItemProps {
  text: string;
  path: string;
}

export const LuxbarItem = (props: LuxbarItemProps) => (
  <li className="luxbar-item">
    <Link to={`/${props.path}`}>{props.text}</Link>
  </li>
);
