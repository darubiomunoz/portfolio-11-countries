import StyledHeader from "../styles/components/header/StyledHeader";
import StyledTitle from "../styles/components/header/StyledTitle";
import StyledDarkButton from "../styles/components/header/StyledDarkButton";
import StyledIcon from "../styles/components/header/StyledIcon";


const Header = () => {
  return ( 
    <StyledHeader>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkButton>
        <StyledIcon className="far fa-moon" />
        Dark Mode
      </StyledDarkButton>
    </StyledHeader>
  );
};

export default Header;
