import * as React from 'react';
import { ContentStore, ICountry } from 'app/stores/ContentStore';
import { Country } from 'app/pages/Gifts/Payments/Country';
import * as Styles from './styles.css';

interface PaymentsProps {}

export const Payments: React.StatelessComponent<PaymentsProps> = () => (
  <ul className={Styles.root}>
    {ContentStore.ThankYou.Payments.Countries.map((country) => (
      <Country key={country.Name} country={country as ICountry} />
    ))}
  </ul>
);
