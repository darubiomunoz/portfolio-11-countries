import styled from 'styled-components';

import { device } from '../../Variables';

const StyledInfoParagraph = styled.div`
  width: 100%;
  height: fit-content;

  @media ${device.width1280} {
    width: ${props => props.half ? '47%' : '100%'};
    height: ${props => props.half? '130px' : 'fit-content'};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default StyledInfoParagraph;