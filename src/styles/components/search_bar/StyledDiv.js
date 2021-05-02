import styled from 'styled-components';

import { spacingNormal, spacingRegular, borderRadiusExtraSmall } from '../../Variables'

const StyledDiv = styled.div`
  width: 100%;
  height: ${spacingNormal};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacingRegular};
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${props => props.theme.headerBackground};
  color: ${props => props.theme.font};
  box-shadow: ${props => props.theme.shadow};
`;

export default StyledDiv;