import styled from 'styled-components';

import StyledInfoArticle from '../countries/StyledInfoArticle';

import { spacingRegular, device } from '../../Variables';

const StyledArticle = styled(StyledInfoArticle)`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacingRegular};
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;

  @media ${device.width1280} {
    width: 40%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export default StyledArticle;