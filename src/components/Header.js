import styled from 'styled-components';

const Nav = styled.nav`
background-color: red;
`

const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <h1>Where in the world?</h1>
        </li>
        <li>
          <button type="button">
            <i className=""></i>
            Dark Mode
          </button>
        </li>
      </ul>
    </Nav>
  );
}

export default Header;