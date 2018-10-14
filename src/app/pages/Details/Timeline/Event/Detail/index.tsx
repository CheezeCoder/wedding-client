import * as React from 'react';

interface DetailProps {
  paragraphs: Array<string>;
}

export const Detail: React.SFC<DetailProps> = (props) => {
  return (
    <div>{props.paragraphs.map((p, index) => <p key={index}>{p}</p>)}</div>
  );
};
