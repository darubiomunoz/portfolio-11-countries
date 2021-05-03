import styled from 'styled-components';

import { spacingExtraSmall } from '../../Variables';

const StyledDetailsDiv = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${spacingExtraSmall};
  display: flex;
  gap: ${spacingExtraSmall};
  background-color: ${(props) => props.theme.background1};
`;

export default StyledDetailsDiv;