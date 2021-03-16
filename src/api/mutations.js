import axios from "../httpClient";

function updateEmployee(values) {
  return axios.put(`/UpdateEmployee`, values);
}

const exports = {
  updateEmployee,
};
export default exports;
