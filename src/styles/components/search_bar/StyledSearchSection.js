import styled from 'styled-components';

import { spacingNormal, spacingRegular, spacingMedium, device } from '../../Variables';

const StyledSearchSection = styled.section`
  width: 100%;
  max-width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: ${spacingRegular};
  padding-bottom: ${spacingNormal};
  background-color: ${(props) => props.theme.background2};

  @media ${device.width480} {
    padding: ${spacingNormal};
    padding-bottom: ${spacingMedium};
  }
`;

export default StyledSearchSection;