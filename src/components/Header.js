import { useState } from 'react';

import StyledHeader from "../styles/components/header/StyledHeader";
import StyledTitle from "../styles/components/header/StyledTitle";
import StyledDarkButton from "../styles/components/header/StyledDarkButton";
import StyledIcon from "../styles/components/header/StyledIcon";

const Header = () => {
  const [theme, setTheme] = useState('light');

  const handleClick = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return ( 
    <StyledHeader>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkButton onClick={handleClick}>
        <StyledIcon className={`far fa-${theme === 'light' ? 'moon' : 'sun'}`} />
        {`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      </StyledDarkButton>
    </StyledHeader>
  );
};

export default Header;
