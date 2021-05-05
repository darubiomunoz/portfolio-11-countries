import styled from 'styled-components';

import StyledInfoArticle from '../countries/StyledInfoArticle';

const StyledArticle = styled(StyledInfoArticle)`
  background-color: ${props => props.theme.background2}
`;

export default StyledArticle;