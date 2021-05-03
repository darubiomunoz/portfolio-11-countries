import styled from 'styled-components';

import { borderRadiusExtraSmall, spacingRegular, spacingSmall } from '../../Variables';

const StyledInfoArticle = styled.article`
  width: 100%;
  padding: ${spacingRegular} ${spacingSmall};
  border-bottom-left-radius: ${borderRadiusExtraSmall};
  border-bottom-right-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};
`;

export default StyledInfoArticle;