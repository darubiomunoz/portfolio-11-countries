import styled from 'styled-components';

import StyledInfoArticle from '../countries/StyledInfoArticle';

import { spacingRegular } from '../../Variables';

const StyledArticle = styled(StyledInfoArticle)`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacingRegular};
  background-color: ${props => props.theme.background2};
  border-radius: 0;
  box-shadow: none;
`;

export default StyledArticle;