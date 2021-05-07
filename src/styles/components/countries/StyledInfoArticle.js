import styled from 'styled-components';

import { borderRadiusExtraSmall, spacingNormal, spacingRegular, spacingSmall, device } from '../../Variables';

const StyledInfoArticle = styled.article`
  width: 100%;
  padding: ${spacingRegular} ${spacingSmall};
  border-bottom-left-radius: ${borderRadiusExtraSmall};
  border-bottom-right-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};

  @media ${device.width411} {
    padding: ${spacingNormal} ${spacingRegular};
  }

  @media ${device.width1280} {
    min-height: 252px;
  }
`;

export default StyledInfoArticle;