import axios from "../httpClient";

function employees() {
  return axios.get(`/GetAllEmployees`);
}

const exports = {
  employees,
};
export default exports;
