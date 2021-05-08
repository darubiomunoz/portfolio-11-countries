import styled from 'styled-components';

import { spacingNormal, device } from '../../Variables';

const StyledInfoSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-bottom: ${spacingNormal};
  display: flex;
  justify-content: center;

  @media ${device.width1280} {
    padding-top: ${spacingNormal};
  }
`;

export default StyledInfoSection;