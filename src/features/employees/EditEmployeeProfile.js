import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import Header from "../header/Header";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { BREAKPOINTS } from "../../constants";
import queries from "../../api/queries";
import mutations from "../../api/mutations";

const EmployeeContainer = styled.div`
  padding-top: 300px;
  margin: 0 auto;
  width: 80%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 64px;
  }
`;
const Form = styled.form`
  display: grid;
`;
const Label = styled.label`
  background-color: #312f3a;
  color: #fff;
  padding: 5px 0px;

  overflow-wrap: anywhere;
`;
const Input = styled.input`
  padding: 4px 0px;
  overflow-wrap: anywhere;
`;
const validationSchema = Yup.object().shape({
  FirstName: Yup.string()
    .min(2, "First name is too short!")
    .max(50, "First name is too long!")
    .required("First name is required field!"),
  LastName: Yup.string()
    .min(2, "Last name is too short!")
    .max(50, "Last name is too long!")
    .required("Last name is required field!"),
  Email: Yup.string()
    .email("Invalide email")
    .required("Email is required field!"),
  Phone: Yup.string()
    .min(2, "Phone is too short!")
    .max(50, "Phone is too long!")
    .required("Phone is required field!"),
});
const Button = styled.button``;

function EditEmployeeProfile() {
  const params = useParams();
  const history = useHistory();
  const id = params.id;
  const queryClient = useQueryClient();
  const employeeQuery = useQuery("employee", () => queries.employeeById(id));
  const employee = employeeQuery.data?.data || {};

  const updateEmployeeMutation = useMutation(mutations.updateEmployee, {
    onSuccess: (data) => {
      history.push(`/`);
      return queryClient.refetchQueries("employees");
    },
  });

  const formik = useFormik({
    initialValues: {
      Id: employee.id,
      FirstName: employee.firstName,
      LastName: employee.lastName,
      Phone: employee.phone,
      Email: employee.email,
    },
    validationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  function onSubmit(values) {
    try {
      updateEmployeeMutation.mutate(values);
    } catch (err) {}
  }

  return (
    <div>
      <Header />
      <EmployeeContainer>
        <Form onSubmit={formik.handleSubmit}>
          <Label>First name</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.FirstName || ""}
            name="FirstName"
            error={formik.errors.FirstName && formik.touched.FirstName}
          />
          <Label>Last name</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.LastName || ""}
            name="LastName"
            error={formik.errors.LastName && formik.touched.LastName}
          />
          <Label>Email</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.Email || ""}
            name="Email"
            error={formik.errors.Email && formik.touched.Email}
          />
          <Label>Phone number</Label>
          <Input
            onChange={formik.handleChange}
            value={formik.values.Phone || ""}
            name="Phone"
            error={formik.errors.Phone && formik.touched.Phone}
          />
          <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
            Update
          </Button>
        </Form>
      </EmployeeContainer>
    </div>
  );
}

export default EditEmployeeProfile;
