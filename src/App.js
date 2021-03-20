import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Employees from "./features/employees/Employees";
import EditEmployeeProfile from "./features/employees/EditEmployeeProfile";
import Employee from "./features/employees/Employee";
import AddEmployee from "./features/employees/AddEmployee";
import About from "./features/informations/About";

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
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
