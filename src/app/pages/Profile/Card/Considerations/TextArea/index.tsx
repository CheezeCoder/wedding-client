import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';

interface TextAreaProps {}

export const TextArea: React.StatelessComponent<TextAreaProps> = observer(
  () => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      ProfileStore.updateCondsiderations(event.target.value);
    };
    return (
      <div className={Styles.root}>
        <textarea onChange={onChange} value={ProfileStore.considerations} />
      </div>
    );
  }
);
