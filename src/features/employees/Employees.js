import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Header from "../header/Header";
import queries from "../../api/queries";
import { BREAKPOINTS } from "../../constants";

const Table = styled.table`
  display: none;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 64px;
    display: table;
    margin: 0 auto;
    width: 80%;
    text-align: center;
    border-spacing: 0px;
    margin-bottom: 1rem;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const AddButton = styled.button`
  margin-bottom: 1rem;
  cursor: pointer;
`;
const MobileTable = styled.table`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  border-spacing: 0px;
  display: grid;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: none;
  }
`;
const StyledThead = styled.thead`
  background-color: #312f3a;
  color: #fff;
`;
const StyledTbodt = styled.tbody`
  border-bottom: 2px solid #312f3a;
`;
const StyledTr = styled.tr`
  width: 100%;
`;
const StyledHeaderTitle = styled.th`
  overflow-wrap: anywhere;
  font-size: 10px;
  font-weight: normal;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 16px;
  }
`;

const StyledTableData = styled.td`
  overflow-wrap: anywhere;
  font-size: 10px;
  border-bottom: none;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    border-bottom: 2px solid #312f3a;
    font-size: 16px;
  }
`;

const TableContainerSmall = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 300px;
  text-align: center;
  border-spacing: 0px;
  display: grid;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: none;
  }
  margin-bottom: 1rem;
`;

const Button = styled.button``;

function Employees() {
  const { data } = useQuery("employees", () => queries.employees());
  const employees = data ? data.data : [];
  const history = useHistory();

  function editProfile(id) {
    history.push(`/editEmployee/${id}`);
  }

  function viewProfile(id) {
    history.push(`/employee/${id}`);
  }
  function addNewEmployee() {
    history.push("/newEmployee");
  }
  return (
    <Container>
      <Header />
      <Table>
        <StyledThead>
          <StyledTr>
            <StyledHeaderTitle>Firstname</StyledHeaderTitle>
            <StyledHeaderTitle>Lastname</StyledHeaderTitle>
            <StyledHeaderTitle>Email</StyledHeaderTitle>
            <StyledHeaderTitle>Phone number</StyledHeaderTitle>
            <StyledHeaderTitle>Action</StyledHeaderTitle>
          </StyledTr>
        </StyledThead>
        <StyledTbodt>
          {employees.map((employee) => {
            return (
              <StyledTr key={employee.id}>
                <StyledTableData>{employee.firstName}</StyledTableData>
                <StyledTableData>{employee.lastName}</StyledTableData>
                <StyledTableData>{employee.email}</StyledTableData>
                <StyledTableData>{employee.phone}</StyledTableData>
                <StyledTableData>
                  <Button onClick={() => editProfile(employee.id)}>Edit</Button>{" "}
                  |{" "}
                  <Button onClick={() => viewProfile(employee.id)}>View</Button>{" "}
                </StyledTableData>
              </StyledTr>
            );
          })}
        </StyledTbodt>
      </Table>

      <TableContainerSmall>
        {employees.map((employee) => {
          return (
            <MobileTable key={employee.id}>
              <StyledThead>
                <StyledTr>
                  <StyledHeaderTitle>Firstname</StyledHeaderTitle>
                </StyledTr>
              </StyledThead>
              <StyledTbodt>
                <StyledTr>
                  <StyledTableData>{employee.firstName}</StyledTableData>
                </StyledTr>
              </StyledTbodt>
              <StyledThead>
                <StyledTr>
                  <StyledHeaderTitle>Lastname</StyledHeaderTitle>
                </StyledTr>
              </StyledThead>
              <StyledTbodt>
                <StyledTr>
                  <StyledTableData> {employee.lastName}</StyledTableData>
                </StyledTr>
              </StyledTbodt>
              <StyledThead>
                <StyledTr>
                  <StyledHeaderTitle>Email</StyledHeaderTitle>
                </StyledTr>
              </StyledThead>
              <StyledTbodt>
                <StyledTr>
                  <StyledTableData> {employee.email}</StyledTableData>
                </StyledTr>
              </StyledTbodt>
              <StyledThead>
                <StyledTr>
                  <StyledHeaderTitle>Phone number</StyledHeaderTitle>
                </StyledTr>
              </StyledThead>
              <StyledTbodt>
                <StyledTr>
                  <StyledTableData> {employee.phone}</StyledTableData>
                </StyledTr>
              </StyledTbodt>
              <StyledThead>
                <StyledTr>
                  <StyledHeaderTitle>Action</StyledHeaderTitle>
                </StyledTr>
              </StyledThead>
              <StyledTbodt>
                <StyledTr>
                  <StyledTableData>
                    {" "}
                    <Button onClick={() => editProfile(employee.id)}>
                      Edit
                    </Button>{" "}
                    |{" "}
                    <Button onClick={() => viewProfile(employee.id)}>
                      View
                    </Button>{" "}
                  </StyledTableData>
                </StyledTr>
              </StyledTbodt>
            </MobileTable>
          );
        })}
      </TableContainerSmall>
      <AddButton onClick={() => addNewEmployee()}>Add new employee</AddButton>
    </Container>
  );
}

export default Employees;
