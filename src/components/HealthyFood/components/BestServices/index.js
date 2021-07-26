import React from 'react';
import Image from 'next/image';

import {
  ContainerBestServices,
  ContentBestServices,
  ImageBestServices,
  ContentTextBestServices,
  TitleBestServices,
  ButtonBestServices,
} from './styled';

export default function BestServices() {
  return (
    <ContainerBestServices>
      <ContentBestServices>
        <ImageBestServices>
          <img src='/images/bloco_services.svg' alt='Best Services' />
        </ImageBestServices>
        <ContentTextBestServices>
          <TitleBestServices>
            The best services ready <br />
            To serve you
          </TitleBestServices>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ButtonBestServices>Know More</ButtonBestServices>
        </ContentTextBestServices>
      </ContentBestServices>
    </ContainerBestServices>
  );
}
