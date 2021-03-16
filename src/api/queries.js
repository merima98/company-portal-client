import axios from "../httpClient";

function employees() {
  return axios.get(`/GetAllEmployees`);
}
function employeeById(id) {
  return axios.get(`/GetEmployee/${id}`);
}
const exports = {
  employees,
  employeeById,
};
export default exports;
