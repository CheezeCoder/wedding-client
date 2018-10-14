import * as React from 'react';
import * as Styles from './styles.css';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import { Hero } from 'app/pages/News/Hero';
import { NewsCardOne } from 'app/pages/News/NewsCardOne';
import { NewsCardTwo } from 'app/pages/News/NewsCardTwo';
import { NewsCardThree } from 'app/pages/News/NewsCardThree';
import { NewsCardFour } from 'app/pages/News/NewsCardFour';

interface NewsProps {}

export const News: React.StatelessComponent<NewsProps> = () => (
  <Page opaqueHeader>
    <Hero />
    <div className={Styles.news}> News!</div>
    <NewsCardFour header={`Bus Schedule and important information`} />
    <NewsCardThree header={`We need bus money!`} />
    <NewsCardTwo header={`For those who can't make it!`} />
    <NewsCardOne header={`Only 54 days to go!`} />
    <DecorativeBlock />
    <Footer />
  </Page>
);
