import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Activity } from "react-feather";

import { BREAKPOINTS } from "../../constants";

const Wrapper = styled.div`
  background-color: #312f3a;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
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
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 14px;
  }
`;
function Header() {
  return (
    <Wrapper>
      <Links>
        <StyledLogo />
        <StyledLink to="/employees">Database</StyledLink>
        <StyledLink to="/employees">Time tranking</StyledLink>
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
