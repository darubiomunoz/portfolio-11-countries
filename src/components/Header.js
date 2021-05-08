import { useSelector, useDispatch } from 'react-redux';

import { changeTheme } from '../features/theme/themeSlice';

import StyledHeader from "../styles/components/header/StyledHeader";
import StyledTitle from "../styles/components/header/StyledTitle";
import StyledDarkButton from "../styles/components/header/StyledDarkButton";
import StyledIcon from "../styles/components/header/StyledIcon";

const Header = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(changeTheme());

  return ( 
    <StyledHeader>
      <StyledTitle tabIndex="0">Where in the world?</StyledTitle>
      <StyledDarkButton onClick={handleClick}>
        <StyledIcon className={`far fa-${theme === 'light' ? 'moon' : 'sun'}`} />
        {`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      </StyledDarkButton>
    </StyledHeader>
  );
};

export default Header;
