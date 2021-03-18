import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Employees from "./features/employees/Employees";
import EditEmployeeProfile from "./features/employees/EditEmployeeProfile";
import Employee from "./features/employees/Employee";
import AddEmployee from "./features/employees/AddEmployee";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Employees} />
          <Route path="/editEmployee/:id" component={EditEmployeeProfile} />
          <Route path="/employee/:id" component={Employee} />
          <Route path="/newEmployee" component={AddEmployee} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
