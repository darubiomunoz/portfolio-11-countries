import styled from "styled-components";

import { spacingExtraSmall, spacingSmall, borderRadiusExtraSmall } from '../../Variables';

const StyledBackButton = styled.button`
  width: 35%;
  height: fit-content;
  padding: ${spacingExtraSmall} ${spacingSmall};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};
  color: ${props => props.theme.text1};
  box-shadow: ${(props) => props.theme.shadow};
`;

export default StyledBackButton;
