import React from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { Home } from "react-feather";

import { BREAKPOINTS } from "../../constants";

const Wrapper = styled.div`
  background-color: #312f3a;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  margin-bottom: 2fr;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  padding-top: 5px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 0fr;
    width: 80%;
  }
`;

const StyledHome = styled(Home)`
  cursor: pointer;
  color: white;
`;
function Header() {
  const history = useHistory();
  function gotToHome() {
    history.push("/");
  }
  return (
    <Wrapper>
      <Links>
        <StyledHome onClick={() => gotToHome()} />
        <StyledLink to="/employees">Database</StyledLink>
        <StyledLink to="/employees">Time tracking</StyledLink>
        <StyledLink to="/employees">Billing</StyledLink>
        <StyledLink to="/employees">Reports</StyledLink>
        <StyledLink to="/employees">About</StyledLink>
        <StyledLink to="/employees">Services</StyledLink>
        <StyledLink to="/employees">Team</StyledLink>
        <StyledLink to="/employees">Contact</StyledLink>
      </Links>
    </Wrapper>
  );
}

export default Header;
