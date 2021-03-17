import React from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { Activity } from "react-feather";

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
  display: grid;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 0fr;
    width: 80%;
  }
`;

const StyledLogo = styled(Activity)`
  padding: 10px;
  color: white;
  cursor: pointer;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 14px;
  }
`;
function Header() {
  const history = useHistory();
  function gotToHome() {
    history.push("/");
  }
  return (
    <Wrapper>
      <Links>
        <StyledLogo onClick={() => gotToHome()} />
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
