import React from 'react';

import {
  ContainerIntro,
  ContentIntro,
  ImageIntro,
  ContentTextIntro,
  TitleIntro,
  FormIntro,
  ButtonIntro,
  InputIntro,
} from './styled';

export default function Intro() {
  return (
    <ContainerIntro>
      <ContentIntro>
        <ContentTextIntro>
          <TitleIntro>
            Ready for <br />
            Trying a new <br />
            recipe?
          </TitleIntro>
          <FormIntro>
            <InputIntro type='text' placeholder='Search healthy recipes' />
            <ButtonIntro type='submit'>
              <img src='/images/LupaIcon.svg' alt='Search' />
            </ButtonIntro>
          </FormIntro>
        </ContentTextIntro>
        <ImageIntro>
          <img src='/images/Illustration.svg' alt='Illustration' />
        </ImageIntro>
      </ContentIntro>
    </ContainerIntro>
  );
}
