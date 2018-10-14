import * as React from 'react';
import { ICountry, IMethod } from 'app/stores/ContentStore';
import { Payment } from 'app/pages/Gifts/Payments/Country/Payment';
import * as Styles from './styles.css';

interface CountryProps {
  country: ICountry;
}

export const Country: React.StatelessComponent<CountryProps> = ({
  country
}) => (
  <li>
    <div className={Styles.country}>
      {country.Name}
      <span className={Styles.flagwrapper}>
        <img className={Styles.flag} src={country.Icon} alt={'some alt'} />
      </span>
    </div>

    <ul className={Styles.payments}>
      {country.Methods.map((method) => (
        <Payment
          key={`${country.Name}${method.Type}`}
          details={method as IMethod}
        />
      ))}
    </ul>
  </li>
);
