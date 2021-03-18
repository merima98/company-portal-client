import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

import { BREAKPOINTS } from "../../constants";
import queries from "../../api/queries";
import { useQuery } from "react-query";

const EmployeeContainer = styled.div`
  padding-top: 300px;
  margin: 0 auto;
  width: 80%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 64px;
  }
`;
const StyledContainer = styled.div`
  display: grid;
`;
const Label = styled.label`
  background-color: #312f3a;
  color: #fff;
  padding: 5px 0px;

  overflow-wrap: anywhere;
`;
const EmployeeInformation = styled.label`
  padding: 4px 0px;
  overflow-wrap: anywhere;
`;
function Employee() {
  const params = useParams();
  const id = params.id;

  const employeeQuery = useQuery("employee", () => queries.employeeById(id));
  const employee = employeeQuery.data?.data || {};

  return (
    <div>
      <Header />
      <EmployeeContainer>
        <StyledContainer>
          <Label>First name</Label>
          <EmployeeInformation>{employee.firstName}</EmployeeInformation>
          <Label>Last name</Label>
          <EmployeeInformation>{employee.lastName}</EmployeeInformation>{" "}
          <Label>Email</Label>
          <EmployeeInformation>{employee.email}</EmployeeInformation>
          <Label>Phone number</Label>
          <EmployeeInformation>{employee.phone}</EmployeeInformation>
        </StyledContainer>
      </EmployeeContainer>
    </div>
  );
}

export default Employee;
