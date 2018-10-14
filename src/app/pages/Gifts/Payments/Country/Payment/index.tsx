import * as React from 'react';
import { IMethod } from 'app/stores/ContentStore';
import * as Styles from './styles.css';

interface PaymentProps {
  details: IMethod;
}

export const Payment: React.StatelessComponent<PaymentProps> = ({
  details
}) => {
  let output;
  if (details.Targets.length > 1) {
    output = details.Targets.map((t) => (
      <span key={`${t}${details.Type}`}>{t} or </span>
    ));
    output[details.Targets.length - 1] = (
      <span key={`single-target-key ${details.Type}`}>
        {details.Targets[details.Targets.length - 1]}
      </span>
    );
  } else {
    output = details.Targets[0];
  }

  return (
    <span className={Styles.payment}>
      <li className={Styles.detail}>{details.Type}</li>
      <li className={Styles.type}>{output}</li>
    </span>
  );
};
