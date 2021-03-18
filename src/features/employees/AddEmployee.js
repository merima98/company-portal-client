import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import { useMutation, useQueryClient } from "react-query";

import { BREAKPOINTS } from "../../constants";
import mutations from "../../api/mutations";

const FormData = styled.form`
  padding-top: 300px;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 64px;
    width: 80%;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  overflow-wrap: anywhere;
`;
const Input = styled.input`
  overflow-wrap: anywhere;
`;
const Button = styled.button``;

function AddEmployee() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Phone: "",
      Email: "",
      Creator: 1,
      Deleted: false,
      FullName: "",
      Image: "",
      Birthday: "2019-12-09T00:00:00.000Z",
      Created: "2019-12-09T00:00:00.000Z",
      BeginDate: "2019-12-09T00:00:00.000Z",
      EndDate: "2019-12-09T00:00:00.000Z",
      EmployeeStatusId: parseInt(0),
      EmployeePositionId: parseInt(0),
    },
    onSubmit: onSubmit,
  });

  const queryClient = useQueryClient();

  const createEmployeeMutation = useMutation(mutations.addEmployee, {
    onSuccess: (data) => {
      return queryClient.invalidateQueries("employees");
    },
  });

  async function onSubmit(values) {
    try {
      values.EmployeePositionId = parseInt(values.EmployeePositionId);
      values.EmployeeStatusId = parseInt(values.EmployeeStatusId);
      createEmployeeMutation.mutate(values);
      history.push("/");
      formik.resetForm();
    } catch (err) {}
  }
  return (
    <div>
      <Header />
      <FormData onSubmit={formik.handleSubmit}>
        <Label>First name</Label>
        <Input
          placeholder="First name"
          value={formik.values.FirstName}
          onChange={formik.handleChange}
          name="FirstName"
        />
        <Label>Last name</Label>
        <Input
          placeholder="Last name"
          value={formik.values.LastName}
          onChange={formik.handleChange}
          name="LastName"
        />
        <Label>Image</Label>
        <Input
          placeholder="Insert image URL here!"
          value={formik.values.Image}
          onChange={formik.handleChange}
          name="Image"
        />
        <Label>Email</Label>
        <Input
          placeholder="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
          name="Email"
        />
        <Label>Phone</Label>
        <Input
          placeholder="Phone"
          value={formik.values.Phone}
          onChange={formik.handleChange}
          name="Phone"
        />

        <Label>Full name</Label>
        <Input
          placeholder="FullName"
          value={formik.values.FullName}
          onChange={formik.handleChange}
          name="FullName"
        />
        <Label>Position</Label>
        <label htmlFor="EmployeePositionId">
          Software engineer
          <input
            type="radio"
            value={parseInt(1)}
            onChange={formik.handleChange}
            name="EmployeePositionId"
          />
        </label>

        <label htmlFor="EmployeePositionId">
          Data science developer
          <input
            type="radio"
            value={parseInt(2)}
            onChange={formik.handleChange}
            name="EmployeePositionId"
          />
        </label>

        <Label>Status</Label>

        <label htmlFor="EmployeeStatusId">
          Remote
          <input
            type="radio"
            value={1}
            onChange={formik.handleChange}
            name="EmployeeStatusId"
          />
        </label>

        <label htmlFor="EmployeeStatusId">
          From office
          <input
            type="radio"
            value={2}
            onChange={formik.handleChange}
            name="EmployeeStatusId"
          />
        </label>
        <Button type="submit">SAVE</Button>
      </FormData>
    </div>
  );
}

export default AddEmployee;
