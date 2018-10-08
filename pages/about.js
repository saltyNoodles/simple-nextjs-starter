import styled from 'styled-components';

import { Page } from '../templates';

export default () => {
  return (
    <Page>
      <Img src="https://placehold.it/600x600" alt="Placeholder" />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur odit eum, commodi
      veniam dicta. Animi magnam dolores cupiditate, consequatur nobis quia sequi, quaerat,
      accusantium pariatur laboriosam voluptas ab nam.
    </Page>
  );
};

const Img = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
`;
