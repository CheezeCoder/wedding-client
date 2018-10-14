import * as React from 'react';
import * as Styles from './styles.css';
import { TextBlock } from 'app/pages/Profile/Card/Adlib/TextBlock';
import { InputBlock } from 'app/pages/Profile/Card/Adlib/InputBlock';
import { DropdownBlock } from 'app/pages/Profile/Card/Adlib/DropdownBlock';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';

interface AdlibProps {}

export const Adlib: React.StatelessComponent<AdlibProps> = observer(() => (
  <div className={Styles.root}>
    <TextBlock text={`When Chris and My`} />
    <InputBlock placheholder={`verb`} type={`verb1`} />
    <TextBlock text={`down the`} />
    <InputBlock placheholder={`noun`} type={`noun1`} />
    <TextBlock text={`on September 05th,`} />
    <InputBlock
      className={Styles.guests}
      readonly
      placheholder={ProfileStore.guestsName}
    />
    <DropdownBlock />
    <TextBlock text={`be there to`} />
    <InputBlock placheholder={`verb`} type={`verb2`} />
    <TextBlock text={`them. We were so`} />
    <InputBlock placheholder={`emotion`} type={`emotion`} />
    <TextBlock text={`to receive our invite. We're very`} />
    <InputBlock placheholder={`adjective`} type={`adjective`} />
    <TextBlock text={`for Chris and My and wish them many`} />
    <InputBlock placheholder={`plural noun`} type={`pluralnoun`} />
    <TextBlock text={`of`} />
    <InputBlock placheholder={`verb`} type={`verb3`} />
    <TextBlock text={`.`} />
  </div>
));
