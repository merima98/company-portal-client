import axios from "../httpClient";

function updateEmployee(values) {
  return axios.put(`/UpdateEmployee`, values);
}

function addEmployee(values) {
  return axios.post(`/AddEmployee`, values, {
    headers: {
      "Content-type": "application/json",
    },
  });
}

const exports = {
  updateEmployee,
  addEmployee,
};
export default exports;
