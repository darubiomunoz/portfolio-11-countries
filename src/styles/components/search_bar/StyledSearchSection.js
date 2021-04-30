import styled from 'styled-components';

import { spacingNormal, spacingRegular } from '../../Variables';

const StyledSearchSection = styled.section`
  width: 100%;
  max-width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: ${spacingRegular};
  padding-bottom: ${spacingNormal};
`;

export default StyledSearchSection;