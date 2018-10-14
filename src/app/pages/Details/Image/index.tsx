import * as React from 'react';
import * as Style from './styles.css';
// import test from 'assets/images/mapmarker.png';

interface ImageProps {
  imgUrl: string;
  imgAlt: string;
}

export const Image: React.SFC<ImageProps> = (props) => {
  const url = require(`assets/images/${props.imgUrl}`);
  return (
    <div className={Style.image}>
      <img src={url} alt={props.imgAlt} />
    </div>
  );
};

export default Image;
