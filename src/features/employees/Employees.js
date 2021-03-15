import React from "react";
import { useQuery } from "react-query";

import Header from "../header/Header";
import queries from "../../api/queries";

function Employees() {
  const { data } = useQuery("employees", () => queries.employees());
  console.log("Employees are, ", data);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Employees;
