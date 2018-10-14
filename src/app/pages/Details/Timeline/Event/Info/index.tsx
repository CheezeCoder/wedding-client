import * as React from 'react';
import { Row } from './Row';
import { IEventRow } from 'app/stores/ContentStore';

interface InfoProps {
  rows: Array<IEventRow>;
}

export const Info: React.SFC<InfoProps> = (props) => {
  const rows = props.rows.map((row) => (
    <Row
      key={`${row.icon}${row.alt}`}
      icon={row.icon}
      altText={row.alt}
      text={row.text}
    />
  ));

  return <div>{rows}</div>;
};

export default Info;
