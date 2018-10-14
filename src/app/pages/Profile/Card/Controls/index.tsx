import * as React from 'react';
import * as Styles from './styles.css';
import { Button } from 'app/pages/Profile/Card/Controls/Button';
import { ProfileStore } from 'app/stores/ProfileStore';

interface ControlsProps {}

export const Controls: React.StatelessComponent<ControlsProps> = () => {
  const onSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    ProfileStore.onSave();
  };

  const onLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    ProfileStore.onSignOut();
  };

  return (
    <div className={Styles.root}>
      <Button action={onSave} text="Save" />
      <Button action={onLogout} text="Sign Out" />
    </div>
  );
};
