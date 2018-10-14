import * as React from 'react';
import { Page } from 'app/containers/Page';
import { InnerWrapper } from 'app/shared/InnerWrapper';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import { Footer } from 'app/shared/Footer';
import { Player } from 'app/pages/Stream/Player';
import { Spacer } from 'app/shared/Spacer';

interface StreamProps {}

export const Stream: React.StatelessComponent<StreamProps> = () => (
  <Page>
    <InnerWrapper>
      <Spacer />
      <Player />
    </InnerWrapper>
    <DecorativeBlock height={500} />
    <Footer />
  </Page>
);
