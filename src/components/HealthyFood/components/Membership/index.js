import React from 'react';

import {
  ContainerMembership,
  ContentMembership,
  ImageMembership,
  ContentTextMembership,
  TitleMembership,
  FormMembership,
  ButtonMembership,
  InputMembership,
} from './styled';

export default function Membership() {
  return (
    <ContainerMembership id="join">
      <ContentMembership>
        <ContentTextMembership>
          <TitleMembership>
            Join our membership <br />
            to get special offer
          </TitleMembership>
          <FormMembership>
            <InputMembership
              type='text'
              placeholder='Enter your email address'
            />
            <ButtonMembership type='submit'>Join</ButtonMembership>
          </FormMembership>
        </ContentTextMembership>
        <ImageMembership>
          <img src='/images/bloco_final_image.svg' alt='bloco_final_image' />
        </ImageMembership>
      </ContentMembership>
    </ContainerMembership>
  );
}
