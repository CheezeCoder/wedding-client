import * as React from 'react';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { Header } from 'app/pages/Gifts/Header';
import { Content } from 'app/pages/Gifts/Content';
import { Payments } from 'app/pages/Gifts/Payments';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import { InnerWrapper } from 'app/shared/InnerWrapper';

// import * as Styles from './styles.css';

interface GiftsProps {}

export const Gifts: React.StatelessComponent<GiftsProps> = () => (
  <Page>
    <InnerWrapper>
      <Header />
      <Content />
      <Payments />
    </InnerWrapper>
    <DecorativeBlock height={500} />
    <Footer />
  </Page>
);
