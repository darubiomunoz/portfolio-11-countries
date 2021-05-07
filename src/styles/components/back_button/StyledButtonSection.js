import styled from 'styled-components';

import { spacingRegular, spacingNormal, device, spacingMedium, spacingLarge, spacingExtraLarge } from '../../Variables';

const StyledButtonSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: ${spacingNormal} ${spacingRegular};

  @media ${device.width411} {
    padding: ${spacingNormal};
  }

  @media ${device.width480} {
    padding-left: ${spacingMedium};
  }

  @media ${device.width768} {
    padding-left: ${spacingLarge};
  }

  @media ${device.width1024} {
    padding-left: ${spacingExtraLarge};
  }
`;

export default StyledButtonSection;