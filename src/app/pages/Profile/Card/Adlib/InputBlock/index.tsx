import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';

interface InputBlockProps {
  placheholder: string;
  readonly?: boolean;
  type?: string;
  className?: string;
}

export const InputBlock: React.StatelessComponent<InputBlockProps> = observer(
  ({ placheholder, readonly, type, className }) => {
    const onChange = (event) => {
      ProfileStore.updateAdlib(type, event.target.value);
    };

    return (
      <span>
        <input
          className={`${Styles.root} ${className}`}
          type="text"
          placeholder={placheholder}
          readOnly={readonly}
          onChange={onChange}
          value={ProfileStore.card[type]}
        />
      </span>
    );
  }
);
