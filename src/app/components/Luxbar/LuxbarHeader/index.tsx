import * as React from 'react';
import { LuxbarLogo } from './LuxbarLogo';
import { LuxbarHeaderLable } from './LuxbarHeaderLabel';

interface LuxbarHeaderProps {}

export const LuxbarHeader: React.StatelessComponent<LuxbarHeaderProps> = () => (
  <li className="luxbar-header">
    <LuxbarLogo />
    <LuxbarHeaderLable />
  </li>
);
