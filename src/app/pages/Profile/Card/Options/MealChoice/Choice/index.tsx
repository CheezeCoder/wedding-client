import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';
import { EMeal } from 'app/lib/configuration';
export interface ChoiceProps {
  img: string;
  alt: string;
  label: string;
  active?: boolean;
  type: EMeal;
}

export const Choice: React.StatelessComponent<ChoiceProps> = observer(
  ({ img, alt, label, active, type }) => {
    const onChange = () => {
      ProfileStore.setMeal(type);
    };

    const url = require(`assets/images/${img}${active ? '-active' : ''}.png`);

    return (
      <div className={Styles.root} onClick={onChange}>
        <img src={url.default} alt={alt} />
        <h5>{label}</h5>
      </div>
    );
  }
);
